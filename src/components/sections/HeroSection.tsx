
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-tech-accent/20 to-background"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
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
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#experience">View Experience</a>
            </Button>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
