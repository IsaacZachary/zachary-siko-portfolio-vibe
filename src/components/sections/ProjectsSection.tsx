
import { Code, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Coffee Kiosk",
    description: "A modern web application that combines the love for coffee with the convenience of M-PESA payments. Built with React, Node.js, and Safaricom's M-PESA API.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Node.js", "Express.js", "M-PESA API", "Supabase"],
    link: "https://coffee-kiosk-frontend.onrender.com/"
  },
  {
    title: "Berry Wi-Fi Hotspot UI",
    description: "Landing Page for Wi-Fi Hotspot service",
    technologies: ["Canva"]
  },
  {
    title: "Personal Portfolio UI",
    description: "Isaac Zachary - Creative Designer Portfolio Website",
    technologies: ["Figma"]
  },
  {
    title: "Humble Crib Investment Website",
    description: "Config files for a Business Site",
    technologies: ["WordPress", "PHP", "JavaScript"]
  },
  {
    title: "TechCareAfrica - IT Helpdesk System",
    description: "Built to provide affordable and efficient IT solutions",
    technologies: ["Python-Django", "Bootstrap", "PostgreSQL"]
  },
  {
    title: "Django Tailwind Blog",
    description: "A Developer Portfolio & Blog",
    technologies: ["Python-Django", "Tailwind", "PostgreSQL"]
  },
  {
    title: "Firebase Task Management WebApp",
    description: "This project is a simple to-do list developed with ReactJS, Redux and Firebase.",
    technologies: ["ReactJS", "Firebase", "Redux"]
  },
  {
    title: "IT-Workshop Computer Maintenance System",
    description: "Support ticketing project based on Laravel 8.",
    technologies: ["PHP-Laravel", "Vue"]
  },
  {
    title: "Online-Management-System",
    description: "Jua's Enterprise Online Management System in PHP",
    technologies: ["PHP", "JavaScript", "Apache"]
  },
  {
    title: "KW Awards Voting Platform UI",
    description: "A React-based web application for managing and voting in the KW Awards ceremony.",
    technologies: ["Canva", "React", "Redux", "Tailwind"]
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMore = () => {
    setVisibleProjects(prevCount => Math.min(prevCount + 3, projects.length));
  };

  const showLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
        <img 
          src="/lovable-uploads/7b206c01-fa6b-400f-b455-ac517ea4d77c.png" 
          alt="Isaac Zachary" 
          className="w-full h-full object-cover mix-blend-overlay opacity-60" 
        />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white flex items-center justify-center gap-2">
            <Code className="text-tech-accent" size={32} />
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-tech-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <Card key={index} className="group bg-black/50 backdrop-blur-sm border border-white/10 hover:border-tech-accent/50 transition-all duration-300 shadow-xl overflow-hidden">
              <CardHeader className="p-6 pb-3">
                <h3 className="font-bold text-xl text-white group-hover:text-tech-accent transition-colors">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="p-6 pt-3 text-gray-300">
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-black/50 text-gray-200 border-gray-500">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.link && (
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="ghost" size="sm" className="text-tech-accent hover:text-white hover:bg-tech-accent/20">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {visibleProjects < projects.length ? (
            <Button onClick={showMore} variant="outline" size="lg" className="rounded-full border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-white">
              Show More Projects
            </Button>
          ) : (
            <Button onClick={showLess} variant="outline" size="lg" className="rounded-full border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-white">
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
