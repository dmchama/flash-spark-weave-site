
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (titleRef.current) {
        const { left, top, width, height } = titleRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        titleRef.current.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg)`;
      }
      
      // Parallax effect for floating elements
      if (animationRef.current) {
        const { left, top, width, height } = animationRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        
        const elements = animationRef.current.querySelectorAll('.floating-element');
        elements.forEach((el, i) => {
          const depth = 1 - i * 0.2; // Different depth for each element
          (el as HTMLElement).style.transform = `translate(${x * depth}px, ${y * depth}px)`;
        });
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
          
          {/* New animated design */}
          <div className="relative">
            <div 
              ref={animationRef} 
              className="aspect-square w-full max-w-md mx-auto relative"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse absolute" />
                <div className="w-64 h-64 rounded-full bg-secondary/20 blur-3xl animate-pulse animate-delay-300 absolute" />
                <div className="w-72 h-72 rounded-full bg-accent/15 blur-3xl animate-pulse animate-delay-500 absolute" />
              </div>
              
              {/* Interactive 3D elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Digital wave */}
                <div className="absolute floating-element w-full h-32 overflow-hidden flex items-center">
                  <svg viewBox="0 0 600 200" className="w-full">
                    <path 
                      className="animate-float fill-primary/20" 
                      d="M-50,100 C100,180 350,50 600,120 L600,200 L-50,200 Z"
                    />
                    <path 
                      className="animate-float animate-delay-300 fill-secondary/20" 
                      d="M-50,80 C150,150 300,20 600,100 L600,200 L-50,200 Z"
                    />
                    <path 
                      className="animate-float animate-delay-500 fill-accent/10" 
                      d="M-50,60 C100,120 400,30 600,70 L600,200 L-50,200 Z"
                    />
                  </svg>
                </div>
                
                {/* Floating geometric shapes */}
                <div className="w-full h-full relative">
                  {/* Cube */}
                  <div className="absolute floating-element top-1/4 left-1/4 h-24 w-24 animate-float">
                    <div className="relative w-full h-full perspective-600">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/80 to-secondary/60 animate-spin-slow">
                        <div className="absolute inset-2 bg-background/80 rounded-lg backdrop-blur-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Sphere */}
                  <div className="absolute floating-element bottom-1/4 right-1/3 h-16 w-16 rounded-full bg-gradient-to-br from-secondary/80 to-accent/60 animate-float animate-delay-200">
                    <div className="absolute inset-1 bg-background/50 rounded-full" />
                    <div className="absolute -left-1 -top-1 w-6 h-6 rounded-full bg-white/10 blur-sm" />
                  </div>
                  
                  {/* Ring */}
                  <div className="absolute floating-element top-1/3 right-1/4 h-28 w-28 rounded-full border-[8px] border-gradient-to-r from-primary/50 to-accent/30 animate-float animate-delay-400 rotate-45" />
                  
                  {/* Abstract line */}
                  <div className="absolute floating-element bottom-1/4 left-1/3 h-20 w-2 rounded-full bg-gradient-to-t from-accent to-primary/40 animate-float animate-delay-300 rotate-[30deg]" />
                  
                  {/* Floating dots */}
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute floating-element w-3 h-3 rounded-full bg-primary/80"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                      }}
                    />
                  ))}
                  
                  {/* Glowing circle */}
                  <div className="absolute floating-element top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-cool opacity-20 blur-xl animate-pulse" />
                </div>
              </div>
              
              {/* Center highlight */}
              <div className="absolute floating-element top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 blur-md" />
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
