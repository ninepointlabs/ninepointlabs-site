(function () {
  // Theme: system / light / dark, remembered in localStorage.
  var key = "npl-theme-mode";
  var modes = ["system", "light", "dark"];
  var prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function savedMode() {
    try {
      var m = localStorage.getItem(key);
      if (m && modes.indexOf(m) !== -1) return m;
    } catch (e) {}
    return "system";
  }

  function resolve(mode) {
    return mode === "system" ? (prefersDark.matches ? "dark" : "light") : mode;
  }

  function apply(mode) {
    var theme = resolve(mode);
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-theme-mode", mode);
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      var label = mode === "system" ? "Auto" : mode.charAt(0).toUpperCase() + mode.slice(1);
      btn.textContent = mode === "system" ? "\u25D0" : theme === "dark" ? "\u263D" : "\u2600";
      btn.setAttribute("aria-label", "Theme: " + label + ". Activate to switch between Auto, Light, and Dark.");
      btn.setAttribute("title", "Theme: " + label);
    }
  }

  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme-mode") || "system";
      var next = modes[(modes.indexOf(current) + 1) % modes.length];
      try {
        localStorage.setItem(key, next);
      } catch (e) {}
      apply(next);
    });
  }

  prefersDark.addEventListener("change", function () {
    if ((document.documentElement.getAttribute("data-theme-mode") || "system") === "system") apply("system");
  });

  apply(savedMode());

  // Mobile menu.
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var navPanel = document.querySelector("[data-nav-panel]");
  if (menuToggle && navPanel) {
    menuToggle.addEventListener("click", function () {
      var open = navPanel.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    navPanel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navPanel.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active nav link.
  var page = window.location.pathname.replace(/\/+$/, "").split("/").pop() || "index.html";
  document.querySelectorAll("[data-page]").forEach(function (a) {
    if (a.getAttribute("data-page") === page) {
      a.classList.add("is-active");
      a.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
