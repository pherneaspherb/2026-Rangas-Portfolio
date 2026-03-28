import { ClipboardCheck, Mail, Building2, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";

function InternshipProjectsSection() {
    const projects = [
        {
            title: "Green Guardian Awards (Evaluator System)",
            slug: "green-guardian-awards",
            description:
                "Developed the evaluator-side system for the Green Guardian Awards platform, enabling efficient review and assessment of submissions from Local Government Units (LGUs). Collaborated in designing the UI/UX using Figma and implemented the frontend using React.js, focusing on usability, structured evaluation workflows, and clean interface design.",
            tech: ["React.js", "Figma"],
            github: "#",
            demo: "#",
            icon: ClipboardCheck,
        },
        {
            title: "Prometheus Iloilo Website",
            slug: "prometheus-iloilo",
            description:
                'Designed the "Contact Us" page for the Prometheus Iloilo website, focusing on user-friendly layout, accessibility, and modern UI design principles using Figma. Ensured the design aligns with the company’s branding and enhances user engagement.',
            tech: ["Figma"],
            icon: Mail,
        },
        {
            title: "Canas Real Estate Website (US Client)",
            slug: "canas-real-estate",
            description:
                "Collaborated directly with a US-based client to design and develop a real estate website using WordPress. Conducted client meetings via Google Meet, gathered requirements, and implemented the website using Elementor and Astra. Assisted in setting up hosting through Hostinger and ensured the website is functional, responsive, and client-ready.",
            tech: ["WordPress", "Elementor", "Astra", "Hostinger"],
            icon: Building2,
        },
        {
            title: "Prominent Enterprise System",
            slug: "prominent-enterprise",
            description:
                "Assisted in the digitalization process of business documents for multiple Local Government Units (LGUs) as part of a large-scale enterprise system. Responsible for organizing, uploading, and managing documents within the platform to ensure accuracy, proper classification, and accessibility. Contributed to improving data organization and supporting the transition from manual to digital workflows.",
            tech: ["Document Management", "Data Organization"],
            icon: FolderKanban,
        },
    ];

    return (
        <section className="mb-16">
            <h2 className="text-5xl font-extrabold">Internship Projects</h2>
            <div className="mt-4 h-1 w-16 rounded bg-cyan-400" />

            <div className="mt-10 grid gap-6 xl:grid-cols-2 items-stretch">
                {projects.map((project) => {
                    const Icon = project.icon;

                    return (
                        <Link
                            key={project.slug}
                            to={`/internship-projects/${project.slug}`}
                            className="block"
                        >
                            <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                                
                                <div>
                                    {/* Icon */}
                                    <div
                                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-md
                                        bg-gradient-to-br from-cyan-400/20 to-cyan-400/5
                                        text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)]
                                        transition group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                                    >
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    {/* Title */}
                                    <div className="min-h-[96px]">
                                        <h3 className="text-3xl font-bold leading-tight">
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-5 min-h-[190px]">
                                        <p className="text-lg leading-7 text-white/85">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="my-6 h-[1px] w-full bg-white/10" />

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 text-base text-white/90 transition group-hover:border-cyan-400/40 group-hover:text-cyan-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-6 flex gap-4 opacity-0 transition group-hover:opacity-100">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-cyan-400 hover:underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-cyan-400 hover:underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>

                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default InternshipProjectsSection;