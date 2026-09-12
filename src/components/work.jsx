import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import devProjects from "../data/projects_tech.json";
import creativeProjects from "../data/projects_creative.json";

export default function Work({ activeCategory }) {
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

  const isCreativeView = activeCategory === "creative";

  if (isCreativeView) {
    return (
      <section id="work" className="work--creative">
        <div className="creative-portfolio">
          <p className="creative-portfolio__eyebrow">CREATIVE PORTFOLIO</p>
          <h2 className="creative-portfolio__title">
            Designs that tell <span>stories</span>
          </h2>
          <p className="creative-portfolio__description">
            A collection of my creative work, from branding and social media to print and video, created to help ideas stand out and connect with people.
          </p>

          <motion.div
            className="creative-grid"
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
            {creativeProjects.map((project, index) => {
              const firstImage = project.images?.[0] || "/images/BubbleMachine.png";
              const projectTypes = Array.isArray(project.type) ? project.type : [project.type || "Creative"];

              return (
                <motion.article
                  key={`${project.id || project.title}-${index}`}
                  className="creative-card"
                  variants={projectVariants}
                >
                  <div className="creative-card__index">{String(index + 1).padStart(2, "0")}</div>

                  <div className="creative-card__media">
                    <img src={firstImage} alt={project.title} className="creative-card__image" />
                    {project.videoLinks?.length ? (
                      <span className="creative-card__play" aria-hidden="true">
                        ▶
                      </span>
                    ) : null}
                  </div>

                  <div className="creative-card__footer">
                    <h3 className="creative-card__title">{project.title}</h3>
                    <button type="button" className="creative-card__button">
                      View Project <span aria-hidden="true">↗</span>
                    </button>
                  </div>

                  <div className="creative-card__types">
                    {projectTypes.map((type) => (
                      <span key={`${project.title}-${type}`} className="creative-card__type">
                        {type}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="work">
      <div className="work-header">
        <div className="work-header-button">
          <h2 className="work-text">Selected Works</h2>
          <Link to="/projects" className="work-main_button">
            Playground {">"}
          </Link>
        </div>

        <p className="header-description">A selection of web projects showcasing my development skills, technical problem-solving, and experience building functional digital experiences.</p>
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
        {devProjects.map((project, index) => {
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
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <img src={image} alt={project.hero?.alt || title} className="project-img" />
                </a>

                <div className="project-content">
                  <h3 className="work-project-title">{title}</h3>
                  <p className="work-project-description">{description}</p>

                  <div className="techstack-container">
                    {tools.map((tech) => (
                      <span className="tech-button" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-button-container">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="work-project-button">
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