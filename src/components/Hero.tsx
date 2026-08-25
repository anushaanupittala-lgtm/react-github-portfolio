
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="eyebrow">
            HELLO, I'M ALEX
          </p>

          <h1>
            Full-Stack
            <span> Developer.</span>
          </h1>

          <p className="hero-description">
            I build modern, scalable and user-friendly
            web applications using React, TypeScript
            and modern backend technologies.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="button primary-button"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="button secondary-button"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <img
              src="./profile.svg"
              alt="Developer profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
