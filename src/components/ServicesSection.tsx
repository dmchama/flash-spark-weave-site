
import React, { useEffect, useRef } from "react";
import { 
  Code, Globe, LineChart, Smartphone, 
  PencilRuler, Shield, ArrowRight, Monitor 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);
    
    if (headerRef.current) observer.observe(headerRef.current);
    
    if (servicesRef.current) {
      Array.from(servicesRef.current.children).forEach((child, index) => {
        // Add increasing delay based on index
        child.setAttribute('style', `transition-delay: ${index * 100}ms`);
        observer.observe(child);
      });
    }
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack solutions with modern frameworks and responsive design.",
      gradient: "from-blue-500 to-cyan-400",
      id: "web-development"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform apps for iOS and Android devices.",
      gradient: "from-green-400 to-emerald-500",
      id: "mobile-applications"
    },
    {
      icon: <PencilRuler className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design that delights and engages your audience.",
      gradient: "from-pink-500 to-purple-500",
      id: "ui-ux-design"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software",
      description: "Tailored software solutions that address your specific needs.",
      gradient: "from-amber-500 to-orange-500",
      id: "custom-software"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Protecting your digital assets with advanced security measures.",
      gradient: "from-red-500 to-pink-500",
      id: "cybersecurity"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights and strategic advantage.",
      gradient: "from-violet-500 to-purple-600",
      id: "data-analytics"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Digital Strategy",
      description: "Comprehensive digital roadmaps to achieve your business goals.",
      gradient: "from-blue-600 to-indigo-600",
      id: "digital-strategy"
    },
    {
      icon: <ArrowRight className="h-8 w-8" />,
      title: "View All Services",
      description: "Explore our complete range of digital transformation services.",
      gradient: "from-gray-700 to-gray-900",
      id: "all-services"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-background/50">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          ref={headerRef} 
          className="max-w-2xl mx-auto text-center mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-lg font-medium text-primary mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Transform your business with our digital expertise
          </h3>
          <p className="text-muted-foreground">
            From web and mobile development to cutting-edge AI solutions, we offer
            a comprehensive suite of services to elevate your digital presence.
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={index} className="block">
              <div
                className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-glow transition-all duration-300 h-64 flex flex-col justify-between opacity-0 translate-y-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
                
                <div>
                  <div className={`inline-flex items-center justify-center rounded-lg p-3 bg-gradient-to-br ${service.gradient} mb-4 text-white`}>
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between text-sm">
                  <span className="text-primary">Learn more</span>
                  <ArrowRight className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/services">
            <Button className="bg-gradient-cool hover:opacity-90 transition-opacity">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
