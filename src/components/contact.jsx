import { motion } from "motion/react";
import githubIcon from "/images/github.png";

export default function Contact() {
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-header"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        <motion.span variants={itemVariants}>
          GET IN TOUCH
        </motion.span>

        <motion.h2 variants={itemVariants}>
          Let's Work Together!
        </motion.h2>

        <motion.p variants={itemVariants}>
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </motion.p>

        <motion.div
          className="contact-links"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.a
            href="mailto:pitogojannah@outlook.com"
            className="flex contact-link"
            variants={itemVariants}
          >
            <img
              src="images/email.png"
              alt="Email icon"
              className="link-logo"
            />
            <p>pitogojannah@outlook.com</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/jannah-pitogo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex contact-link"
            variants={itemVariants}
          >
            <img
              src="images/linkedin.svg"
              alt="LinkedIn icon"
              className="link-logo"
            />
            <p>Jannah Pitogo</p>
          </motion.a>

          <motion.a
            href="https://github.com/jannahpitogo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex contact-link"
            variants={itemVariants}
          >
            <img
              src={githubIcon}
              alt="GitHub icon"
              className="link-logo"
            />
            <p>jannahpitogo</p>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
