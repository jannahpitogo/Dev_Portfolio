import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import projects from "../data/projects_tech.json";

export default function Work({activeCategory}) {
  const projectVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="work">
      <div className="work-header">
        <div>
          <h2 className="work-text">Selected Works</h2>
          <Link to="/projects" className="work-main_button">
            Playground {">"}
          </Link>
        </div>

        {activeCategory === "dev" ? (
          <p>A selection of web projects showcasing my development skills, technical problem-solving, and experience building functional digital experiences.</p>
        ) : (
          <p>A collection of creative projects showcasing my work in graphic design, video editing, 3D, and digital content.</p>
        )}
        
      </div>

      <motion.div
        className="work-projects"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        variants={{
          hidden: {},

          visible: {
            transition: {     
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projects.map((project, index) => {
          const title = project.title || project.project_title;
          const description = project.overview || project.description;
          const image = project.hero?.image || project.background || "images/premieredent.png";
          const tools = project.technologies || project.tools || [];
          const demoLink = project.demo || project.hero?.image || "#";

          return (
            <motion.div
              className="project-wrapper"
              key={project.slug || `${title}-${index}`}
              variants={projectVariants}
            >
              <div className="project">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={image}
                    alt={project.hero?.alt || title}
                    className="project-img"
                  />
                </a>

                <div className="project-content">
                  <h3 className="work-project-title">
                    {title}
                  </h3>

                  <p className="work-project-description">
                    {description}
                  </p>

                  <div className="techstack-container">
                    {tools.map((tech) => (
                      <span className="tech-button" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-button-container">
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-project-button"
                    >
                      Demo ↗
                    </a>

                    <Link to={`/${project.slug || "projects"}`} className="work-project-button">
                      View More ↗
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}