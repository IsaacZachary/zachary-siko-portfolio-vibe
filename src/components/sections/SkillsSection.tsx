import React from 'react';
import TechStack from './TechStack';
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• React.js & Next.js</li>
              <li>• TypeScript & JavaScript</li>
              <li>• HTML5 & CSS3</li>
              <li>• Tailwind CSS</li>
              <li>• Responsive Design</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Node.js</li>
              <li>• Python</li>
              <li>• RESTful APIs</li>
              <li>• MongoDB</li>
              <li>• SQL Databases</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">DevOps & Tools</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Git & GitHub</li>
              <li>• Docker</li>
              <li>• CI/CD</li>
              <li>• AWS</li>
              <li>• Linux</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Security & Networking</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Network Security</li>
              <li>• CCTV Systems</li>
              <li>• Firewall Configuration</li>
              <li>• VPN Setup</li>
              <li>• Security Auditing</li>
            </ul>
          </div>
        </div>
        
        <TechStack />
      </div>
    </section>
  );
};

export default SkillsSection;
