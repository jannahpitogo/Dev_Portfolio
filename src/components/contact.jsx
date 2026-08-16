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

      <div>
          <a href="mailto:pitogojannah@outlook.com" className="flex"><img src="images/email.webp" alt="email icon" className="link-logo"></img>
          <p>pitogojannah@outlook.com</p>
          </a>

        
          <a href="https://www.linkedin.com/in/jannah-pitogo" target="_blank" rel="noopener noreferrer" className="flex"><img src="images/linkedin.webp" alt="linkedIn icon" className="link-logo"></img>
          <p>Jannah Pitogo</p>
          </a>

          <a href="https://github.com/jannahpitogo" target="_blank" rel="noopener noreferrer" className="flex align-middle h-1">
            <img src="images/github.png" alt="github icon" className="link-logo"></img>
            <p>jannahpitogo</p>
          </a>
      </div>
      </div>
    </section>
  );
}
