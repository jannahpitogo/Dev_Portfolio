import { motion } from "motion/react";


const workExperienceTech = [
    {
        title: "Full Stack Web Developer - Bootcamp",
        company: "Migracode Barcelona",
        description: "Completed a 9-month Web Development Bootcamp focused on full-stack development, programming fundamentals, APIs, databases, testing, Git/GitHub, and Agile collaboration. Built web applications through hands-on projects and team-based development.",
        tools: ["HTML", "CSS", "JavaScript", "REST API", "DOM", "Version Control", "Git/GitHub", "API/Fetch", "Python", "React", "Node.js", "Express", "DevTools", "Testing"],
        year: "2025 - 2026",
        image: "/images/migracode.webp",
    },
    {
        title: "Web Developer & Social Media Manager",
        company: "Premiere Dent Dental Clinic",
        description: "Developed and maintained the clinic’s website and digital presence while managing social media, marketing assets, automation, customer inquiries, and appointment scheduling.",
        tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Cloudflare", "Canva"],
        year: "2025 - 2026",
        image: "/images/premieredent_icon.png",
    },
    {
        title: "Floor Plan Editor & Tech Virtual Assistant",
        company: "Direct Client | Freelance Campaign",
        description: "Managed and updated real estate website content, edited and optimized property floor plans, and provided administrative support, preparing over 1,400 floor plans for online publication.",
        tools: ["Adobe Photoshop", "Wordpress", "Microsoft Excel"],
        year: "2022",
        image: "/images/techVA.jpg",
    },
];


const workExperienceCreative = [
    {
        title: "Graphics & Video Editor",
        company: "Infobuilder Technologies Inc.",
        description: "Created graphics, visual assets, and video content for company-wide and client projects, managing design work from concept to delivery while meeting deadlines and brand standards.",
        tools: ["Premiere Pro", "Illustrator", "Photoshop", "Blender", "Google Workspace"],
        year: "2024",
        image: "/images/infobuilder.jpeg",
    },
    {
        title: "Monthly Postcard Designer",
        company: "Diamond Law Center LLC",
        description: "Designed monthly marketing postcards and promotional graphics for Diamond Law Center, creating branded visual content aligned with marketing goals and audience engagement.",
        tools: ["Photoshop", "Canva"],
        year: "2022 - 2023",
        image: "/images/diamond.png",
    },
    {
        title: "Graphic Designer & Virtual Assistant",
        company: "Direct Client | Freelance Campaign | Jessica Lombardo",
        description: "Provided virtual assistant support for real estate operations while creating social media graphics, marketing content, and website updates to support brand visibility and day-to-day business needs.",
        tools: ["Photoshop", "WordPress", "Administrative Support"],
        year: "2022",
        image: "/images/jessica.avif",
    },
    {
        title: "Floor Plan Editor & Tech Virtual Assistant",
        company: "Direct Client | Freelance Campaign",
        description: "Managed and updated real estate website content, edited and optimized property floor plans, and provided administrative support, preparing over 1,400 floor plans for online publication.",
        tools: ["Adobe Photoshop", "Wordpress", "Microsoft Excel"],
        year: "2022",
        image: "/images/techVA.jpg",
    },
];

export function Experiences({activeCategory}) {
    const experiences = activeCategory === "dev" ? workExperienceTech : workExperienceCreative;

    return (
        <section className="experiences" id="experiences">
            <motion.div
                    className="experiences-heading"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.15,
                    }}>
                <p className="experiences-eyebrow">EXPERIENCES</p>
                <h2>Where I've <span>Worked</span></h2>
                <p className="experiences-intro">
                    Different roles, industries, and skills, all part of the same journey to grow, learn, and create.
                </p>
                <span className="experiences-rule" aria-hidden="true" />
            
            </motion.div>

            <div className="experience-list">
                {experiences.map((exp) => (
                    <motion.article
                    className="experience-card"
                    key={`${exp.title}-${exp.year}`}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.15,
                    }}>
                        <img className="experience-image" src={exp.image} alt="" />
                        <div className="experience-content">
                            <h3>{exp.title}</h3>
                            <p className="experience-company">{exp.company}</p>
                            <p className="experience-description">{exp.description}</p>
                            <div className="experience-tools">
                                {exp.tools.map((tool) => <span key={tool}>{tool}</span>)}
                            </div>
                        </div>
                        <div className="experience-meta">
                            <p>{exp.year}</p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}