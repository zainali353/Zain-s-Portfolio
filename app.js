(function () {
  const app = document.getElementById("app");
  const loader = document.querySelector(".loader");
  const progress = document.querySelector(".progress");
  const backTop = document.getElementById("backTop");

  const components = [
    window.portfolioComponents.nav,
    window.portfolioComponents.hero,
    window.portfolioComponents.about,
    window.portfolioComponents.skills,
    window.portfolioComponents.education,
    window.portfolioComponents.projects,
    window.portfolioComponents.experience,
    window.portfolioComponents.certifications,
    window.portfolioComponents.services,
    window.portfolioComponents.contact,
    window.portfolioComponents.footer,
  ];

  app.innerHTML = `
    ${components[0]}
    <main>
      ${components[1]}
      ${components[2]}
      ${components[3]}
      ${components[4]}
      ${components[5]}
      ${components[6]}
      ${components[7]}
      ${components[8]}
      ${components[9]}
    </main>
    ${components[10]}
  `;

  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 450);
  });

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const themeToggle = document.getElementById("themeToggle");
  const typeText = document.getElementById("typeText");
  const roles = ["MERN Stack Developer", "Web Developer", "Aspiring Data Analyst"];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    typeText.textContent = current.slice(0, charIndex);

    if (!deleting && charIndex < current.length) {
      charIndex += 1;
      setTimeout(typeLoop, 72);
      return;
    }

    if (!deleting && charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(typeLoop, 38);
      return;
    }

    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeLoop, 220);
  }

  if (typeText) {
    typeLoop();
  }

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const open = navLinks.classList.contains("open");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menuBtn.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        navLinks.classList.remove("open");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const light = document.body.classList.contains("light-theme");
      themeToggle.setAttribute("aria-label", light ? "Toggle dark mode" : "Toggle light mode");
      themeToggle.innerHTML = light ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav-links a")];

  function updateScrollUi() {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${Math.min(100, (scrollTop / maxScroll) * 100)}%`;
    backTop.classList.toggle("show", scrollTop > 640);

    let current = sections[0].id;
    sections.forEach((section) => {
      if (scrollTop >= section.offsetTop - 160) current = section.id;
    });
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  }

  window.addEventListener("scroll", updateScrollUi, { passive: true });
  updateScrollUi();

  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const form = document.getElementById("contactForm");
  const notice = document.getElementById("formNotice");
  if (form && notice) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        notice.style.color = "#ff9acb";
        notice.textContent = "Please complete all fields with a valid email.";
        form.reportValidity();
        return;
      }
      notice.style.color = "var(--green)";
      notice.textContent = "Message ready. Connect EmailJS or your Express API next.";
      form.reset();
    });
  }
})();
