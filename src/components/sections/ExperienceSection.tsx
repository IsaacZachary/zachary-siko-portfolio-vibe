import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Internet Customer Technical Support",
      company: "First Basics Technologies Ltd",
      location: "Nairobi, Kenya",
      period: "Feb 2024 – Present",
      responsibilities: [
        "Configuring routers, resolving internet connectivity issues, and escalating service faults.",
        "Website content management (WordPress | Canva) and creative digital updates.",
        "Monitoring surveillance systems; escalating network performance issues.",
        "Managing client onboarding, CRM updates, ticket resolution, and customer support."
      ]
    },
    {
      title: "Learner Support Volunteer (Remote)",
      company: "Power Learn Project Academy (PLP)",
      location: "Remote",
      period: "Mar 2025 – Present",
      responsibilities: [
        "Assisting with technical support tickets, project code reviews, and mentorship."
      ]
    },
    {
      title: "IT Support Technician | Entrepreneur",
      company: "Humble Crib Investment",
      location: "Nairobi, Kenya",
      period: "Feb 2022 – Nov 2023",
      responsibilities: [
        "Provided IT solutions including software deployment, system maintenance, Service delivery and IT consulting.",
        "Installed, configured, and maintained CCTV surveillance systems.",
        "Trained clients on basic computer use, performed inventory and financial management.",
        "Installation and configuration of operating systems (Windows/Linux) and other productive software."
      ]
    },
    {
      title: "Sales and Operations Executive",
      company: "Mabrin Enterprise Ltd",
      location: "Nairobi, Kenya",
      period: "Aug 2021 – Jan 2022",
      responsibilities: [
        "Handled daily sales and service delivery using cloud-based financial tracking (Google Sheets).",
        "Ensuring good client relations and efficient service delivery.",
        "Network security and CCTV management."
      ]
    },
    {
      title: "Entrepreneur | Client Support Consultant",
      company: "JAK All Time Tech",
      location: "Nairobi, Kenya",
      period: "Jan 2021 – Jul 2021",
      responsibilities: [
        "Provided IT client support, managed digital business services and IT systems maintenance.",
        "Handled installations and ICT service registrations (e-citizen, KRA iTax, NTSA).",
        "Designing resumes, business cards, posters, research, and technical documentations.",
        "Led tech equipment procurement and maintenance support."
      ]
    },
    {
      title: "Technical Assistant – CCTV & Network Solutions",
      company: "GES Telecommunications Ltd",
      location: "Nairobi, Kenya",
      period: "Jan 2019 – Feb 2020",
      responsibilities: [
        "Installed and configured CCTV surveillance systems for various clients.",
        "Integrated automated electric fences, access control, and IP monitoring systems.",
        "Conducted system troubleshooting, preventive maintenance, ensuring 99.9% system uptime and user training on installation and troubleshooting.",
        "Assisted in programming and calibration of automated security machines."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-sm border border-gray-200">
              <CardHeader className="bg-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center p-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  {exp.location && <p className="text-gray-500">{exp.location}</p>}
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <CalendarDays size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-500">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-primary mr-2">•</span>
                      <span>{resp}</span>
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

export default ExperienceSection;
