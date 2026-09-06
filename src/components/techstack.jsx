import cssIcon from "../assets/icons/tech/css.png";
import expressIcon from "../assets/icons/tech/express.webp";
import gitIcon from "../assets/icons/tech/git.png";
import githubIcon from "../assets/icons/tech/github.png";
import htmlIcon from "../assets/icons/tech/html.png";
import jsIcon from "../assets/icons/tech/js.webp";
import nodejsIcon from "../assets/icons/tech/nodejs.webp";
import pythonIcon from "../assets/icons/tech/python.webp";
import reactIcon from "../assets/icons/tech/react.webp";
import tailwindIcon from "../assets/icons/tech/tailwindcss.png";
import framerIcon from "../assets/icons/creative/framer.webp";
import { motion } from "motion/react";


import blenderIcon from "../assets/icons/creative/blender.webp";
import canvaIcon from "../assets/icons/creative/canva.png";
import capcutIcon from "../assets/icons/creative/capcut.png";
import davinciIcon from "../assets/icons/creative/davinci.webp";
import figmaIcon from "../assets/icons/creative/figma.png";
import lightroomIcon from "../assets/icons/creative/lightroom.png";
import photoshopIcon from "../assets/icons/creative/photoshop.png";
import premiereIcon from "../assets/icons/creative/premiere.png";

const techIcons = [
  { src: htmlIcon, alt: "HTML", label: "HTML5", height: "50", width: "50"},
  { src: cssIcon, alt: "CSS", label: "CSS3", height: "50", width: "50"},
  { src: jsIcon, alt: "JavaScript", label: "JavaScript", height: "50", width: "50"},
  { src: reactIcon, alt: "React", label: "React", height: "50", width: "50"},
  { src: nodejsIcon, alt: "NodeJS", label: "Node.js", height: "50", width: "50"},
  { src: tailwindIcon, alt: "TailwindCSS", label: "Tailwind", height: "70", width: "70"},
  { src: gitIcon, alt: "Git", label: "Git", height: "50", width: "50"},
  { src: expressIcon, alt: "Express.js", label: "Express", height: "50", width: "50"},
  { src: githubIcon, alt: "GitHub", label: "GitHub", height: "50", width: "50"},
  { src: pythonIcon, alt: "Python", label: "Python", height: "50", width: "50"}, 
  { src: framerIcon, alt: "Framer", label: "Framer", height: "50", width: "50"},
];

const creativeIcons = [
  { src: blenderIcon, alt: "Blender", label: "Blender", height: "50", width: "50"},
  { src: canvaIcon, alt: "Canva", label: "Canva", height: "30", width: "50"},
  { src: capcutIcon, alt: "Capcut", label: "Capcut", height: "50", width: "50"},
  { src: davinciIcon, alt: "Davinci", label: "Davinci", height: "50", width: "50"},
  { src: figmaIcon, alt: "Figma", label: "Figma", height: "50", width: "50"},
  { src: lightroomIcon, alt: "Lightroom", label: "Lightroom", height: "50", width: "50"},
  { src: photoshopIcon, alt: "Photoshop", label: "Photoshop", height: "50", width: "50"},
  { src: premiereIcon, alt: "Premiere", label: "Premiere", height: "50", width: "50"},
]
export function Tech() {
  return (
  <div id="stack">
    <motion.div 
    className="stack-icons"
      animate={{x: ["0", "-50%"]}}
      transition={{
        duration: 70, 
        repeat: Infinity,
        ease: "linear",
      }}
    >

      {[...techIcons, ...techIcons, ...techIcons, ...techIcons].map((project, index) => (
        <div className="tech-icon-container" key={`${project.label}-${index}`}>
          <img className="stack-icon" src={project.src} alt={project.alt} />
          <p>{project.label}</p>
        </div>
      ))}

    </motion.div>
  </div>
)}

export function Creative() {
  return (
  <div id="stack">
    <motion.div 
    className="stack-icons"
    animate={{x: ["0", "-40%"]}}
    transition={{
      duration: 30,
      repeat: Infinity, 
      ease: "linear",
    }}>

      {[...creativeIcons, ...creativeIcons, ...creativeIcons, ...creativeIcons].map((project, index) => (
        <div className="tech-icon-container" key={`${project.label}-${index}`}>
          <img className="stack-icon" src={project.src} alt={project.alt} ></img>
          <p>{project.label}</p>
        </div>
      ))}

    </motion.div>
  </div>
)}