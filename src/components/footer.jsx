export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        
        <p>
          © {new Date().getFullYear()} Jannah Pitogo. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/jannahpitogo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jannah-pitogo/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:pitogojannah@outlook.com"
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}