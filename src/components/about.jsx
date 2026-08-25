import jannah from "../assets/jannah.png";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="about">

      <motion.img
        className="about-img filter"
        src={jannah}
        alt="Jannah Pitogo"
        width="800"
        height="1000"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      <motion.span
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.15,
        }}
      >
        <h2 className="about-text">About Me</h2>

        <p>
          Hi! I'm Jannah, a Junior Full-Stack Web Developer based in Barcelona.
        </p>

        <p>
         My background has always been a mix of creativity and technology, with 2+ years of combined 
         experience across creative and web development. I partially studied Entertainment and Multimedia 
         Computing with a focus on Game Development in the Philippines, where I worked with Unity 
         and C# projects.
        </p>

        <p>
          I’ve since worked across different creative field and digital roles, including virtual assistance, 
          real estate support, designing, video editing, and social media management. Alongside this, I spent 
          the last few years exploring web development through personal and freelance projects, gradually
          becoming more interested in building the things behind the designs.
        </p>

        <p>
          That path eventually brought me to Barcelona, where I completed a 9-month web development 
          bootcamp in Migracode Barcelona and worked on some full-stack projects with a great team. 
          Today, I enjoy combining my creative background with development to build digital experiences that I think will 
          be useful to people.
        </p>
      </motion.span>

    </section>
  );
}