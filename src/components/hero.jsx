import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="live-indicator-holder">
        <span className="indicator">
          <div className="circle blink" aria-hidden="true"></div>

          <Link className="portfolio-main_button" to="/">
            DEV
          </Link>
        </span>
      </div>

      <h1 className="hero-title">
       {" "}
        <motion.span
          style={{ display: "inline-block" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
           Hi! I am Jannah Pitogo
        </motion.span>
      </h1>

      <p>
        Hi, I'm Jannah — a full-stack web developer who recently graduated.
        Now I'm building modern, accessible web applications and always
        looking for the next challenge.
      </p>

      <code>
        git commit -m "Graduated from a Full-Stack Web Development Bootcamp"
      </code>
    </section>
  );
}