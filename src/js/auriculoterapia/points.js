// ============================================================
// PACKS DE PUNTOS PREDEFINIDOS
// ============================================================
const PACKS = {
  maestros: {
    nombre: "Puntos Maestros",
    puntos: [
      ["Shen Men", 0.61, 0.26],
      ["Punto Zero", 0.47, 0.35],
      ["Máster Alergia", 0.52, 0.11],
      ["Máster Autonómico", 0.4, 0.28],
      ["Máster Tranquilizante", 0.37, 0.52],
      ["Máster Oscilación", 0.4, 0.44],
      ["Máster Endocrino", 0.41, 0.59],
      ["Máster Sensorial", 0.46, 0.65],
      ["Máster Tálamo", 0.56, 0.59],
      ["Máster Hombro", 0.68, 0.52],
      ["Máster Cerebral", 0.47, 0.88],
    ],
  },
  miembro_superior: {
    nombre: "Miembro Superior",
    puntos: [
      ["Dedos", 0.8, 0.05],
      ["Mano", 0.78, 0.12],
      ["Muñeca", 0.75, 0.18],
      ["Antebrazo", 0.72, 0.26],
      ["Codo", 0.7, 0.33],
      ["Brazo", 0.68, 0.4],
      ["Hombro", 0.66, 0.48],
      ["Clavícula", 0.62, 0.44],
      ["Pulgar", 0.82, 0.08],
    ],
  },
  columna: {
    nombre: "Columna",
    puntos: [
      ["Cervical", 0.5, 0.12],
      ["Dorsal", 0.55, 0.28],
      ["Lumbar", 0.58, 0.42],
      ["Sacro", 0.6, 0.48],
    ],
  },
  miembro_inferior: {
    nombre: "Miembro Inferior",
    puntos: [
      ["Cadera C", 0.62, 0.58],
      ["Cadera F", 0.65, 0.62],
      ["Muslo", 0.6, 0.68],
      ["Rodilla C", 0.56, 0.78],
      ["Rodilla F", 0.6, 0.8],
      ["Pantorrilla", 0.55, 0.84],
      ["Tobillo F", 0.52, 0.92],
      ["Dedos F", 0.48, 0.96],
      ["Talón C", 0.44, 0.94],
    ],
  },
  organos_internos: {
    nombre: "Órganos Internos",
    puntos: [
      ["Boca", 0.3, 0.2],
      ["Esófago", 0.32, 0.26],
      ["Cardias", 0.34, 0.3],
      ["Estómago", 0.36, 0.38],
      ["Duodeno", 0.38, 0.42],
      ["I. Delgado", 0.4, 0.48],
      ["I. Grueso", 0.42, 0.52],
      ["Recto", 0.44, 0.56],
      ["Hígado", 0.3, 0.58],
      ["V. Biliar", 0.34, 0.62],
      ["Páncreas", 0.38, 0.66],
      ["Bazo C", 0.42, 0.7],
      ["Riñón", 0.46, 0.74],
      ["Veijiga", 0.5, 0.78],
      ["Pulmón 1", 0.52, 0.28],
      ["Pulmón 2", 0.56, 0.32],
      ["Corazón", 0.48, 0.24],
      ["T. Recalentador", 0.44, 0.34],
      ["Diafragma", 0.4, 0.32],
      ["Tráquea", 0.48, 0.16],
      ["Cerebro", 0.42, 0.08],
    ],
  },
};

