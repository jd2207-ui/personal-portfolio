import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberDev — Aspiring Cybersecurity Expert Portfolio" },
      { name: "description", content: "Portfolio of an aspiring cybersecurity expert showcasing projects, skills in Linux, networking, C programming, and security research." },
      { property: "og:title", content: "CyberDev — Aspiring Cybersecurity Expert Portfolio" },
      { property: "og:description", content: "Explore my cybersecurity projects, skills, and learning journey." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
