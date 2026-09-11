import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
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

  const creativeFilters = [
    "All",
    "Graphic Design",
    "Social Media",
    "Print Design",
    "Video Editing",
    "3D / Other",
  ];

  const [selectedFilter, setSelectedFilter] = useState("All");

  const filteredCreativeProjects = useMemo(() => {
    if (selectedFilter === "All") {
      return creativeProjects;
    }

    const query = selectedFilter.toLowerCase();

    return creativeProjects.filter((project) => {
      const projectTypes = (project.type || []).map((type) => type.toLowerCase());
      const projectTitle = (project.title || "").toLowerCase();

      if (query.includes("graphic")) return projectTypes.some((type) => type.includes("design")) || projectTitle.includes("brand") || projectTitle.includes("studio");
      if (query.includes("social")) return projectTypes.some((type) => type.includes("social")) || projectTitle.includes("campaign") || projectTitle.includes("social");
      if (query.includes("print")) return projectTypes.some((type) => type.includes("print")) || projectTitle.includes("poster") || projectTitle.includes("poster series");
      if (query.includes("video")) return projectTypes.some((type) => type.includes("video")) || projectTitle.includes("travel") || projectTitle.includes("film");
      if (query.includes("3d") || query.includes("other")) return projectTypes.some((type) => type.includes("3d") || type.includes("animation")) || projectTitle.includes("3d") || projectTitle.includes("machine");
      return true;
    });
  }, [selectedFilter]);

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

          <div className="creative-filters" aria-label="Creative categories">
            {creativeFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`creative-filter ${selectedFilter === filter ? "is-active" : ""}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="creative-grid">
            {filteredCreativeProjects.map((project, index) => {
              const firstImage = project.images?.[0] || "/images/BubbleMachine.png";
              const firstType = project.type?.[0] || "Creative";

              return (
                <article
                  key={`${project.id || project.title}-${index}`}
                  className={`creative-card creative-card--${index % 3}`}
                >
                  <div className="creative-card__media">
                    <img src={firstImage} alt={project.title} className="creative-card__image" />
                    {project.videoLinks?.length ? (
                      <span className="creative-card__play" aria-label="Video project">
                        ▶
                      </span>
                    ) : null}
                  </div>

                  <div className="creative-card__meta">
                    <span className="creative-card__type">{firstType}</span>
                    <button type="button" className="creative-card__arrow" aria-label={`View ${project.title}`}>
                      ↗
                    </button>
                  </div>

                  <h3 className="creative-card__title">{project.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="work">
      <div className="work-header">
        <div>
          <h2 className="work-text">Selected Works</h2>
          <Link to="/projects" className="work-main_button">
            Playground {">"}
          </Link>
        </div>

        <p>A selection of web projects showcasing my development skills, technical problem-solving, and experience building functional digital experiences.</p>
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