export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h2>Let's Work Together!</h2>
        <p>
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/mnqvydqv"
        method="POST"
      >
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="label-input"
          required
        />

        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="label-input"
          required
        />

        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="label-input"
          required
        ></textarea>

        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  );
}
