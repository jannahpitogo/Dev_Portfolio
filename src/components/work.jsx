import { Link } from "@tanstack/react-router";
import projects from "../data/projects.json";
import StackIcon from "tech-stack-icons";

export default function Work() {
  return (
    <section id="work" className="work">
      <div className="work-header">
        <h2 className="work-text">Selected Works</h2>
        <Link to="/projects" className="work-main_button">
          Playground {">"}
        </Link>
      </div>
      <div className="work-projects">
        {projects.map((project, index) => (
          <div
            className="project"
            key={`${project.project_title}-${project.project_date}`}
          >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <img
                src={
                  index === 0 ? "images/premieredent.jpg" : project.background
                }
                alt={project.title}
                className="project-img"
              />
            </a>
                
            <div className="project-content">  
              <h3 className="work-project-title">{project.project_title}</h3>
              <p className="work-project-description">{project.description}</p>
              <div className="techstack-container">
              {project.tools.map((tech) => (
                <span className="tech-button">{tech}</span>
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
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-project-button"
                >
                  View on Github ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
