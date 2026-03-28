function AboutSection() {
  return (
    <section className="mb-16">
      <h2 className="text-5xl font-extrabold">About Me</h2>
      <div className="mt-4 h-1 w-16 rounded bg-cyan-400" />

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-xl leading-10 text-white/90 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]">
        <p>
          I am a 4th-year Information Technology student at West Visayas State
          University (WVSU), specializing in Software Technologies. My passion
          lies in software, web, and mobile development, with a strong focus on
          creating impactful solutions using React, Flutter, Firebase, and
          modern web technologies.
        </p>

        <p className="mt-6">
          During my academic journey and internship, I gained experience in UI
          design, frontend development, WordPress website building, and working
          with real-world clients and projects. I enjoy collaborative work,
          problem-solving, and building systems that are both useful and
          user-friendly.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;