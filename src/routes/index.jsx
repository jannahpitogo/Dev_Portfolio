import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import StackIcon from "tech-stack-icons";
import projects from "../data/projects.json";
import jannah from "../assets/jannah.png";
import AnnouncementModal from "../components/Modal";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <AnnouncementModal />

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
            Hi! I'm Jannah, a Junior Full-Stack Web Developer based in
            Barcelona.
          </p>
          <p>
            I love creating things. Whether it's learning a new instrument,
            writing in my journal, building an application, or developing a
            game, I enjoy turning ideas into something real. Music and
            programming have a lot in common to me, both require curiosity,
            patience, and a willingness to keep learning. The more I learn, the
            more I realize there's always more to discover, and that's what
            keeps me excited.
          </p>
          <p>
            I enjoy and challenge myself by building applications that solve
            everyday problems, especially the ones I experience myself. If I
            find a better way to do something, I'll probably try to build it.
            Journaling has also shaped how I approach challenges by helping me
            organize my thoughts and break problems into smaller pieces.
          </p>
          <p>
            Above all, I'm someone who loves learning and challenging myself.
            Whether it's picking up a new technology, a new instrument, or
            building something I've never built before, I enjoy stepping outside
            my comfort zone. I believe the best developers aren't the ones who
            know everything—especially when information is everywhere, but the
            ones who stay curious, keep building, keep learning, and never stop
            improving. Because you only fail when you stop trying, and I don't
            plan on stopping anytime soon.
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
    </main>
  );
}
