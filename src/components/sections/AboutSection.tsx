
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Monitor, Shield, Server, Users, Palette } from "lucide-react";

const AboutSection = () => {
  const coreCompetencies = [
    {
      icon: <Monitor size={24} className="text-tech-primary" />,
      title: "IT Support",
      description: "Software/Hardware Setup, OS Installation, LAN/WAN Networking, Documentation"
    },
    {
      icon: <Shield size={24} className="text-tech-accent" />,
      title: "CCTV Systems",
      description: "Installation, Configuration, Monitoring, Maintenance, Troubleshooting"
    },
    {
      icon: <Server size={24} className="text-tech-secondary" />,
      title: "Network Administration",
      description: "Router Configuration, IP Addressing, Remote Access, Device Integration"
    },
    {
      icon: <Users size={24} className="text-tech-primary" />,
      title: "Helpdesk & Client Support",
      description: "Ticketing Systems, Remote Assistance, Customer Service"
    },
    {
      icon: <CheckCircle size={24} className="text-tech-accent" />,
      title: "Tools & Tech",
      description: "Microsoft Office Suite, Windows/Linux OS, Laravel, PHP, Python, Git, MySQL"
    },
    {
      icon: <Palette size={24} className="text-tech-secondary" />,
      title: "Creative Skills",
      description: "Vibe Coding (Cursor Ai | Lovable Ai), Web Design, Graphic Design, Documentation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="mb-12 max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">
                Results-driven IT Support and Security Systems Technician with 4+ years of professional experience 
                specializing in CCTV systems, IT support, network administration, client/server configurations, 
                and customer service support. Strong troubleshooting, documentation, and integration skills. 
                Adept at providing solutions in high-pressure environments with a commitment to teamwork, 
                project delivery, and service excellence.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 font-display">Core Skills & Technical Competencies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCompetencies.map((item, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
