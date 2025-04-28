import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, Mail, Linkedin, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Contact & References</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <h3 className="text-2xl font-bold font-display text-gray-900">Get In Touch</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <User size={20} className="text-primary" />
                  <div>
                    <p className="font-medium text-gray-900">Isaac Siko Zachary</p>
                    <p className="text-gray-500 text-sm">P.O. Box 00521-00100, Embakasi, Nairobi, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <a href="mailto:isaaczachary18@gmail.com" className="text-gray-700 hover:text-primary">
                    isaaczachary18@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <div className="text-gray-700">
                    <p>+254759325915</p>
                    <p>+254101029951</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin size={20} className="text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/isaaczachary" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary"
                  >
                    linkedin.com/in/isaaczachary
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader className="pb-2">
              <h3 className="text-2xl font-bold font-display text-gray-900">References</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Mr. Micah Gesimba</h4>
                  <p className="text-gray-700">Technical Manager, SSL Security Ltd</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <Phone size={16} />
                    <span>+254 725 028 203</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Mail size={16} />
                    <span>mikegesimba1@gmail.com</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Mr. Samson Asimeto</h4>
                  <p className="text-gray-700">Senior Instructor, DEFTEC</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <Phone size={16} />
                    <span>+254724302212</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Mail size={16} />
                    <span>asimetoengineering@gmail.com</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Dr. Tinega Haron</h4>
                  <p className="text-gray-700">Lecturer, KCA University</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <Phone size={16} />
                    <span>+254 718 622 709</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Mail size={16} />
                    <span>htinega@kcau.ac.ke</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Mr. Boniface Ogoro</h4>
                  <p className="text-gray-700">Manager, Humble Crib Investment</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <Phone size={16} />
                    <span>+1 (201) 744-4406</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Mail size={16} />
                    <span>ogoro5874@gmail.com</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
