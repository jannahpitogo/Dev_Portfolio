import cssIcon from "../assets/icons/css.png";
import expressIcon from "../assets/icons/express.webp";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import htmlIcon from "../assets/icons/html.png";
import jsIcon from "../assets/icons/js.webp";
import mysqlIcon from "../assets/icons/mysql.png";
import nodejsIcon from "../assets/icons/nodejs.webp";
import pythonIcon from "../assets/icons/python.webp";
import reactIcon from "../assets/icons/react.webp";
import tailwindIcon from "../assets/icons/tailwindcss.png";
import { motion } from "motion/react";

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
];

export function Tech() {
  
  return (
  <div id="stack">
    <motion.div 
    className="stack-icons"
      animate={{x: ["0", "-40%"]}}
      transition={{
        duration: 30, 
        repeat: Infinity,
        ease: "linear",
      }}
    >

      {[...techIcons, ...techIcons, ...techIcons, ...techIcons].map((project, index) => (
        <div className="tech-icon-container" key={`${project.label}-${index}`}>
          <img className="stack-icon" src={project.src} alt={project.alt} height={project.height} width={project.width}/>
          <p>{project.label}</p>
        </div>
      ))}

    </motion.div>
  </div>
)}

export function Creative() {

}

// export function Tech(){
//   const iconVariants = {
//     hidden: {
//       opacity: 0,
//       y: -80,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 10,
//       },
//     },
//   };

//   return (
//     <div id="stack" className="stack">
//       <motion.div
//         className="stack-icons"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{
//           hidden: {},
//           visible: {
//             transition: {
//               staggerChildren: 0.1,
//             },
//           },
//         }}
//       >
//         <motion.span
          // className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={htmlIcon}
//             alt="HTML"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>HTML5</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={cssIcon}
//             alt="CSS"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>CSS3</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={jsIcon}
//             alt="JavaScript"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>JavaScript</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={reactIcon}
//             alt="React"
//             className="stack-icon mb-1.5"
//             width="50"
//             height="50"
//           />
//           <p>React</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={nodejsIcon}
//             alt="NodeJS"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>Node.js</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={tailwindIcon}
//             alt="TailwindCSS"
//             className="stack-icon"
//             width="70"
//             height="70"
//           />
//           <p>Tailwind</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={gitIcon}
//             alt="Git"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>Git</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={expressIcon}
//             alt="Express.js"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>Express</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={githubIcon}
//             alt="GitHub"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>GitHub</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={mysqlIcon}
//             alt="MySQL"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>MySQL</p>
//         </motion.span>

//         <motion.span
//           className="tech-icon-container"
//           variants={iconVariants}
//         >
//           <img
//             src={pythonIcon}
//             alt="Python"
//             className="stack-icon"
//             width="50"
//             height="50"
//           />
//           <p>Python</p>
//         </motion.span>
//       </motion.div>
//     </div>
//   );
// }




export default Tech;