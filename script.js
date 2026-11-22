(function () {
  var doc = document.documentElement;
  var menuBtn = document.getElementById("menuBtn");
  var themeToggle = document.getElementById("themeToggle");
  var main = document.getElementById("main");
  var footer = document.querySelector(".site-footer");
  var navLinks = document.querySelectorAll("#primary-nav a");
  var sections = document.querySelectorAll("main section[id]");

  doc.classList.add("js");

  function reduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function applyTheme(theme) {
    var night = theme !== "light";
    var next = night ? "dark" : "light";
    doc.setAttribute("data-theme", next);
    if (themeToggle) {
      themeToggle.textContent = night ? "Night on" : "Day on";
      themeToggle.setAttribute(
        "aria-label",
        night
          ? "Night colors are on. Switch to day colors."
          : "Day colors are on. Switch to night colors."
      );
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", night ? "#10141c" : "#e4eadc");
  }

  applyTheme(doc.getAttribute("data-theme") === "light" ? "light" : "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = doc.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("emad-theme", next);
      } catch (err) {}
      applyTheme(next);
    });
  }

  function menuIsOpen() {
    return doc.classList.contains("menu-open");
  }

  function visibleFocusable() {
    return Array.prototype.filter.call(
      document.querySelectorAll(".site-header a, .site-header button"),
      function (el) {
        return el.getClientRects().length > 0;
      }
    );
  }

  function setInert(on) {
    if (main) main.inert = on;
    if (footer) footer.inert = on;
  }

  function closeMenu(restoreFocus) {
    doc.classList.remove("menu-open");
    document.body.style.overflow = "";
    setInert(false);
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
      menuBtn.setAttribute("aria-label", "Open menu");
      if (restoreFocus) menuBtn.focus();
    }
  }

  function openMenu() {
    doc.classList.add("menu-open");
    document.body.style.overflow = "hidden";
    setInert(true);
    if (menuBtn) {
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.textContent = "Close";
      menuBtn.setAttribute("aria-label", "Close menu");
    }
    var items = visibleFocusable();
    var firstLink = document.querySelector("#primary-nav a");
    if (firstLink && firstLink.getClientRects().length) firstLink.focus();
    else if (items[0]) items[0].focus();
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      if (menuIsOpen()) closeMenu(true);
      else openMenu();
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!menuIsOpen()) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }
    if (event.key !== "Tab") return;
    var items = visibleFocusable();
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 800 && menuIsOpen()) closeMenu(false);
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      var id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      if (menuIsOpen()) closeMenu(false);
      target.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
      if (target === main) {
        if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
        main.focus({ preventScroll: true });
      }
      if (history.replaceState) history.replaceState(null, "", id);
    });
  });

  function markCurrent() {
    var line = 120;
    var current = "top";
    var atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      current = sections[sections.length - 1].id;
    } else {
      sections.forEach(function (section) {
        var box = section.getBoundingClientRect();
        if (box.top <= line && box.bottom > line) current = section.id;
      });
    }
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + current) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  window.addEventListener("scroll", markCurrent, { passive: true });
  markCurrent();
})();
