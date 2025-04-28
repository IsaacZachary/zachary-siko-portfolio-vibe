import { ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [terminalText, setTerminalText] = useState("");
  const fullText = "Technical Support • Creative Design • Web Administration";
  const typingSpeed = 50; // milliseconds per character

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Simulate terminal typing effect
      let i = 0;
      const typeInterval = setInterval(() => {
        setTerminalText(fullText.substring(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(typeInterval);
          // Add blinking cursor at the end
          setTimeout(() => {
            setTerminalText(terminalText => terminalText + "█");
            setTimeout(() => {
              setTerminalText(fullText);
            }, 600);
          }, 300);
        }
      }, typingSpeed);
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
    <section id="home" className="min-h-screen flex items-center relative pt-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div 
          className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex items-center gap-2 text-green-600 mb-4">
            <Terminal size={24} className="animate-pulse" />
            <span className="font-mono text-sm">~/portfolio $ ./introduce.sh</span>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="font-mono text-xs text-gray-400 ml-2">terminal — bash — 80×24</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
              <span className="block font-mono text-green-600">{'>'} Isaac Zachary</span>
            </h1>
            <div className="font-mono text-xl md:text-2xl mb-6 text-green-600 h-8">
              <span>{'>'} </span><span className="typing-cursor">{terminalText}</span>
            </div>
            <p className="text-base md:text-lg text-gray-700 mb-8 font-mono">
              <span className="text-blue-500">~/skills $</span> Results-driven IT Support and Security Systems Technician with expertise in CCTV systems, 
              network administration, and customer service support.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="rounded-sm bg-green-600 hover:bg-green-700 font-mono border border-green-700 text-white"
              onClick={() => scrollToSection('contact')}
            >
              <span className="mr-2">$</span> Get in Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-sm font-mono border border-blue-500 text-blue-600 hover:bg-blue-50"
              onClick={() => scrollToSection('experience')}
            >
              <span className="mr-2">#</span> View Experience
            </Button>
          </div>
        </div>
        <div className={`mt-10 md:mt-0 md:ml-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 border-4 border-green-500/20 rounded-lg transform rotate-3 -z-10"></div>
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-lg transform -rotate-3 -z-10"></div>
            <img 
              src="/lovable-uploads/49563804-5552-4831-b2e5-7bcf705dbcc7.png"
              alt="Isaac Zachary" 
              className="w-full h-full object-cover shadow-sm rounded-lg hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm p-2 rounded border border-gray-200 shadow-sm">
              <span className="font-mono text-sm text-green-600">$ ./developer --profile</span>
            </div>
          </div>
        </div>
      </div>
      <button 
        onClick={() => scrollToSection('about')} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-green-600 transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="text-green-600" size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
