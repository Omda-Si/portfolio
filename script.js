/**
 * Emad Siddig — Agency dashboard portfolio
 */
(function () {
  const doc = document.documentElement;
  const sidebar = document.getElementById("sidebar");
  const menuBtn = document.getElementById("menuBtn");
  const backdrop = document.getElementById("backdrop");
  const themeToggle = document.getElementById("themeToggle");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Theme
  const stored = localStorage.getItem("emad-theme");
  const preferLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  setTheme(stored || (preferLight ? "light" : "dark"));

  function setTheme(theme) {
    doc.setAttribute("data-theme", theme);
    localStorage.setItem("emad-theme", theme);
    themeToggle?.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }

  themeToggle?.addEventListener("click", () => {
    setTheme(doc.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  // Mobile sidebar
  function openSidebar(open) {
    sidebar?.classList.toggle("is-open", open);
    menuBtn?.setAttribute("aria-expanded", String(open));
    menuBtn?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (backdrop) backdrop.hidden = !open;
  }

  menuBtn?.addEventListener("click", () => {
    openSidebar(!sidebar?.classList.contains("is-open"));
  });
  backdrop?.addEventListener("click", () => openSidebar(false));

  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1100) openSidebar(false);
    });
  });

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const offset = window.innerWidth < 1100 ? 72 : 16;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  // Active nav
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll("[data-nav]");
  function onScroll() {
    let current = "home";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 180) current = s.id;
    });
    navLinks.forEach((l) => {
      l.classList.toggle("is-active", l.getAttribute("href") === `#${current}`);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Services accordion
  document.querySelectorAll("[data-service]").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll("[data-service]").forEach((el) => {
        if (el !== item) el.classList.remove("is-open");
      });
      item.classList.toggle("is-open");
    });
  });

  // Skill bars on view
  const bars = document.querySelectorAll(".bar");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-on");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    bars.forEach((b) => io.observe(b));
  } else {
    bars.forEach((b) => b.classList.add("is-on"));
  }

  // Motion
  function initMotion() {
    if (typeof gsap === "undefined" || reduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-card", { opacity: 0, y: 28, duration: 0.8, ease: "power3.out" });
    gsap.from(".toolkit-card, .skills-strip, .services-card, .stats-card", {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.1,
      delay: 0.15,
      ease: "power3.out",
    });

    gsap.utils.toArray(".work-card, .about-card, .contact-only").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 88%" },
        opacity: 0,
        y: 36,
        duration: 0.7,
        ease: "power3.out",
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotion);
  } else {
    initMotion();
  }
})();
