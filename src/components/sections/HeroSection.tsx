
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-tech-accent/20 to-background"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div 
          className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Isaac Zachary</span>
            <span className="gradient-text block">
              Technical Support • Creative Design • Web Administration
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Results-driven IT Support and Security Systems Technician with expertise in CCTV systems, 
            network administration, and customer service support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="rounded-full"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full"
              onClick={() => scrollToSection('experience')}
            >
              View Experience
            </Button>
          </div>
        </div>
        <div className={`mt-10 md:mt-0 md:ml-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-tech-primary/30 shadow-2xl">
            <img 
              src="/lovable-uploads/7b206c01-fa6b-400f-b455-ac517ea4d77c.png" 
              alt="Isaac Zachary" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
      <button 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-primary" size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
