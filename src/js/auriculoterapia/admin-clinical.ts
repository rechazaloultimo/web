interface ClinicalTherapist {
  id: string;
  name: string;
  email: string;
}

interface ClinicalPatient {
  id: string;
  ownerUserId: string;
  ownerName: string;
  name: string;
  sessionCount: number;
}

interface ClinicalSession {
  id: string;
  ownerUserId: string;
  ownerName: string;
  localId: string;
  patientName: string;
  therapistName: string;
  date: string;
  sessionNumber: string;
  imageCount: number;
  pointCount: number;
  data: Record<string, any>;
}

interface ClinicalData {
  therapists: ClinicalTherapist[];
  patients: ClinicalPatient[];
  sessions: ClinicalSession[];
}

interface AuditEvent {
  id: string;
  actorEmail: string;
  action: string;
  targetType: string;
  targetOwnerUserId: string;
  targetId: string | null;
  details: Record<string, unknown>;
  createdAt: string;
}

const tabs = document.querySelectorAll<HTMLButtonElement>("[data-admin-tab]");
const views = document.querySelectorAll<HTMLElement>(".admin-view");
const clinicalStatus = document.querySelector<HTMLElement>("#clinical-status");
const auditStatus = document.querySelector<HTMLElement>("#audit-status");
const therapistFilter = document.querySelector<HTMLSelectElement>("#clinical-therapist");
const patientFilter = document.querySelector<HTMLSelectElement>("#clinical-patient");
const searchInput = document.querySelector<HTMLInputElement>("#clinical-search");
const patientBody = document.querySelector<HTMLTableSectionElement>("#clinical-patients");
const sessionBody = document.querySelector<HTMLTableSectionElement>("#clinical-sessions");
const auditBody = document.querySelector<HTMLTableSectionElement>("#audit-events");
const editorDialog = document.querySelector<HTMLDialogElement>("#session-editor");
const editorTitle = document.querySelector<HTMLElement>("#session-editor-title");
const editorJson = document.querySelector<HTMLTextAreaElement>("#session-editor-json");
const editorSave = document.querySelector<HTMLButtonElement>("#session-editor-save");

let clinicalData: ClinicalData = { therapists: [], patients: [], sessions: [] };
let activeSession: ClinicalSession | null = null;

