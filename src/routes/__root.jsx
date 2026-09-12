import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import bgImage from "../assets/bg.webp";
import "../index.css";
import Footer from "../components/footer.jsx";
import Nav from "../components/nav.jsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        pointerEvents: "none",
      }}></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav/>
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
}
