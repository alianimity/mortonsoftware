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
  Tool,
  Database,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Clock,
  Award
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
      name: "Digital Strategy & Consulting",
      tagline: "Chart your digital future",
      icon: BarChart3,
      description: "Strategic guidance and roadmaps to accelerate your digital transformation journey.",
      priceRange: "$200 - $15,000",
      featured: true,
      services: [
        "Strategic Digital Planning",
        "Business Analysis & Assessment", 
        "Technology Roadmapping",
        "Market Research & Competitive Analysis"
      ]
    },
    {
      id: "product-design",
      name: "Product Design & Branding",
      tagline: "Designed for success",
      icon: Palette,
      description: "Beautiful, user-centered designs that drive engagement and conversions.",
      priceRange: "$500 - $12,000",
      featured: true,
      services: [
        "Logo Design & Brand Identity",
        "UX/UI Design",
        "Design Systems",
        "Marketing Materials"
      ]
    },
    {
      id: "web-development",
      name: "Web & Digital Solutions", 
      tagline: "Websites that convert",
      icon: Rocket,
      description: "Professional websites and digital solutions that drive results and grow your business.",
      priceRange: "$1,200 - $6,500",
      featured: true,
      services: [
        "Landing Pages",
        "Business Websites", 
        "E-commerce Platforms",
        "Digital Marketplaces"
      ]
    },
    {
      id: "software-development",
      name: "Software & Application Development",
      tagline: "Crafted code, lasting value", 
      icon: Zap,
      description: "Robust, scalable applications built with modern technologies that grow with your business.",
      priceRange: "$2,800 - $25,000",
      featured: false,
      services: [
        "Custom Web Applications",
        "Mobile Apps",
        "API Development",
        "Enterprise Solutions"
      ]
    },
    {
      id: "cloud-solutions",
      name: "Cloud, DevOps & Infrastructure",
      tagline: "Built to scale",
      icon: Shield,
      description: "Modernize your infrastructure with secure, scalable cloud solutions and automation.",
      priceRange: "$1,200/month - $8,000",
      featured: false,
      services: [
        "Cloud Migration",
        "DevOps Automation",
        "Infrastructure as Code", 
        "24/7 Monitoring"
      ]
    },
    {
      id: "security-compliance",
      name: "Security & Compliance",
      tagline: "Secure & compliant",
      icon: Lock,
      description: "Comprehensive security solutions and compliance frameworks to protect your business.",
      priceRange: "$1,500 - $12,000",
      featured: false,
      services: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Consulting",
        "Security Implementation"
      ]
    },
    {
      id: "prototyping-testing",
      name: "Prototyping & Testing",
      tagline: "Validate before you build",
      icon: Lightbulb,
      description: "Rapid prototyping and comprehensive testing to validate ideas and ensure quality.",
      priceRange: "$800 - $5,500",
      featured: false,
      services: [
        "MVP Development",
        "Interactive Prototypes",
        "User Testing",
        "Quality Assurance"
      ]
    },
    {
      id: "emerging-tech",
      name: "Emerging Technologies",
      tagline: "Tomorrow's tech today",
      icon: Sparkles,
      description: "Cutting-edge AI, ML, and blockchain solutions to give you a competitive advantage.",
      priceRange: "$3,500 - $20,000",
      featured: false,
      services: [
        "AI/ML Implementation",
        "Blockchain Development",
        "IoT Solutions",
        "Advanced Analytics"
      ]
    },
    {
      id: "content-marketing",
      name: "Content & Marketing Services",
      tagline: "Content that converts",
      icon: PenTool,
      description: "Strategic content creation and marketing solutions that drive engagement and growth.",
      priceRange: "$500 - $4,500",
      featured: false,
      services: [
        "Content Strategy",
        "SEO Optimization",
        "Social Media Management",
        "Marketing Automation"
      ]
    },
    {
      id: "ecommerce-services",
      name: "E-commerce Solutions",
      tagline: "Sell more, scale faster",
      icon: ShoppingCart,
      description: "Complete e-commerce solutions from setup to optimization and growth strategies.",
      priceRange: "$2,200 - $8,500",
      featured: false,
      services: [
        "Store Setup & Configuration",
        "Payment Integration",
        "Inventory Management",
        "Growth Optimization"
      ]
    },
    {
      id: "maintenance-support",
      name: "Maintenance & Support",
      tagline: "Always there when you need us",
      icon: Tool,
      description: "Ongoing maintenance, support, and optimization to keep your systems running smoothly.",
      priceRange: "$200/month - $2,500",
      featured: false,
      services: [
        "24/7 Technical Support",
        "Regular Updates & Maintenance",
        "Performance Monitoring",
        "Emergency Response"
      ]
    },
    {
      id: "database-integration",
      name: "Database & Integration Services",
      tagline: "Connected and efficient",
      icon: Database,
      description: "Seamless integrations and robust database solutions for streamlined operations.",
      priceRange: "$1,800 - $7,500",
      featured: false,
      services: [
        "Database Design & Setup",
        "Third-party Integrations",
        "Data Migration",
        "API Connections"
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
                Transform Your Business with 
                <span className="font-brand text-maker-yellow block mt-2">Expert Digital Solutions</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                From strategic consulting to full-scale development, we provide end-to-end digital 
                transformation services that drive measurable growth for businesses worldwide.
              </p>

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
                        <service.icon className="h-8 w-8 text-maker-yellow" />
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
                      {service.services.map((item) => (
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
                        <service.icon className="h-6 w-6 text-maker-yellow" />
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
