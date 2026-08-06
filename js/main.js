(function () {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");
  const servicesDropdown = document.querySelector("[data-services-dropdown]");

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

  if (path.includes("/services/") || pageName === "static-websites.html" || pageName === "windows-hardening.html" || pageName === "machine-restoration.html") {
    const servicesSummary = document.querySelector("[data-nav-group='services']");
    if (servicesSummary) {
      servicesSummary.classList.add("is-active");
    }
  }

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
