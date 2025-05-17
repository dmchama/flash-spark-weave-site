
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-md mx-auto text-center mb-16">
          <h2 className="text-lg font-medium text-primary mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your digital presence?
          </h3>
          <p className="text-muted-foreground">
            Get in touch with our team and let's discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 md:p-8 hover-glow">
            <h4 className="text-xl font-semibold mb-6">Send us a message</h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-cool hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> 
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-glow">
              <div className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Email Us</h5>
                  <p className="text-muted-foreground">hello@nexustech.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-glow">
              <div className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Call Us</h5>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover-glow">
              <div className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium mb-1">Visit Us</h5>
                  <p className="text-muted-foreground">123 Innovation Street, Tech City, TC 10101</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
