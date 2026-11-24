/**
 * Emad Siddig — premium portfolio interactions
 */
(function () {
  const doc = document.documentElement;
  const header = document.getElementById("header");
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  const themeToggle = document.getElementById("themeToggle");
  const loader = document.getElementById("loader");
  const loaderBar = document.getElementById("loaderBar");
  const toTop = document.getElementById("toTop");
  const heroImg = document.getElementById("heroImg");
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

  // Mobile nav
  menuBtn?.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    menuBtn.setAttribute("aria-label", open ? "Open menu" : "Close menu");
    nav?.classList.toggle("is-open", !open);
  });

  nav?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuBtn?.setAttribute("aria-expanded", "false");
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
      const top = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  // Header state
  function onScroll() {
    const y = window.scrollY;
    header?.classList.toggle("is-solid", y > window.innerHeight * 0.65);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  // Loader + motion
  function finishLoader() {
    if (loaderBar) loaderBar.style.width = "100%";
    loader?.classList.add("is-done");
  }

  // Always clear loader even if motion setup fails
  window.setTimeout(finishLoader, 2200);

  function initMotion() {
    if (typeof gsap === "undefined") {
      finishLoader();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    if (reduceMotion) {
      finishLoader();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => finishLoader(),
    });

    tl.to(loaderBar, { width: "100%", duration: 0.7, ease: "power2.inOut" })
      .add(() => finishLoader())
      .from(".hero-img", { scale: 1.18, duration: 1.5, ease: "power3.out" }, "-=0.15")
      .from(
        ".hero-title .line span",
        { yPercent: 110, duration: 1.05, stagger: 0.12, ease: "power4.out" },
        "-=1.15"
      )
      .from(
        ".hero-kicker, .hero-lede, .hero-actions, .hero-meta, .scroll-cue",
        { y: 24, opacity: 0, duration: 0.75, stagger: 0.08, ease: "power3.out" },
        "-=0.65"
      );

    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 56,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    gsap.utils.toArray(".work-visual").forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotion);
  } else {
    initMotion();
  }
})();
