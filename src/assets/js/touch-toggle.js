// Touch-device hover toggles.
// Elements marked with [data-touch-toggle] get an `is-touch-active` class
// on the first tap; tapping the same element again removes it (reversing the
// visual effect). Tapping anywhere outside clears all active states.
//
// Elements that share [data-touch-toggle-group] are treated as a set: activating
// one deactivates the others (useful for the logo band where you only want one
// logo revealed at a time).
//
// Hover-capable devices (mouse, trackpad) skip the whole mechanism — they get
// native :hover behaviour via the @media (hover: hover) CSS rules instead.

(function () {
  "use strict";

  // Bail out on devices that can actually hover (desktop mouse/trackpad).
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const toggles = Array.from(document.querySelectorAll("[data-touch-toggle]"));
  if (!toggles.length) return;

  function deactivate(el) {
    el.classList.remove("is-touch-active");
  }

  function activate(el) {
    el.classList.add("is-touch-active");
  }

  toggles.forEach((el) => {
    el.addEventListener("pointerup", (e) => {
      // Only fire for actual touch input, not mouse clicks.
      if (e.pointerType !== "touch") return;
      e.stopPropagation();

      const isActive = el.classList.contains("is-touch-active");

      // Deactivate any siblings in the same exclusive group first.
      const group = el.dataset.touchToggleGroup;
      if (group) {
        document
          .querySelectorAll(`[data-touch-toggle-group="${group}"]`)
          .forEach(deactivate);
      }

      // Toggle: second tap on the same element reverses the action.
      if (isActive) {
        deactivate(el);
      } else {
        activate(el);
      }
    });
  });

  // Tapping anywhere outside a toggle element clears all active states.
  document.addEventListener("pointerup", (e) => {
    if (e.pointerType !== "touch") return;
    if (!e.target.closest("[data-touch-toggle]")) {
      toggles.forEach(deactivate);
    }
  });
})();
