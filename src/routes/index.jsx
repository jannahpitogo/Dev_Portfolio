import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import projects from "../data/projects.json";
import AnnouncementModal from "../components/modal.jsx";
import About from "../components/about.jsx";
import Hero from "../components/hero.jsx";
import TechStack from "../components/techstack.jsx";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <AnnouncementModal />
      <Hero />
      <About />
      <TechStack />

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
                <p className="work-project-description">
                  {project.description}
                </p>

                <div className="project-button-container">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-button"
                  >
                    View Project
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-button"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-header">
          <span>GET IN TOUCH</span>
          <h2>Let's Work Together!</h2>
          <p>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formspree.io/f/mnqvydqv"
          method="POST"
        >
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="label-input"
            required
          />

          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="label-input"
            required
          />

          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="label-input"
            required
          ></textarea>

          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
