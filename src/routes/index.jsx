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
    </main>
  );
}
