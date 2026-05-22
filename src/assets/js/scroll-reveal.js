// Light scrollytelling: case study sections fade in as they enter view.
// Honours prefers-reduced-motion. Includes a user toggle persisted in localStorage.

(function () {
  "use strict";

  const STORAGE_KEY = "disable-scroll-reveal";
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 36rem)").matches;

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY) === "true"; } catch (e) { return false; }
  }
  function setStored(value) {
    try { localStorage.setItem(STORAGE_KEY, String(value)); } catch (e) {}
  }

  const initialDisabled = prefersReduced || isMobile || getStored();
  if (initialDisabled) document.body.classList.add("no-scroll-reveal");

  // Toggle button
  const toggle = document.querySelector("[data-toggle-reveal]");
  if (toggle) {
    const refresh = () => {
      const isDisabled = document.body.classList.contains("no-scroll-reveal");
      toggle.setAttribute("aria-pressed", isDisabled ? "true" : "false");
      toggle.textContent = isDisabled ? "Enable scroll animations" : "Disable scroll animations";
    };
    refresh();
    toggle.addEventListener("click", () => {
      const isDisabled = document.body.classList.toggle("no-scroll-reveal");
      setStored(isDisabled);
      refresh();
      if (!isDisabled) {
        // Reveal everything that's already on screen
        document.querySelectorAll(".reveal-on-scroll").forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) el.classList.add("is-visible");
        });
      }
    });
  }

  const targets = document.querySelectorAll(".reveal-on-scroll");
  if (targets.length === 0) return;

  if (initialDisabled || !("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(el => observer.observe(el));
})();
