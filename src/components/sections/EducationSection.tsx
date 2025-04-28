
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const educations = [
    {
      institution: "Power Learn Project Academy (PLP)",
      degree: "Software Development Program",
      period: "Feb 2024 – May 2024",
      details: [
        "Python Django, Web Technologies, Database Management, Soft Skills.",
        "Volunteer Role (Mar 2025 – Present): Support Desk | Ticket Addressing | Code Review"
      ]
    },
    {
      institution: "KCA University, Nairobi, Kenya",
      degree: "Bachelor of Science (B.Sc.) in Software Development",
      period: "Graduated 2023",
      details: [
        "Second Class Honors (Upper Division)",
        "Class Representative, Student Association of KCA University (SAKU)",
        "Project: Jua's Enterprise Online Management System (PHP)"
      ]
    },
    {
      institution: "Mwongori High School, Sotik, Kenya",
      degree: "Kenya Certificate of Secondary Education (KCSE)",
      period: "Graduated 2018",
      details: [
        "Mean Grade: B- (59 Points)",
        "Best subjects: Mathematics (B+), English (B), Business Studies (B)",
        "Bell Ringer (Student Leadership Role) from Form 2 to Form 3."
      ]
    },
    {
      institution: "Embakasi Garrison Primary School, Nairobi, Kenya",
      degree: "Kenya Certificate of Primary Education (KCPE)",
      period: "Graduated 2014",
      details: [
        "Marks: 333 B-",
        "Best subjects: English (A-) Mathematics (B), Social Studies & Religious Education (B)"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center p-6">
                <div className="flex items-start gap-4">
                  <GraduationCap size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                  <CalendarDays size={16} className="text-muted-foreground mr-2" />
                  <span className="text-muted-foreground">{edu.period}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
