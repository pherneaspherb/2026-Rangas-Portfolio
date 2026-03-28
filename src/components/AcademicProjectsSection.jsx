import { Brain, Building2, Leaf, CloudSun } from "lucide-react";
import { Link } from "react-router-dom";

function AcademicProjectsSection() {
    const projects = [
        {
            title: "Edentify",
            slug: "edentify",
            description:
                "An advanced image classification application designed for edema detection in dialysis patients, leveraging AI and Machine Learning models for accurate analysis.",
            tech: ["Flutter", "Firebase", "Python", "AI/ML"],
            github: "#",
            demo: "#",
            icon: Brain,
        },
        {
            title: "MarDen Hub",
            slug: "marden-hub",
            description:
                "A comprehensive management system built for laundry and water refilling stations, streamlining operations and tracking customer data.",
            tech: ["Flutter", "Firebase"],
            icon: Building2,
        },
        {
            title: "Sproutly",
            slug: "sproutly",
            description:
                "A mobile application for plant growth monitoring, helping users track plant health, watering schedules, and development.",
            tech: ["Flutter", "Firebase"],
            icon: Leaf,
        },
        {
            title: "TyempoPH",
            slug: "tyempoph",
            description:
                "A responsive weather monitoring platform providing real-time updates and forecasts tailored for regions in the Philippines.",
            tech: ["HTML", "CSS", "JavaScript"],
            icon: CloudSun,
        },
    ];

    return (
        <section className="mb-16">
            <h2 className="text-5xl font-extrabold">Academic Projects</h2>
            <div className="mt-4 h-1 w-16 rounded bg-cyan-400" />

            <div className="mt-10 grid gap-6 xl:grid-cols-2 items-stretch">
                {projects.map((project) => {
                    const Icon = project.icon;

                    return (
                        <Link
                            key={project.slug}
                            to={`/academic-projects/${project.slug}`}
                            className="block"
                        >
                            <div
                                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                            >
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
                                <h3 className="text-3xl font-bold">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <div className="mt-5 min-h-[120px]">
                                    <p className="text-lg leading-7 text-white/85">
                                        {project.description}
                                    </p>
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
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

export default AcademicProjectsSection;