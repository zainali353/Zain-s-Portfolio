(function () {
  const markup = `
    <nav class="nav" aria-label="Primary navigation">
      <div class="nav-inner">
        <a class="brand" href="#home" aria-label="Go to home">
          <span class="brand-mark">Z</span>
          <span>Your Name</span>
        </a>
        <div class="nav-links" id="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="nav-actions">
          <button class="icon-btn" id="themeToggle" type="button" aria-label="Toggle light mode"><i class="fa-solid fa-moon"></i></button>
          <button class="menu-btn" id="menuBtn" type="button" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button>
        </div>
      </div>
    </nav>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.nav = markup;
})();
