import { useState } from "react";
import { motion } from "motion/react";
import githubIcon from "/images/github.png";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Could not send your message.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  }

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
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <label className="label">
          Name
          <input className="label-input" type="text" name="name" placeholder="Your name" required maxLength={100} />
        </label>
        <label className="label">
          Email
          <input className="label-input" type="email" name="email" placeholder="you@example.com" required maxLength={200} />
        </label>
        <label className="label">
          Subject
          <input className="label-input" type="text" name="subject" placeholder="What's this about?" required maxLength={150} />
        </label>
        <label className="label">
          Message
          <textarea className="label-input contact-textarea" name="message" placeholder="How can I help?" required rows={5} maxLength={5000} />
        </label>
        <button className="contact-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <p className="contact-status" role="status" aria-live="polite">
          {status === "success" && "Thanks! Your message has been sent."}
          {status === "error" && errorMsg}
        </p>
      </motion.form>
    </section>
  );
}
