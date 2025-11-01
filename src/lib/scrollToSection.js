export function scrollToSection(id, offset) {
  const el = document.getElementById(id);
  if (!el) return;
  // Determine dynamic offset using current nav height when available
  const nav = document.querySelector("nav");
  const dynamicOffset =
    typeof offset === "number"
      ? offset
      : nav?.offsetHeight
      ? nav.offsetHeight
      : 0;
  const y = el.getBoundingClientRect().top + window.pageYOffset - dynamicOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
