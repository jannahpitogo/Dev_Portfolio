import cssIcon from "../assets/icons/css.png";
import expressIcon from "../assets/icons/express.webp";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import htmlIcon from "../assets/icons/html.png";
import jsIcon from "../assets/icons/js.webp";
import mysqlIcon from "../assets/icons/mysql.png";
import nodejsIcon from "../assets/icons/nodejs.webp";
import pythonIcon from "../assets/icons/python.webp";
import reactIcon from "../assets/icons/react.webp";
import tailwindIcon from "../assets/icons/tailwindcss.png";

export default function TechStack() {
  return (
    <section id="stack" className="stack">
      <h2 className="stack-text">Tech Stack</h2>

      <div className="stack-icons">
        <span className="tech-icon-container">
          <img src={htmlIcon} alt="HTML" className="stack-icon" width="50" height="50"/>
          <p>HTML5</p>
        </span>
        <span className="tech-icon-container">
          <img src={cssIcon} alt="CSS" className="stack-icon" width="50" height="50"/>
          <p>CSS3</p>
        </span>
        <span className="tech-icon-container">
          <img src={jsIcon} alt="javaScript" className="stack-icon" width="50" height="50"/>
          <p>JavaScript</p>
        </span>
        <span className="tech-icon-container">
          <img src={reactIcon} alt="React" className="stack-icon mb-1.5" width="50" height="50"/>
          <p>React</p>
        </span>
        <span className="tech-icon-container">
          <img src={nodejsIcon} alt="NodeJS" className="stack-icon" width="50" height="50"/>
          <p>Node.js</p>
        </span>
        <span className="tech-icon-container">
          <img src={tailwindIcon} alt="TailwindCSS" className="stack-icon" width="70" height="70"/>
          <p>Tailwind</p>
        </span>
        <span className="tech-icon-container">
          <img src={gitIcon} alt="Git" className="stack-icon" width="50" height="50"/>
          <p>Git</p>
        </span>
        <span className="tech-icon-container">
          <img
            src={expressIcon}
            alt="Express.js"
            className="stack-icon"
            width="50"
            height="50"
          />
          <p>Express</p>
        </span>
        <span className="tech-icon-container">
          <img src={githubIcon} alt="GitHub" className="stack-icon" width="50" height="50"/>
          <p>GitHub</p>
        </span>
        <span className="tech-icon-container">
          <img src={mysqlIcon} alt="MySQL" className="stack-icon" width="50" height="50"/>
          <p>MySQL</p>
        </span>
        <span className="tech-icon-container">
          <img src={pythonIcon} alt="Python" className="stack-icon" width="50" height="50"/>
          <p>Python</p>
        </span>
      </div>
    </section>
  );
}
