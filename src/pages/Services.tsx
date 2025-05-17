
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Code, Globe, LineChart, Smartphone, 
  PencilRuler, Shield, ArrowRight, Monitor,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";

const services = [
  {
    icon: <Globe className="h-16 w-16" />,
    title: "Web Development",
    description: "Full-stack solutions with modern frameworks and responsive design. We build websites that are not just visually appealing but also highly functional and performant.",
    gradient: "from-blue-500 to-cyan-400",
    id: "web-development"
  },
  {
    icon: <Smartphone className="h-16 w-16" />,
    title: "Mobile Applications",
    description: "Native and cross-platform apps for iOS and Android devices. Our mobile apps are designed to provide seamless user experiences while delivering robust functionality.",
    gradient: "from-green-400 to-emerald-500",
    id: "mobile-applications"
  },
  {
    icon: <PencilRuler className="h-16 w-16" />,
    title: "UI/UX Design",
    description: "User-centered design that delights and engages your audience. We focus on creating intuitive interfaces that guide users through your digital products effortlessly.",
    gradient: "from-pink-500 to-purple-500",
    id: "ui-ux-design"
  },
  {
    icon: <Code className="h-16 w-16" />,
    title: "Custom Software",
    description: "Tailored software solutions that address your specific needs. Our custom software development services help businesses automate processes and improve efficiency.",
    gradient: "from-amber-500 to-orange-500",
    id: "custom-software"
  },
  {
    icon: <Shield className="h-16 w-16" />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security measures. We implement robust security protocols to safeguard your data and systems from cyber threats.",
    gradient: "from-red-500 to-pink-500",
    id: "cybersecurity"
  },
  {
    icon: <LineChart className="h-16 w-16" />,
    title: "Data Analytics",
    description: "Turn your data into actionable insights and strategic advantage. Our data analytics services help you make informed decisions based on concrete data.",
    gradient: "from-violet-500 to-purple-600",
    id: "data-analytics"
  },
  {
    icon: <Monitor className="h-16 w-16" />,
    title: "Digital Strategy",
    description: "Comprehensive digital roadmaps to achieve your business goals. We help you navigate the complex digital landscape and develop strategies that drive growth.",
    gradient: "from-blue-600 to-indigo-600",
    id: "digital-strategy"
  }
];

const Services = () => {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Helmet>
          <title>Our Services | NEXUS</title>
          <meta name="description" content="Explore our comprehensive range of digital services designed to transform your business." />
        </Helmet>
        
        <Navbar />
        
        <main className="pt-24 pb-20">
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">Our Services</h1>
                <p className="text-xl text-muted-foreground">
                  Comprehensive digital solutions tailored to your unique business needs.
                  From web development to advanced data analytics, we've got you covered.
                </p>
              </div>
              
              <div className="flex justify-center">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                      <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                        Home
                      </Link>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <span className="ml-1 text-sm font-medium text-foreground md:ml-2">Services</span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </section>
          
          {/* Services List */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                {services.map((service, index) => (
                  <Link 
                    to={`/services/${service.id}`} 
                    key={index}
                    className="group"
                  >
                    <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover-glow transition-all duration-300 h-full flex flex-col">
                      <div className="mb-6">
                        <div className={`inline-flex items-center justify-center rounded-lg p-4 bg-gradient-to-br ${service.gradient} mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                      
                      <div className="mt-auto pt-6 border-t border-border/30 flex items-center justify-between">
                        <span className="text-primary font-medium">Learn more</span>
                        <ArrowRight className="h-5 w-5 text-primary transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-20 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Need a custom solution?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our team of experts can create tailored solutions designed specifically for your business requirements.
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-cool hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Services;
