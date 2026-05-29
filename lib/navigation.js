/** True for absolute URLs (resume, GitHub, demos, etc.). */
export function isExternalHref(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}
