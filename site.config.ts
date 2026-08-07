/**
 * Everything that legitimately differs between the English and the Traditional
 * Chinese edition of the blog. Every other file under bin/, model/, util/ and
 * scripts/ is byte-identical across the two repositories — keep it that way and
 * add new per-language values here instead.
 */
export const siteConfig = {
  /** The other edition, linked from each post and from the hreflang tags. */
  otherLanguage: {
    lang: "zh-TW",
    text: "繁體中文版",
    baseUrl: "https://andy23512.github.io/blog-zh-tw/",
  },
  /** HackMD image URLs are rewritten to this path when a note is imported. */
  imageBasePath: "/blog/images/",
  /** Category values used by this edition's sheet of the note table. */
  noteCategories: ["Note", "Article"],
  /** Label for a spoiler block that carries no title of its own. */
  spoilerFallbackTitle: "Show Detail",
  /**
   * Site-wide Open Graph image. The JPG is rendered by `yarn og` and committed;
   * `url` is what the meta tags point at. See bin/generate-og-image.ts.
   */
  ogImage: {
    url: "https://andy23512.github.io/blog/images/og-image.jpg",
    kicker: "TANGENT CHANG · 🐰📐",
    title: "Tangent's Blog",
    titleSize: 92,
    subtitle: ["Unofficial CharaChorder & Forge", "articles and notes"],
    footer: "andy23512.github.io/blog",
  },
};
