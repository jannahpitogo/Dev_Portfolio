import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import "../index.css";
import Footer from "../components/footer.jsx";
import Nav from "../components/nav.jsx";
import ThemeToggle from "../components/theme-toggle.jsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div style={{
      backgroundImage: "var(--bg-gradient)",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      position: "relative",
    }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav/>
        <Outlet />
        <Footer/>
        <ThemeToggle />
      </div>
    </div>
  );
}
