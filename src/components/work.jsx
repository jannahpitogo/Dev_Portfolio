import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import projects from "../data/projects.json";

export default function Work() {
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
    <section id="work" className="work">
      <div className="work-header">
        <h2 className="work-text">Selected Works</h2>

        <Link to="/projects" className="work-main_button">
          Playground {">"}
        </Link>
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
        {projects.map((project, index) => (
          <motion.div
            className="project-wrapper"
            key={`${project.project_title}-${project.project_date}`}
            variants={projectVariants}
          >
            <div className="project">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    index === 0
                      ? "images/premieredent.png"
                      : project.background
                  }
                  alt={project.project_title}
                  className="project-img"
                />
              </a>

              <div className="project-content">
                <h3 className="work-project-title">
                  {project.project_title}
                </h3>

                <p className="work-project-description">
                  {project.description}
                </p>

                <div className="techstack-container">
                  {project.tools.map((tech) => (
                    <span className="tech-button" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-button-container">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-button"
                  >
                    Demo ↗
                  </a>

                  <a 
                  className="work-project-button">
                    View More ↗
                  </a>

                  {/* <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-button"
                  >
                    View on Github ↗
                  </a> */}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}