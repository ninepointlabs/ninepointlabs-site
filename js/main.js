(function () {
  const themeStorageKey = "npl-theme-mode";
  const themeModes = ["system", "light", "dark"];
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function getInitialThemeMode() {
    try {
      const savedMode = localStorage.getItem(themeStorageKey);
      if (savedMode && themeModes.includes(savedMode)) {
        return savedMode;
      }
    } catch (error) {
      // Ignore storage access issues and fall back to system mode.
    }
    return "system";
  }

  function resolveTheme(mode) {
    if (mode === "system") {
      return prefersDark.matches ? "dark" : "light";
    }
    return mode;
  }

  function saveThemeMode(mode) {
    try {
      localStorage.setItem(themeStorageKey, mode);
    } catch (error) {
      // Ignore storage write issues to keep theme switching functional for the session.
    }
  }

  function setThemeMode(mode) {
    const resolvedTheme = resolveTheme(mode);
    document.documentElement.setAttribute("data-theme", resolvedTheme);
    document.documentElement.setAttribute("data-theme-mode", mode);
    const themeToggle = document.querySelector("[data-theme-toggle]");
    if (themeToggle) {
      const modeLabel = mode === "system" ? "Auto" : mode.charAt(0).toUpperCase() + mode.slice(1);
      const icon = mode === "system" ? "◐" : resolvedTheme === "dark" ? "🌙" : "☀";
      themeToggle.textContent = icon;
      themeToggle.setAttribute(
        "aria-label",
        "Theme mode " + modeLabel + ". Activate to switch between Auto, Light, and Dark."
      );
      themeToggle.setAttribute("title", "Theme: " + modeLabel + " (switch mode)");
      themeToggle.setAttribute("data-theme-display", mode);
    }
  }

  function getNextThemeMode(currentMode) {
    const currentIndex = themeModes.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % themeModes.length;
    return themeModes[nextIndex];
  }

  function injectThemeToggle() {
    const headerInner = document.querySelector(".header-inner");
    if (!headerInner || headerInner.querySelector("[data-theme-toggle]")) {
      return;
    }

    const themeButton = document.createElement("button");
    themeButton.type = "button";
    themeButton.className = "theme-toggle";
    themeButton.setAttribute("data-theme-toggle", "");
    headerInner.appendChild(themeButton);

    themeButton.addEventListener("click", function () {
      const currentMode = document.documentElement.getAttribute("data-theme-mode") || "system";
      const nextMode = getNextThemeMode(currentMode);
      saveThemeMode(nextMode);
      setThemeMode(nextMode);
    });
  }

  const initialThemeMode = getInitialThemeMode();
  setThemeMode(initialThemeMode);

  prefersDark.addEventListener("change", function () {
    const currentMode = document.documentElement.getAttribute("data-theme-mode") || "system";
    if (currentMode === "system") {
      setThemeMode("system");
    }
  });

  injectThemeToggle();
  setThemeMode(initialThemeMode);

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");

  if (menuToggle && navPanel) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navPanel.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navPanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navPanel.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Set active nav item based on the current path.
  const path = window.location.pathname.replace(/\/+$/, "");
  const pageName = path.split("/").pop() || "index.html";

  document.querySelectorAll("[data-page]").forEach(function (link) {
    if (link.getAttribute("data-page") === pageName) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const groupPages = {
    services: ["static-websites.html", "linux-open-source.html"],
      projects: ["pleb-one.html", "omarchy.html"],
    explore: ["partners.html"],
  };

  Object.keys(groupPages).forEach(function (groupName) {
    const summary = document.querySelector("[data-nav-group='" + groupName + "']");
    if (!summary) {
      return;
    }

    if (groupPages[groupName].includes(pageName)) {
      summary.classList.add("is-active");
    }
  });

  document.querySelectorAll("[data-current-year]").forEach(function (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("a[href^='#']").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const id = anchor.getAttribute("href");
      if (!id || id.length < 2) {
        return;
      }

      const target = document.querySelector(id);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });
})();
