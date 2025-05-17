
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const { left, top, width, height } = titleRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        titleRef.current.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-60" />
      
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 
                ref={titleRef}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight transition-transform duration-200"
              >
                <span className="gradient-text">Innovate.</span>
                <br />
                <span>Create.</span>
                <br />
                <span className="gradient-text">Transform.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                We craft digital experiences that drive businesses forward and 
                push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-cool hover:opacity-90 transition-opacity text-lg">
                Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="group">
                Learn more
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-background bg-primary/60"
                  />
                ))}
              </div>
              <p>Join <span className="text-foreground font-medium">2,000+</span> satisfied clients</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-secondary/20 animate-pulse blur-3xl absolute" />
                <div className="w-48 h-48 rounded-full bg-primary/30 animate-pulse animate-delay-300 blur-3xl absolute" />
                <div className="w-72 h-72 rounded-full bg-accent/20 animate-pulse animate-delay-500 blur-3xl absolute" />
                
                {/* 3D Objects */}
                <div className="relative h-64 w-64 flex items-center justify-center animate-float">
                  {/* Cube */}
                  <div className="absolute h-24 w-24 rounded-xl bg-gradient-to-br from-primary to-secondary animate-spin-slow">
                    {/* Inner cube face */}
                    <div className="absolute inset-2 bg-background/60 backdrop-blur-sm rounded-lg" />
                  </div>
                  
                  {/* Circle */}
                  <div className="absolute h-16 w-16 rounded-full bg-gradient-to-br from-accent to-secondary animate-float animate-delay-300" />
                  
                  {/* Abstract shape */}
                  <div className="absolute -right-10 bottom-4 h-20 w-6 rounded-full bg-gradient-to-t from-primary to-purple-300 rotate-45 animate-float animate-delay-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span>Scroll Down</span>
          <ArrowDown className="h-4 w-4 mt-2" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
