import React from 'react';
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiGit, 
  SiDocker, 
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs
} from 'react-icons/si';

const techStack = [
  { icon: SiReact, name: 'React', delay: 'delay-0' },
  { icon: SiTypescript, name: 'TypeScript', delay: 'delay-1' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', delay: 'delay-2' },
  { icon: SiNodedotjs, name: 'Node.js', delay: 'delay-3' },
  { icon: SiPython, name: 'Python', delay: 'delay-4' },
  { icon: SiGit, name: 'Git', delay: 'delay-5' },
  { icon: SiDocker, name: 'Docker', delay: 'delay-0' },
  { icon: SiMongodb, name: 'MongoDB', delay: 'delay-1' },
  { icon: SiJavascript, name: 'JavaScript', delay: 'delay-2' },
  { icon: SiHtml5, name: 'HTML5', delay: 'delay-3' },
  { icon: SiCss3, name: 'CSS3', delay: 'delay-4' },
  { icon: SiNextdotjs, name: 'Next.js', delay: 'delay-5' },
];

const TechStack: React.FC = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className={`flex flex-col items-center animate-float ${tech.delay}`}
              >
                <Icon className="w-12 h-12 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors" />
                <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack; 