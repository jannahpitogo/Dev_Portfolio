import { createFileRoute } from "@tanstack/react-router";
import AnnouncementModal from "../components/modal.jsx";
import About from "../components/about.jsx";
import Hero from "../components/hero.jsx";
import Work from "../components/work.jsx";
import Contact from "../components/contact.jsx";
import { Experiences } from "../components/experiences.jsx";
import {useState} from "react";


export const Route = createFileRoute("/")({
  component: Home,
});


export default function Home() {
  const [activeCategory, setActiveCategory] = useState("dev");
  return (
    <main>
      <AnnouncementModal />
      <Hero activeCategory={activeCategory} setActiveCategory={setActiveCategory}
      />
      <Work activeCategory={activeCategory} />
      {/* <TechStack activeCategory={activeCategory} /> */}
      <Experiences activeCategory={activeCategory}></Experiences>
      <About activeCategory={activeCategory}/>
      
      
      <Contact />
    </main>
  );
}
