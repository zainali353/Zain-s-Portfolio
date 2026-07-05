(function () {
  const markup = `
    <section class="section" id="skills">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Skills</span>
          <h2>Core frontend technologies and product-focused foundations.</h2>
        </div>
        <p>Animated glass cards keep the frontend stack scannable while leaving space to grow as new tools are added.</p>
      </div>
      <div class="grid grid-3">
        <article class="glass skill-card reveal">
          <header><i class="fa-solid fa-terminal"></i><h3>Programming Languages</h3></header>
          <div class="skill-list">
            <span class="tag">JavaScript</span><span class="tag">TypeScript</span><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">Python</span><span class="tag">SQL</span>
          </div>
        </article>
        <article class="glass skill-card reveal">
          <header><i class="fa-solid fa-globe"></i><h3>Web Technologies</h3></header>
          <div class="skill-list">
            <span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">React.js</span><span class="tag">Tailwind CSS</span><span class="tag">Vite</span><span class="tag">Responsive UI</span>
          </div>
        </article>
        <article class="glass skill-card reveal">
          <header><i class="fa-solid fa-screwdriver-wrench"></i><h3>Other Skills</h3></header>
          <div class="skill-list">
            <span class="tag">Frontend Development</span><span class="tag">Git & GitHub</span><span class="tag">UI/UX</span><span class="tag">Accessibility</span><span class="tag">Problem Solving</span>
          </div>
        </article>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.skills = markup;
})();
