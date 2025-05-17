
import React, { useEffect, useRef } from "react";

const MouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const follower = followerRef.current;
    const primary = primaryRef.current;
    
    if (!follower || !primary) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let primaryX = 0;
    let primaryY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateFollower = () => {
      // Calculate distance between current position and mouse
      const distanceX = mouseX - followerX;
      const distanceY = mouseY - followerY;
      
      // Move follower with delay (easing)
      followerX += distanceX * 0.1;
      followerY += distanceY * 0.1;
      
      // Move primary with more delay
      primaryX += (mouseX - primaryX) * 0.15;
      primaryY += (mouseY - primaryY) * 0.15;
      
      // Apply position
      follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      primary.style.transform = `translate(${primaryX - 5}px, ${primaryY - 5}px)`;
      
      requestAnimationFrame(animateFollower);
    };

    animateFollower();
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={followerRef}
        className="fixed w-10 h-10 rounded-full border border-primary opacity-30 pointer-events-none z-50 hidden md:block"
        style={{ top: 0, left: 0 }}
      />
      <div 
        ref={primaryRef}
        className="fixed w-2.5 h-2.5 rounded-full bg-primary opacity-70 pointer-events-none z-50 hidden md:block"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
};

export default MouseFollower;
