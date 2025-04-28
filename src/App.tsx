import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import CertificationsSection from './components/sections/CertificationsSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import './styles/App.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      main: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="section">
          <HeroSection />
        </section>
        <section id="about" className="section">
          <AboutSection />
        </section>
        <section id="experience" className="section">
          <ExperienceSection />
        </section>
        <section id="projects" className="section">
          <ProjectsSection />
        </section>
        <section id="skills" className="section">
          <SkillsSection />
        </section>
        <section id="education" className="section">
          <EducationSection />
        </section>
        <section id="certifications" className="section">
          <CertificationsSection />
        </section>
        <section id="gallery" className="section">
          <GallerySection />
        </section>
        <section id="contact" className="section">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
