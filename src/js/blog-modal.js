const dialog = document.querySelector("#blog-post-dialog");
const postContent = document.querySelector("#blog-post-content");
const shareButton = document.querySelector("[data-blog-share]");
const whatsappLink = document.querySelector("[data-blog-whatsapp]");

if (dialog && postContent) {
  async function loadInteractions(slug, panel) {
    panel.replaceChildren();
    const loading = document.createElement("p");
    loading.textContent = "Cargando participación…";
    panel.appendChild(loading);

    try {
      const response = await fetch(`/api/blog/interactions/${encodeURIComponent(slug)}`, {
        cache: "no-store",
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "No se pudieron cargar los comentarios.");
      renderInteractions(slug, panel, data);
    } catch (error) {
      panel.replaceChildren();
      const message = document.createElement("p");
      message.className = "blog-interactions__status error";
      message.textContent = error instanceof Error ? error.message : "Error al cargar.";
      panel.appendChild(message);
    }
  }

  function renderInteractions(slug, panel, data) {
    panel.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Participación";
    const controls = document.createElement("div");
    controls.className = "blog-interactions__controls";
    const status = document.createElement("p");
    status.className = "blog-interactions__status";
    status.setAttribute("aria-live", "polite");

    if (data.authenticated) {
      const likeButton = document.createElement("button");
      likeButton.type = "button";
      likeButton.className = "blog-like-button";
      likeButton.setAttribute("aria-pressed", String(Boolean(data.likedByMe)));
      likeButton.textContent = data.likedByMe ? "♥ Te gusta" : "♡ Me gusta";
      const likeCount = document.createElement("span");
      likeCount.textContent = `${data.likesCount} me gusta`;
      likeButton.addEventListener("click", async () => {
        likeButton.disabled = true;
        try {
          const response = await fetch(`/api/blog/interactions/${encodeURIComponent(slug)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "like" }),
          });
          const result = await response.json();
          if (!response.ok) throw new Error(result.message || "No se pudo actualizar el me gusta.");
          await loadInteractions(slug, panel);
        } catch (error) {
          likeButton.disabled = false;
          status.textContent = error instanceof Error ? error.message : "Error al actualizar.";
        }
      });
      controls.append(likeButton, likeCount);
    } else {
      const login = document.createElement("button");
      login.type = "button";
      login.textContent = "Ingresar para participar";
      login.addEventListener("click", () => {
        dialog.close();
        document.dispatchEvent(
          new CustomEvent("blog-auth:open", { detail: { returnTo: `/blog#${slug}` } }),
        );
      });
      controls.appendChild(login);
    }

    const commentsHeading = document.createElement("h3");
    commentsHeading.textContent = `Comentarios (${data.comments.length})`;
    const commentsList = document.createElement("ol");
    commentsList.className = "blog-comments-list";

    data.comments.forEach((comment) => {
      const item = document.createElement("li");
      const meta = document.createElement("div");
      meta.className = "blog-comment__meta";
      const author = document.createElement("strong");
      author.textContent = comment.authorName;
      const time = document.createElement("time");
      time.dateTime = new Date(comment.createdAt).toISOString();
      time.textContent = new Date(comment.createdAt).toLocaleDateString("es-AR", {
        dateStyle: "medium",
      });
      meta.append(author, time);

      const text = document.createElement("p");
      text.className = "blog-comment__text";
      text.textContent = comment.text;
      item.append(meta, text);

      if (comment.canDelete) {
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "blog-comment__delete";
        remove.textContent = "Eliminar comentario";
        remove.addEventListener("click", async () => {
          remove.disabled = true;
          const response = await fetch(`/api/blog/interactions/${encodeURIComponent(slug)}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ commentId: comment.id }),
          });
          const result = await response.json().catch(() => ({}));
          if (!response.ok) {
            remove.disabled = false;
            status.textContent = result.message || "No se pudo eliminar el comentario.";
            return;
          }
          await loadInteractions(slug, panel);
        });
        item.appendChild(remove);
      }
      commentsList.appendChild(item);
    });

    if (!data.comments.length) {
      const empty = document.createElement("li");
      empty.className = "blog-comments-list__empty";
      empty.textContent = "Todavía no hay comentarios.";
      commentsList.appendChild(empty);
    }

    panel.append(heading, controls, commentsHeading, commentsList, status);
    if (!data.authenticated) return;

    const form = document.createElement("form");
    form.className = "blog-comment-form";
    const textarea = document.createElement("textarea");
    textarea.name = "comment";
    textarea.maxLength = 2000;
    textarea.required = true;
    textarea.rows = 3;
    textarea.placeholder = "Escribe un comentario…";
    textarea.setAttribute("aria-label", "Comentario");
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Publicar comentario";
    form.append(textarea, submit);
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      submit.disabled = true;
      try {
        const response = await fetch(`/api/blog/interactions/${encodeURIComponent(slug)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "comment", text: textarea.value }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "No se pudo publicar el comentario.");
        await loadInteractions(slug, panel);
      } catch (error) {
        submit.disabled = false;
        status.textContent = error instanceof Error ? error.message : "Error al publicar.";
      }
    });
    panel.appendChild(form);
  }

  const openPost = (card) => {
    const slug = card.dataset.blogPost;
    const template = document.querySelector(`#blog-post-${CSS.escape(slug)}`);
    if (!template) return;

    postContent.replaceChildren(template.content.cloneNode(true));
    const title = postContent.querySelector("h1")?.textContent || "Post del blog";
    dialog.dataset.shareTitle = title;
    whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(`${title} ${window.location.href}`)}`;
    const interactions = document.createElement("section");
    interactions.className = "blog-interactions";
    interactions.dataset.blogInteractions = slug;
    postContent.appendChild(interactions);
    void loadInteractions(slug, interactions);
    dialog.showModal();
    dialog.querySelector("[data-blog-close]")?.focus();
  };

  document.querySelectorAll(".blog-card[data-blog-post]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      openPost(card);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPost(card);
      }
    });
  });

  dialog.querySelector("[data-blog-close]")?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("cancel", () => dialog.close());
  shareButton?.addEventListener("click", async () => {
    const shareData = {
      title: dialog.dataset.shareTitle,
      text: dialog.dataset.shareTitle,
      url: window.location.href,
    };
    if (navigator.share) {
      await navigator.share(shareData).catch(() => {});
      return;
    }
    await navigator.clipboard?.writeText(window.location.href);
    shareButton.textContent = "Enlace copiado";
    setTimeout(() => {
      shareButton.innerHTML = '<i class="fas fa-share-alt" aria-hidden="true"></i> Compartir';
    }, 1800);
  });

  if (window.location.hash) {
    const slug = decodeURIComponent(window.location.hash.slice(1));
    const card = document.querySelector(`[data-blog-post="${CSS.escape(slug)}"]`);
    if (card) openPost(card);
  }
}
