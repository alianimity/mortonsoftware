import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  BarChart3, 
  Palette, 
  Rocket, 
  Zap, 
  Shield, 
  Lock,
  Lightbulb,
  Sparkles,
  PenTool,
  ShoppingCart,
  Settings,
  Database,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Clock,
  Award,
  Globe,
  TrendingUp,
  Zap as Lightning,
  Star,
  Heart,
  Code2,
  Layers,
  ChevronRight,
  MessageCircle,
  FileText,
  Briefcase
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services - Maker Software',
  description: 'Comprehensive digital transformation services from strategy to implementation. Expert software development, design, cloud solutions, and more.',
  keywords: 'digital services, software development, web design, cloud solutions, digital transformation, consulting services',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "digital-strategy",
      name: "Strategy & Transformation",
      tagline: "Chart your digital future",
      icon: BarChart3,
      description: "Strategic guidance and roadmaps to accelerate your digital transformation journey with data-driven insights.",
      priceRange: "$200 - $15,000",
      featured: true,
      keyFeatures: ["Business Analysis", "Technology Roadmaps", "Market Research", "Strategic Planning"],
      services: [
        "Business Analysis Report",
        "Strategic Advisory Call",
        "Digital Roadmap Workshop",
        "Technology Assessment",
        "Market Research & Analysis",
        "Enterprise Advisory Retainer"
      ]
    },
    {
      id: "product-design",
      name: "Design & Experience",
      tagline: "Designed for success",
      icon: Palette,
      description: "Beautiful, user-centered designs that drive engagement, conversions, and brand recognition.",
      priceRange: "$400 - $8,500",
      featured: true,
      keyFeatures: ["Brand Identity", "UX/UI Design", "Design Systems", "Marketing Assets"],
      services: [
        "Logo Design",
        "Brand Identity Package",
        "UX/UI Design",
        "Website Redesign",
        "Design System Creation",
        "Marketing Asset Package",
        "Complete Brand Transformation"
      ]
    },
    {
      id: "web-development",
      name: "Web & Digital Solutions", 
      tagline: "Websites that convert",
      icon: Rocket,
      description: "Professional websites and digital solutions that drive results, conversions, and business growth.",
      priceRange: "$1,200 - $6,500",
      featured: true,
      keyFeatures: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"],
      services: [
        "Conversion Landing Page",
        "Business Website",
        "E-commerce Platform",
        "Digital Marketplace"
      ]
    },
    {
      id: "software-development",
      name: "Software & Application Development",
      tagline: "Crafted code, lasting value", 
      icon: Zap,
      description: "Robust, scalable applications built with modern technologies that grow with your business needs.",
      priceRange: "$2,800 - $25,000",
      featured: false,
      keyFeatures: ["Custom Development", "API Integration", "Mobile Apps", "Enterprise Solutions"],
      services: [
        "Feature Development Sprint",
        "API Development",
        "Custom Web Application",
        "Mobile Application",
        "Enterprise Application"
      ]
    },
    {
      id: "cloud-solutions",
      name: "Cloud, DevOps & Infrastructure",
      tagline: "Built to scale",
      icon: Shield,
      description: "Modernize your infrastructure with secure, scalable cloud solutions and automated deployment pipelines.",
      priceRange: "$1,200 - $8,000",
      featured: false,
      keyFeatures: ["Cloud Migration", "DevOps Automation", "24/7 Monitoring", "Disaster Recovery"],
      services: [
        "Cloud Infrastructure Assessment",
        "Cloud Migration Services",
        "DevOps Pipeline Setup",
        "Infrastructure as Code",
        "Managed Cloud Services",
        "Disaster Recovery Setup"
      ]
    },
    {
      id: "security-compliance",
      name: "Security & Compliance",
      tagline: "Secure & compliant",
      icon: Lock,
      description: "Comprehensive security solutions and compliance frameworks to protect your business and data.",
      priceRange: "$1,500 - $5,000",
      featured: false,
      keyFeatures: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"],
      services: [
        "Security Monitoring Service",
        "Cybersecurity Audit",
        "Penetration Testing",
        "Security Controls Implementation",
        "Compliance Consulting"
      ]
    },
    {
      id: "prototyping-testing",
      name: "Prototyping & Validation",
      tagline: "Validate before you build",
      icon: Lightbulb,
      description: "Rapid prototyping and comprehensive testing to validate ideas, reduce risk, and ensure quality.",
      priceRange: "$900 - $4,500",
      featured: false,
      keyFeatures: ["Interactive Prototypes", "User Testing", "Concept Validation", "Iterative Design"],
      services: [
        "Wireframe Prototyping",
        "Interactive Prototype",
        "User Testing & Research",
        "Mobile App Prototype",
        "Prototype Testing & Iteration"
      ]
    },
    {
      id: "emerging-tech",
      name: "Innovation & Emerging Tech",
      tagline: "Tomorrow's tech today",
      icon: Sparkles,
      description: "Cutting-edge AI, ML, blockchain, and IoT solutions to give you a competitive advantage in the market.",
      priceRange: "$3,500 - $18,000",
      featured: false,
      keyFeatures: ["AI/ML Solutions", "Blockchain Development", "IoT Integration", "Data Analytics"],
      services: [
        "AI/ML Proof of Concept",
        "Blockchain Smart Contract",
        "IoT Solution Development",
        "AI Chatbot Integration",
        "Data Analytics Platform",
        "Innovation Workshop"
      ]
    },
    {
      id: "content-marketing",
      name: "Content & Marketing",
      tagline: "Content that converts",
      icon: PenTool,
      description: "Strategic content creation and marketing solutions that drive engagement, traffic, and conversions.",
      priceRange: "$150 - $2,500",
      featured: false,
      keyFeatures: ["SEO Optimization", "Content Strategy", "Social Media", "Email Marketing"],
      services: [
        "Copywriting Services",
        "SEO Optimization",
        "Social Media Strategy",
        "Email Marketing Setup",
        "Content Marketing Package"
      ]
    },
    {
      id: "ecommerce-services",
      name: "E-commerce Solutions",
      tagline: "Sell more, scale faster",
      icon: ShoppingCart,
      description: "Complete e-commerce solutions from setup to optimization, designed to maximize sales and growth.",
      priceRange: "$400 - $2,500",
      featured: false,
      keyFeatures: ["Store Setup", "Payment Integration", "Inventory Management", "Analytics"],
      services: [
        "Shopify Store Setup",
        "WooCommerce Development",
        "Payment Gateway Integration",
        "Inventory Management System",
        "E-commerce Analytics Setup"
      ]
    },
    {
      id: "maintenance-support",
      name: "Maintenance & Support",
      tagline: "Always there when you need us",
      icon: Settings,
      description: "Ongoing maintenance, support, and optimization to keep your systems running smoothly and securely.",
      priceRange: "$100 - $1,200",
      featured: false,
      keyFeatures: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Backup Services"],
      services: [
        "Website Maintenance",
        "Software Support & Updates",
        "Performance Monitoring",
        "Backup & Recovery Services",
        "Technical Support Package"
      ]
    },
    {
      id: "database-integration",
      name: "Database & Integration",
      tagline: "Connected and efficient",
      icon: Database,
      description: "Seamless integrations and robust database solutions for streamlined operations and data management.",
      priceRange: "$800 - $3,500",
      featured: false,
      keyFeatures: ["Database Design", "API Integration", "CRM Setup", "Data Migration"],
      services: [
        "Database Design & Setup",
        "Third-Party API Integration",
        "CRM Integration",
        "Workflow Automation",
        "Data Migration Services"
      ]
    }
  ];

  const featuredServices = serviceCategories.filter(service => service.featured);
  const stats = [
    { icon: Users, number: "100+", label: "Projects Delivered" },
    { icon: Target, number: "98%", label: "Client Satisfaction" },
    { icon: Clock, number: "24/7", label: "Support Available" },
    { icon: Award, number: "12", label: "Service Categories" }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Global Expertise, Local Understanding",
      description: "We serve clients worldwide while understanding local market nuances and cultural differences."
    },
    {
      icon: Lightning,
      title: "Rapid Deployment & Iteration",
      description: "Fast turnaround times without compromising quality, with iterative improvements based on real feedback."
    },
    {
      icon: Star,
      title: "Industry-Leading Standards",
      description: "Following best practices, security standards, and modern development methodologies across all projects."
    },
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "Your success is our success. We build long-term partnerships, not just one-time transactions."
    }
  ];

  const ourApproach = [
    {
      phase: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business goals, challenges, and opportunities to create a tailored roadmap.",
      icon: Target
    },
    {
      phase: "02", 
      title: "Design & Planning",
      description: "Create detailed specifications, wireframes, and technical architecture for optimal results.",
      icon: Layers
    },
    {
      phase: "03",
      title: "Development & Implementation",
      description: "Build your solution using modern technologies, agile methodologies, and continuous feedback.",
      icon: Code2
    },
    {
      phase: "04",
      title: "Testing & Optimization",
      description: "Rigorous testing, performance optimization, and refinement to ensure exceptional quality.",
      icon: Settings
    },
    {
      phase: "05",
      title: "Launch & Support",
      description: "Smooth deployment with ongoing support, monitoring, and continuous improvements.",
      icon: Rocket
    }
  ];

  const industries = [
    { name: "Fintech & Banking", description: "Secure financial solutions", icon: Briefcase },
    { name: "Healthcare & Wellness", description: "HIPAA-compliant systems", icon: Heart },
    { name: "E-commerce & Retail", description: "Sales-driving platforms", icon: ShoppingCart },
    { name: "Education & Training", description: "Learning management systems", icon: FileText },
    { name: "SaaS & Technology", description: "Scalable software products", icon: Code2 },
    { name: "Startups & SMBs", description: "Growth-focused solutions", icon: TrendingUp }
  ];

  const technologies = [
    { category: "Frontend", techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", techs: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"] },
    { category: "Cloud", techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
    { category: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"] }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-maker-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-maker-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Comprehensive Digital Services</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Complete Digital Transformation 
                <span className="font-brand text-maker-yellow block mt-2">Built for Global Success</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                From $20 micro-services to enterprise solutions, we deliver world-class digital experiences 
                that scale with your ambitions. Trusted by startups, SMBs, and Fortune 500 companies across 6 continents.
              </p>

              {/* Key Value Props */}
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2">
                  <Globe className="h-4 w-4 text-maker-yellow" />
                  <span className="text-maker-yellow font-medium text-sm">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2">
                  <Lightning className="h-4 w-4 text-maker-yellow" />
                  <span className="text-maker-yellow font-medium text-sm">Rapid Delivery</span>
                </div>
                <div className="flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2">
                  <Star className="h-4 w-4 text-maker-yellow" />
                  <span className="text-maker-yellow font-medium text-sm">Premium Quality</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Pricing</span>
                  <BarChart3 className="h-4 w-4" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl w-fit mx-auto mb-2">
                      <stat.icon className="h-5 w-5 text-maker-yellow" />
                    </div>
                    <div className="text-2xl font-bold text-maker-yellow">{stat.number}</div>
                    <div className="text-sm text-maker-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our <span className="font-brand text-maker-yellow">Featured</span> Services
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                The most popular services that drive immediate business impact and transformation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Link href={`/services/${service.id}`}>
                  <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full cursor-pointer">
                    {/* Featured Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-4 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl group-hover:bg-maker-yellow/20 transition-colors">
                        {service.icon ? <service.icon className="h-8 w-8 text-maker-yellow" /> : <Sparkles className="h-8 w-8 text-maker-yellow" />}
                      </div>
                      <span className="px-3 py-1 bg-maker-yellow text-maker-blue-950 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-maker-yellow transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-maker-yellow font-medium mb-4">{service.tagline}</p>
                    
                    <p className="text-maker-blue-200 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.keyFeatures.map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-maker-yellow flex-shrink-0" />
                          <span className="text-maker-blue-100 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-maker-blue-700">
                      <div className="text-maker-yellow font-semibold">{service.priceRange}</div>
                      <div className="flex items-center space-x-2 text-maker-blue-200 group-hover:text-maker-yellow transition-colors">
                        <span className="text-sm">Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Complete <span className="font-brand text-maker-yellow">Service</span> Portfolio
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Comprehensive digital solutions covering every aspect of your business transformation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.05}>
                <Link href={`/services/${service.id}`}>
                  <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-lg group-hover:bg-maker-yellow/20 transition-colors">
                        {service.icon ? <service.icon className="h-6 w-6 text-maker-yellow" /> : <Sparkles className="h-6 w-6 text-maker-yellow" />}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-maker-yellow transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-maker-yellow text-sm">{service.tagline}</p>
                      </div>
                    </div>

                    <p className="text-maker-blue-200 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-maker-yellow font-semibold text-sm">{service.priceRange}</span>
                      <ArrowRight className="h-4 w-4 text-maker-blue-200 group-hover:text-maker-yellow transition-colors" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Maker Software */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose <span className="font-brand text-maker-yellow">Maker Software</span>?
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-3xl mx-auto">
                We don&apos;t just build software - we craft digital experiences that transform businesses and drive real results
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl group-hover:bg-maker-yellow/20 transition-colors">
                      <item.icon className="h-8 w-8 text-maker-yellow" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-maker-yellow transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-maker-blue-200 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-maker-blue-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-maker-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-maker-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Proven <span className="font-brand text-maker-yellow">Development Process</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-3xl mx-auto">
                A systematic approach that ensures project success, from initial concept to ongoing support
              </p>
            </div>
          </AnimatedSection>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative max-w-7xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-maker-yellow via-maker-yellow to-maker-yellow opacity-30"></div>
            
            {ourApproach.map((phase, index) => (
              <AnimatedSection key={phase.phase} delay={index * 0.15}>
                <div className={`relative flex items-center mb-32 last:mb-0 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-20 h-20 bg-maker-yellow rounded-full flex items-center justify-center shadow-xl border-4 border-maker-blue-950 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-maker-blue-950">{phase.phase}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-16' : 'ml-auto pl-16'}`}>
                    <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-[1.03] relative">
                      {/* Arrow pointing to timeline */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                        index % 2 === 0 
                          ? 'right-[-12px] border-l-[12px] border-l-maker-blue-700 border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent'
                          : 'left-[-12px] border-r-[12px] border-r-maker-blue-700 border-t-[12px] border-b-[12px] border-t-transparent border-b-transparent'
                      }`}></div>
                      
                      {/* Icon Header */}
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="p-4 bg-maker-yellow/10 border-2 border-maker-yellow/30 rounded-2xl group-hover:bg-maker-yellow/20 group-hover:border-maker-yellow/50 transition-all duration-300">
                          <phase.icon className="h-8 w-8 text-maker-yellow" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-maker-yellow transition-colors duration-300">
                            {phase.title}
                          </h3>
                          <div className="text-maker-yellow/60 text-sm font-medium mt-1">
                            Phase {phase.phase}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-maker-blue-200 leading-relaxed text-lg">
                        {phase.description}
                      </p>
                      
                      {/* Decorative Element */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <phase.icon className="h-16 w-16 text-maker-yellow" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {ourApproach.map((phase, index) => (
              <AnimatedSection key={phase.phase} delay={index * 0.1}>
                <div className="relative">
                  {/* Mobile Timeline Line */}
                  {index !== ourApproach.length - 1 && (
                    <div className="absolute left-10 top-20 w-1 h-16 bg-maker-yellow/30"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Phase Number */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-maker-yellow rounded-full flex items-center justify-center shadow-xl border-4 border-maker-blue-950">
                        <span className="text-2xl font-bold text-maker-blue-950">{phase.phase}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-lg group-hover:bg-maker-yellow/20 transition-colors">
                          <phase.icon className="h-6 w-6 text-maker-yellow" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-maker-yellow transition-colors">
                            {phase.title}
                          </h3>
                          <div className="text-maker-yellow/60 text-xs font-medium">
                            Phase {phase.phase}
                          </div>
                        </div>
                      </div>
                      <p className="text-maker-blue-200 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-maker-blue-900 relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 208, 9, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Industries We <span className="font-brand text-maker-yellow">Transform</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-3xl mx-auto">
                Deep industry expertise across diverse sectors, from fintech startups to healthcare enterprises
              </p>
            </div>
          </AnimatedSection>

          {/* Masonry-Style Cascading Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => {
                // Create different heights for masonry effect
                const heights = ['h-64', 'h-72', 'h-80', 'h-64', 'h-72', 'h-80'];
                const height = heights[index % heights.length];
                
                return (
                  <AnimatedSection key={industry.name} delay={index * 0.15}>
                    <div className={`${height} group cursor-pointer relative`}>
                      {/* Main Card */}
                      <div className="absolute inset-0 bg-maker-blue-950 border-2 border-maker-blue-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:scale-[1.02] overflow-hidden">
                        {/* Animated Background Pattern */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-br from-maker-yellow/5 via-transparent to-maker-yellow/10"></div>
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-maker-yellow/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-8">
                          {/* Top Section */}
                          <div className="text-center">
                            <div className="relative inline-block mb-6">
                              <div className="p-6 bg-maker-yellow/10 border-2 border-maker-yellow/30 rounded-3xl group-hover:bg-maker-yellow/20 group-hover:border-maker-yellow/50 transition-all duration-500 group-hover:rotate-6 transform">
                                <industry.icon className="h-12 w-12 text-maker-yellow group-hover:scale-110 transition-transform duration-300" />
                              </div>
                              {/* Floating Ring */}
                              <div className="absolute inset-0 border-2 border-maker-yellow/20 rounded-3xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-maker-yellow transition-colors duration-300">
                              {industry.name}
                            </h3>
                            <p className="text-maker-blue-200 leading-relaxed">
                              {industry.description}
                            </p>
                          </div>

                          {/* Bottom Section - Floating Elements */}
                          <div className="flex justify-center space-x-2 mt-6">
                            <div className="w-2 h-2 bg-maker-yellow/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 animate-bounce"></div>
                            <div className="w-2 h-2 bg-maker-yellow/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-bounce"></div>
                            <div className="w-2 h-2 bg-maker-yellow/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 animate-bounce"></div>
                          </div>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-maker-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-maker-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-maker-yellow/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 scale-110"></div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Bottom Stats Row */}
          <AnimatedSection delay={1.2}>
            <div className="mt-20 text-center">
              <div className="inline-block bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 shadow-xl">
                <div className="flex flex-wrap justify-center gap-12">
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-maker-yellow mb-2 group-hover:scale-110 transition-transform duration-300">6+</div>
                    <div className="text-maker-blue-300 text-sm font-medium">Key Industries</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-maker-yellow mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                    <div className="text-maker-blue-300 text-sm font-medium">Successful Projects</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-maker-yellow mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                    <div className="text-maker-blue-300 text-sm font-medium">Client Satisfaction</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-4xl font-bold text-maker-yellow mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-maker-blue-300 text-sm font-medium">Global Support</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={1.5}>
            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-maker-yellow to-maker-yellow/80 text-maker-blue-950 font-bold px-8 py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <MessageCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                <span>Don&apos;t see your industry? Let&apos;s discuss your unique needs</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Modern <span className="font-brand text-maker-yellow">Technology Stack</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-3xl mx-auto">
                We use cutting-edge technologies and frameworks to build scalable, secure, and performant solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.category} delay={index * 0.1}>
                <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  <h3 className="text-lg font-bold text-maker-yellow mb-4 text-center">
                    {tech.category}
                  </h3>
                  <div className="space-y-3">
                    {tech.techs.map((technology) => (
                      <div key={technology} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-maker-yellow flex-shrink-0" />
                        <span className="text-maker-blue-100 text-sm">{technology}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl">
                  <Sparkles className="h-6 w-6 text-maker-yellow" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Start Your <span className="font-brand text-maker-yellow">Project</span>?
                </h2>
              </div>
              
              <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your digital transformation goals and create a custom solution 
                that drives real business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Pricing</span>
                  <BarChart3 className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
