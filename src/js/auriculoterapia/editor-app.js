import { initPoints } from "./points.js";
import { initImageLoader } from "./image-loader.js";
import {
  createEditorState,
  createEmptySession,
  readLegacyEditorData,
  clearLegacyEditorData,
} from "./editor-state.js";
import { createCanvasRenderer } from "./canvas-renderer.js";

export async function initEditor() {
  if (typeof document === "undefined") return;

  const APP_BASE = document.documentElement.dataset.basePath || "";
  const DEFAULT_IMAGE = `${APP_BASE}/auriculoterapia/images/oreja-segmentada-v3.jpg`;
  const API_BASE = `${APP_BASE}/api`;
  const COLUMNS = ["col1", "col2"];
  const MIN_ZOOM = 0.3;
  const MAX_ZOOM = 2.5;
  const ZOOM_STEP = 0.1;
  const WHEEL_STEP = 0.05;
  let initialData;
  try {
    let response = await fetch(`${API_BASE}/auriculoterapia/data`, { cache: "no-store" });
    if (response.status === 401) {
      window.location.replace(`${APP_BASE}/servicios/auriculoterapia`);
      return;
    }
    if (!response.ok) throw new Error("No se pudo cargar tu cuenta desde MongoDB.");
    initialData = await response.json();

    if (initialData.needsMigration) {
      const legacyData = readLegacyEditorData();
      response = await fetch(`${API_BASE}/auriculoterapia/data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(legacyData),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "No se pudieron migrar los datos locales.");
      }
      initialData = await response.json();
    }
    clearLegacyEditorData();
  } catch (error) {
    const message = error instanceof Error ? error.message : "No se pudieron cargar los datos.";
    document.body.innerHTML = `<main role="alert">${message}</main>`;
    return;
  }

  const viewState = {
    col1: {
      side: "IZQUIERDA",
      sessionId: "1",
      zoom: 1,
      selectedPointId: null,
      hoveredPointId: null,
      pinnedPointId: null,
    },
    col2: {
      side: "DERECHA",
      sessionId: "1",
      zoom: 1,
      selectedPointId: null,
      hoveredPointId: null,
      pinnedPointId: null,
    },
  };
  const {
    sessions,
    directory,
    profile,
    persistDirectory: persistLocalDirectory,
    persistSessions: persistLocalSessions,
    getSession,
    getCurrentSession,
    getCurrentSide,
    getActiveImage,
    suffix,
    elements,
  } = createEditorState({ document, viewState, columns: COLUMNS, initialData });

  let persistenceTimer;
  let persistenceWaiters = [];

  function queueRemoteSave() {
    const result = new Promise((resolve) => persistenceWaiters.push(resolve));
    clearTimeout(persistenceTimer);
    persistenceTimer = setTimeout(async () => {
      const waiters = persistenceWaiters;
      persistenceWaiters = [];
      try {
        const writableSessions = sessions.filter(
          (session) =>
            !session.readOnly &&
            (profile.role === "admin" ||
              !session.ownerUserId ||
              session.ownerUserId === profile.id),
        );
        const response = await fetch(`${API_BASE}/auriculoterapia/data`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessions: writableSessions,
            directory: { pacientes: directory.pacientes },
          }),
        });
        const payload = response.status === 204 ? {} : await response.json();
        const saveResult = response.ok
          ? { ok: true }
          : {
              ok: false,
              message: payload.message || "No se pudieron guardar los datos en MongoDB.",
            };
        if (!saveResult.ok) showToast(COLUMNS[0], saveResult.message);
        waiters.forEach((resolve) => resolve(saveResult));
      } catch (error) {
        const saveResult = {
          ok: false,
          message: error instanceof Error ? error.message : "No se pudo conectar con MongoDB.",
        };
        showToast(COLUMNS[0], saveResult.message);
        waiters.forEach((resolve) => resolve(saveResult));
      }
    }, 300);
    return result;
  }

  function persistSessions() {
    persistLocalSessions();
    return queueRemoteSave();
  }

  function persistDirectory() {
    persistLocalDirectory();
    return queueRemoteSave();
  }

  function updateSessionSelectors() {
    COLUMNS.forEach((column) => {
      const selector = elements(column).sessionSelector;
      if (!selector) return;
      const current = viewState[column].sessionId;
      selector.innerHTML = "";
      sessions
        .filter((session) => sessionMatchesLookup(session, column))
        .forEach((session) => {
          const option = document.createElement("option");
          option.value = session.id;
          const sessionNumber =
            getSessionFormValue(session, column, `sesion${suffix(column)}`) || session.id;
          const date = getSessionFormValue(session, column, `fecha${suffix(column)}`);
          const formattedDate = date ? ` (${date.split("-").reverse().join("/")})` : "";
          option.textContent = `Sesión ${sessionNumber}${formattedDate}`;
          selector.appendChild(option);
        });
      const firstSession = selector.options[0]?.value || sessions[0].id;
      selector.value = selector.querySelector(`option[value="${current}"]`)
        ? current
        : firstSession;
      viewState[column].sessionId = selector.value;
    });
  }

  function getSessionForm(session, column) {
    const sideFields = session.forms?.[viewState[column].side];
    if (Array.isArray(sideFields)) return sideFields;
    const legacyFields = session.forms?.[column];
    return Array.isArray(legacyFields) ? legacyFields : [];
  }

  function getSessionFormValue(session, column, fieldId) {
    const fields = getSessionForm(session, column);
    const fieldIndex = getFormFields(column).findIndex((item) => item.id === fieldId);
    const field = Array.isArray(fields)
      ? fields.find((item) => normalizeFieldId(item.id) === normalizeFieldId(fieldId)) ||
        fields[fieldIndex]
      : null;
    return String(field?.value || "");
  }

  function normalizeFieldId(value) {
    return String(value || "").replace(/Col[12]$/, "");
  }

  function normalizeFieldName(value) {
    return String(value || "").replace(/_col[12]$/, "");
  }

  function patientFilterValue(ownerUserId, name) {
    return JSON.stringify({ ownerUserId, name });
  }

  function parsePatientFilterValue(value, fallbackOwnerId = profile.id) {
    try {
      const parsed = JSON.parse(value);
      if (parsed?.name && parsed?.ownerUserId) return parsed;
    } catch {
      // Mantiene compatibilidad con filtros locales guardados como un nombre simple.
    }
    return { ownerUserId: fallbackOwnerId, name: String(value || "") };
  }

  function sessionMatchesLookup(session, column) {
    const name = suffix(column);
    const therapist = document.getElementById(`selectTerapeutaSesion${name}`)?.value || "";
    const patient = document.getElementById(`selectPacienteSesion${name}`)?.value || "";
    const patientFilter = parsePatientFilterValue(patient, session.ownerUserId || profile.id);
    return (
      (!therapist ||
        (getSessionFormValue(session, column, `terapeuta${name}`) ||
          session.therapistName ||
          session.ownerName) === therapist) &&
      (!patient ||
        (String(session.ownerUserId || profile.id) === patientFilter.ownerUserId &&
          getSessionFormValue(session, column, `paciente${name}`) === patientFilter.name))
    );
  }

  function updateSessionLookupValues(column) {
    const name = suffix(column);
    const session = getCurrentSession(column);
    if (!session) return;
    [
      [`selectTerapeutaSesion${name}`, `terapeuta${name}`],
      [`selectPacienteSesion${name}`, `paciente${name}`],
    ].forEach(([lookupId, formId]) => {
      const lookup = document.getElementById(lookupId);
      if (lookup) {
        const value =
          getSessionFormValue(session, column, formId) ||
          (formId.startsWith("terapeuta") ? session.therapistName || session.ownerName || "" : "");
        lookup.value =
          lookupId.startsWith("selectPaciente") && value
            ? patientFilterValue(session.ownerUserId || profile.id, value)
            : value;
      }
    });
  }

  function updateDirectorySelectors() {
    COLUMNS.forEach((column) => {
      ["terapeutas", "pacientes"].forEach((type) => {
        const field = type === "terapeutas" ? "terapeuta" : "paciente";
        const ownValues = [...new Set(directory[type])];
        const sharedPatients = type === "pacientes" ? directory.sharedPatients : [];
        const formValues = [
          ...new Set([...ownValues, ...sharedPatients.map((patient) => patient.name)]),
        ];
        const selector = document.getElementById(`${field}${suffix(column)}`);
        if (selector) {
          const current = selector.value;
          selector.innerHTML = '<option value="">Seleccionar...</option>';
          formValues.forEach((person) => {
            const option = document.createElement("option");
            option.value = person;
            option.textContent = person;
            selector.appendChild(option);
          });
          selector.value = formValues.includes(current) ? current : "";
        }

        const lookup = document.getElementById(
          `${field === "terapeuta" ? "selectTerapeuta" : "selectPaciente"}Sesion${suffix(column)}`,
        );
        if (lookup) {
          const current = lookup.value;
          lookup.innerHTML = '<option value="">Cualquiera...</option>';
          if (type === "pacientes") {
            ownValues.forEach((person) => {
              const option = document.createElement("option");
              option.value = patientFilterValue(profile.id, person);
              option.textContent = person;
              lookup.appendChild(option);
            });
            sharedPatients.forEach((patient) => {
              const option = document.createElement("option");
              option.value = patientFilterValue(patient.ownerUserId, patient.name);
              option.textContent = `${patient.name} — ${patient.ownerName}`;
              lookup.appendChild(option);
            });
          } else
            ownValues.forEach((person) => {
              const option = document.createElement("option");
              option.value = person;
              option.textContent = person;
              lookup.appendChild(option);
            });
          lookup.value = [...lookup.options].some((option) => option.value === current)
            ? current
            : "";
        }
      });
    });
  }

  async function addDirectoryPerson(type, column) {
    if (!canEditColumn(column)) return;
    const field = type === "terapeuta" ? "terapeuta" : "paciente";
    const input = document.getElementById(
      `nuevo${field[0].toUpperCase()}${field.slice(1)}${suffix(column)}`,
    );
    const value = input?.value.trim();
    const sessionOwnerId = getCurrentSession(column)?.ownerUserId || profile.id;
    const isSharedPatient = type === "paciente" && sessionOwnerId !== profile.id;
    const values =
      type === "terapeuta"
        ? directory.terapeutas
        : isSharedPatient
          ? directory.sharedPatients
              .filter((patient) => patient.ownerUserId === sessionOwnerId)
              .map((patient) => patient.name)
          : directory.pacientes;
    const status = document.getElementById(`patientStatus${suffix(column)}`);
    if (!value) {
      if (status) status.textContent = "Escribe el nombre del paciente.";
      return;
    }
    if (values.includes(value)) {
      const selector = document.getElementById(`${field}${suffix(column)}`);
      if (selector) selector.value = value;
      if (status) status.textContent = "Ese paciente ya está en el directorio.";
      return;
    }
    if (
      type === "paciente" &&
      !isSharedPatient &&
      profile.role !== "admin" &&
      profile.plan === "free" &&
      values.length >= 3
    ) {
      if (status) status.textContent = "El plan Gratis permite hasta 3 pacientes.";
      return;
    }
    if (isSharedPatient) {
      const session = getCurrentSession(column);
      directory.sharedPatients.push({
        name: value,
        ownerUserId: sessionOwnerId,
        ownerName: session?.ownerName || "Terapeuta",
      });
    } else {
      values.push(value);
      values.sort((left, right) => left.localeCompare(right, "es", { sensitivity: "base" }));
    }
    updateDirectorySelectors();
    const selector = document.getElementById(`${field}${suffix(column)}`);
    if (selector) selector.value = value;
    if (isSharedPatient) {
      const saveResult = await saveCurrentSession(column);
      if (saveResult?.ok === false) {
        directory.sharedPatients = directory.sharedPatients.filter(
          (patient) => !(patient.ownerUserId === sessionOwnerId && patient.name === value),
        );
        updateDirectorySelectors();
        if (status) status.textContent = saveResult.message;
        return;
      }
    } else {
      const saveResult = await persistDirectory();
      if (!saveResult.ok) {
        values.splice(values.indexOf(value), 1);
        updateDirectorySelectors();
        if (status) status.textContent = saveResult.message;
        return;
      }
    }
    if (status) status.textContent = "Paciente agregado.";
    updateHeader(column);
  }

  async function renameDirectoryPerson(type, column) {
    if (!canEditColumn(column)) return;
    const field = type === "terapeuta" ? "terapeuta" : "paciente";
    const name = suffix(column);
    const selector = document.getElementById(`${field}${name}`);
    const input = document.getElementById(`nuevo${field[0].toUpperCase()}${field.slice(1)}${name}`);
    const status = document.getElementById(`patientStatus${name}`);
    const lookup = document.getElementById(`selectPacienteSesion${name}`);
    const selection =
      type === "paciente"
        ? parsePatientFilterValue(
            lookup?.value || "",
            getCurrentSession(column)?.ownerUserId || profile.id,
          )
        : null;
    const currentSession = getCurrentSession(column);
    const ownerUserId =
      type === "paciente"
        ? currentSession?.ownerUserId || selection?.ownerUserId || profile.id
        : profile.id;
    const oldName = selector?.value || selection?.name || "";
    const newName = input?.value.trim() || "";
    const values =
      type === "terapeuta"
        ? directory.terapeutas
        : ownerUserId === profile.id
          ? directory.pacientes
          : directory.sharedPatients
              .filter((patient) => patient.ownerUserId === ownerUserId)
              .map((patient) => patient.name);

    if (!oldName) {
      if (status) status.textContent = "Selecciona un paciente para cambiarle el nombre.";
      return;
    }
    if (!newName) {
      if (status) status.textContent = "Escribe el nuevo nombre.";
      return;
    }
    if (oldName === newName) {
      if (status) status.textContent = "El nombre no cambió.";
      return;
    }
    if (values.includes(newName)) {
      if (status) status.textContent = "Ya existe un paciente con ese nombre.";
      return;
    }

    if (type === "paciente") {
      const response = await fetch(`${API_BASE}/auriculoterapia/patients`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerUserId, oldName, newName }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        if (status) status.textContent = result.message || "No se pudo cambiar el nombre.";
        return;
      }
    }

    const affectedColumns = COLUMNS.map((item) => {
      const current = document.getElementById(`${field}${suffix(item)}`);
      const patientLookup = document.getElementById(`selectPacienteSesion${suffix(item)}`);
      const lookupSelection = parsePatientFilterValue(
        patientLookup?.value || "",
        getCurrentSession(item)?.ownerUserId || profile.id,
      );
      return {
        column: item,
        currentMatches: current?.value === oldName,
        lookupMatches:
          lookupSelection.ownerUserId === ownerUserId && lookupSelection.name === oldName,
      };
    }).filter((item) => item.currentMatches || item.lookupMatches);

    if (ownerUserId === profile.id) {
      const oldIndex = values.indexOf(oldName);
      if (oldIndex >= 0) values[oldIndex] = newName;
      values.sort((left, right) => left.localeCompare(right, "es", { sensitivity: "base" }));
    } else {
      directory.sharedPatients = directory.sharedPatients.map((patient) =>
        patient.ownerUserId === ownerUserId && patient.name === oldName
          ? { ...patient, name: newName }
          : patient,
      );
    }
    sessions
      .filter((session) => String(session.ownerUserId || profile.id) === ownerUserId)
      .forEach((session) => {
        Object.values(session.forms || {}).forEach((fields) => {
          if (!Array.isArray(fields)) return;
          fields.forEach((savedField) => {
            if (savedField.id?.startsWith(field) && savedField.value === oldName) {
              savedField.value = newName;
            }
          });
        });
      });
    const saveResult = ownerUserId === profile.id ? await persistDirectory() : { ok: true };
    if (!saveResult.ok) {
      if (status) status.textContent = saveResult.message;
      return;
    }
    updateDirectorySelectors();

    affectedColumns.forEach(({ column: item, currentMatches, lookupMatches }) => {
      if (currentMatches) {
        const current = document.getElementById(`${field}${suffix(item)}`);
        if (current) current.value = newName;
        saveCurrentSession(item);
        syncPatientNameInput(item);
      } else if (lookupMatches) {
        const lookup = document.getElementById(`selectPacienteSesion${suffix(item)}`);
        if (lookup) lookup.value = patientFilterValue(ownerUserId, newName);
        updateSessionSelectors();
      }
    });

    if (input) input.value = newName;
    if (status) status.textContent = "Nombre del paciente actualizado.";
    updateHeader(column);
  }

  function syncPatientNameInput(column) {
    const name = suffix(column);
    const selector = document.getElementById(`paciente${name}`);
    const input = document.getElementById(`nuevoPaciente${name}`);
    const status = document.getElementById(`patientStatus${name}`);
    if (input) input.value = selector?.value || "";
    if (status) status.textContent = "";
  }

  function updateZoom(column) {
    const { container, zoomLabel } = elements(column);
    const zoom = viewState[column].zoom;
    if (container) container.style.transform = `scale(${zoom})`;
    if (zoomLabel) zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  }

  function changeZoom(column, delta) {
    viewState[column].zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, viewState[column].zoom + delta));
    updateZoom(column);
  }

  function resetZoom(column) {
    viewState[column].zoom = 1;
    updateZoom(column);
  }

  function updateHeader(column) {
    const name = suffix(column);
    const patient = document.getElementById(`paciente${name}`);
    const date = document.getElementById(`fecha${name}`);
    const session = document.getElementById(`sesion${name}`);
    const header = document.getElementById(`info${name}`);
    if (!patient || !date || !session || !header) return;
    header.textContent = `- ${patient.value.trim() || "Sin Paciente"} [${date.value || "dd/mm/aaaa"}] - S: ${session.value || "--"}`;
  }

  function getFormFields(column) {
    const panel = document.getElementById(`panel${suffix(column)}`);
    return panel
      ? [...panel.querySelectorAll("input, textarea, select")].filter(
          (field) =>
            !field.matches(
              '[type="file"], #selectSesion' +
                suffix(column) +
                ", #selectTerapeutaSesion" +
                suffix(column) +
                ", #selectPacienteSesion" +
                suffix(column) +
                ', [id^="nuevoTerapeuta"], [id^="nuevoPaciente"]',
            ),
        )
      : [];
  }

  function collectForm(column) {
    const occurrences = {};
    return getFormFields(column).map((field, index) => {
      const baseKey = field.id || field.name || "field";
      const occurrence = occurrences[baseKey] || 0;
      occurrences[baseKey] = occurrence + 1;
      return {
        id: field.id,
        name: field.name || `field-${index}`,
        key: `field-${index}`,
        type: field.type,
        value: field.type === "checkbox" ? field.checked : field.value,
      };
    });
  }

  function restoreForm(column, values = []) {
    const fields = getFormFields(column);
    if (!Array.isArray(values)) values = [];
    const occurrences = {};
    fields.forEach((field, index) => {
      const baseKey = field.id || field.name || "field";
      const occurrence = occurrences[baseKey] || 0;
      occurrences[baseKey] = occurrence + 1;
      const saved =
        values.find(
          (item) =>
            item.key === `field-${index}` ||
            item.key === `${baseKey}-${occurrence}` ||
            (!item.key && item.id === field.id && item.name === field.name),
        ) ||
        values.find(
          (item) =>
            normalizeFieldId(item.id) === normalizeFieldId(field.id) && normalizeFieldId(field.id),
        ) ||
        values
          .filter((item) => normalizeFieldName(item.name) === normalizeFieldName(field.name))
          .at(occurrence);
      if (!saved) return;
      if (field.type === "checkbox") field.checked = Boolean(saved.value);
      else field.value = saved.value;
    });
    updateHeader(column);
  }

  let canvasRenderer;
  const renderColumn = (...args) => canvasRenderer.renderColumn(...args);
  const updatePointCallout = (...args) => canvasRenderer.updatePointCallout(...args);

  function saveCurrentSession(column) {
    if (!canEditColumn(column)) return;
    const currentSession = getCurrentSession(column);
    const sessionNumber =
      document.getElementById(`sesion${suffix(column)}`)?.value.trim() ||
      viewState[column].sessionId;
    const editingSharedSession =
      profile.role === "admin" &&
      currentSession?.ownerUserId &&
      currentSession.ownerUserId !== profile.id;
    const sessionKey = editingSharedSession ? currentSession.id : sessionNumber;
    if (!getSession(sessionKey)) {
      const newSession = createEmptySession(sessionKey);
      newSession.ownerUserId = profile.id;
      newSession.ownerName = profile.name;
      newSession.localId = sessionKey;
      sessions.push(newSession);
    }
    viewState[column].sessionId = String(sessionKey);
    const session = getCurrentSession(column);
    session.ownerUserId ||= profile.id;
    session.ownerName ||= profile.name;
    session.localId ||= session.id;
    session.forms[viewState[column].side] = collectForm(column);
    session.therapistName =
      getSessionFormValue(session, column, `terapeuta${suffix(column)}`) ||
      session.therapistName ||
      profile.name;
    const saveRequest = persistSessions();
    updateSessionLookupValues(column);
    updateSessionSelectors();
    COLUMNS.forEach((otherColumn) => {
      if (otherColumn === column || viewState[otherColumn].side !== viewState[column].side) return;
      if (viewState[otherColumn].sessionId !== viewState[column].sessionId) return;
      restoreForm(otherColumn, getSessionForm(session, otherColumn));
      renderColumn(otherColumn);
      updateSessionLookupValues(otherColumn);
    });
    saveRequest.then((result) => {
      if (result.ok) showSaveMessage(column);
      else showToast(column, result.message);
    });
    return saveRequest;
  }

  function showSaveMessage(column) {
    const button = document.getElementById(`btnGuardar${suffix(column)}`);
    if (!button) return;

    button.dataset.defaultLabel ||= button.textContent.trim();
    button.textContent = "Guardado";
    button.classList.add("is-saved");
    clearTimeout(button.saveTimer);
    button.saveTimer = setTimeout(() => {
      button.textContent = button.dataset.defaultLabel;
      button.classList.remove("is-saved");
    }, 2500);
  }

  function buildPlainTextExport(column) {
    const session = getCurrentSession(column);
    if (!session) return "";
    const sideName = viewState[column].side;
    const side = session.sides?.[sideName] || {};
    const activePoints = side.pointsByImage?.[side.activeIndex ?? 0] || side.points || {};
    const fields = getSessionForm(session, column);
    const patient = fields.find((field) => field.id === `paciente${suffix(column)}`)?.value || "";
    const therapist =
      fields.find((field) => field.id === `terapeuta${suffix(column)}`)?.value || "";
    const date = fields.find((field) => field.id === `fecha${suffix(column)}`)?.value || "";
    const sessionNumber =
      fields.find((field) => field.id === `sesion${suffix(column)}`)?.value || session.id;
    const points = Object.values(activePoints || {});

    const lines = [
      `Auriculoterapia - Exportación`,
      `Columna: ${column}`,
      `Lado: ${sideName}`,
      `Sesión: ${sessionNumber}`,
      `Terapeuta: ${therapist}`,
      `Paciente: ${patient}`,
      `Fecha: ${date}`,
      "",
      "Campos del formulario:",
    ];

    if (fields.length) {
      fields.forEach((field) => {
        const value = field.value == null ? "" : String(field.value).trim();
        if (field.id) lines.push(`${field.id}: ${value}`);
      });
    } else {
      lines.push("No hay campos cargados.");
    }

    lines.push("", "Puntos:");
    if (points.length) {
      points.forEach((point, index) => {
        lines.push(
          `- Punto ${index + 1}: id=${point.id}, x=${point.x}, y=${point.y}, color=${point.color || "#c8a96e"}, size=${point.size || 6}`,
        );
      });
    } else {
      lines.push("No hay puntos cargados.");
    }

    lines.push("", "Imágenes:");
    const images = Array.isArray(side.images) ? side.images : [];
    images.forEach((image, index) => {
      lines.push(`- Slot ${index + 1}: ${image ? "cargada" : "vacío"}`);
    });

    return lines.join("\n");
  }

  function exportCurrentContent(column) {
    const text = buildPlainTextExport(column);
    const preview = document.getElementById(`exportPreview${suffix(column)}`);
    if (preview) preview.value = text;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `auriculoterapia-${column}-${viewState[column].side.toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function loadSession(column, sessionId) {
    if (!getSession(sessionId)) return;
    viewState[column].sessionId = String(sessionId);
    const session = getCurrentSession(column);
    const currentPointId = viewState[column].selectedPointId;
    viewState[column].selectedPointId = session.sides[viewState[column].side].points[currentPointId]
      ? currentPointId
      : null;
    restoreForm(column, getSessionForm(session, column));
    syncPatientNameInput(column);
    updateSessionLookupValues(column);
    updateSessionSelectors();
    renderColumn(column);
    resetZoom(column);
  }

  async function deleteSession(column) {
    if (!canEditColumn(column)) return;
    const id = viewState[column].sessionId;
    const session = getCurrentSession(column);
    const ownSessions = sessions.filter((item) => canEditColumnForSession(item));
    if (ownSessions.length === 1 && profile.role !== "admin") {
      window.alert("Debe quedar al menos una sesión en el editor.");
      return;
    }
    if (!window.confirm(`¿Borrar la sesión ${id}? Esta acción eliminará sus imágenes y puntos.`)) {
      return;
    }
    if (session?.ownerUserId || profile.role === "admin") {
      const response = await fetch(`${API_BASE}/auriculoterapia/sessions`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ownerUserId: session.ownerUserId || profile.id,
          localId: session.localId || session.id,
        }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        showToast(column, result.message || "No se pudo borrar la sesión.");
        return;
      }
    }
    sessions.splice(
      sessions.findIndex((session) => session.id === id),
      1,
    );
    if (!sessions.length) {
      const emptySession = createEmptySession("1");
      emptySession.ownerUserId = profile.id;
      emptySession.ownerName = profile.name;
      emptySession.localId = "1";
      sessions.push(emptySession);
    }
    const nextId = sessions[0].id;
    COLUMNS.forEach((item) => {
      if (viewState[item].sessionId === id) viewState[item].sessionId = nextId;
    });
    persistSessions();
    updateSessionSelectors();
    COLUMNS.forEach(renderColumn);
  }

  async function deletePatient(column) {
    if (!canEditColumn(column)) return;
    const name = suffix(column);
    const patientSelector = document.getElementById(`selectPacienteSesion${name}`);
    const session = getCurrentSession(column);
    const patientSelection = parsePatientFilterValue(
      patientSelector?.value || "",
      session?.ownerUserId || profile.id,
    );
    const patient = patientSelection.name;
    const ownerUserId = patientSelection.ownerUserId;
    if (!patient) {
      window.alert("Selecciona un paciente para borrarlo.");
      return;
    }

    const confirmed = window.confirm(
      `¿Borrar a ${patient} del directorio y quitar su nombre de las sesiones guardadas? Se conservarán las notas, fechas, imágenes y puntos.`,
    );
    if (!confirmed) return;

    const response = await fetch(`${API_BASE}/auriculoterapia/patients`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ownerUserId, name: patient }),
    });
    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      const status = document.getElementById(`patientStatus${name}`);
      if (status) status.textContent = result.message || "No se pudo borrar el paciente.";
      return;
    }

    if (ownerUserId === profile.id) {
      directory.pacientes = directory.pacientes.filter((item) => item !== patient);
    } else {
      directory.sharedPatients = directory.sharedPatients.filter(
        (item) => item.ownerUserId !== ownerUserId || item.name !== patient,
      );
    }
    sessions
      .filter((session) => String(session.ownerUserId || profile.id) === ownerUserId)
      .forEach((session) => {
        Object.values(session.forms || {}).forEach((fields) => {
          if (!Array.isArray(fields)) return;
          fields.forEach((field) => {
            if (normalizeFieldId(field.id) === "paciente" && field.value === patient) {
              field.value = "";
            }
          });
        });
      });
    persistDirectory();
    persistSessions();
    updateDirectorySelectors();

    COLUMNS.forEach((item) => {
      const currentPatient = document.getElementById(`paciente${suffix(item)}`);
      const patientNameInput = document.getElementById(`nuevoPaciente${suffix(item)}`);
      if (currentPatient?.value === patient) currentPatient.value = "";
      if (patientNameInput?.value === patient) patientNameInput.value = "";
      updateSessionLookupValues(item);
      updateHeader(item);
    });
    updateSessionSelectors();

    const status = document.getElementById(`patientStatus${name}`);
    if (status) status.textContent = `Se quitó a ${patient} del directorio.`;
  }

  function canEditColumn(column) {
    const session = getCurrentSession(column);
    return profile.role === "admin" || canEditColumnForSession(session);
  }

  function canEditColumnForSession(session) {
    return (
      profile.role === "admin" ||
      Boolean(
        session &&
        !session.readOnly &&
        (!session.ownerUserId || session.ownerUserId === profile.id),
      )
    );
  }

  function getImageLimit() {
    if (profile.role === "admin") return Infinity;
    return profile.plan === "free" ? 1 : 3;
  }

  function showToast(column, message) {
    const panel = document.getElementById(`panel${suffix(column)}`);
    if (!panel) return;
    let toast = panel.querySelector(".toast-message");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-message";
      panel.querySelector(".panel-content")?.prepend(toast);
    }
    toast.textContent = message;
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.remove(), 3500);
  }

  const imageLoader = initImageLoader({
    document,
    apiBase: API_BASE,
    getCurrentSide,
    renderColumn,
    persistSessions,
    suffix,
    viewState,
    changeZoom,
    resetZoom,
    getSessionForm,
    restoreForm,
    updateSessionLookupValues,
    getSessionId: (column) => String(getCurrentSession(column).id),
    getOwnerId: (column) => String(getCurrentSession(column).ownerUserId || profile.id),
    canEdit: canEditColumn,
    getImageLimit,
    showToast,
    WHEEL_STEP,
    ZOOM_STEP,
    DEFAULT_IMAGE,
  });

  function setupImageControls() {
    imageLoader.setupImageControls();
  }

  function setupSessions() {
    COLUMNS.forEach((column) => {
      const name = suffix(column);
      document
        .getElementById(`btnGuardar${name}`)
        ?.addEventListener("click", () => saveCurrentSession(column));
      document
        .getElementById(`btnRecargar${name}`)
        ?.addEventListener("click", () => loadSession(column, viewState[column].sessionId));
      document
        .getElementById(`btnCargarSesion${name}`)
        ?.addEventListener("click", () =>
          loadSession(column, elements(column).sessionSelector.value),
        );
      document
        .getElementById(`btnBorrarSesion${name}`)
        ?.addEventListener("click", () => deleteSession(column));
      document
        .getElementById(`btnBorrarPaciente${name}`)
        ?.addEventListener("click", () => deletePatient(column));
      document
        .getElementById(`btnExportTxt${name}`)
        ?.addEventListener("click", () => exportCurrentContent(column));
      ["terapeuta", "paciente"].forEach((type) => {
        document
          .getElementById(`select${type[0].toUpperCase()}${type.slice(1)}Sesion${name}`)
          ?.addEventListener("change", () => updateSessionSelectors());
      });
      document
        .getElementById(`paciente${name}`)
        ?.addEventListener("change", () => syncPatientNameInput(column));
    });
    document
      .querySelectorAll("[data-add-person]")
      .forEach((button) =>
        button.addEventListener("click", () =>
          addDirectoryPerson(button.dataset.addPerson, button.dataset.col),
        ),
      );
    document.addEventListener("click", (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest("circle[data-point-id], .point-callout")
      ) {
        return;
      }
      COLUMNS.forEach((column) => {
        if (!viewState[column].pinnedPointId) return;
        viewState[column].pinnedPointId = null;
        updatePointCallout(column);
      });
    });
    document
      .querySelectorAll("[data-rename-person]")
      .forEach((button) =>
        button.addEventListener("click", () =>
          renameDirectoryPerson(button.dataset.renamePerson, button.dataset.col),
        ),
      );
    document.querySelectorAll("[data-session-step]").forEach((button) =>
      button.addEventListener("click", () => {
        const input = document.getElementById(`sesion${suffix(button.dataset.col)}`);
        if (!input) return;
        const minimum = Number(input.min) || 1;
        const current = Number(input.value) || minimum;
        input.value = String(Math.max(minimum, current + Number(button.dataset.sessionStep)));
        input.dispatchEvent(new Event("input", { bubbles: true }));
        input.dispatchEvent(new Event("change", { bubbles: true }));
      }),
    );
  }

  function setupPanelsAndHeaders() {
    document.querySelectorAll(".toggle-panel-btn[data-col]").forEach((button) =>
      button.addEventListener("click", () => {
        const panel = document.getElementById(`panel${suffix(button.dataset.col)}`);
        panel?.classList.toggle(
          button.dataset.col === "col1" ? "collapsed-left" : "collapsed-right",
        );
      }),
    );
    document.querySelectorAll(".panel-section-title.collapsible").forEach((title) =>
      title.addEventListener("click", () => {
        title.classList.toggle("collapsed");
        title.nextElementSibling?.classList.toggle("is-hidden");
      }),
    );
    COLUMNS.forEach((column) =>
      ["paciente", "fecha", "sesion"].forEach((field) => {
        const input = document.getElementById(`${field}${suffix(column)}`);
        input?.addEventListener("input", () => updateHeader(column));
        input?.addEventListener("change", () => updateHeader(column));
      }),
    );
  }

  async function initializeLoggedInTherapist() {
    try {
      const response = await fetch(`${API_BASE}/auth/session`);
      if (!response.ok) return;
      const authSession = await response.json();
      const therapistName = String(
        authSession?.user?.name || authSession?.user?.email || "",
      ).trim();
      if (!therapistName) return;

      if (!directory.terapeutas.includes(therapistName)) {
        directory.terapeutas.push(therapistName);
        directory.terapeutas.sort((left, right) =>
          left.localeCompare(right, "es", { sensitivity: "base" }),
        );
        persistDirectory();
      }
      updateDirectorySelectors();

      COLUMNS.forEach((column) => {
        const therapistField = document.getElementById(`terapeuta${suffix(column)}`);
        if (!therapistField || therapistField.value) return;
        therapistField.value = therapistName;
        saveCurrentSession(column);
      });
    } catch (error) {
      console.warn("No se pudo cargar el terapeuta autenticado.", error);
    }
  }

  const pointTools = initPoints({
    getCurrentSide,
    elements,
    persistSessions,
    renderColumn,
    updatePointCallout,
    canEdit: canEditColumn,
    suffix,
    setSelectedPoint: (column, pointId) => {
      viewState[column].selectedPointId = pointId;
    },
    showToast,
  });

  canvasRenderer = createCanvasRenderer({
    document,
    viewState,
    getCurrentSession,
    getCurrentSide,
    getActiveImage,
    elements,
    suffix,
    imageLoader,
    pointTools,
    canEdit: canEditColumn,
    updateHeader,
    updateZoom,
  });

  updateSessionSelectors();
  updateDirectorySelectors();
  setupImageControls();
  setupSessions();
  setupPanelsAndHeaders();
  if (profile.role === "admin") {
    const header = document.querySelector('.ear-column[data-col="col1"] .ear-header-left');
    if (header) {
      const adminLink = document.createElement("a");
      adminLink.href = "/admin/auriculoterapia";
      adminLink.className = "btn-panel admin-shortcut";
      adminLink.textContent = "Administración";
      header.appendChild(adminLink);
    }
  }
  COLUMNS.forEach((column) => {
    restoreForm(column, getSessionForm(getCurrentSession(column), column));
    syncPatientNameInput(column);
    updateSessionLookupValues(column);
    renderColumn(column);
    updateZoom(column);
  });
  initializeLoggedInTherapist();
}

if (typeof document !== "undefined") {
  initEditor();
}
