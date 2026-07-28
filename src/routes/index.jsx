import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import jannahImg from "../assets/jannah.png";

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
        <img className="about-img" src={jannahImg} alt="Jannah Pitogo" />
        <h2 className="about-title">About Me</h2>
      </section>
    </main>
  );
}
