
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import GallerySection from "@/components/sections/GallerySection";

const Index = () => {
  useEffect(() => {
    // Terminal-inspired page title animation
    const originalTitle = document.title;
    let titlePrefix = "> ";
    
    const updateTitle = () => {
      document.title = titlePrefix + "Isaac Zachary | Portfolio";
      titlePrefix = titlePrefix === "> " ? "$ " : "> ";
    };
    
    const titleInterval = setInterval(updateTitle, 1000);
    
    return () => {
      clearInterval(titleInterval);
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1A1F2C]">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
