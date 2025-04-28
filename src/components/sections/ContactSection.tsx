
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, Mail, Linkedin, Globe } from "lucide-react";

const ContactSection = () => {
  const references = [
    {
      name: "Mr. Micah Gesimba",
      title: "Technical Manager, SSL Security Ltd",
      phone: "+254 725 028 203",
      email: "mikegesimba1@gmail.com"
    },
    {
      name: "Mr. Samson Asimeto",
      title: "Senior Instructor, DEFTEC",
      phone: "+254724302212",
      email: "asimetoengineering@gmail.com"
    },
    {
      name: "Dr. Tinega Haron",
      title: "Lecturer, KCA University",
      phone: "+254 718 622 709",
      email: "htinega@kcau.ac.ke"
    },
    {
      name: "Mr. Boniface Ogoro",
      title: "Manager, Humble Crib Investment",
      phone: "+1 (201) 744-4406",
      email: "ogoro5874@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Contact & References</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-tech-primary/10 to-tech-accent/10">
            <CardHeader className="pb-2">
              <h3 className="text-2xl font-bold font-display">Get In Touch</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User size={20} className="text-primary" />
                  <div>
                    <p className="font-medium">Isaac Siko Zachary</p>
                    <p className="text-muted-foreground text-sm">P.O. Box 00521-00100, Embakasi, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <a href="mailto:isaaczachary18@gmail.com" className="hover:text-primary">
                    isaaczachary18@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin size={20} className="text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/isaaczachary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/isaaczachary
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe size={20} className="text-primary" />
                  <a 
                    href="https://izach.netlify.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    izach.netlify.app
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">Professional References</h3>
            <div className="space-y-6">
              {references.map((ref, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg">{ref.name}</h4>
                  <p className="text-muted-foreground">{ref.title}</p>
                  <div className="mt-2 text-sm">
                    <p>📞 {ref.phone}</p>
                    <p>✉️ {ref.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
