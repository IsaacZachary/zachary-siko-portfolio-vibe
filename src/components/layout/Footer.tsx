
import { Github, Linkedin, Globe, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-display">Isaac Zachary</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              IT Support & Security Systems Technician specializing in CCTV systems, IT support, 
              network administration, client/server configurations, and customer service support.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/isaaczachary" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://izach.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
              <a 
                href="mailto:isaaczachary18@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-2xl font-bold mb-4 font-display">Contact</h3>
            <p className="mb-2">📞 +254759325915 | +254101029951</p>
            <p className="mb-2">✉️ isaaczachary18@gmail.com</p>
            <p className="mb-2">🔗 <a href="https://www.linkedin.com/in/isaaczachary" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary">LinkedIn: isaaczachary</a></p>
            <p>🌐 <a href="https://izach.netlify.app" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary">Website: izach.netlify.app</a></p>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Isaac Zachary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
