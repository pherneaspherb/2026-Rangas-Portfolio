function EducationCard({ icon, title, school, tags, status, extra, iconBg }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.06] p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div
          className={`flex h-18 w-18 min-h-[72px] min-w-[72px] items-center justify-center rounded-2xl text-3xl ${iconBg}`}
        >
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="mt-2 text-2xl text-white/90">{school}</p>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-lg text-white/75">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/15 bg-white/[0.03] px-4 py-2"
              >
                {tag}
              </span>
            ))}

            <span className="hidden text-white/20 md:inline">•</span>
            <span className="font-semibold text-cyan-400">{status}</span>

            {extra && (
              <>
                <span className="hidden text-white/20 md:inline">•</span>
                <span>{extra}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <section className="mb-16">
      <h2 className="text-5xl font-extrabold">Education</h2>
      <div className="mt-4 h-1 w-16 rounded bg-cyan-400" />

      <div className="mt-10 space-y-8">
        <EducationCard
          icon="🎓"
          iconBg="bg-cyan-400/10 text-cyan-400"
          title="Bachelor of Science in Information Technology"
          school="West Visayas State University (WVSU) Main Campus"
          tags={["Major in Software Technologies"]}
          status="4th Year Student"
          extra="Expected Graduation: June 2026"
        />

        <EducationCard
          icon="👨‍🎓"
          iconBg="bg-emerald-400/10 text-emerald-400"
          title="Senior High School"
          school="Cabatuan National Comprehensive High School"
          tags={["Humanities and Social Sciences (HUMSS) Strand"]}
          status="Graduated"
          extra="Completed"
        />

        <EducationCard
          icon="👦"
          iconBg="bg-emerald-400/10 text-emerald-400"
          title="Junior High School"
          school="Cabatuan National Comprehensive High School"
          tags={["ICTE (Information and Communications Technology Enhanced"]}
          status="Graduated"
          extra="Completed"
        />
      </div>
    </section>
  );
}

export default EducationSection;