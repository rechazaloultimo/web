interface BlogImage {
  src: string;
  alt: string;
}

interface BlogPost {
  id: string;
  slug: string;
  icon: string;
  title: string;
  summary: string;
  introTitle: string;
  intro: string;
  sectionTitle: string;
  body: string;
  date: string;
  categories: string[];
  coverImage: string;
  images: BlogImage[];
  published: boolean;
  updatedAt?: string;
}

interface ApiResult {
  message?: string;
  post?: BlogPost;
  posts?: BlogPost[];
  url?: string;
}

const $ = <T extends HTMLElement>(selector: string) => document.querySelector<T>(selector);
const status = $("#blog-status");
const postList = $("#blog-post-list");
const titleInput = $("#blog-title") as HTMLInputElement | null;
const slugInput = $("#blog-slug") as HTMLInputElement | null;
const bodyEditor = $("#blog-body-editor");
const coverPreview = $("#blog-cover-preview");
const galleryPreview = $("#blog-gallery-preview");
const coverFile = $("#blog-cover-file") as HTMLInputElement | null;
const galleryFiles = $("#blog-gallery-files") as HTMLInputElement | null;
const inlineFile = $("#blog-inline-image") as HTMLInputElement | null;

let posts: BlogPost[] = [];
let selectedId = "";
let coverImage = "";
let gallery: BlogImage[] = [];
let titleEdited = false;

function setStatus(message: string, isError = false) {
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error", isError);
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

function setInput(selector: string, value: string) {
  const input = $(selector) as HTMLInputElement | HTMLTextAreaElement | null;
  if (input) input.value = value || "";
}

function getInput(selector: string) {
  return ($(selector) as HTMLInputElement | HTMLTextAreaElement | null)?.value.trim() || "";
}

function renderImagePreviews() {
  if (coverPreview) {
    coverPreview.replaceChildren();
    if (coverImage) {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = coverImage;
      image.alt = "Portada";
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "Quitar portada";
      remove.addEventListener("click", () => {
        coverImage = "";
        renderImagePreviews();
      });
      figure.append(image, remove);
      coverPreview.appendChild(figure);
    }
  }

  if (!galleryPreview) return;
  galleryPreview.replaceChildren();
  gallery.forEach((image, index) => {
    const figure = document.createElement("figure");
    const preview = document.createElement("img");
    preview.src = image.src;
    preview.alt = image.alt || `Imagen ${index + 1}`;
    const caption = document.createElement("figcaption");
    caption.textContent = image.alt || `Imagen ${index + 1}`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Quitar";
    remove.addEventListener("click", () => {
      gallery = gallery.filter((_, itemIndex) => itemIndex !== index);
      renderImagePreviews();
    });
    figure.append(preview, caption, remove);
    galleryPreview.appendChild(figure);
  });
}

function resetForm() {
  selectedId = "";
  titleEdited = false;
  coverImage = "";
  gallery = [];
  const form = $("#blog-form") as HTMLFormElement | null;
  form?.reset();
  if (bodyEditor) bodyEditor.innerHTML = "";
  renderImagePreviews();
  postList
    ?.querySelectorAll("[aria-current]")
    .forEach((element) => element.removeAttribute("aria-current"));
  const deleteButton = $("#blog-delete") as HTMLButtonElement | null;
  if (deleteButton) deleteButton.disabled = true;
  setStatus("Nueva entrada en borrador.");
}

function fillForm(post: BlogPost) {
  selectedId = post.id;
  titleEdited = true;
  setInput("#blog-title", post.title);
  setInput("#blog-slug", post.slug);
  setInput("#blog-summary", post.summary);
  setInput("#blog-icon", post.icon);
  setInput("#blog-date", post.date);
  setInput("#blog-categories", (post.categories || []).join(", "));
  setInput("#blog-intro-title", post.introTitle);
  setInput("#blog-intro", post.intro);
  setInput("#blog-section-title", post.sectionTitle);
  if (bodyEditor) bodyEditor.innerHTML = post.body || "";
  const published = $("#blog-published") as HTMLInputElement | null;
  if (published) published.checked = Boolean(post.published);
  coverImage = post.coverImage || "";
  gallery = [...(post.images || [])];
  renderImagePreviews();
  postList
    ?.querySelectorAll("[aria-current]")
    .forEach((element) => element.removeAttribute("aria-current"));
  postList
    ?.querySelector(`[data-post-id="${CSS.escape(post.id)}"]`)
    ?.setAttribute("aria-current", "true");
  const deleteButton = $("#blog-delete") as HTMLButtonElement | null;
  if (deleteButton) deleteButton.disabled = false;
  setStatus(post.published ? "Entrada publicada." : "Borrador cargado.");
}

function renderPosts() {
  if (!postList) return;
  postList.replaceChildren();
  posts.forEach((post) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "post-choice";
    button.dataset.postId = post.id;
    const title = document.createElement("span");
    title.textContent = post.title;
    const info = document.createElement("small");
    info.textContent = `${post.published ? "Publicado" : "Borrador"} · ${post.slug}`;
    button.append(title, info);
    button.addEventListener("click", () => fillForm(post));
    postList.appendChild(button);
  });
}

async function loadPosts(selectId = "") {
  const response = await fetch("/api/admin/blog", { cache: "no-store" });
  const result = (await response.json().catch(() => ({}))) as ApiResult;
  if (!response.ok) {
    setStatus(result.message || "No se pudieron cargar las entradas.", true);
    return;
  }
  posts = result.posts || [];
  renderPosts();
  if (selectId) {
    const post = posts.find((item) => item.id === selectId);
    if (post) fillForm(post);
  }
  setStatus(`${posts.length} entradas.`);
}

