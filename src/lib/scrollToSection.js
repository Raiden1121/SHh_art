export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  // 使用 scrollIntoView 配合 CSS scroll-margin-top
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
