import jannah from "../assets/jannah.png";
import { motion } from "motion/react";

export default function About({activeCategory}) {
  return (

    <section id="about">
      
      {activeCategory === "dev" ? (
      <div className="about">

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
        }} />

        <motion.span
        key={activeCategory}
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.15,
        }}>
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
      </div>
      ) : (
    <div className="about">

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
        }}>
        <h2 className="about-text">About Me</h2>

        <p>
          Hi! I'm Jannah, a Multimedia Designer based in Barcelona.
        </p>

        <p>
         My background sits at the intersection of creativity and technology, with experience 
         across graphic design, video editing, digital content, and interactive media. 
         I partially studied Entertainment and Multimedia Computing, where I worked and 
         explored different aspects of digital and interactive design.
        </p>

        <p>
         Since then, I’ve worked across different creative and digital roles, including graphic 
         design, video editing, social media management, real estate support, and virtual assistance. 
         These experiences helped me develop a versatile approach to creating visual content, 
         while also teaching me how to design with purpose and adapt to different audiences and projects.
        </p>

        <p>
          I later expanded my skills into web development, which gave me a deeper understanding 
          of how design and technology can work together. Today, I've been combining creative
          and technology in my campaigns depending on the businesses I'm helping.
        </p>
        
      </motion.span>
      </div>
      )}
      </section>
)};