function setStatus(element: HTMLElement | null, message: string, isError = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function addCell(row: HTMLTableRowElement, value: unknown) {
  const cell = document.createElement("td");
  cell.textContent = value == null || value === "" ? "—" : String(value);
  row.appendChild(cell);
  return cell;
}

function renderFilters() {
  if (!therapistFilter || !patientFilter) return;
  const ownerValue = therapistFilter.value;
  const patientValue = patientFilter.value;
  therapistFilter.replaceChildren(new Option("Todos los terapeutas", ""));
  clinicalData.therapists.forEach((therapist) => {
    therapistFilter?.add(new Option(`${therapist.name} (${therapist.email})`, therapist.id));
  });
  therapistFilter.value = clinicalData.therapists.some((item) => item.id === ownerValue)
    ? ownerValue
    : "";

  patientFilter.replaceChildren(new Option("Todos los pacientes", ""));
  clinicalData.patients.forEach((patient) => {
    const value = JSON.stringify({ ownerUserId: patient.ownerUserId, name: patient.name });
    patientFilter?.add(new Option(`${patient.name} — ${patient.ownerName}`, value));
  });
  patientFilter.value = [...patientFilter.options].some((option) => option.value === patientValue)
    ? patientValue
    : "";
}

function renderPatients() {
  if (!patientBody) return;
  const query = searchInput?.value.trim().toLocaleLowerCase("es") || "";
  const owner = therapistFilter?.value || "";
  const selectedPatient = patientFilter?.value
    ? (JSON.parse(patientFilter.value) as { ownerUserId: string; name: string })
    : null;
  patientBody.replaceChildren();

  clinicalData.patients
    .filter((patient) => !owner || patient.ownerUserId === owner)
    .filter(
      (patient) =>
        !selectedPatient ||
        (patient.ownerUserId === selectedPatient.ownerUserId &&
          patient.name === selectedPatient.name),
    )
    .filter(
      (patient) =>
        !query ||
        patient.name.toLocaleLowerCase("es").includes(query) ||
        patient.ownerName.toLocaleLowerCase("es").includes(query),
    )
    .forEach((patient) => {
      const row = document.createElement("tr");
      addCell(row, patient.name);
      addCell(row, patient.ownerName);
      addCell(row, patient.sessionCount);
      const actions = document.createElement("td");
      const rename = document.createElement("button");
      rename.type = "button";
      rename.textContent = "Cambiar nombre";
      rename.addEventListener("click", async () => {
        const newName = window.prompt("Nuevo nombre del paciente:", patient.name)?.trim();
        if (!newName || newName === patient.name) return;
        const response = await fetch("/api/auriculoterapia/patients", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ownerUserId: patient.ownerUserId,
            oldName: patient.name,
            newName,
          }),
        });
        const result = (await response.json().catch(() => ({}))) as { message?: string };
        if (!response.ok) {
          setStatus(clinicalStatus, result.message || "No se pudo renombrar el paciente.", true);
          return;
        }
        await loadClinical();
      });

      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Borrar";
      remove.addEventListener("click", async () => {
        if (!window.confirm(`¿Borrar a ${patient.name} y desvincular su nombre de las sesiones?`))
          return;
        const response = await fetch("/api/auriculoterapia/patients", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ownerUserId: patient.ownerUserId, name: patient.name }),
        });
        const result = (await response.json().catch(() => ({}))) as { message?: string };
        if (!response.ok) {
          setStatus(clinicalStatus, result.message || "No se pudo borrar el paciente.", true);
          return;
        }
        await loadClinical();
      });
      actions.append(rename, remove);
      row.appendChild(actions);
      patientBody?.appendChild(row);
    });
}

function renderSessions() {
  if (!sessionBody) return;
  const query = searchInput?.value.trim().toLocaleLowerCase("es") || "";
  const owner = therapistFilter?.value || "";
  const selectedPatient = patientFilter?.value
    ? (JSON.parse(patientFilter.value) as { ownerUserId: string; name: string })
    : null;
  sessionBody.replaceChildren();

  clinicalData.sessions
    .filter((session) => !owner || session.ownerUserId === owner)
    .filter(
      (session) =>
        !selectedPatient ||
        (session.ownerUserId === selectedPatient.ownerUserId &&
          session.patientName === selectedPatient.name),
    )
    .filter(
      (session) =>
        !query ||
        [session.patientName, session.therapistName, session.ownerName, session.date].some(
          (value) => value.toLocaleLowerCase("es").includes(query),
        ),
    )
    .forEach((session) => {
      const row = document.createElement("tr");
      addCell(row, session.date);
      addCell(row, session.patientName);
      addCell(row, session.ownerName);
      addCell(row, session.sessionNumber);
      addCell(row, session.pointCount);
      addCell(row, session.imageCount);
      const actions = document.createElement("td");
      const edit = document.createElement("button");
      edit.type = "button";
      edit.textContent = "Ver / editar JSON";
      edit.addEventListener("click", () => openSessionEditor(session));
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Borrar";
      remove.addEventListener("click", async () => {
        if (
          !window.confirm(
            `¿Borrar la sesión ${session.sessionNumber} de ${session.patientName || "Sin paciente"}?`,
          )
        )
          return;
        const response = await fetch("/api/auriculoterapia/sessions", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ownerUserId: session.ownerUserId, localId: session.localId }),
        });
        const result = (await response.json().catch(() => ({}))) as { message?: string };
        if (!response.ok) {
          setStatus(clinicalStatus, result.message || "No se pudo borrar la sesión.", true);
          return;
        }
        await loadClinical();
      });
      actions.append(edit, remove);
      row.appendChild(actions);
      sessionBody?.appendChild(row);
    });
}

