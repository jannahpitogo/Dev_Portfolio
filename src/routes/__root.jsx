import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import "../index.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <nav className="nav">
        <header className="nav-header">
          <div className="logo">
            <Link to="/">jannahpitogo</Link>
          </div>

          <div className="nav-links">
            <Link to="/" hash="about">
              ABOUT
            </Link>
            <Link to="/" hash="stack">
              STACK
            </Link>
            <Link to="/" hash="work">
              WORK
            </Link>
            <Link to="/creative">CREATIVE</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </header>
      </nav>

      <Outlet />
    </>
  );
}
