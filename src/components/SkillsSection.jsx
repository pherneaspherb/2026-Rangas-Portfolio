function SkillCard({ title, skills }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.06] p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
      <h3 className="text-3xl font-bold">{title}</h3>

      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-white/15 bg-white/[0.03] px-4 py-2 text-lg text-white/90"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-5xl font-extrabold">Skills & Expertise</h2>
      <div className="mt-4 h-1 w-16 rounded bg-cyan-400" />

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        
        <SkillCard
          title="Frontend"
          skills={[
            "ReactJS",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Flutter",
            "WordPress",
          ]}
        />

        <SkillCard
          title="Backend & Mobile Development"
          skills={[
            "Dart",
            "Firebase",
            "Python",
            "Supabase",
            "Clerk Auth",
          ]}
        />

        <SkillCard
          title="Tools & Technologies"
          skills={[
            "Elementor",
            "Hostinger",
            "GitHub",
            "VS Code",
            "Figma",
            "Insomnia",
            "PyCharm",
            "StarUML",
            "Lucidchart",
            "Android Studio",
            "Canva",
            "ER Assistant",
          ]}
        />

        <SkillCard
          title="Soft Skills"
          skills={[
            "Communication",
            "Problem-Solving",
            "Teamwork",
            "Adaptability",
            "Time Management",
            "Accountability",
            "Openness to Feedback",
          ]}
        />

        <SkillCard
          title="AI & Productivity Tools"
          skills={[
            "ChatGPT",
            "Gemini",
          ]}
        />

      </div>
    </section>
  );
}

export default SkillsSection;