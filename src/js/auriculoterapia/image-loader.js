export function initImageLoader({
  document,
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
  getSessionId,
  getOwnerId,
  canEdit,
  getImageLimit,
  showToast,
  WHEEL_STEP,
  ZOOM_STEP,
  DEFAULT_IMAGE,
}) {
  function updateGalleryUI(column) {
    const side = getCurrentSide(column);
    const name = suffix(column);

    [0, 1, 2].forEach((index) => {
      const slotEl = document.querySelector(
        `.gallery-slot[data-col="${column}"][data-slot="${index}"]`,
      );
      const imgEl = document.getElementById(`slotImg${index}${name}`);
      const labelEl = document.getElementById(`slotLabel${index}${name}`);
      const imgSrc = side.images[index];
      const slotLimit = getImageLimit();

      if (slotEl) {
        slotEl.classList.toggle("active", side.activeIndex === index);
        slotEl.style.display = "";
        const deleteButton = slotEl.querySelector(".btn-slot-del");
        if (deleteButton) deleteButton.disabled = !canEdit(column);
      }
      const fileInput = document.getElementById(`file${index}${name}`);
      if (fileInput) fileInput.disabled = !canEdit(column) || index >= slotLimit;

      if (imgSrc) {
        if (imgEl) {
          imgEl.src = imgSrc;
          imgEl.classList.remove("is-hidden");
        }
        if (labelEl) labelEl.classList.add("is-hidden");
      } else {
        if (imgEl) {
          imgEl.src = "";
          imgEl.classList.add("is-hidden");
        }
        if (labelEl) labelEl.classList.remove("is-hidden");
      }
    });
  }

  async function loadImageSlot(column, index, file) {
    if (!canEdit(column)) return;
    const fileName = String(file?.name || "");
    const fileType = String(file?.type || "");
    const extensionMime = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".bmp": "image/bmp",
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
      ".avif": "image/avif",
      ".heic": "image/heic",
      ".heif": "image/heif",
    };
    const lowerName = fileName.toLowerCase();
    const guessedMime = Object.entries(extensionMime).find(([extension]) =>
      lowerName.endsWith(extension),
    )?.[1];
    const normalizedType = fileType.startsWith("image/") ? fileType : guessedMime || "";
    const isImageFile = !!file && (normalizedType.startsWith("image/") || !!guessedMime);

    if (!isImageFile) return;
    const form = new FormData();
    form.append("file", file, fileName);
    form.append("ownerUserId", getOwnerId(column));
    form.append("sessionId", getSessionId(column));
    form.append("side", viewState[column].side);
    form.append("slot", String(index));

    try {
      const response = await fetch("/api/auriculoterapia/images", { method: "POST", body: form });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "No se pudo cargar la imagen.");
      const side = getCurrentSide(column);
      side.images[index] = result.url;
      side.activeIndex = index;
      await persistSessions();
      renderColumn(column);
    } catch (error) {
      showToast(column, error instanceof Error ? error.message : "No se pudo cargar la imagen.");
    }
  }

  async function deleteImageSlot(column, index) {
    if (!canEdit(column)) return;
    const side = getCurrentSide(column);
    const image = side.images[index];
    const imageId =
      typeof image === "string"
        ? image.match(/\/api\/auriculoterapia\/images\/([a-f\d]{24})$/i)?.[1]
        : null;
    if (imageId) {
      const response = await fetch(`/api/auriculoterapia/images/${imageId}`, { method: "DELETE" });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        showToast(column, result.message || "No se pudo borrar la imagen.");
        return;
      }
    }
    side.images[index] = null;
    if (side.activeIndex === index) {
      side.activeIndex = 0;
    }
    await persistSessions();
    renderColumn(column);
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

    document.querySelectorAll(".slot-body[data-col]").forEach((body) => {
      body.addEventListener("click", (e) => {
        e.stopPropagation();
        const column = body.dataset.col;
        const index = Number(body.dataset.slot);
        const side = getCurrentSide(column);

        if (!side.images[index]) {
          if (!canEdit(column)) return;
          if (index >= getImageLimit()) {
            showToast(column, `Tu plan permite ${getImageLimit()} imagen por oreja.`);
            return;
          }
          const fileInput = document.getElementById(`file${index}${suffix(column)}`);
          if (fileInput) fileInput.click();
          return;
        }

        side.activeIndex = index;
        persistSessions();
        renderColumn(column);
      });
    });

    document.querySelectorAll('.gallery-slots input[type="file"]').forEach((input) => {
      input.disabled = !canEdit(input.dataset.col) || Number(input.dataset.slot) >= getImageLimit();
      input.addEventListener("change", () => {
        const column = input.dataset.col;
        const index = Number(input.dataset.slot);
        loadImageSlot(column, index, input.files?.[0]);
        input.value = "";
      });
    });

    document.querySelectorAll(".btn-slot-del").forEach((button) => {
      button.addEventListener("click", (e) => {
        e.stopPropagation();
        const column = button.dataset.col;
        const index = Number(button.dataset.slot);
        if (canEdit(column)) deleteImageSlot(column, index);
      });
    });

    document.querySelectorAll(".gallery-slot[data-col]").forEach((slot) => {
      const column = slot.dataset.col;
      const deleteButton = slot.querySelector(".btn-slot-del");
      if (deleteButton) deleteButton.disabled = !canEdit(column);
    });

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

  return {
    updateGalleryUI,
    loadImageSlot,
    deleteImageSlot,
    setupImageControls,
  };
}
