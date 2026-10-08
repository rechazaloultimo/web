export function createCanvasRenderer({
  document,
  viewState,
  getCurrentSession,
  getCurrentSide,
  getActiveImage,
  elements,
  suffix,
  imageLoader,
  pointTools,
  canEdit,
  updateHeader,
  updateZoom,
}) {
  function updatePointCallout(column) {
    const svg = elements(column).svg;
    if (!svg) return;
    svg.querySelector(".point-callout")?.remove();

    const pointId = viewState[column].hoveredPointId || viewState[column].pinnedPointId;
    const point = pointId ? getCurrentSide(column).points[pointId] : null;
    if (!point) return;

    const viewWidth = 850;
    const viewHeight = 1300;
    const boxWidth = 224;
    const boxHeight = 64;
    const pointX = point.x * viewWidth;
    const pointY = point.y * viewHeight;
    const radius = Number(point.size) || 6;
    const placeRight =
      viewWidth - pointX >= boxWidth + radius + 14 || pointX < boxWidth + radius + 14;
    const boxX = placeRight
      ? Math.min(viewWidth - boxWidth, pointX + radius + 14)
      : Math.max(0, pointX - radius - boxWidth - 14);
    const boxY = Math.max(8, Math.min(viewHeight - boxHeight - 8, pointY - boxHeight / 2));
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", "point-callout");
    group.setAttribute("role", "tooltip");
    group.setAttribute(
      "aria-label",
      `${point.name || "Punto"}: ${point.location || point.notes || "Punto auricular"}`,
    );

    const connector = document.createElementNS("http://www.w3.org/2000/svg", "line");
    connector.setAttribute("x1", String(pointX + (placeRight ? radius : -radius)));
    connector.setAttribute("y1", String(pointY));
    connector.setAttribute("x2", String(placeRight ? boxX : boxX + boxWidth));
    connector.setAttribute("y2", String(boxY + boxHeight / 2));
    connector.setAttribute("stroke", point.color || "#c8a96e");
    connector.setAttribute("stroke-width", "2");

    const card = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    card.setAttribute("x", String(boxX));
    card.setAttribute("y", String(boxY));
    card.setAttribute("width", String(boxWidth));
    card.setAttribute("height", String(boxHeight));
    card.setAttribute("rx", "4");
    card.setAttribute("fill", "#111614");
    card.setAttribute("stroke", point.color || "#c8a96e");
    card.setAttribute("stroke-width", "1.5");

    const title = document.createElementNS("http://www.w3.org/2000/svg", "text");
    title.setAttribute("x", String(boxX + 12));
    title.setAttribute("y", String(boxY + 25));
    title.setAttribute("fill", "#ffffff");
    title.setAttribute("font-size", "16");
    title.setAttribute("font-weight", "700");
    title.textContent = point.name || "Punto sin nombre";

    const detail = document.createElementNS("http://www.w3.org/2000/svg", "text");
    detail.setAttribute("x", String(boxX + 12));
    detail.setAttribute("y", String(boxY + 47));
    detail.setAttribute("fill", "#c9d2cd");
    detail.setAttribute("font-size", "12");
    detail.textContent = point.location || point.notes || point.benefits || "Punto auricular";

    group.append(connector, card, title, detail);
    svg.appendChild(group);
  }

  function renderColumn(column, forcedPointId) {
    const session = getCurrentSession(column);
    if (!session) return;

    const pointId = forcedPointId ?? viewState[column].selectedPointId ?? null;
    const side = getCurrentSide(column);
    const activePoints = side.pointsByImage?.[side.activeIndex] || side.points || {};
    side.points = activePoints;
    const name = suffix(column);
    const editable = canEdit(column);

    const selector = document.getElementById(`selectLado${name}`);
    if (selector) selector.value = viewState[column].side;

    const sessionSelector = document.getElementById(`selectSesion${name}`);
    if (sessionSelector) sessionSelector.value = String(viewState[column].sessionId);

    const imageEl = document.getElementById(`img${name}`);
    const svgEl = document.getElementById(`svg${name}`);
    if (imageEl) {
      const activeImage = getActiveImage(side);
      if (activeImage) {
        imageEl.src = activeImage;
        imageEl.removeAttribute("srcset");
      } else {
        imageEl.removeAttribute("src");
        imageEl.removeAttribute("srcset");
      }
      imageEl.alt = `${viewState[column].side} — ${name}`;
    }

    const consultation = document.getElementById(`gridConsulta${name}`);
    consultation?.querySelectorAll("input, textarea, select, button").forEach((control) => {
      control.disabled = !editable;
    });
    ["btnGuardar", "btnBorrarSesion", "btnBorrarPaciente"].forEach((prefix) => {
      const button = document.getElementById(`${prefix}${name}`);
      if (button) button.disabled = !editable;
    });

    if (svgEl) {
      svgEl.innerHTML = "";
      svgEl.onclick = (event) => {
        if (event.target.closest && event.target.closest("circle")) return;
        if (typeof pointTools?.createPoint === "function") {
          pointTools.createPoint(column, event);
        }
      };

      Object.values(activePoints || {}).forEach((point) => {
        if (point.visible === false) return;
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", String(point.x * 850));
        circle.setAttribute("cy", String(point.y * 1300));
        circle.setAttribute("r", String(point.size || 6));
        circle.setAttribute("fill", point.color || "#c8a96e");
        circle.setAttribute("data-point-id", point.id);
        circle.style.cursor = "pointer";
        circle.style.stroke = point.id === pointId ? "#ffffff" : "rgba(255,255,255,0.8)";
        circle.style.strokeWidth = point.id === pointId ? "2.5" : "1";

        if (typeof pointTools?.bindPointDrag === "function") {
          pointTools.bindPointDrag(column, point, circle);
        }

        circle.addEventListener("click", (event) => {
          event.stopPropagation();
          viewState[column].selectedPointId = point.id;
          viewState[column].pinnedPointId = point.id;
          renderColumn(column, point.id);
        });

        circle.addEventListener("mouseenter", () => {
          viewState[column].hoveredPointId = point.id;
          updatePointCallout(column);
        });

        circle.addEventListener("mouseleave", () => {
          if (viewState[column].hoveredPointId === point.id) {
            viewState[column].hoveredPointId = null;
          }
          updatePointCallout(column);
        });

        svgEl.appendChild(circle);
      });

      const selection = pointId && side.points?.[pointId];
      if (selection) {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("cx", String(selection.x * 850));
        ring.setAttribute("cy", String(selection.y * 1300));
        ring.setAttribute("r", String((selection.size || 6) + 8));
        ring.setAttribute("fill", "none");
        ring.setAttribute("stroke", "rgba(255,255,255,0.9)");
        ring.setAttribute("stroke-width", "1.5");
        ring.setAttribute("stroke-dasharray", "4 4");
        svgEl.appendChild(ring);
      }

      updatePointCallout(column);
    }

    if (typeof imageLoader?.updateGalleryUI === "function") {
      imageLoader.updateGalleryUI(column);
    }

    if (typeof pointTools?.renderPointEditor === "function") {
      const slot = document.querySelector(`.panel-slot[data-col="${column}"]`);
      if (slot) pointTools.renderPointEditor(column, pointId);
    }

    updateHeader(column);
    updateZoom(column);
  }

  return { renderColumn, updatePointCallout };
}
