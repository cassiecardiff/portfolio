// Mobile hamburger menu. Honours Escape to close and traps focus on the toggle.

(function () {
  "use strict";

  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.setAttribute("data-open", String(open));
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  // Close on Escape and return focus to the toggle
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Close when the user follows a nav link
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });
})();
