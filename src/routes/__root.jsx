import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import "../index.css";
import StackIcon from "tech-stack-icons";
import Footer from "../components/footer.jsx";
import Nav from "../components/nav.jsx";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      

      <Nav/>

      <Outlet />
      <Footer/>
    </>
  );
}
