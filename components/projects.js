(function () {
  const markup = `
    <section class="section" id="projects">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Projects</span>
          <h2>Frontend projects shaping a strong portfolio.</h2>
        </div>
        <p>Replace each placeholder with screenshots, deployment links, repository URLs, and measurable outcomes.</p>
      </div>
      <div class="grid grid-3">
        <article class="glass card reveal project-card"><div class="project-media"><div class="project-window"></div></div><h3>Frontend Project 01</h3><p>Project details and deployment links will be added later.</p><div class="tool-row"><span class="tag">React</span><span class="tag">UI</span><span class="tag">CSS</span></div><div class="card-actions"><a class="btn btn-ghost" href="#"><i class="fa-brands fa-github"></i>GitHub</a><a class="btn btn-primary" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo</a></div></article>
        <article class="glass card reveal project-card"><div class="project-media"><div class="project-window"></div></div><h3>Frontend Project 02</h3><p>Project details and deployment links will be added later.</p><div class="tool-row"><span class="tag">JavaScript</span><span class="tag">Animation</span><span class="tag">UX</span></div><div class="card-actions"><a class="btn btn-ghost" href="#"><i class="fa-brands fa-github"></i>GitHub</a><a class="btn btn-primary" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo</a></div></article>
        <article class="glass card reveal project-card"><div class="project-media"><div class="project-window"></div></div><h3>Frontend Project 03</h3><p>Project details and deployment links will be added later.</p><div class="tool-row"><span class="tag">Tailwind</span><span class="tag">Responsive</span><span class="tag">Design</span></div><div class="card-actions"><a class="btn btn-ghost" href="#"><i class="fa-brands fa-github"></i>GitHub</a><a class="btn btn-primary" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo</a></div></article>
        <article class="glass card reveal project-card"><div class="project-media"><div class="project-window"></div></div><h3>Frontend Project 04</h3><p>Project details and deployment links will be added later.</p><div class="tool-row"><span class="tag">React</span><span class="tag">State</span><span class="tag">UI</span></div><div class="card-actions"><a class="btn btn-ghost" href="#"><i class="fa-brands fa-github"></i>GitHub</a><a class="btn btn-primary" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo</a></div></article>
        <article class="glass card reveal project-card"><div class="project-media"><div class="project-window"></div></div><h3>Frontend Project 05</h3><p>Project details and deployment links will be added later.</p><div class="tool-row"><span class="tag">Forms</span><span class="tag">Validation</span><span class="tag">UX</span></div><div class="card-actions"><a class="btn btn-ghost" href="#"><i class="fa-brands fa-github"></i>GitHub</a><a class="btn btn-primary" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo</a></div></article>
        <article class="glass card reveal project-card"><div class="project-media"><div class="project-window"></div></div><h3>Frontend Project 06</h3><p>Project details and deployment links will be added later.</p><div class="tool-row"><span class="tag">Accessibility</span><span class="tag">SEO</span><span class="tag">Performance</span></div><div class="card-actions"><a class="btn btn-ghost" href="#"><i class="fa-brands fa-github"></i>GitHub</a><a class="btn btn-primary" href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i>Live Demo</a></div></article>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.projects = markup;
})();
