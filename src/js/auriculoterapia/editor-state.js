const LEGACY_STORAGE_KEY = "auriculoterapia-sesiones-v1";
const LEGACY_DIRECTORY_KEY = "auriculoterapia-directorio-v1";

export function createEmptySession(id) {
  return {
    id: String(id),
    sides: {
      IZQUIERDA: {
        images: [null, null, null],
        activeIndex: 0,
        pointsByImage: [{}, {}, {}],
        points: {},
      },
      DERECHA: {
        images: [null, null, null],
        activeIndex: 0,
        pointsByImage: [{}, {}, {}],
        points: {},
      },
    },
    forms: { IZQUIERDA: [], DERECHA: [] },
  };
}

function sanitizeSessions(parsedSessions) {
  if (!Array.isArray(parsedSessions) || !parsedSessions.length) {
    return [createEmptySession("1")];
  }

  return parsedSessions.map((session, index) => {
    const normalized =
      session && typeof session === "object" ? session : createEmptySession(String(index + 1));
    normalized.id = String(normalized.id || String(index + 1));
    normalized.sides = normalized.sides || {};
    ["IZQUIERDA", "DERECHA"].forEach((sideName) => {
      const side = normalized.sides[sideName] || {};
      side.images = Array.isArray(side.images) ? side.images.slice(0, 3) : [null, null, null];
      while (side.images.length < 3) side.images.push(null);
      side.activeIndex = Number.isInteger(side.activeIndex)
        ? Math.max(0, Math.min(2, side.activeIndex))
        : 0;
      side.pointsByImage = Array.isArray(side.pointsByImage)
        ? side.pointsByImage.slice(0, 3)
        : [side.points || {}, {}, {}];
      while (side.pointsByImage.length < 3) side.pointsByImage.push({});
      side.points = side.pointsByImage[side.activeIndex] || {};
      normalized.sides[sideName] = side;
    });
    normalized.forms = normalized.forms || { IZQUIERDA: [], DERECHA: [] };
    return normalized;
  });
}

export function readLegacyEditorData() {
  try {
    const sessions = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY) || "[]");
    const directory = JSON.parse(localStorage.getItem(LEGACY_DIRECTORY_KEY) || "{}");
    return {
      sessions: Array.isArray(sessions) ? sessions : [],
      directory: {
        terapeutas: Array.isArray(directory.terapeutas) ? directory.terapeutas : [],
        pacientes: Array.isArray(directory.pacientes) ? directory.pacientes : [],
      },
    };
  } catch {
    return { sessions: [], directory: { terapeutas: [], pacientes: [] } };
  }
}

export function clearLegacyEditorData() {
  localStorage.removeItem(LEGACY_STORAGE_KEY);
  localStorage.removeItem(LEGACY_DIRECTORY_KEY);
}

export function createEditorState({ document, viewState, columns, initialData }) {
  const sessions = sanitizeSessions(initialData?.sessions);
  const userStorageKey = String(initialData?.profile?.id || "anonymous");
  const storageKey = `${LEGACY_STORAGE_KEY}:${userStorageKey}`;
  const directoryKey = `${LEGACY_DIRECTORY_KEY}:${userStorageKey}`;
  const directoryData = initialData?.directory || {};
  const directory = {
    terapeutas: Array.isArray(directoryData.terapeutas) ? [...directoryData.terapeutas] : [],
    pacientes: Array.isArray(directoryData.pacientes) ? [...directoryData.pacientes] : [],
    sharedPatients: Array.isArray(directoryData.sharedPatients)
      ? [...directoryData.sharedPatients]
      : [],
  };
  const profile = initialData?.profile || null;

  function persistSessions() {
    localStorage.setItem(storageKey, JSON.stringify(sessions));
  }

  function persistDirectory() {
    localStorage.setItem(directoryKey, JSON.stringify(directory));
  }

  function syncLegacyDirectoryValues() {
    sessions.forEach((session) => {
      if (profile && session.ownerUserId && session.ownerUserId !== profile.id) return;
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

  function getSession(id) {
    return sessions.find((session) => session.id === String(id));
  }

  function getCurrentSession(column) {
    return getSession(viewState[column].sessionId);
  }

  function getCurrentSide(column) {
    const side = getCurrentSession(column).sides[viewState[column].side];
    if (!side.images) {
      side.images = [null, null, null];
      delete side.image;
    }
    if (!Array.isArray(side.images)) {
      side.images = [null, null, null];
    }
    while (side.images.length < 3) {
      side.images.push(null);
    }
    if (!Array.isArray(side.pointsByImage)) {
      side.pointsByImage = [{}, {}, {}];
    }
    while (side.pointsByImage.length < 3) {
      side.pointsByImage.push({});
    }
    if (typeof side.activeIndex !== "number") {
      side.activeIndex = 0;
    }
    if (!side.pointsByImage[side.activeIndex]) {
      side.pointsByImage[side.activeIndex] = {};
    }
    side.points = side.pointsByImage[side.activeIndex];
    return side;
  }

  function getActiveImage(side) {
    return side.images[side.activeIndex] || side.images[0] || "";
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

  syncLegacyDirectoryValues();

  return {
    sessions,
    directory,
    profile,
    persistSessions,
    persistDirectory,
    getSession,
    getCurrentSession,
    getCurrentSide,
    getActiveImage,
    suffix,
    elements,
    createEmptySession,
  };
}
