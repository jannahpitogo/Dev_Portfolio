import { createFileRoute } from "@tanstack/react-router";
import AnnouncementModal from "../components/modal.jsx";
import About from "../components/about.jsx";
import Hero from "../components/hero.jsx";
import Work from "../components/work.jsx";
import Contact from "../components/contact.jsx";
import { Experiences } from "../components/experiences.jsx";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  validateSearch: (search) => ({
    category: search.category === "creative" ? "creative" : "dev",
  }),
});

export default function Home() {
  const search = Route.useSearch();
  const [activeCategory, setActiveCategory] = useState(search.category ?? "dev");

  useEffect(() => {
    setActiveCategory(search.category ?? "dev");
  }, [search.category]);

  useEffect(() => {
    if (window.location.hash !== "#work") {
      return;
    }

    const workSection = document.getElementById("work");

    if (workSection) {
      const offset = 90;
      const top = workSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  }, [search.category]);

  return (
    <main>
      <AnnouncementModal />
      <Hero activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Work activeCategory={activeCategory} />
      <Experiences activeCategory={activeCategory}></Experiences>
      <About activeCategory={activeCategory} />
      <Contact />
    </main>
  );
}
