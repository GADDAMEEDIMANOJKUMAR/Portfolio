import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export const Portfolio = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <ThemeToggle />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};