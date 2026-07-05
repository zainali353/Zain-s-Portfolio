(function () {
  const markup = `
    <section class="section" id="contact">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Contact</span>
          <h2>Let us build something sharp.</h2>
        </div>
        <p>The form includes front-end validation and is ready to connect to EmailJS, Nodemailer, or an Express contact API.</p>
      </div>
      <div class="contact-wrap">
        <form class="glass card reveal" id="contactForm" novalidate>
          <div class="form-grid">
            <div class="field"><label for="name">Full Name</label><input id="name" name="name" type="text" placeholder="Your name" required /></div>
            <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" placeholder="your@email.com" required /></div>
            <div class="field full"><label for="subject">Subject</label><input id="subject" name="subject" type="text" placeholder="Project inquiry" required /></div>
            <div class="field full"><label for="message">Message</label><textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea></div>
          </div>
          <div class="form-actions">
            <button class="btn btn-primary" type="submit"><i class="fa-solid fa-paper-plane"></i>Send Message</button>
            <span class="notice" id="formNotice" role="status"></span>
          </div>
        </form>
        <aside class="glass card reveal">
          <h3>Contact Information</h3>
          <p>Use placeholder links now and replace them with real profiles when you are ready.</p>
          <div class="contact-links" style="margin-top: 18px;">
            <a href="mailto:your@email.com"><i class="fa-solid fa-envelope"></i>your@email.com</a>
            <a href="tel:+92XXXXXXXXXX"><i class="fa-solid fa-phone"></i>+92 XXX XXXXXXX</a>
            <a href="https://wa.me/92XXXXXXXXXX"><i class="fa-brands fa-whatsapp"></i>WhatsApp</a>
            <a href="https://linkedin.com/in/yourprofile"><i class="fa-brands fa-linkedin"></i>LinkedIn</a>
            <a href="https://github.com/yourusername"><i class="fa-brands fa-github"></i>GitHub</a>
            <a href="https://instagram.com/yourusername"><i class="fa-brands fa-instagram"></i>Instagram</a>
            <a href="https://facebook.com/yourusername"><i class="fa-brands fa-facebook"></i>Facebook</a>
            <a href="https://x.com/yourusername"><i class="fa-brands fa-x-twitter"></i>X Twitter</a>
          </div>
        </aside>
      </div>
    </section>
  `;

  window.portfolioComponents = window.portfolioComponents || {};
  window.portfolioComponents.contact = markup;
})();
