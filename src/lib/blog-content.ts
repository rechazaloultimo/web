import {
  ELEMENT_NODE,
  parse,
  renderSync,
  transformSync,
  walkSync,
  type ElementNode,
  type Node,
} from "ultrahtml";
import sanitize from "ultrahtml/transformers/sanitize";

export interface BlogImage {
  src: string;
  alt: string;
}

export interface BlogPostInput {
  slug?: string;
  title?: string;
  icon?: string;
  summary?: string;
  introTitle?: string;
  intro?: string;
  sectionTitle?: string;
  body?: string;
  date?: string;
  categories?: unknown;
  coverImage?: string;
  images?: unknown;
  published?: boolean;
}

export const BLOG_IMAGE_BUCKET = "blog_images";

export function slugifyBlogTitle(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}

export function isBlogImageUrl(value: unknown): value is string {
  return typeof value === "string" && /^\/api\/blog\/images\/[a-f\d]{24}$/i.test(value);
}

function isSafeLink(value: string) {
  const url = value.trim();
  if (url.startsWith("/") && !url.startsWith("//") && !url.includes("\\")) return true;
  return /^(https?:\/\/|mailto:|tel:)/i.test(url);
}

export function sanitizeBlogHtml(input: unknown) {
  const markup = String(input || "").slice(0, 200_000);
  const sanitized = transformSync(markup, [
    sanitize({
      allowElements: [
        "div",
        "span",
        "p",
        "br",
        "hr",
        "h2",
        "h3",
        "h4",
        "strong",
        "b",
        "em",
        "i",
        "u",
        "s",
        "ul",
        "ol",
        "li",
        "blockquote",
        "pre",
        "code",
        "a",
        "img",
      ],
      dropElements: ["script", "style", "iframe", "object", "embed", "svg", "math", "form"],
      allowAttributes: {
        href: ["a"],
        src: ["img"],
        alt: ["img"],
        title: ["a", "img"],
      },
    }),
  ]);
  const tree = parse(sanitized) as Node;
  walkSync(tree, (node) => {
    if (node.type !== ELEMENT_NODE) return;
    const element = node as ElementNode;
    if (element.name === "a" && element.attributes.href && !isSafeLink(element.attributes.href)) {
      delete element.attributes.href;
    }
    if (element.name === "img" && !isBlogImageUrl(element.attributes.src)) {
      delete element.attributes.src;
    }
  });
  return renderSync(tree);
}

export function normalizeBlogPost(input: BlogPostInput) {
  const title = String(input.title || "")
    .trim()
    .slice(0, 180);
  const slug = slugifyBlogTitle(String(input.slug || title));
  const categories = Array.isArray(input.categories)
    ? [...new Set(input.categories.map((value) => String(value).trim()).filter(Boolean))].slice(
        0,
        20,
      )
    : String(input.categories || "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
        .slice(0, 20);
  const images = Array.isArray(input.images)
    ? input.images
        .filter(
          (image): image is Record<string, unknown> => Boolean(image) && typeof image === "object",
        )
        .map((image) => ({
          src: isBlogImageUrl(image.src) ? image.src : "",
          alt: String(image.alt || "")
            .trim()
            .slice(0, 240),
        }))
        .filter((image) => image.src)
        .slice(0, 30)
    : [];

  if (!title) throw Object.assign(new Error("El título es obligatorio."), { status: 400 });
  if (!slug) throw Object.assign(new Error("El slug no es válido."), { status: 400 });
  if (input.coverImage && !isBlogImageUrl(input.coverImage)) {
    throw Object.assign(new Error("La portada debe ser una imagen subida al blog."), {
      status: 400,
    });
  }

  return {
    slug,
    title,
    icon: String(input.icon || "fa-newspaper")
      .replace(/[^a-z0-9-]/gi, "")
      .slice(0, 60),
    summary: String(input.summary || "")
      .trim()
      .slice(0, 500),
    introTitle: String(input.introTitle || "")
      .trim()
      .slice(0, 180),
    intro: String(input.intro || "")
      .trim()
      .slice(0, 5000),
    sectionTitle: String(input.sectionTitle || "")
      .trim()
      .slice(0, 180),
    body: sanitizeBlogHtml(input.body),
    date: String(input.date || "")
      .trim()
      .slice(0, 40),
    categories,
    coverImage: isBlogImageUrl(input.coverImage) ? input.coverImage : "",
    images,
    published: Boolean(input.published),
  };
}

export function blogImageUrls(post: Record<string, any>) {
  const urls = new Set<string>();
  if (isBlogImageUrl(post.coverImage)) urls.add(post.coverImage);
  (Array.isArray(post.images) ? post.images : []).forEach((image: any) => {
    if (isBlogImageUrl(image?.src)) urls.add(image.src);
  });
  for (const match of String(post.body || "").matchAll(/\/api\/blog\/images\/[a-f\d]{24}/gi)) {
    urls.add(match[0]);
  }
  return [...urls];
}
