/** True for links that navigate (resume PDF, GitHub, etc.) instead of smooth-scrolling. */
export function isExternalHref(href) {
  return !href.startsWith("#");
}
