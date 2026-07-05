(function () {
  const markup = `
    <section class="section" id="education">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Education</span>
          <h2>Academic timeline.</h2>
        </div>
      </div>
      <div class="timeline reveal">
        <article class="glass timeline-item">
          <h3>COMSATS University Islamabad</h3>
          <span class="status">Currently Pursuing</span>
          <p>Bachelor of Computer Science with a focus on software development, programming fundamentals, database systems, and practical project building.</p>
        </article>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.education = markup;
})();
