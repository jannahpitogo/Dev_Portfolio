
const workExperienceTech = [
    {
        title: "Web Developer & Social Media Manager",
        company: "Premiere Dent Dental Clinic",
        description: "Built and deployed the clinic's website, managed social media, and created marketing materials.",
        tools: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Cloudflare", "Canva"],
        year: "2025 - 2026",
        image: "/images/premieredent.png",
    },
    {
        title: "Web Developer",
        company: "Personal Projects",
        description: "Designed and developed responsive portfolio experiences for clients and personal projects.",
        tools: ["React", "JavaScript", "CSS"],
        year: "2024 - 2025",
        image: "/images/VA_portfolio.png",
    },
];


const workExperienceCreative = [
    {
        title: "Graphics & Video Editor",
        company: "Infobuilder Technologies Inc.",
        description: "Created visual assets and edited videos for digital campaigns and projects.",
        tools: ["Premiere Pro", "Illustrator", "Photoshop", "Blender"],
        year: "2024",
        image: "/images/investIQ.png",
    },
    {
        title: "Monthly Postcard Designer",
        company: "Diamond Law Center LLC",
        description: "Designed monthly postcards for real estate marketing campaigns.",
        tools: ["Photoshop", "Illustrator"],
        year: "2022 - 2023",
        image: "/images/VA_portfolio.png",
    },
    {
        title: "Freelance Floor Plan Editor & VA",
        company: "Real Estate (Freelance)",
        description: "Edited floor plans, managed WordPress updates, and provided virtual assistance.",
        tools: ["Photoshop", "WordPress", "Administrative Support"],
        year: "2021 - 2023",
        image: "/images/beyond-the-stars.webp",
    },
];

export function Experiences({activeCategory}) {
    const experiences = activeCategory === "dev" ? workExperienceTech : workExperienceCreative;

    return (
        <section className="experiences" id="experiences">
            <div className="experiences-heading">
                <p className="experiences-eyebrow">EXPERIENCES</p>
                <h2>Where I've <span>Worked</span></h2>
                <p className="experiences-intro">
                    Different roles, industries, and skills, all part of the same journey to grow, learn, and create.
                </p>
                <span className="experiences-rule" aria-hidden="true" />
            </div>

            <div className="experience-list">
                {experiences.map((exp) => (
                    <article className="experience-card" key={`${exp.title}-${exp.year}`}>
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
                            <button type="button" aria-label={`View details for ${exp.title}`}>&rsaquo;</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}