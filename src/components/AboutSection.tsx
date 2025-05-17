
import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, Award, Users, Zap } from "lucide-react";

const AboutSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) observer.observe(statsRef.current);
    if (cardsRef.current) {
      Array.from(cardsRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }
    if (imageContainerRef.current) observer.observe(imageContainerRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-60" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-md mx-auto text-center mb-20">
          <h2 className="text-lg font-medium text-primary mb-2">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            We're a team of creative innovators on a digital mission
          </h3>
          <p className="text-muted-foreground">
            Founded in 2015, we've been driving digital transformation with cutting-edge solutions
            for businesses worldwide.
          </p>
        </div>
        
        <div 
          ref={statsRef} 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 opacity-0 translate-y-10 transition-all duration-700"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "150+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "10+", label: "Team Members" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div 
            ref={imageContainerRef} 
            className="relative opacity-0 translate-y-10 transition-all duration-700"
          >
            <div className="rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-cool p-1 rounded-2xl">
                <div className="w-full h-full bg-background/30 backdrop-blur-sm rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="text-4xl font-bold text-glow">NEXUS</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-background border border-border p-4 rounded-xl shadow-lg">
              <p className="font-medium text-primary mb-1">Founded in 2015</p>
              <p className="text-sm text-muted-foreground">Digital innovation leaders</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              We create digital products that empower businesses
            </h3>
            
            <p className="text-muted-foreground">
              Our team combines creative design with cutting-edge technology to deliver
              solutions that stand out in today's competitive digital landscape.
            </p>
            
            <div 
              ref={cardsRef} 
              className="space-y-4"
            >
              {[
                {
                  icon: <Zap className="h-5 w-5 text-primary" />,
                  title: "Innovation First",
                  description: "We constantly push boundaries and explore new technologies."
                },
                {
                  icon: <Users className="h-5 w-5 text-primary" />,
                  title: "Client-Focused",
                  description: "Your success is our priority, with solutions tailored to your needs."
                },
                {
                  icon: <Award className="h-5 w-5 text-primary" />,
                  title: "Award-Winning",
                  description: "Our work has been recognized across multiple industry platforms."
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="p-4 hover-glow opacity-0 translate-y-10 transition-all duration-700 border-border/50 bg-card/50 backdrop-blur-sm"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-primary opacity-70" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
