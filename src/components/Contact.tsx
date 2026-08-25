function Contact() {
  return (
    <section
      id="contact"
      className="section section-dark"
    >
      <div className="container contact-container">
        <div className="section-heading contact-heading">
          <p className="eyebrow">
            CONTACT
          </p>

          <h2>
            Let's build something together.
          </h2>

          <p>
            Have an idea, project or opportunity?
            Feel free to get in touch.
          </p>
        </div>

        <div className="contact-buttons">
          <a
            href="mailto:alex@example.com"
            className="button primary-button"
          >
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary-button"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary-button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
