import { useParams, useLocation, Link } from "react-router-dom";

function ProjectImagesPage() {
  const { slug } = useParams();
  const location = useLocation();

  const isInternship = location.pathname.includes("internship-projects");

  const basePath = isInternship
    ? "/internship-projects"
    : "/academic-projects";

  console.log("Slug:", slug);
  console.log("Path:", location.pathname);
  console.log("BasePath:", basePath);

  return (
    <div className="min-h-screen bg-[#07142b] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <Link to="/" className="text-cyan-400 hover:underline">
          ← Back to Portfolio
        </Link>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-bold capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        <div className="mt-2 h-1 w-16 rounded bg-cyan-400" />

        {/* Images */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-3"
            >
              <img
                src={`${basePath}/${slug}/${num}.png`}
                alt={`${slug} ${num}`}
                className="w-full rounded-xl object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    "<p style='text-align:center;color:#888'>No image</p>";
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectImagesPage;