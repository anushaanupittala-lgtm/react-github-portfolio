const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "REST APIs",
  "Git",
  "GitHub",
  "SQL",
  "Responsive Design",
  "Testing",
];

function Skills() {
  return (
    <section
      id="skills"
      className="section section-dark"
    >
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">
            SKILLS
          </p>

          <h2>
            Technologies I work with.
          </h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              className="skill-card"
              key={skill}
            >
              <span className="skill-icon">
                &lt;/&gt;
              </span>

              <span className="skill-name">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
