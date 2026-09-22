const dialog = document.querySelector("#blog-post-dialog");
const postContent = document.querySelector("#blog-post-content");
const shareButton = document.querySelector("[data-blog-share]");
const whatsappLink = document.querySelector("[data-blog-whatsapp]");

if (dialog && postContent) {
  const openPost = (card) => {
    const template = document.querySelector(`#blog-post-${card.dataset.blogPost}`);
    if (!template) return;

    postContent.replaceChildren(template.content.cloneNode(true));
    const title = postContent.querySelector("h1")?.textContent || "Post del blog";
    dialog.dataset.shareTitle = title;
    whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(`${title} ${window.location.href}`)}`;
    dialog.showModal();
    dialog.querySelector("[data-blog-close]")?.focus();
  };

  document.querySelectorAll(".service-card-modern[data-blog-post]").forEach((card) => {
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
}
