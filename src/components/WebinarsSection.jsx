import { Brain, Shield, Palette, Wifi, Server, Video } from "lucide-react";

function WebinarsSection() {
  const webinars = [
    "Shaping Tomorrow: Accelerating Economic Growth with AI",
    "5G Technology and IoT: Transforming Connectivity for the Future",
    "Design with Purpose: Usable and Accessible UX for the Future",
    "Resilience Through Technology: IT Solutions for Disaster Risk Reduction and Preparedness",
    "Generative AI and the Future of Content Creation Webinar",
    "DevSecOps: Integrating Security into the Software Development Lifecycle",
    "AI in Governance: Promise and Ethical Issues",
    "Ctrl+Alt+Defend: Defending Critical Infrastructure from Cyber Threats",
    "Nanotechnology and Computational Models: Transforming the Future of Biotechnology",
    "Anime in-Betweening Workflow: A Digital Approach Through Clip Studio Paint",
  ];

  function getIcon(title) {
    const lower = title.toLowerCase();

    if (lower.includes("ai") || lower.includes("machine") || lower.includes("generative")) {
      return Brain;
    }
    if (lower.includes("security") || lower.includes("defend") || lower.includes("cyber")) {
      return Shield;
    }
    if (lower.includes("design") || lower.includes("ux")) {
      return Palette;
    }
    if (lower.includes("5g") || lower.includes("iot") || lower.includes("connectivity")) {
      return Wifi;
    }
    if (lower.includes("infrastructure") || lower.includes("technology")) {
      return Server;
    }

    return Video;
  }

  return (
    <section className="mb-16">
      <h2 className="text-5xl font-extrabold">Webinars & Conferences Attended</h2>
      <div className="mt-4 h-1 w-16 rounded bg-cyan-400" />

      <div className="mt-10 grid gap-6 xl:grid-cols-2 items-stretch">
        {webinars.map((item) => {
          const Icon = getIcon(item);

          return (
            <div
              key={item}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              {/* Icon */}
              <div
                className="flex h-14 w-14 min-w-[56px] items-center justify-center rounded-md 
                bg-gradient-to-br from-cyan-400/20 to-cyan-400/5 
                text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)]
                transition group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <p className="text-2xl font-medium leading-8 text-white/90">
                {item.split(":")[0] && (
                  <>
                    <span className="font-bold text-white">
                      {item.split(":")[0]}:
                    </span>{" "}
                    {item.split(":").slice(1).join(":").trim()}
                  </>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WebinarsSection;