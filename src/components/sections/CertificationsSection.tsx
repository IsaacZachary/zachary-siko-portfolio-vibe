
import { Award, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: "Software Development Fundamentals",
    issuer: "Power Learn Project",
    date: "Sep 2024",
    skills: ["Python", "Django", "Software Development"],
  },
  {
    title: "Advanced Social Media Strategy Training",
    issuer: "AQskill",
    date: "Jun 2024",
    skills: ["Meta", "AI", "X"],
  },
  {
    title: "Django Python Development - PLP Hackathon II",
    issuer: "Power Learn Project",
    date: "Apr 2024",
    skills: ["Django", "Tailwind CSS", "JavaScript", "PostgreSQL"],
  },
  {
    title: "Website Development Beginners to Advanced",
    issuer: "AQskill",
    date: "Feb 2024",
    skills: ["WordPress", "Web Development", "SEO"],
  },
  {
    title: "BSc. Software Development",
    issuer: "KCA University",
    date: "Nov 2023",
    skills: ["Software Development", "Agile", "AI/ML", "Programming"],
  },
  {
    title: "CHAT GPT Mastery Course",
    issuer: "AQskill",
    date: "Jul 2023",
    skills: ["Artificial Intelligence", "GPT", "Prompt Engineering"],
  },
];

const CertificationsSection = () => {
  const [visibleCerts, setVisibleCerts] = useState(3);

  const showMore = () => {
    setVisibleCerts(prevCount => Math.min(prevCount + 3, certifications.length));
  };

  const showLess = () => {
    setVisibleCerts(3);
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-background via-muted/50 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display flex items-center justify-center gap-2">
            <Award className="text-tech-primary" size={32} />
            Professional Certifications
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.slice(0, visibleCerts).map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-lg text-foreground/90 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>{cert.issuer}</p>
                    <p>{cert.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="flex items-center gap-1">
                        <Check size={12} />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {visibleCerts < certifications.length ? (
            <Button onClick={showMore} variant="outline" size="lg" className="rounded-full">
              Show More
            </Button>
          ) : (
            <Button onClick={showLess} variant="outline" size="lg" className="rounded-full">
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
