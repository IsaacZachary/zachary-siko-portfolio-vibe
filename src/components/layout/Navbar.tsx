import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">IZ</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => scrollToSection('home')}>Home</Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>About</Button>
            <Button variant="ghost" onClick={() => scrollToSection('experience')}>Experience</Button>
            <Button variant="ghost" onClick={() => scrollToSection('projects')}>Projects</Button>
            <Button variant="ghost" onClick={() => scrollToSection('skills')}>Skills</Button>
            <Button variant="ghost" onClick={() => scrollToSection('education')}>Education</Button>
            <Button variant="ghost" onClick={() => scrollToSection('certifications')}>Certifications</Button>
            <Button variant="ghost" onClick={() => scrollToSection('gallery')}>Gallery</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>Contact</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 