/**
 * Theme, mobile menu, in-page navigation.
 * Motion is the menu panel only, and it is disabled when reduced motion is requested.
 */
(function () {
  const doc = document.documentElement;
  const menuBtn = document.getElementById("menuBtn");
  const menuLabel = document.getElementById("menuLabel");
  const panel = document.getElementById("mast-panel");
  const themeToggle = document.getElementById("themeToggle");
  const themeState = document.getElementById("themeState");
  const themeColor = document.getElementById("themeColor");
  const main = document.getElementById("main");
  const mobileQuery = window.matchMedia("(max-width: 959px)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function applyTheme(theme, persist) {
    doc.setAttribute("data-theme", theme);
    if (persist) {
      try { localStorage.setItem("emad-theme", theme); } catch (e) {}
    }
    const dark = theme === "dark";
    if (themeToggle) themeToggle.setAttribute("aria-checked", String(dark));
    if (themeState) themeState.textContent = dark ? "On" : "Off";
    if (themeColor) themeColor.setAttribute("content", dark ? "#13160e" : "#e7e6d4");
  }

  applyTheme(doc.getAttribute("data-theme") === "dark" ? "dark" : "light", false);

  themeToggle?.addEventListener("click", () => {
    const next = doc.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next, true);
  });

  function setMenu(open) {
    if (!panel || !menuBtn) return;
    const mobile = mobileQuery.matches;
    panel.classList.toggle("is-open", open && mobile);
    menuBtn.setAttribute("aria-expanded", String(open && mobile));
    if (menuLabel) menuLabel.textContent = open && mobile ? "Close" : "Menu";
    document.body.classList.toggle("menu-open", open && mobile);
    if (open && mobile) {
      const first = panel.querySelector("a, button");
      first?.focus();
    }
  }

  menuBtn?.addEventListener("click", () => {
    setMenu(!panel.classList.contains("is-open"));
  });

  panel?.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link && mobileQuery.matches) setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (!panel?.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      setMenu(false);
      menuBtn?.focus();
      return;
    }
    if (event.key !== "Tab") return;
    const items = [menuBtn, ...panel.querySelectorAll("a, button")].filter(Boolean);
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  mobileQuery.addEventListener("change", () => {
    if (!mobileQuery.matches) setMenu(false);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      const focusTarget = target.id === "main"
        ? target
        : (target.querySelector("h1, h2, h3") || target);
      if (focusTarget.tabIndex < 0) focusTarget.tabIndex = -1;
      focusTarget.focus({ preventScroll: true });
      const bar = mobileQuery.matches ? 64 : 16;
      const top = target.getBoundingClientRect().top + window.scrollY - bar;
      window.scrollTo({ top, behavior: reduceMotion.matches ? "auto" : "smooth" });
    });
  });

  const sections = [...document.querySelectorAll("main > section.band")];
  const navLinks = [...document.querySelectorAll(".site-nav a")];

  function markCurrent() {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    let current = "";
    if (nearBottom && sections.length) {
      current = sections[sections.length - 1].id;
    } else {
      const marker = window.innerHeight * 0.3;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      });
    }
    navLinks.forEach((link) => {
      const on = link.getAttribute("href") === `#${current}`;
      if (on) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", markCurrent, { passive: true });
  markCurrent();
})();
