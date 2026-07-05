(function () {
  const markup = `
    <section class="section" id="certifications">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Certifications</span>
          <h2>Credential space.</h2>
        </div>
      </div>
      <div class="grid grid-3">
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-certificate"></i></div><h3>Certificate Placeholder</h3><p>Certificates will be added here.</p></article>
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-award"></i></div><h3>Certificate Placeholder</h3><p>Certificates will be added here.</p></article>
        <article class="glass card reveal"><div class="icon-badge"><i class="fa-solid fa-medal"></i></div><h3>Certificate Placeholder</h3><p>Certificates will be added here.</p></article>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.certifications = markup;
})();
