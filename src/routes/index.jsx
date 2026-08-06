import { createFileRoute } from "@tanstack/react-router";
import AnnouncementModal from "../components/modal.jsx";
import About from "../components/about.jsx";
import Hero from "../components/hero.jsx";
import TechStack from "../components/techstack.jsx";
import Work from "../components/work.jsx";
import Contact from "../components/contact.jsx";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <AnnouncementModal />
      <Hero />
      <About />
      <TechStack />
      <Work />
      <Contact />
    </main>
  );
}
