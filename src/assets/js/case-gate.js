// Client-side password gate for case study pages.
//
// To change the password later:
// 1. Open Terminal and run:  echo -n "your-new-password" | shasum -a 256
// 2. Replace PASSWORD_HASH below with the hex string it prints (no trailing dashes).
// 3. Commit and push.

(function () {
  "use strict";

  const STORAGE_KEY = "case-study-unlocked";
  const PASSWORD_HASH = "318456e6b514309c407799b73381b28129a60103e6740c91582dddb5cea72699";

  // Only run on a case study page (URLs like /work/amnesty/).
  const path = window.location.pathname;
  if (!/^\/work\/[^/]+\/?$/.test(path)) return;

  const article = document.querySelector(".case-study");
  if (!article) return;

  // Already unlocked this session?
  try {
    if (sessionStorage.getItem(STORAGE_KEY) === "yes") return;
  } catch (e) {}

  // Hide the content until unlocked
  article.style.visibility = "hidden";

  async function sha256(text) {
    const buf = new TextEncoder().encode(text);
    const hash = await crypto.subtle.digest("SHA-256", buf);
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const overlay = document.createElement("div");
  overlay.className = "gate-overlay";
  // Inline styles act as a safety net in case the CSS hasn't loaded yet
  // or has been cached. The full styling comes from components.css.
  overlay.style.cssText =
    "position:fixed;inset:0;background:#f4efe6;z-index:1000;" +
    "display:flex;align-items:center;justify-content:center;" +
    "padding:1.5rem;overflow-y:auto;";
  overlay.innerHTML = `
    <form class="gate-form" aria-labelledby="gate-title">
      <span class="eyebrow">Protected</span>
      <h1 id="gate-title">Case study access</h1>
      <p>Enter the password to view this case study. Email me if you'd like access.</p>
      <label class="sr-only" for="gate-password">Password</label>
      <input type="password" id="gate-password" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" required>
      <button type="submit">Unlock</button>
      <p class="gate-error" role="alert" hidden>That wasn't right. Try again.</p>
      <p class="gate-back"><a href="/work/">&larr; Back to work</a></p>
    </form>
  `;
  document.body.appendChild(overlay);

  const form = overlay.querySelector(".gate-form");
  const input = overlay.querySelector("#gate-password");
  const error = overlay.querySelector(".gate-error");

  input.focus();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    error.hidden = true;
    const hash = await sha256(input.value.trim());
    if (hash === PASSWORD_HASH) {
      try { sessionStorage.setItem(STORAGE_KEY, "yes"); } catch (e) {}
      overlay.remove();
      article.style.visibility = "";
    } else {
      error.hidden = false;
      input.value = "";
      input.focus();
    }
  });
})();
