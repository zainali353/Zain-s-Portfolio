(function () {
  const markup = `
    <section class="section hero" id="home">
      <div class="hero-copy reveal">
        <span class="eyebrow">Portfolio free design inspired</span>
        <h1>Professional frontend portfolio <span class="gradient-text">for recruiters</span></h1>
        <div class="hero-title"><span class="type-text" id="typeText"></span></div>
        <p class="lead">Passionate Computer Science student pursuing a degree at COMSATS University Islamabad. I specialize in building polished frontend web experiences with React, JavaScript, HTML, and CSS while focusing on clean UI, accessibility, and smooth user journeys.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#projects"><i class="fa-solid fa-layer-group"></i>View Projects</a>
          <a class="btn btn-ghost" href="#" download><i class="fa-solid fa-download"></i>Download Resume</a>
        </div>
        <div class="tool-row" aria-label="Core technologies">
          <span class="tool-pill"><i class="fa-brands fa-react"></i>React</span>
          <span class="tool-pill"><i class="fa-brands fa-js"></i>JavaScript</span>
          <span class="tool-pill"><i class="fa-brands fa-html5"></i>HTML5</span>
          <span class="tool-pill"><i class="fa-brands fa-css3-alt"></i>CSS3</span>
        </div>
      </div>

      <div class="hero-stage reveal" aria-label="Decorative portfolio preview">
        <div class="tilt-panel profile-panel">
          <div class="mini-nav">
            <strong>{ }</strong>
            <span>Home</span>
            <span>About</span>
            <span>Lab</span>
          </div>
          <div class="avatar-wrap"><div class="avatar">YN</div></div>
          <div class="quote-card">
            <small>Hello, I am Your Name</small>
            <strong>Judged by clean interfaces, not covers.</strong>
          </div>
          <h2>I&apos;m a Frontend Developer.</h2>
          <p>A self-taught UI/UX learner and frontend developer focused on delightful digital products that balance visual polish, performance, and usability.</p>
        </div>
        <div class="tilt-panel orbit-card">
          <span class="eyebrow">Available for work</span>
          <h3>Currently looking to join a creative product team</h3>
          <div class="orbit"></div>
        </div>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.hero = markup;
})();
