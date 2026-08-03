import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import StackIcon from "tech-stack-icons";
import projects from "../data/projects.json";
import jannah from "../assets/jannah.png";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="live-indicator-holder">
          <span className="indicator">
            <div className="circle blink" aria-hidden="true"></div>
            <Link className="portfolio-main_button" to="/">
              DEV
            </Link>
          </span>
          <span className="indicator">
            <Link className="portfolio-main_button" to="/creative">
              CREATIVE
            </Link>
          </span>
        </div>

        <h1 className="hero-title">Hi! I am Jannah Pitogo</h1>
        <p>
          Hi, I'm Jannah — a full-stack web developer who recently ran . Now I'm
          building modern, accessible web applications and always looking for
          the next challenge.
        </p>

        <code>
          git commit -m "Graduated from a Full-Stack Web Development Bootcamp
          🎉"
        </code>
      </section>

      <section id="about" className="about">
        <img className="about-img filter" src={jannah} alt="Jannah Pitogo" />

        <span className="about-content">
          <h2 className="about-text">About Me</h2>
          <p>
            I’m a digital professional with experience combining technical
            development and creative design to deliver effective digital
            solutions. I’ve worked with clients in the Philippines as well as
            remotely with clients in Singapore and the United States, helping
            create responsive websites and strong visual branding.
          </p>
          <p>
            My expertise includes: Web Development: Developing responsive sites
            using HTML, CSS, and JavaScript, with a focus on deployment and site
            security (Cloudflare).
          </p>
          <p>
            Creative Design: Professional video editing, 3D modeling, and brand
            asset creation using Adobe Creative Suite (Premiere Pro,
            Illustrator, Photoshop) and Blender.
          </p>

          <p>
            Digital Strategy: Streamlining business operations through marketing
            automation, social media management, and SEO-optimized profiles.
          </p>
          <p>
            Administrative: Managing complex data workflows, CRM updates, and
            real estate project coordination to ensure seamless business
            delivery. I enjoy learning how technology works and helping others
            understand it more clearly. I’m naturally curious and enjoy
            exploring problems that I don't understand. One of the things I
            value most when working with others is clear communication and
            collaboration. I also value the freedom in communication where
            everyone can share their ideas without barriers. Let’s connect:
            pitogojannah@outlook.com
          </p>
        </span>
      </section>

      <section id="stack" className="stack">
        <h2 className="stack-text">Tech Stack</h2>

        <div className="stack-icons">
          <span>
            <StackIcon name="html5" className="stack-icon" />
            <p>HTML5</p>
          </span>
          <span>
            <StackIcon name="css3" className="stack-icon" />
            <p>CSS3</p>
          </span>
          <span>
            <StackIcon name="js" className="stack-icon" />
            <p>JavaScript</p>
          </span>
          <span>
            <StackIcon name="tailwindcss" className="stack-icon" />
            <p>Tailwind CSS</p>
          </span>
          <span>
            <StackIcon name="react" className="stack-icon" />
            <p>React</p>
          </span>
          <span>
            <StackIcon name="nodejs" className="stack-icon" />
            <p>Node.js</p>
          </span>
          <span>
            <img
              src="images/express.webp"
              alt="Express.js"
              className="stack-icon"
            />
            <p>Express.js</p>
          </span>
          <span>
            <StackIcon name="mongodb" className="stack-icon" />
            <p>MongoDB</p>
          </span>
          <span>
            <StackIcon name="git" className="stack-icon" />
            <p>Git</p>
          </span>
          <span>
            <img src="images/github.jpg" alt="GitHub" className="stack-icon" />
            <p>GitHub</p>
          </span>
          <span>
            <StackIcon name="mysql" className="stack-icon" />
            <p>MySQL</p>
          </span>
          <span>
            <StackIcon name="python" className="stack-icon" />
            <p>Python</p>
          </span>
        </div>
      </section>

      <section id="work" className="work">
        <h2 className="work-text">Selected Works</h2>

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

                <div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-link"
                  >
                    View Project
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-link"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
