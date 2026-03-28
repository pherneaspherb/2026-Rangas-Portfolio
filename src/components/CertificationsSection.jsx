import { Laptop, ShieldCheck, Cloud, Award } from "lucide-react";

function CertificationsSection() {
  const certifications = [
    {
      title: "Simplilearn",
      icon: Laptop,
      color: "text-blue-400",
      glow: "shadow-[0_0_20px_rgba(96,165,250,0.4)]",
      items: [
        "Introduction to Flutter",
        "Introduction to Front End Development",
        "Data Analyst 101",
      ],
    },
    {
      title: "Cisco Networking Academy",
      icon: ShieldCheck,
      color: "text-emerald-400",
      glow: "shadow-[0_0_20px_rgba(52,211,153,0.4)]",
      items: [
        "Introduction to Networks",
        "Switching, Routing, and Wireless Essentials",
        "Introduction to Cybersecurity",
        "Cybersecurity Essentials",
      ],
    },
    {
      title: "Google Cloud Skills Boost",
      icon: Cloud,
      color: "text-yellow-400",
      glow: "shadow-[0_0_20px_rgba(250,204,21,0.4)]",
      items: ["MLOps Badge"],
    },
    {
      title: "Devcon",
      icon: Award,
      color: "text-purple-400",
      glow: "shadow-[0_0_20px_rgba(192,132,252,0.4)]",
      items: ["ICP Code Camp 2025"],
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-5xl font-extrabold">Certifications & Badges</h2>
      <div className="mt-4 h-1 w-16 rounded bg-cyan-400" />

      <div className="mt-10 grid gap-6 xl:grid-cols-2 items-stretch">
        {certifications.map((cert) => {
          const Icon = cert.icon;

          return (
            <div
              key={cert.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.06] p-8 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-md 
                  bg-gradient-to-br from-white/10 to-white/5 
                  ${cert.color} ${cert.glow}
                  transition group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-bold">{cert.title}</h3>
              </div>

              {/* Divider */}
              <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* List */}
              <ul className="space-y-3 text-lg text-white/85 min-h-[100px]">
                {cert.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CertificationsSection;