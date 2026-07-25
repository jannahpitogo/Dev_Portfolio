import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

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
            <Link to="/" hash="#about">
              About
            </Link>
            <Link to="/" hash="#stack">
              Stack
            </Link>
            <Link to="/all-works">Work</Link>
            <Link to="/creative">Creative</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </header>
      </nav>

      <Outlet />
    </>
  );
}
