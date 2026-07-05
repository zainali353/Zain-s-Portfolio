(function () {
  const markup = `
    <section class="section" id="services">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Services</span>
          <h2>Development services offered.</h2>
        </div>
      </div>
      <div class="grid grid-3">
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-layer-group"></i></div><h3>Full Stack Web Development</h3><p>End-to-end web applications with frontend, backend, database, and deployment-ready structure.</p></article>
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-mobile-screen"></i></div><h3>Responsive Website Development</h3><p>Layouts that feel polished across desktop, tablet, and mobile screens.</p></article>
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-server"></i></div><h3>REST API Development</h3><p>Structured Express APIs with validation, clear routes, and future database integration.</p></article>
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-database"></i></div><h3>Database Design</h3><p>Clean schema planning for MongoDB-backed applications and scalable data flows.</p></article>
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-brands fa-react"></i></div><h3>Frontend Development</h3><p>Modern interfaces with accessible components, animation, and conversion-focused details.</p></article>
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-gears"></i></div><h3>Backend Development</h3><p>Node.js and Express foundations ready for authentication, email, and production expansion.</p></article>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.services = markup;
})();
