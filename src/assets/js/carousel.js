// Quote carousel. Keyboard, click and swipe accessible.
// No auto rotate, by design. WCAG SC 2.2.2.

(function () {
  "use strict";

  const carousels = document.querySelectorAll("[data-carousel]");
  carousels.forEach((root) => {
    const track = root.querySelector("[data-carousel-track]");
    const slides = Array.from(root.querySelectorAll(".carousel__slide"));
    const dots = Array.from(root.querySelectorAll(".carousel__dot"));
    const prev = root.querySelector("[data-carousel-prev]");
    const next = root.querySelector("[data-carousel-next]");
    if (!track || slides.length < 2) {
      // Hide controls if only one slide
      const controls = root.querySelector(".carousel__controls");
      if (controls) controls.style.display = "none";
      return;
    }

    let index = 0;

    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
      dots.forEach((d, n) => {
        d.classList.toggle("is-active", n === index);
        d.setAttribute("aria-selected", n === index ? "true" : "false");
      });
    }

    prev && prev.addEventListener("click", () => go(index - 1));
    next && next.addEventListener("click", () => go(index + 1));

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const target = parseInt(dot.dataset.carouselGo, 10);
        if (!Number.isNaN(target)) go(target);
      });
    });

    // Keyboard, only within the carousel root
    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(index + 1);
      }
    });

    // Touch swipe
    let startX = null;
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        go(index + (dx < 0 ? 1 : -1));
      }
      startX = null;
    });

    // Make the root focusable so keyboard users can land on it
    if (!root.hasAttribute("tabindex")) root.setAttribute("tabindex", "0");

    go(0);
  });
})();
