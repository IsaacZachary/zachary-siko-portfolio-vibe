import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Server, Monitor, Shield, Users, 
  Palette, Activity, Laptop, Headphones, Camera, Music 
} from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = {
    development: [
      "Laravel", "PHP", "Python", "Django", "Git", "MySQL", "Windows OS", "Linux OS"
    ],
    networking: [
      "IP Addressing", "Router Configuration", "LAN/WAN", "Remote Access", "Device Integration"
    ],
    security: [
      "CCTV Installation", "Security System Configuration", "Access Control", "IP Monitoring"
    ],
    support: [
      "Ticketing Systems", "Remote Assistance", "Client Support", "Troubleshooting", "Documentation"
    ],
    creative: [
      "Web Design", "Graphic Design", "Technical Writing", "WordPress", "Canva", "Vibe Coding"
    ]
  };

  const hobbies = [
    {
      icon: <Activity size={24} className="text-tech-primary" />,
      name: "Research and Innovation"
    },
    {
      icon: <Palette size={24} className="text-tech-accent" />,
      name: "Creative Art and Design"
    },
    {
      icon: <Laptop size={24} className="text-tech-secondary" />,
      name: "Gaming"
    },
    {
      icon: <Camera size={24} className="text-tech-primary" />,
      name: "Photography"
    },
    {
      icon: <Music size={24} className="text-tech-accent" />,
      name: "Music"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Skills & Interests</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center font-display text-gray-900">
              <Code size={24} className="mr-2 text-tech-primary" />
              Development Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.development.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm px-3 py-1 bg-gray-100 text-gray-700 border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 mt-8 flex items-center font-display text-gray-900">
              <Server size={24} className="mr-2 text-tech-primary" />
              Networking Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.networking.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm px-3 py-1 bg-gray-100 text-gray-700 border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 mt-8 flex items-center font-display text-gray-900">
              <Shield size={24} className="mr-2 text-tech-primary" />
              Security Systems Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.security.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm px-3 py-1 bg-gray-100 text-gray-700 border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center font-display text-gray-900">
              <Users size={24} className="mr-2 text-tech-accent" />
              Support Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.support.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm px-3 py-1 bg-gray-100 text-gray-700 border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 mt-8 flex items-center font-display text-gray-900">
              <Palette size={24} className="mr-2 text-tech-accent" />
              Creative Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.creative.map((skill, index) => (
                <Badge key={index} variant="outline" className="text-sm px-3 py-1 bg-gray-100 text-gray-700 border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-bold mb-6 mt-8 flex items-center font-display text-gray-900">
              <Headphones size={24} className="mr-2 text-tech-accent" />
              Hobbies & Interests
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  {hobby.icon}
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