function openSessionEditor(session: ClinicalSession) {
  activeSession = session;
  if (editorTitle)
    editorTitle.textContent = `Sesión ${session.sessionNumber} — ${session.patientName || "Sin paciente"}`;
  if (editorJson) editorJson.value = JSON.stringify(session.data, null, 2);
  editorDialog?.showModal();
}

async function saveSessionEditor() {
  if (!activeSession || !editorJson) return;
  let data: Record<string, any>;
  try {
    data = JSON.parse(editorJson.value);
  } catch {
    setStatus(clinicalStatus, "El JSON no es válido.", true);
    return;
  }
  if (editorSave) editorSave.disabled = true;
  const response = await fetch("/api/admin/clinical", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ownerUserId: activeSession.ownerUserId,
      localId: activeSession.localId,
      data,
    }),
  });
  const result = (await response.json().catch(() => ({}))) as { message?: string };
  if (editorSave) editorSave.disabled = false;
  if (!response.ok) {
    setStatus(clinicalStatus, result.message || "No se pudo guardar la sesión.", true);
    return;
  }
  editorDialog?.close();
  setStatus(clinicalStatus, "Sesión actualizada y auditada.");
  await loadClinical();
}

async function loadClinical() {
  const owner = therapistFilter?.value || "";
  const search = searchInput?.value.trim() || "";
  const url = new URL("/api/admin/clinical", location.origin);
  if (owner) url.searchParams.set("ownerUserId", owner);
  if (search) url.searchParams.set("q", search);
  const response = await fetch(url, { cache: "no-store" });
  const result = (await response.json().catch(() => ({}))) as {
    message?: string;
    therapists?: ClinicalTherapist[];
    patients?: ClinicalPatient[];
    sessions?: ClinicalSession[];
  };
  if (!response.ok) {
    setStatus(clinicalStatus, result.message || "No se pudieron cargar los datos clínicos.", true);
    return;
  }
  clinicalData = {
    therapists: result.therapists || [],
    patients: result.patients || [],
    sessions: result.sessions || [],
  };
  renderFilters();
  renderPatients();
  renderSessions();
  setStatus(
    clinicalStatus,
    `${clinicalData.patients.length} pacientes · ${clinicalData.sessions.length} sesiones`,
  );
}

async function loadAudit() {
  if (!auditBody) return;
  setStatus(auditStatus, "Cargando auditoría…");
  const response = await fetch("/api/admin/audit?limit=250", { cache: "no-store" });
  const result = (await response.json().catch(() => ({}))) as {
    message?: string;
    events?: AuditEvent[];
  };
  if (!response.ok) {
    setStatus(auditStatus, result.message || "No se pudo cargar la auditoría.", true);
    return;
  }
  auditBody.replaceChildren();
  (result.events || []).forEach((event) => {
    const row = document.createElement("tr");
    addCell(row, new Date(event.createdAt).toLocaleString("es"));
    addCell(row, `${event.actorEmail} (${event.actorRole})`);
    addCell(row, event.action);
    addCell(row, event.targetType);
    addCell(row, `${event.targetOwnerUserId} / ${event.targetId || "—"}`);
    addCell(row, JSON.stringify(event.details || {}));
    auditBody?.appendChild(row);
  });
  setStatus(auditStatus, `${result.events?.length || 0} eventos recientes.`);
}

function selectAdminView(view: string) {
  views.forEach((section) => {
    section.hidden = section.id !== `view-${view}`;
  });
  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.adminTab === view));
  });
  if (view === "clinical" && !clinicalData.therapists.length) void loadClinical();
  if (view === "audit") void loadAudit();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => selectAdminView(tab.dataset.adminTab || "users"));
});
therapistFilter?.addEventListener("change", () => void loadClinical());
patientFilter?.addEventListener("change", () => {
  renderPatients();
  renderSessions();
});
searchInput?.addEventListener("input", () => {
  renderPatients();
  renderSessions();
});
document.querySelector("#clinical-refresh")?.addEventListener("click", () => void loadClinical());
editorSave?.addEventListener("click", () => void saveSessionEditor());
document
  .querySelector("#session-editor-cancel")
  ?.addEventListener("click", () => editorDialog?.close());
