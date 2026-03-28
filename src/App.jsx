import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import InternshipProjectsSection from "./components/InternshipProjectsSection";
import AcademicProjectsSection from "./components/AcademicProjectsSection";
import EducationSection from "./components/EducationSection";
import CertificationsSection from "./components/CertificationsSection";
import WebinarsSection from "./components/WebinarsSection";

import ProjectImagesPage from "./pages/ProjectImagesPage";

function Home() {
  return (
    <div className="min-h-screen bg-[#07142b] text-white">
      <div className="mx-auto grid min-h-screen max-w-[1800px] lg:grid-cols-[380px_1fr]">
        <Sidebar />

        <main className="px-6 py-8 md:px-10 lg:px-14">
          <AboutSection />
          <SkillsSection />
          <AcademicProjectsSection />
          <InternshipProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <WebinarsSection />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Academic */}
      <Route
        path="/academic-projects/:slug"
        element={<ProjectImagesPage />}
      />

      {/* Internship */}
      <Route
        path="/internship-projects/:slug"
        element={<ProjectImagesPage />}
      />
    </Routes>
  );
}

export default App;