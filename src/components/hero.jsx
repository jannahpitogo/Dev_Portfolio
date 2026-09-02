import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { div } from "motion/react-client";

export default function Hero({setActiveCategory, activeCategory}) {
  return (
    <section className="hero">
      <div className="live-indicator-holder">
        <span className="indicator">
          <div className="circle blink" aria-hidden="true"></div>

          <Link className={`portfolio-main_button ${activeCategory === "dev" ? "active" : ""}`} to="/" onClick={() => setActiveCategory("dev")}>
            DEV
          </Link>
        </span>

        <span className="indicator">
          <div className="circle blink" aria-hidden="true"></div>

          <Link className={`portfolio-main_button ${activeCategory === "creative" ? "active" : ""}`} to="/" onClick={() => setActiveCategory("creative")}>
            Creative
          </Link>
        </span>
      </div>
      
      {activeCategory === "dev" ? (
        <div className="hero-content">
          <h1 className="hero-title">
          {" "}
          <motion.span 
            key={activeCategory}
            style={{display: "inline-block"}}
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              type: "spring",
              stiffness: 200, 
              damping: 10,
            }}>
              Web Developer
            </motion.span>
            </h1>
            <h2>Hi, I'm Jannah!</h2>
            <p>Full-Stack Web Developer with a creative side and a strong eye for UI, 
              blending technical skills with visual design to build functional and engaging 
              digital experiences.</p>
        </div>
      ) : (
        <div className="hero-content">
          <h1 className="hero-title">
            {" "}
            <motion.span
            key={activeCategory}
            style={{display: "inline-block"}}
            initial={{y:-100, opacity: 0}}
            animate={{y:0, opacity: 1}}
            transition={{
              type: "spring",
              stiffness: 200, 
              damping: 10,
            }}>
              Multimedia Designer
            </motion.span>
          </h1>
          <h2>Hi, I'm Jannah!</h2>
          <p>Multimedia Artist specializing in graphic design, 3D modeling, simple 3D animation, 
            video editing, and digital media. Combining creative and technical skills to produce high-quality output.</p>
        </div>
      )}
    </section>
  );
}