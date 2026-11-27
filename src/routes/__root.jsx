import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import "../index.css";
import Footer from "../components/footer.jsx";
import Nav from "../components/nav.jsx";

export const Route = createRootRoute({
  component: RootComponent,
});

const backgroundGradient = [
  "radial-gradient(ellipse 60% 55% at 92% 0%, rgba(110, 190, 120, 0.85) 0%, rgba(63, 138, 92, 0.45) 35%, transparent 70%)",
  "linear-gradient(135deg, #1c3f5c 0%, #22505a 28%, #2a5d5a 45%, #0f2a2a 68%, #030606 85%, #000000 100%)",
].join(", ");

function RootComponent() {
  return (
    <div style={{
      backgroundImage: backgroundGradient,
      backgroundAttachment: "fixed",
      minHeight: "100vh",
      position: "relative",
    }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav/>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
}
