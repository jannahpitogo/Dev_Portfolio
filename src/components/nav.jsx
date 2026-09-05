import { Link } from "@tanstack/react-router"
import github from "/images/github.svg"

export default function Nav(){
    return (

        <nav className="nav">
                <header className="nav-header">
                <div className="logo">
                    <Link to="/">jannahpitogo</Link>
                </div>

                <div className="nav-links">
                    <Link to="/">HOME</Link>
                    <Link to="/" hash="work">
                    WORK
                    </Link>
                    <Link to="/" hash="">
                    EXPERIENCE
                    </Link>
                    <Link to="/" hash="about">
                    ABOUT
                    </Link>
                    <Link to="/" hash="contact">
                    CONTACT
                    </Link>

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
                        src="images/linkedin.webp"
                        alt="linkedin logo"
                        className="link-logo"
                        />
                    </a>
                    </div>
                </div>
                </header>
        </nav>
    );     
};
        