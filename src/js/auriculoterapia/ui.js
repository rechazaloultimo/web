import { initPoints } from "./points.js";

if (typeof document !== "undefined") {
  const STORAGE_KEY = "auriculoterapia-sesiones-v1";
  const DIRECTORY_KEY = "auriculoterapia-directorio-v1";
  const DEFAULT_IMAGE = "/auriculoterapia/images/oreja-segmentada-v3.jpg";
  const COLUMNS = ["col1", "col2"];
  const SIDES = ["IZQUIERDA", "DERECHA"];
  const MIN_ZOOM = 0.3;
  const MAX_ZOOM = 2.5;
  const ZOOM_STEP = 0.1;
  const WHEEL_STEP = 0.05;
  const viewState = {
    col1: { side: "IZQUIERDA", sessionId: "1", zoom: 1, selectedPointId: null },
    col2: { side: "DERECHA", sessionId: "1", zoom: 1, selectedPointId: null },
  };

  function createEmptySession(id) {
    return {
      id: String(id),
      sides: {
        IZQUIERDA: { image: DEFAULT_IMAGE, points: {} },
        DERECHA: { image: DEFAULT_IMAGE, points: {} },
      },
      forms: { IZQUIERDA: [], DERECHA: [] },
    };
  }

  function readSessions() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(parsed) && parsed.length ? parsed : [createEmptySession("1")];
    } catch {
      return [createEmptySession("1")];
    }
  }

  let sessions = readSessions();

  function readDirectory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(DIRECTORY_KEY) || "{}");
      return {
        terapeutas: Array.isArray(parsed.terapeutas) ? parsed.terapeutas : [],
        pacientes: Array.isArray(parsed.pacientes) ? parsed.pacientes : [],
      };
    } catch {
      return { terapeutas: [], pacientes: [] };
    }
  }

  const directory = readDirectory();

  function persistDirectory() {
    localStorage.setItem(DIRECTORY_KEY, JSON.stringify(directory));
  }

  function syncLegacyDirectoryValues() {
    sessions.forEach((session) => {
      Object.values(session.forms || {}).forEach((fields) => {
        if (!Array.isArray(fields)) return;
        fields.forEach((field) => {
          const type = field.id?.startsWith("terapeuta")
            ? "terapeutas"
            : field.id?.startsWith("paciente")
              ? "pacientes"
              : null;
          const value = String(field.value || "").trim();
          if (type && value && !directory[type].includes(value)) directory[type].push(value);
        });
      });
    });
    persistDirectory();
  }

  syncLegacyDirectoryValues();

  function persistSessions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }

  function getSession(id) {
    return sessions.find((session) => session.id === String(id));
  }

  function getCurrentSession(column) {
    return getSession(viewState[column].sessionId);
  }

  function getCurrentSide(column) {
    return getCurrentSession(column).sides[viewState[column].side];
  }

  function suffix(column) {
    return column.replace("col", "Col");
  }

  function elements(column) {
    const name = suffix(column);
    return {
      image: document.getElementById(`img${name}`),
      container: document.getElementById(`container${name}`),
      svg: document.getElementById(`svg${name}`),
      sideSelector: document.getElementById(`selectLado${name}`),
      sessionSelector: document.getElementById(`selectSesion${name}`),
      zoomLabel: document.querySelector(`.zoom-level[data-col="${column}"]`),
    };
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
          option.textContent = `Sesión ${session.id}`;
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

  function sessionMatchesLookup(session, column) {
    const name = suffix(column);
    const therapist = document.getElementById(`selectTerapeutaSesion${name}`)?.value || "";
    const patient = document.getElementById(`selectPacienteSesion${name}`)?.value || "";
    return (
      (!therapist || getSessionFormValue(session, column, `terapeuta${name}`) === therapist) &&
      (!patient || getSessionFormValue(session, column, `paciente${name}`) === patient)
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
      if (lookup) lookup.value = getSessionFormValue(session, column, formId);
    });
  }

  function updateDirectorySelectors() {
    COLUMNS.forEach((column) => {
      ["terapeutas", "pacientes"].forEach((type) => {
        const field = type === "terapeutas" ? "terapeuta" : "paciente";
        const selector = document.getElementById(`${field}${suffix(column)}`);
        if (!selector) return;
        const current = selector.value;
        selector.innerHTML = '<option value="">Seleccionar...</option>';
        directory[type].forEach((person) => {
          const option = document.createElement("option");
          option.value = person;
          option.textContent = person;
          selector.appendChild(option);
        });
        selector.value = directory[type].includes(current) ? current : "";

        const lookup = document.getElementById(
          `${field === "terapeuta" ? "selectTerapeuta" : "selectPaciente"}Sesion${suffix(column)}`,
        );
        if (lookup) {
          lookup.innerHTML = '<option value="">Cualquiera...</option>';
          directory[type].forEach((person) => {
            const option = document.createElement("option");
            option.value = person;
            option.textContent = person;
            lookup.appendChild(option);
          });
        }
      });
    });
  }

  function addDirectoryPerson(type, column) {
    const field = type === "terapeuta" ? "terapeuta" : "paciente";
    const input = document.getElementById(
      `nuevo${field[0].toUpperCase()}${field.slice(1)}${suffix(column)}`,
    );
    const value = input?.value.trim();
    const values = type === "terapeuta" ? directory.terapeutas : directory.pacientes;
    if (!value || values.includes(value)) return;
    values.push(value);
    values.sort((left, right) => left.localeCompare(right, "es", { sensitivity: "base" }));
    persistDirectory();
    updateDirectorySelectors();
    const selector = document.getElementById(`${field}${suffix(column)}`);
    if (selector) selector.value = value;
    if (input) input.value = "";
    updateHeader(column);
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

  function saveCurrentSession(column) {
    const sessionNumber =
      document.getElementById(`sesion${suffix(column)}`)?.value.trim() ||
      viewState[column].sessionId;
    if (!getSession(sessionNumber)) {
      sessions.push(createEmptySession(sessionNumber));
    }
    viewState[column].sessionId = String(sessionNumber);
    const session = getCurrentSession(column);
    session.forms[viewState[column].side] = collectForm(column);
    const side = getCurrentSide(column);
    side.image = side.image || DEFAULT_IMAGE;
    persistSessions();
    updateSessionLookupValues(column);
    updateSessionSelectors();
    COLUMNS.forEach((otherColumn) => {
      if (otherColumn === column || viewState[otherColumn].side !== viewState[column].side) return;
      if (viewState[otherColumn].sessionId !== viewState[column].sessionId) return;
      restoreForm(otherColumn, getSessionForm(session, otherColumn));
      renderColumn(otherColumn);
      updateSessionLookupValues(otherColumn);
    });
    showSaveMessage(column);
  }

  function showSaveMessage(column) {
    const panel = document.getElementById(`panel${suffix(column)}`);
    if (!panel) return;
    let message = panel.querySelector(".save-message");
    if (!message) {
      message = document.createElement("p");
      message.className = "save-message";
      panel.querySelector(".panel-content")?.prepend(message);
    }
    message.textContent = "Información guardada correctamente.";
    clearTimeout(message.saveTimer);
    message.saveTimer = setTimeout(() => message.remove(), 3500);
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
    updateSessionLookupValues(column);
    updateSessionSelectors();
    renderColumn(column);
    resetZoom(column);
  }

  function deleteSession(column) {
    if (sessions.length === 1) return;
    const id = viewState[column].sessionId;
    sessions = sessions.filter((session) => session.id !== id);
    const nextId = sessions[0].id;
    COLUMNS.forEach((item) => {
      if (viewState[item].sessionId === id) viewState[item].sessionId = nextId;
    });
    persistSessions();
    updateSessionSelectors();
    COLUMNS.forEach(renderColumn);
  }

  function loadImage(column, file) {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const value = String(reader.result);
      const side = getCurrentSide(column);
      side.image = value;
      const image = elements(column).image;
      if (image) image.src = value;
      persistSessions();
      resetZoom(column);
    });
    reader.readAsDataURL(file);
  }

  function renderColumn(column, selectedPointId = viewState[column].selectedPointId) {
    const { image, svg, sideSelector } = elements(column);
    const side = getCurrentSide(column);
    if (!side) return;
    if (sideSelector) sideSelector.value = viewState[column].side;
    if (image) image.src = side.image || DEFAULT_IMAGE;
    if (!svg) return;

    svg.innerHTML = "";

    const background = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    background.setAttribute("width", "100%");
    background.setAttribute("height", "100%");
    background.setAttribute("fill", "transparent");
    background.setAttribute("pointer-events", "all");
    background.addEventListener("click", (event) => pointTools.createPoint(column, event));
    svg.appendChild(background);

    Object.values(side.points).forEach((point) => {
      if (point.visible === false) return;
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      const selected = point.id === viewState[column].selectedPointId;
      const color = point.color || "#c8a96e";
      const size = point.size || 6;
      const radius = selected ? size + 4 : size;
      circle.setAttribute("cx", `${point.x * 100}%`);
      circle.setAttribute("cy", `${point.y * 100}%`);
      circle.setAttribute("r", radius);
      circle.setAttribute("fill", selected ? `${color}66` : `${color}99`);
      circle.setAttribute("stroke", selected ? "#d94f3d" : color);
      circle.setAttribute("stroke-width", selected ? "3" : "1.5");
      circle.style.cursor = "pointer";
      // TOOLTIP con el nombre del punto
      circle.setAttribute("title", point.name || "Punto sin nombre");
      const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "title");
      tooltip.textContent = point.name || "Punto sin nombre";
      circle.appendChild(tooltip);

      circle.addEventListener("click", (event) => {
        event.stopPropagation();
        viewState[column].selectedPointId = point.id;
        pointTools.renderPointEditor(column, point.id);
        renderColumn(column);
      });
      pointTools.bindPointDrag(column, point, circle);
      svg.appendChild(circle);
    });
    pointTools.renderPointEditor(column, selectedPointId);
  }

  function setupImageControls() {
    document
      .querySelectorAll(".zoom-in[data-col]")
      .forEach((button) =>
        button.addEventListener("click", () => changeZoom(button.dataset.col, ZOOM_STEP)),
      );
    document
      .querySelectorAll(".zoom-out[data-col]")
      .forEach((button) =>
        button.addEventListener("click", () => changeZoom(button.dataset.col, -ZOOM_STEP)),
      );
    document
      .querySelectorAll(".zoom-reset[data-col]")
      .forEach((button) => button.addEventListener("click", () => resetZoom(button.dataset.col)));
    document.querySelectorAll(".image-container").forEach((container) =>
      container.addEventListener(
        "wheel",
        (event) => {
          event.preventDefault();
          changeZoom(
            container.id.replace("container", "").toLowerCase(),
            event.deltaY > 0 ? -WHEEL_STEP : WHEEL_STEP,
          );
        },
        { passive: false },
      ),
    );
    document.querySelectorAll('input[type="file"][data-col]').forEach((input) =>
      input.addEventListener("change", () => {
        loadImage(input.dataset.col, input.files?.[0]);
        input.value = "";
      }),
    );
    document.querySelectorAll(".ear-selector[data-col]").forEach((selector) =>
      selector.addEventListener("change", () => {
        viewState[selector.dataset.col].side = selector.value;
        viewState[selector.dataset.col].selectedPointId = null;
        const column = selector.dataset.col;
        restoreForm(column, getSessionForm(getCurrentSession(column), column));
        updateSessionLookupValues(column);
        renderColumn(selector.dataset.col);
      }),
    );
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
      ["terapeuta", "paciente"].forEach((type) => {
        document
          .getElementById(`select${type[0].toUpperCase()}${type.slice(1)}Sesion${name}`)
          ?.addEventListener("change", () => updateSessionSelectors());
      });
    });
    document
      .querySelectorAll("[data-add-person]")
      .forEach((button) =>
        button.addEventListener("click", () =>
          addDirectoryPerson(button.dataset.addPerson, button.dataset.col),
        ),
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

  const pointTools = initPoints({
    getCurrentSide,
    elements,
    persistSessions,
    renderColumn,
    suffix,
    setSelectedPoint: (column, pointId) => {
      viewState[column].selectedPointId = pointId;
    },
    showToast: (column, message) => {
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
    },
  });

  updateSessionSelectors();
  updateDirectorySelectors();
  setupImageControls();
  setupSessions();
  setupPanelsAndHeaders();
  COLUMNS.forEach((column) => {
    restoreForm(column, getSessionForm(getCurrentSession(column), column));
    updateSessionLookupValues(column);
    renderColumn(column);
    updateZoom(column);
  });
}
