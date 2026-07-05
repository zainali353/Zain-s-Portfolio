(function () {
  const markup = `
    <footer>
      <div class="footer-inner">
        <div>
          <strong>&copy; 2026 Your Name</strong>
          <div>Built using React, Node.js, Express, MongoDB, and modern web technologies.</div>
        </div>
        <div class="footer-socials" aria-label="Social links">
          <a class="icon-btn" href="https://github.com/yourusername" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a class="icon-btn" href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          <a class="icon-btn" href="https://x.com/yourusername" aria-label="X Twitter"><i class="fa-brands fa-x-twitter"></i></a>
        </div>
      </div>
    </footer>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.footer = markup;
})();