async function uploadImage(file: File) {
  const form = new FormData();
  form.append("file", file, file.name);
  const response = await fetch("/api/admin/blog/images", { method: "POST", body: form });
  const result = (await response.json().catch(() => ({}))) as ApiResult;
  if (!response.ok || !result.url) throw new Error(result.message || "No se pudo subir la imagen.");
  return result.url;
}

async function savePost(event: SubmitEvent) {
  event.preventDefault();
  const saveButton = $("#blog-save") as HTMLButtonElement | null;
  if (saveButton) saveButton.disabled = true;
  const payload = {
    id: selectedId || undefined,
    title: getInput("#blog-title"),
    slug: getInput("#blog-slug"),
    icon: getInput("#blog-icon"),
    summary: getInput("#blog-summary"),
    introTitle: getInput("#blog-intro-title"),
    intro: getInput("#blog-intro"),
    sectionTitle: getInput("#blog-section-title"),
    body: bodyEditor?.innerHTML || "",
    date: getInput("#blog-date"),
    categories: getInput("#blog-categories"),
    coverImage,
    images: gallery,
    published: Boolean(
      (document.querySelector("#blog-published") as HTMLInputElement | null)?.checked,
    ),
  };
  try {
    const response = await fetch("/api/admin/blog", {
      method: selectedId ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json().catch(() => ({}))) as ApiResult;
    if (!response.ok) throw new Error(result.message || "No se pudo guardar la entrada.");
    if (result.post) {
      selectedId = result.post.id;
      await loadPosts(selectedId);
    }
    setStatus(payload.published ? "Entrada publicada." : "Borrador guardado.");
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "No se pudo guardar la entrada.", true);
  } finally {
    if (saveButton) saveButton.disabled = false;
  }
}

async function deletePost() {
  if (!selectedId) return;
  const post = posts.find((item) => item.id === selectedId);
  if (!window.confirm(`¿Eliminar la entrada “${post?.title || "sin título"}”?`)) return;
  const response = await fetch("/api/admin/blog", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: selectedId }),
  });
  const result = (await response.json().catch(() => ({}))) as ApiResult;
  if (!response.ok) {
    setStatus(result.message || "No se pudo eliminar la entrada.", true);
    return;
  }
  resetForm();
  await loadPosts();
}

function insertHtml(html: string) {
  bodyEditor?.focus();
  document.execCommand("insertHTML", false, html);
}

document.querySelectorAll<HTMLButtonElement>("[data-command]").forEach((button) => {
  button.addEventListener("click", () => {
    bodyEditor?.focus();
    document.execCommand(button.dataset.command || "", false);
  });
});
document.querySelectorAll<HTMLButtonElement>("[data-block]").forEach((button) => {
  button.addEventListener("click", () => {
    bodyEditor?.focus();
    document.execCommand("formatBlock", false, button.dataset.block || "p");
  });
});

$("#blog-insert-link")?.addEventListener("click", () => {
  const url = window.prompt("URL del enlace (https://, mailto: o teléfono):")?.trim();
  if (!url) return;
  bodyEditor?.focus();
  document.execCommand("createLink", false, url);
});

coverFile?.addEventListener("change", async () => {
  const file = coverFile.files?.[0];
  if (!file) return;
  try {
    coverImage = await uploadImage(file);
    renderImagePreviews();
    setStatus("Portada subida. Guarda la entrada para conservarla.");
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "No se pudo subir la portada.", true);
  } finally {
    coverFile.value = "";
  }
});

galleryFiles?.addEventListener("change", async () => {
  const files = [...(galleryFiles.files || [])];
  for (const file of files) {
    try {
      const src = await uploadImage(file);
      gallery.push({ src, alt: file.name.replace(/\.[^.]+$/, "") });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "No se pudo subir una imagen.", true);
      break;
    }
  }
  renderImagePreviews();
  galleryFiles.value = "";
  setStatus("Galería actualizada. Guarda la entrada para conservar los cambios.");
});

$("#blog-insert-image")?.addEventListener("click", () => inlineFile?.click());
inlineFile?.addEventListener("change", async () => {
  const file = inlineFile.files?.[0];
  if (!file) return;
  try {
    const src = await uploadImage(file);
    const alt =
      window.prompt("Texto alternativo para la imagen:", file.name.replace(/\.[^.]+$/, "")) ||
      "Imagen del artículo";
    insertHtml(`<p><img src="${src}" alt="${alt.replace(/["<>]/g, "")}" /></p>`);
    gallery.push({ src, alt });
    renderImagePreviews();
  } catch (error) {
    setStatus(error instanceof Error ? error.message : "No se pudo insertar la imagen.", true);
  } finally {
    inlineFile.value = "";
  }
});

titleInput?.addEventListener("input", () => {
  if (titleEdited || !slugInput) return;
  slugInput.value = slugify(titleInput.value);
});
slugInput?.addEventListener("input", () => {
  titleEdited = true;
});
$("#blog-form")?.addEventListener("submit", (event) => void savePost(event as SubmitEvent));
$("#blog-delete")?.addEventListener("click", () => void deletePost());
$("#blog-new")?.addEventListener("click", resetForm);

void loadPosts();
resetForm();
