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
      themeToggle.setAttribute("aria-pressed", night ? "true" : "false");
      themeToggle.replaceChildren();
      var label = document.createElement("span");
      label.textContent = night ? "Night theme" : "Day theme";
      var hint = document.createElement("span");
      hint.className = "visually-hidden";
      hint.textContent = night
        ? ", on. Press to switch to day theme."
        : ", on. Press to switch to night theme.";
      themeToggle.append(label, hint);
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", night ? "#0e1a2b" : "#e6eef7");
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

  var hops = document.querySelectorAll("[data-hop]");
  var token = document.getElementById("traceToken");
  var rail = document.querySelector(".trace-rail");
  var playBtn = document.getElementById("tracePlay");
  var status = document.getElementById("trace-status");
  var hopIndex = 0;
  var playTimer = null;
  var playing = false;

  function placeToken(index) {
    if (!token || !rail || !hops[index]) return;
    var railBox = rail.getBoundingClientRect();
    var hopBox = hops[index].getBoundingClientRect();
    var y = hopBox.top + hopBox.height / 2 - railBox.top;
    token.style.top = y + "px";
  }

  function setPlayLabel() {
    if (!playBtn) return;
    if (playing) {
      playBtn.textContent = "Stop";
      return;
    }
    playBtn.textContent = reduced() ? "Next hop" : "Play the request";
  }

  function selectHop(index, announce) {
    hopIndex = index;
    hops.forEach(function (hop, i) {
      var on = i === index;
      hop.setAttribute("aria-checked", on ? "true" : "false");
      hop.tabIndex = on ? 0 : -1;
    });
    placeToken(index);
    if (announce && status) {
      var name = hops[index].querySelector(".hop-name");
      var text = document.getElementById(hops[index].getAttribute("aria-describedby"));
      status.textContent = (name ? name.textContent : "Stop") + ". " + (text ? text.textContent : "");
    }
  }

  function stopPlay() {
    playing = false;
    if (playTimer) {
      clearTimeout(playTimer);
      playTimer = null;
    }
    setPlayLabel();
  }

  hops.forEach(function (hop, index) {
    hop.addEventListener("click", function () {
      stopPlay();
      selectHop(index, true);
    });
    hop.addEventListener("keydown", function (event) {
      var next = null;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % hops.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + hops.length - 1) % hops.length;
      if (next === null) return;
      event.preventDefault();
      stopPlay();
      selectHop(next, true);
      hops[next].focus();
    });
  });

  if (playBtn) {
    setPlayLabel();
    playBtn.addEventListener("click", function () {
      if (playing) {
        stopPlay();
        return;
      }
      if (reduced()) {
        selectHop((hopIndex + 1) % hops.length, true);
        return;
      }
      playing = true;
      setPlayLabel();
      var step = 0;
      function advance() {
        selectHop(step, true);
        step += 1;
        if (step < hops.length) {
          playTimer = setTimeout(advance, 900);
        } else {
          playing = false;
          playTimer = null;
          setPlayLabel();
        }
      }
      advance();
    });
  }

  function syncToken() {
    placeToken(hopIndex);
  }
  window.addEventListener("resize", syncToken);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(syncToken);
  }
  syncToken();
})();
