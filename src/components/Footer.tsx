
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/70 backdrop-blur-sm border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4 flex items-center">
              <span className="text-2xl font-bold gradient-text">NEXUS</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming ideas into digital reality with cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, label: "Facebook" },
                { icon: <Twitter size={18} />, label: "Twitter" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                { icon: <Github size={18} />, label: "GitHub" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Team", "Careers", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Web Development", 
                "Mobile Applications", 
                "UI/UX Design", 
                "Digital Strategy", 
                "Cybersecurity"
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <form className="flex gap-2">
              <div className="flex-grow">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-background/50"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Nexus Technologies. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
