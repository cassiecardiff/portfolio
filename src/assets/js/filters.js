// Progressive enhancement for case study filtering.
// If JS is disabled, every card is visible (default state). With JS,
// users can press chips to filter by tag. Multi-select with AND across
// groups (sector AND method) and OR within a group (charity OR public).

(function () {
  "use strict";

  const form = document.querySelector("[data-filter-form]");
  if (!form) return;

  const cards = Array.from(document.querySelectorAll(".case-card"));
  const chips = Array.from(form.querySelectorAll("[data-filter]"));
  const clearBtn = form.querySelector("[data-filter-clear]");
  const grid = document.querySelector("[data-card-grid]");
  let noResults = document.querySelector(".no-results");
  if (!noResults && grid) {
    noResults = document.createElement("p");
    noResults.className = "no-results";
    noResults.setAttribute("role", "status");
    noResults.setAttribute("aria-live", "polite");
    noResults.textContent = "No case studies match those filters. Try removing one.";
    grid.parentNode.insertBefore(noResults, grid.nextSibling);
  }

  function getActiveByGroup() {
    const active = {};
    chips.forEach((chip) => {
      if (chip.getAttribute("aria-pressed") === "true") {
        const group = chip.dataset.group;
        active[group] = active[group] || [];
        active[group].push(chip.dataset.tag);
      }
    });
    return active;
  }

  function applyFilters() {
    const active = getActiveByGroup();
    const groups = Object.keys(active);
    let visibleCount = 0;

    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(",").map((t) => t.trim());
      const matches = groups.every((group) =>
        active[group].some((tag) => tags.includes(tag))
      );
      if (matches) {
        card.hidden = false;
        visibleCount++;
      } else {
        card.hidden = true;
      }
    });

    if (noResults) {
      noResults.classList.toggle("is-visible", visibleCount === 0);
    }

    if (clearBtn) {
      clearBtn.hidden = groups.length === 0;
    }
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const pressed = chip.getAttribute("aria-pressed") === "true";
      chip.setAttribute("aria-pressed", String(!pressed));
      applyFilters();
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", (e) => {
      e.preventDefault();
      chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
      applyFilters();
    });
  }
})();
