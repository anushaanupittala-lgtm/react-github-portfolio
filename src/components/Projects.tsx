type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Task Management Platform",
    description:
      "A responsive task management application for organizing projects, tasks and priorities.",
    technologies: [
      "React",
      "TypeScript",
      "REST API",
    ],
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "A modern dashboard for presenting business metrics and data through a clean interface.",
    technologies: [
      "React",
      "TypeScript",
      "Charts",
    ],
  },
  {
    id: 3,
    title: "E-Commerce Application",
    description:
      "A responsive shopping interface with product browsing, filtering and modern UI patterns.",
    technologies: [
      "React",
      "CSS",
      "Responsive UI",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">
            PROJECTS
          </p>

          <h2>
            Some things I've built.
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >
              <span className="project-number">
                0{project.id}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="technology-list">
                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