// ============================================================
// FUNCIÓN PRINCIPAL
// ============================================================
export function initPoints({
  getCurrentSide,
  elements,
  persistSessions,
  renderColumn,
  suffix,
  showToast,
}) {
  // ─── Crear punto nuevo ───
  function createPoint(column, event) {
    const { svg } = elements(column);
    const side = getCurrentSide(column);
    if (!svg || !side) return;
    const rect = svg.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));
    const id = `p${Date.now()}${Math.random().toString(36).slice(2, 6)}`;
    side.points[id] = {
      id,
      name: "Nuevo punto",
      notes: "",
      x,
      y,
      visible: true,
      mtc: "",
      location: "",
      benefits: "",
      color: "#c8a96e",
      size: 6,
    };
    persistSessions();
    renderColumn(column, id);
  }

  // ─── Añadir pack de puntos ───
  function addPack(column, packKey) {
    const pack = PACKS[packKey];
    if (!pack) {
      console.error("Pack no encontrado:", packKey);
      return 0;
    }
    const side = getCurrentSide(column);
    let contador = 0;
    pack.puntos.forEach(([name, x, y]) => {
      const existe = Object.values(side.points).some((point) => point.name === name);
      if (!existe) {
        const id = `pack-${packKey}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`;
        side.points[id] = {
          id,
          name,
          notes: "",
          x,
          y,
          visible: true,
          mtc: "",
          location: "",
          benefits: "",
          color: "#c8a96e",
          size: 6,
        };
        contador++;
      }
    });
    persistSessions();
    renderColumn(column);
    if (showToast) {
      showToast(column, `✅ ${contador} puntos de "${pack.nombre}" añadidos.`);
    }
    return contador;
  }

  // ─── Añadir solo puntos maestros (legacy) ───
  function addMasterPoints(column) {
    return addPack(column, "maestros");
  }

  // ─── Eliminar todos los puntos de la columna ───
  function deleteAllPoints(column) {
    const side = getCurrentSide(column);
    const count = Object.keys(side.points).length;
    if (count === 0) {
      if (showToast) showToast(column, "ℹ️ No hay puntos para eliminar.");
      return;
    }
    if (confirm(`¿Eliminar todos los ${count} puntos de esta oreja?`)) {
      side.points = {};
      persistSessions();
      renderColumn(column);
      if (showToast) showToast(column, `🗑 ${count} puntos eliminados.`);
    }
  }

  // ─── Renderizar editor de punto y lista ───
  function renderPointEditor(column, selectedPointId) {
    const slot = document.querySelector(`.panel-slot[data-col="${column}"]`);
    if (!slot) {
      console.warn("Panel slot not found for column", column);
      return;
    }

    const side = getCurrentSide(column);
    const point = side.points[selectedPointId];
    const colSuffix = suffix(column);

    // ── Botones de packs ──
    const packButtons = document.createElement("div");
    packButtons.className = "pack-buttons";
    Object.keys(PACKS).forEach((key) => {
      const btn = document.createElement("button");
      btn.className = "btn-panel btn-sm pack-btn";
      btn.dataset.pack = key;
      btn.dataset.col = column;
      btn.textContent = PACKS[key].nombre;
      btn.addEventListener("click", () => addPack(column, key));
      packButtons.appendChild(btn);
    });

    // ── Editor del punto seleccionado ──
    const editorWrapper = document.createElement("div");
    editorWrapper.className = "point-editor-wrapper";

    if (point) {
      if (!point.color) point.color = "#c8a96e";
      if (!point.size) point.size = 6;

      editorWrapper.innerHTML = `
        <div class="point-editor-header">
          <span class="point-editor-title">Editando punto</span>
          <div class="point-editor-actions">
            <button class="btn-panel btn-danger point-delete-btn" data-id="${point.id}">🗑</button>
            <button class="btn-panel point-toggle-btn" data-id="${point.id}">${point.visible === false ? "👁 Mostrar" : "👁 Ocultar"}</button>
          </div>
        </div>
        <div class="clinic-field">
          <label for="pointName${colSuffix}">Nombre del punto</label>
          <input type="text" id="pointName${colSuffix}" value="${escapeAttribute(point.name)}" />
        </div>
        <div class="clinic-field">
          <label for="pointNotes${colSuffix}">Observaciones</label>
          <textarea id="pointNotes${colSuffix}" rows="2">${escapeText(point.notes)}</textarea>
        </div>
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:8px;">
          <div class="clinic-field" style="flex:0 0 auto;">
            <label for="pointColor${colSuffix}">Color</label>
            <input type="color" id="pointColor${colSuffix}" value="${point.color}" style="width:40px; height:30px; padding:2px; background:var(--bg); border:1px solid var(--border); cursor:pointer;" />
          </div>
          <div class="clinic-field" style="flex:1;">
            <label for="pointSize${colSuffix}">Tamaño: <span id="sizeLabel${colSuffix}">${point.size}</span></label>
            <input type="range" id="pointSize${colSuffix}" min="4" max="20" step="1" value="${point.size}" style="width:100%; accent-color:var(--accent);" />
          </div>
        </div>
      `;

      // Eventos del editor
      const nameInput = editorWrapper.querySelector(`#pointName${colSuffix}`);
      const notesInput = editorWrapper.querySelector(`#pointNotes${colSuffix}`);
      const colorInput = editorWrapper.querySelector(`#pointColor${colSuffix}`);
      const sizeInput = editorWrapper.querySelector(`#pointSize${colSuffix}`);
      const sizeLabel = editorWrapper.querySelector(`#sizeLabel${colSuffix}`);
      const deleteBtn = editorWrapper.querySelector(`.point-delete-btn`);
      const toggleBtn = editorWrapper.querySelector(`.point-toggle-btn`);

      nameInput.addEventListener("input", () => {
        point.name = nameInput.value;
        persistSessions();
        renderColumn(column, point.id);
      });

      notesInput.addEventListener("input", () => {
        point.notes = notesInput.value;
        persistSessions();
      });

      colorInput.addEventListener("input", () => {
        point.color = colorInput.value;
        persistSessions();
        renderColumn(column, point.id);
      });

      sizeInput.addEventListener("input", () => {
        point.size = parseInt(sizeInput.value, 10);
        sizeLabel.textContent = point.size;
        persistSessions();
        renderColumn(column, point.id);
      });

      deleteBtn.addEventListener("click", () => {
        delete side.points[point.id];
        persistSessions();
        renderColumn(column);
      });

      toggleBtn.addEventListener("click", () => {
        point.visible = point.visible === false;
        persistSessions();
        renderColumn(column, point.id);
      });
    }

    // ── Lista de puntos ──
    const listWrapper = document.createElement("div");
    listWrapper.className = "point-list-wrapper";

    const puntosList = Object.values(side.points);
    if (puntosList.length === 0) {
      listWrapper.innerHTML = `<p class="point-empty-msg">No hay puntos en esta oreja.</p>`;
    } else {
      const listHeader = document.createElement("div");
      listHeader.className = "point-list-header";
      listHeader.innerHTML = `
        <span class="point-list-title">Lista de puntos (${puntosList.length})</span>
        <button class="btn-panel btn-danger delete-all-btn">🗑 Eliminar todos</button>
      `;

      const listContainer = document.createElement("div");
      listContainer.className = "point-list-container";

      puntosList.forEach((p) => {
        const item = document.createElement("div");
        item.className = `point-item ${p.id === selectedPointId ? "active" : ""}`;
        if (p.visible === false) item.style.opacity = "0.4";
        item.dataset.id = p.id;

        const colorDot = document.createElement("span");
        colorDot.style.cssText = `display:inline-block; width:10px; height:10px; border-radius:50%; background:${p.color || "#c8a96e"}; margin-right:6px; flex-shrink:0;`;
        const nameSpan = document.createElement("span");
        nameSpan.className = "point-item-name";
        nameSpan.textContent = p.name;

        const actions = document.createElement("div");
        actions.className = "point-item-actions";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-panel btn-danger point-item-delete";
        deleteBtn.textContent = "✕";
        deleteBtn.dataset.id = p.id;

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "btn-panel point-item-toggle";
        toggleBtn.textContent = p.visible === false ? "👁" : "◯";
        toggleBtn.dataset.id = p.id;

        actions.appendChild(deleteBtn);
        actions.appendChild(toggleBtn);

        const leftContainer = document.createElement("div");
        leftContainer.style.display = "flex";
        leftContainer.style.alignItems = "center";
        leftContainer.appendChild(colorDot);
        leftContainer.appendChild(nameSpan);

        item.appendChild(leftContainer);
        item.appendChild(actions);

        // Eventos del item
        item.addEventListener("click", () => {
          if (side.points[p.id]) {
            renderColumn(column, p.id);
          }
        });

        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          delete side.points[p.id];
          persistSessions();
          renderColumn(column);
        });

        toggleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const target = side.points[p.id];
          if (target) {
            target.visible = target.visible === false;
            persistSessions();
            renderColumn(column, target.visible ? target.id : null);
          }
        });

        listContainer.appendChild(item);
      });

      listWrapper.appendChild(listHeader);
      listWrapper.appendChild(listContainer);

      // Evento "Eliminar todos"
      listWrapper.querySelector(".delete-all-btn").addEventListener("click", () => {
        deleteAllPoints(column);
      });
    }

    // ── Montar todo en el slot ──
    slot.innerHTML = "";
    slot.appendChild(packButtons);
    if (point) slot.appendChild(editorWrapper);
    slot.appendChild(listWrapper);
  }

  // ─── Arrastre de puntos ───
  function bindPointDrag(column, point, circle) {
    circle.addEventListener("mousedown", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const svg = elements(column).svg;
      const rect = svg.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - point.x;
      const offsetY = (event.clientY - rect.top) / rect.height - point.y;

      const move = (moveEvent) => {
        const newRect = svg.getBoundingClientRect();
        point.x = Math.max(
          0,
          Math.min(1, (moveEvent.clientX - newRect.left) / newRect.width - offsetX),
        );
        point.y = Math.max(
          0,
          Math.min(1, (moveEvent.clientY - newRect.top) / newRect.height - offsetY),
        );
        circle.setAttribute("cx", `${point.x * 100}%`);
        circle.setAttribute("cy", `${point.y * 100}%`);
      };

      const stop = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
        persistSessions();
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", stop);
    });
  }

  // ─── Funciones auxiliares ───
  function escapeAttribute(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeText(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // ─── Botones fijos en el HTML (opcional) ───
  function bindFixedPackButtons() {
    document.querySelectorAll("[data-pack-fixed]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const col = btn.dataset.col;
        const packKey = btn.dataset.packFixed;
        if (col && packKey) {
          addPack(col, packKey);
        }
      });
    });
  }

  // ─── Vincular botones fijos al inicio ───
  bindFixedPackButtons();

  // ─── API Pública ───
  return {
    createPoint,
    renderPointEditor,
    addMasterPoints,
    addPack,
    deleteAllPoints,
    bindPointDrag,
    PACKS,
  };
}
