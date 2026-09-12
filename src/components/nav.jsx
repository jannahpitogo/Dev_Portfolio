import { useState } from "react"
import { Link } from "@tanstack/react-router"
import github from "/images/github.png"
import linkedinIcon from "/images/linkedin.svg"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
      <header className="nav-header">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>jannahpitogo</Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isMenuOpen ? "nav-links--open" : ""}`}>
          <Link to="/" onClick={closeMenu}>HOME</Link>
          <Link to="/" hash="work" onClick={closeMenu}>WORK</Link>
          <Link to="/" hash="experiences" onClick={closeMenu}>EXPERIENCES</Link>
          <Link to="/" hash="about" onClick={closeMenu}>ABOUT</Link>
          <Link to="/" hash="contact" onClick={closeMenu}>CONTACT</Link>

          <div className="nav-socials">
            <a
              href="https://github.com/jannahpitogo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github}
                alt="github logo"
                className="link-logo"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/jannah-pitogo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinIcon}
                alt="linkedin logo"
                className="link-logo"
              />
            </a>
          </div>
        </div>
      </header>
    </nav>
  )
}
