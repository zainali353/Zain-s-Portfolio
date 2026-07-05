(function () {
  const markup = `
    <section class="section" id="about">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">About Me</span>
          <h2>CS student building useful frontend experiences with a product mindset.</h2>
        </div>
        <p>I enjoy frontend development, UI/UX, and learning modern tools that help turn ideas into accessible, polished interfaces.</p>
      </div>
      <div class="grid grid-2">
        <article class="glass card reveal">
          <div class="icon-badge"><i class="fa-solid fa-user-astronaut"></i></div>
          <h3>Professional Profile</h3>
          <p>Pursuing a Bachelor's degree in Computer Science from COMSATS University Islamabad with a strong interest in software engineering, frontend development, and user-centered design.</p>
          <div class="about-list">
            <span><i class="fa-solid fa-check"></i>Problem-solving mindset</span>
            <span><i class="fa-solid fa-check"></i>Quick learner</span>
            <span><i class="fa-solid fa-check"></i>Team player</span>
            <span><i class="fa-solid fa-check"></i>Modern UI practices</span>
          </div>
        </article>
        <article class="glass card reveal">
          <div class="icon-badge"><i class="fa-solid fa-code-branch"></i></div>
          <h3>Current Focus</h3>
          <p>Building personal and academic projects while expanding expertise in React, responsive UI, component-based architecture, and accessible web experiences.</p>
          <div class="tool-row">
            <span class="tag">Frontend</span>
            <span class="tag">UI/UX</span>
            <span class="tag">Responsive Design</span>
            <span class="tag">Accessibility</span>
          </div>
        </article>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.about = markup;
})();
