
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Code, Globe, LineChart, Smartphone, 
  PencilRuler, Shield, Monitor, ArrowRight,
  ChevronRight, Check
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const allServices = [
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Web Development",
    description: "Full-stack solutions with modern frameworks and responsive design.",
    gradient: "from-blue-500 to-cyan-400",
    id: "web-development",
    features: [
      "Custom website design and development",
      "E-commerce solutions",
      "Progressive Web Applications (PWAs)",
      "Content Management Systems (CMS)",
      "Web portal development",
      "API integration and development"
    ],
    benefits: [
      "Improved user engagement",
      "Mobile-first responsive design",
      "High performance and quick loading times",
      "SEO optimization for better visibility",
      "Cross-browser compatibility"
    ],
    process: [
      "Discovery and requirement analysis",
      "Wireframing and prototyping",
      "Design and front-end development",
      "Back-end development and integration",
      "Testing and quality assurance",
      "Deployment and maintenance"
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description: "Increased conversion rate by 45% through an intuitive shopping experience."
      },
      {
        title: "Corporate Website Overhaul",
        description: "Reduced bounce rate by 30% and increased session duration by 2 minutes."
      }
    ]
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile Applications",
    description: "Native and cross-platform apps for iOS and Android devices.",
    gradient: "from-green-400 to-emerald-500",
    id: "mobile-applications",
    features: [
      "Native iOS app development",
      "Native Android app development",
      "Cross-platform app development",
      "Mobile app UX/UI design",
      "App maintenance and support",
      "App store optimization"
    ],
    benefits: [
      "Enhanced customer engagement",
      "Increased brand loyalty",
      "Additional revenue streams",
      "Improved accessibility to services",
      "Competitive advantage in the market"
    ],
    process: [
      "Concept and strategy development",
      "UI/UX design and prototyping",
      "Development and coding",
      "Testing across devices",
      "Launch and deployment",
      "Ongoing support and updates"
    ],
    caseStudies: [
      {
        title: "Fitness Tracking App",
        description: "Achieved over 100,000 downloads in the first month post-launch."
      },
      {
        title: "Retail Mobile Shopping App",
        description: "30% of company sales now come through the mobile application."
      }
    ]
  },
  {
    icon: <PencilRuler className="h-12 w-12" />,
    title: "UI/UX Design",
    description: "User-centered design that delights and engages your audience.",
    gradient: "from-pink-500 to-purple-500",
    id: "ui-ux-design",
    features: [
      "User research and persona development",
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Design systems creation"
    ],
    benefits: [
      "Improved user satisfaction and retention",
      "Reduced development costs through early testing",
      "Increased conversion rates",
      "Competitive differentiation",
      "Accessible design for all users"
    ],
    process: [
      "User research and discovery",
      "Strategy and information architecture",
      "Wireframing and low-fidelity prototypes",
      "Visual design and high-fidelity mockups",
      "User testing and iteration",
      "Handoff to development"
    ],
    caseStudies: [
      {
        title: "Banking App Redesign",
        description: "User satisfaction increased by 60% after implementing new UX patterns."
      },
      {
        title: "Healthcare Portal Interface",
        description: "Reduced user errors by 75% through intuitive form design."
      }
    ]
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: "Custom Software",
    description: "Tailored software solutions that address your specific needs.",
    gradient: "from-amber-500 to-orange-500",
    id: "custom-software",
    features: [
      "Enterprise software development",
      "Database design and development",
      "Legacy system modernization",
      "Software integration services",
      "Microservices architecture",
      "Quality assurance and testing"
    ],
    benefits: [
      "Automated business processes",
      "Improved operational efficiency",
      "Reduced costs through customization",
      "Scalability for growing businesses",
      "Competitive edge through unique solutions"
    ],
    process: [
      "Business analysis and requirement gathering",
      "System architecture design",
      "Development and iteration",
      "Testing and quality assurance",
      "Deployment and implementation",
      "Maintenance and support"
    ],
    caseStudies: [
      {
        title: "Inventory Management System",
        description: "Reduced manual errors by 90% and processing time by 70%."
      },
      {
        title: "HR Management Solution",
        description: "Streamlined onboarding process from 2 weeks to 3 days."
      }
    ]
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Cybersecurity",
    description: "Protecting your digital assets with advanced security measures.",
    gradient: "from-red-500 to-pink-500",
    id: "cybersecurity",
    features: [
      "Security audits and assessments",
      "Penetration testing",
      "Security architecture design",
      "Compliance solutions (GDPR, HIPAA, etc.)",
      "Data encryption and protection",
      "Security monitoring and management"
    ],
    benefits: [
      "Protection against data breaches",
      "Reduced risk of financial loss",
      "Regulatory compliance assurance",
      "Protection of brand reputation",
      "Customer trust and confidence"
    ],
    process: [
      "Security assessment and gap analysis",
      "Threat modeling and risk assessment",
      "Security strategy development",
      "Implementation of security controls",
      "Security testing and validation",
      "Ongoing monitoring and maintenance"
    ],
    caseStudies: [
      {
        title: "Financial Institution Security Upgrade",
        description: "Zero successful breaches since implementation of new security protocols."
      },
      {
        title: "Healthcare Data Protection",
        description: "Achieved 100% compliance with industry regulations after security overhaul."
      }
    ]
  },
  {
    icon: <LineChart className="h-12 w-12" />,
    title: "Data Analytics",
    description: "Turn your data into actionable insights and strategic advantage.",
    gradient: "from-violet-500 to-purple-600",
    id: "data-analytics",
    features: [
      "Business intelligence solutions",
      "Data visualization and dashboards",
      "Big data processing and analysis",
      "Predictive analytics",
      "Machine learning integration",
      "Data warehousing and ETL"
    ],
    benefits: [
      "Data-driven decision making",
      "Improved operational efficiency",
      "Identification of new business opportunities",
      "Enhanced customer insights",
      "Competitive market intelligence"
    ],
    process: [
      "Data strategy and assessment",
      "Data collection and integration",
      "Data preparation and cleaning",
      "Analysis and model development",
      "Visualization and reporting",
      "Insights implementation"
    ],
    caseStudies: [
      {
        title: "Retail Customer Analysis",
        description: "Personalized marketing campaigns led to 35% increase in repeat purchases."
      },
      {
        title: "Manufacturing Process Optimization",
        description: "Predictive maintenance reduced downtime by 60% and costs by 25%."
      }
    ]
  },
  {
    icon: <Monitor className="h-12 w-12" />,
    title: "Digital Strategy",
    description: "Comprehensive digital roadmaps to achieve your business goals.",
    gradient: "from-blue-600 to-indigo-600",
    id: "digital-strategy",
    features: [
      "Digital transformation consulting",
      "Technology stack assessment",
      "Digital product strategy",
      "IT roadmap development",
      "Technology investment planning",
      "Digital maturity assessment"
    ],
    benefits: [
      "Aligned technology and business goals",
      "Optimized technology investments",
      "Accelerated digital transformation",
      "Risk mitigation in technology decisions",
      "Competitive positioning in digital landscape"
    ],
    process: [
      "Current state assessment",
      "Future state vision development",
      "Gap analysis and roadmap creation",
      "Initiative prioritization and planning",
      "Implementation strategy",
      "Progress measurement and refinement"
    ],
    caseStudies: [
      {
        title: "Insurance Company Transformation",
        description: "Reduced policy processing time from days to minutes through strategic digitization."
      },
      {
        title: "Retail Digital Transformation",
        description: "Omnichannel strategy led to 55% increase in customer lifetime value."
      }
    ]
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<any>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const foundService = allServices.find(s => s.id === serviceId);
    if (foundService) {
      setService(foundService);
    } else {
      navigate('/services', { replace: true });
    }
  }, [serviceId, navigate]);
  
  if (!service) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground min-h-screen">
        <Helmet>
          <title>{service.title} | NEXUS</title>
          <meta name="description" content={service.description} />
        </Helmet>
        
        <Navbar />
        
        <main className="pt-24 pb-20">
          {/* Hero Section */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="flex justify-start mb-6">
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
                        <Link to="/services" className="ml-1 text-sm font-medium text-muted-foreground hover:text-foreground md:ml-2">
                          Services
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        <span className="ml-1 text-sm font-medium text-foreground md:ml-2">{service.title}</span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center justify-center rounded-2xl p-6 bg-gradient-to-br ${service.gradient} mb-8 text-white`}>
                    {service.icon}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                    {service.description} Our team of experienced professionals delivers 
                    exceptional quality and innovative solutions to help you achieve your goals.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                      <Button className="bg-gradient-cool hover:opacity-90 transition-opacity">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <a href="#features">
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square w-full bg-gradient-to-br from-muted/40 to-transparent rounded-2xl flex items-center justify-center p-8">
                    <div className={`w-4/5 h-4/5 rounded-xl bg-gradient-to-br ${service.gradient} opacity-80 flex items-center justify-center`}>
                      {React.cloneElement(service.icon, { className: "h-32 w-32 text-white" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section id="features" className="py-16 bg-card/30">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.features.map((feature: string, idx: number) => (
                  <div key={idx} className="bg-card p-6 rounded-xl border border-border/50">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} mr-4`}>
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="font-medium text-lg">{feature}</h3>
                    </div>
                    <p className="text-muted-foreground ml-11">
                      Our expert team ensures implementation of the highest quality standards.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Process Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
              <div className="flex flex-col max-w-3xl mx-auto">
                {service.process.map((step: string, idx: number) => (
                  <div key={idx} className="relative pl-10 pb-12 last:pb-0">
                    <div className="absolute left-0 top-0 bg-gradient-to-br from-primary/80 to-secondary/80 rounded-full w-6 h-6 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{idx + 1}</span>
                    </div>
                    {idx !== service.process.length - 1 && (
                      <div className="absolute left-[0.6875rem] top-6 bottom-0 w-[1px] bg-border" />
                    )}
                    <h3 className="text-xl font-semibold mb-3">{step}</h3>
                    <p className="text-muted-foreground">
                      Our methodical approach ensures thorough execution of each phase to achieve optimal results.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="py-16 bg-card/30">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-12 text-center">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} self-start mr-4`}>
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
                      <p className="text-muted-foreground">Implementing our solutions brings tangible improvements to your business operations and outcomes.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Case Studies Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {service.caseStudies.map((caseStudy: { title: string, description: string }, idx: number) => (
                  <div key={idx} className="bg-card p-8 rounded-xl border border-border/50">
                    <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                    <p className="text-muted-foreground mb-6">{caseStudy.description}</p>
                    <div className="flex items-center text-primary">
                      <span className="font-medium">Read case study</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact our team today to learn how our {service.title} services
                can help transform your business.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-cool hover:opacity-90 transition-opacity">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ServiceDetail;
