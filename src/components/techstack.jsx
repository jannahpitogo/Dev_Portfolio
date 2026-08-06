import StackIcon from "tech-stack-icons";

export default function TechStack() {
  return (
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
          <img src="images/github.png" alt="GitHub" className="stack-icon" />
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
  );
}
