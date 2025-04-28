import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Check } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    title: "Power Learn Project (PLP) Software Development",
    issuer: "Power Learn Project Academy",
    date: "Feb 2024 - May 2024",
    skills: ["Python Django", "Web Technologies", "Database Management", "Soft Skills"]
  },
  {
    title: "Bachelor of Science in Software Development",
    issuer: "KCA University",
    date: "Graduated 2023",
    skills: ["Software Development", "Web Development", "Database Design", "Project Management"]
  },
  {
    title: "Kenya Certificate of Secondary Education (KCSE)",
    issuer: "Mwongori High School",
    date: "Graduated 2018",
    skills: ["Mathematics", "English", "Business Studies", "Computer Studies"]
  },
  {
    title: "Kenya Certificate of Primary Education (KCPE)",
    issuer: "Embakasi Garrison Primary School",
    date: "Graduated 2014",
    skills: ["English", "Mathematics", "Social Studies", "Religious Education"]
  }
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
    <section id="certifications" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display flex items-center justify-center gap-2 text-gray-900">
            <Award className="text-tech-primary" size={32} />
            Professional Certifications
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6">
          {certifications.slice(0, visibleCerts).map((cert, index) => (
            <Card key={index} className="group hover:shadow-sm transition-all duration-300 border border-gray-200">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="text-sm text-gray-700">
                    <p>{cert.issuer}</p>
                    <p>{cert.date}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="flex items-center gap-1 bg-gray-100 text-gray-700">
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
            <Button onClick={showMore} variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              Show More
            </Button>
          ) : (
            <Button onClick={showLess} variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
