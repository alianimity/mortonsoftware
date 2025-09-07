import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { CheckCircle, Zap, ArrowRight, Sparkles, Target, Rocket, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing - Morton Software Insights',
  description: 'Transparent pricing for all our services. From $100 strategy reports to $25K+ enterprise solutions. Find the perfect package for your project.',
  keywords: 'pricing, software development costs, web design pricing, digital transformation rates, AI development, blockchain services',
};

export default function PricingPage() {
  // Organize by service categories with consistent color scheme
  const serviceCategories = [
    {
      id: "digital-strategy",
      name: "Strategy & Transformation",
      tagline: "Chart your digital future",
      icon: Sparkles,
      description: "Strategic clarity before tactical execution. Transform your business with expert guidance and data-driven insights.",
      priceRange: "$100 - $8,000+",
      services: [
        { name: "Business Analysis Report", price: "$100", description: "Comprehensive market analysis and growth recommendations" },
        { name: "Strategic Advisory Call", price: "$250", description: "One-on-one executive guidance session" },
        { name: "Digital Roadmap Workshop", price: "$1,500", description: "Complete digital transformation planning" },
        { name: "Technology Assessment", price: "$2,200", description: "Current tech stack evaluation and modernization plan" },
        { name: "Market Research & Analysis", price: "$1,800", description: "Competitive landscape and opportunity analysis" },
        { name: "Enterprise Advisory Retainer", price: "$8,000/month", description: "Dedicated strategic advisor with quarterly reviews" }
      ]
    },
    {
      id: "product-design",
      name: "Design & Experience",
      tagline: "Designed for success",
      icon: Target,
      description: "User-centered design that drives business results. Create compelling visual identities and intuitive experiences.",
      priceRange: "$400 - $8,500",
      services: [
        { name: "Logo Design", price: "$400", description: "Professional logo design with brand guidelines" },
        { name: "Brand Identity Package", price: "$1,500", description: "Complete brand system with style guide" },
        { name: "UX/UI Design", price: "$1,800", description: "User research, wireframes, and UI design" },
        { name: "Website Redesign", price: "$3,500", description: "Complete visual overhaul with UX improvements" },
        { name: "Design System Creation", price: "$4,800", description: "Scalable component library and documentation" },
        { name: "Marketing Asset Package", price: "$2,200", description: "Brochures, presentations, and digital assets" },
        { name: "Complete Brand Transformation", price: "$8,500", description: "Full rebrand with all marketing materials" }
      ]
    },
    {
      id: "web-development",
      name: "Web & Digital Solutions",
      tagline: "Websites that convert",
      icon: Rocket,
      description: "Professional websites and digital solutions that drive results. From landing pages to complex e-commerce platforms.",
      priceRange: "$1,200 - $6,500",
      services: [
        { name: "Conversion Landing Page", price: "$1,200", description: "High-converting responsive page with CMS" },
        { name: "Business Website", price: "$2,800", description: "Multi-page site with forms and integrations" },
        { name: "E-commerce Platform", price: "$4,200", description: "Complete online store with payment processing" },
        { name: "Digital Marketplace", price: "$6,500", description: "Multi-vendor platform with analytics" }
      ]
    },
    {
      id: "software-development",
      name: "Software & Application Development",
      tagline: "Crafted code, lasting value",
      icon: Zap,
      description: "Build robust, scalable applications with modern technologies. Custom solutions that grow with your business.",
      priceRange: "$2,800 - $25,000",
      services: [
        { name: "Feature Development Sprint", price: "$2,800", description: "Focused development for specific functionality" },
        { name: "API Development", price: "$4,500", description: "RESTful API with documentation and testing" },
        { name: "Custom Web Application", price: "$9,500", description: "Custom functionality with database and API" },
        { name: "Mobile Application", price: "$14,000", description: "Cross-platform app with core features" },
        { name: "Enterprise Application", price: "$25,000", description: "Native iOS/Android with backend and admin" }
      ]
    },
    {
      id: "cloud-solutions",
      name: "Cloud, DevOps & Infrastructure",
      tagline: "Built to scale",
      icon: Shield,
      description: "Modernize infrastructure with secure, scalable cloud solutions. 24/7 monitoring and automated deployments.",
      priceRange: "$1,200/month - $8,000",
      services: [
        { name: "Cloud Infrastructure Assessment", price: "$1,800", description: "Infrastructure analysis and migration planning" },
        { name: "Cloud Migration Services", price: "$5,500", description: "Complete migration with minimal downtime" },
        { name: "DevOps Pipeline Setup", price: "$4,500", description: "CI/CD automation and deployment pipelines" },
        { name: "Infrastructure as Code", price: "$3,800", description: "Automated infrastructure deployment and management" },
        { name: "Managed Cloud Services", price: "$1,200/month", description: "24/7 monitoring, support, and optimization" },
        { name: "Disaster Recovery Setup", price: "$8,000", description: "Backup systems and recovery procedures" }
      ]
    },
    {
      id: "security-compliance",
      name: "Security & Compliance",
      tagline: "Secure & compliant",
      icon: CheckCircle,
      description: "Comprehensive security and compliance solutions. Protect your business with expert cybersecurity guidance.",
      priceRange: "$1,500/month - $5,000",
      services: [
        { name: "Security Monitoring Service", price: "$1,500/month", description: "24/7 security monitoring and incident response" },
        { name: "Cybersecurity Audit", price: "$2,500", description: "Comprehensive security assessment and recommendations" },
        { name: "Penetration Testing", price: "$3,200", description: "Ethical hacking and vulnerability assessment" },
        { name: "Security Controls Implementation", price: "$4,000", description: "Complete security infrastructure setup" },
        { name: "Compliance Consulting", price: "$5,000", description: "GDPR, HIPAA, or PCI compliance implementation" }
      ]
    },
    // Add missing service categories to match industry standards
    {
      id: "prototyping-testing",
      name: "Prototyping & Validation",
      tagline: "Test before you build",
      icon: Target,
      description: "Validate ideas with interactive prototypes and user testing. Reduce risk and improve user experience.",
      priceRange: "$900 - $4,500",
      services: [
        { name: "Wireframe Prototyping", price: "$900", description: "Low-fidelity concept validation" },
        { name: "Interactive Prototype", price: "$1,800", description: "High-fidelity clickable prototypes" },
        { name: "User Testing & Research", price: "$2,500", description: "Comprehensive user experience validation" },
        { name: "Mobile App Prototype", price: "$3,200", description: "Native mobile prototype with interactions" },
        { name: "Prototype Testing & Iteration", price: "$4,500", description: "Multiple rounds of testing and refinement" }
      ]
    },
    {
      id: "emerging-tech",
      name: "Innovation & Emerging Tech",
      tagline: "Future-ready solutions",
      icon: Sparkles,
      description: "Cutting-edge AI/ML, blockchain, and IoT solutions. Stay ahead with innovative technology implementations.",
      priceRange: "$3,500 - $18,000",
      services: [
        { name: "AI/ML Proof of Concept", price: "$5,500", description: "Machine learning model development and testing" },
        { name: "Blockchain Smart Contract", price: "$7,500", description: "Custom smart contract development and deployment" },
        { name: "IoT Solution Development", price: "$8,200", description: "Connected device integration and dashboard" },
        { name: "AI Chatbot Integration", price: "$3,500", description: "Intelligent customer service automation" },
        { name: "Data Analytics Platform", price: "$12,000", description: "Custom analytics with AI insights" },
        { name: "Innovation Workshop", price: "$18,000", description: "Emerging tech strategy and implementation roadmap" }
      ]
    },
    {
      id: "content-marketing",
      name: "Content & Marketing",
      tagline: "Content that converts",
      icon: Rocket,
      description: "Strategic content creation and marketing services that drive engagement and generate leads.",
      priceRange: "$150 - $2,500",
      services: [
        { name: "Copywriting Services", price: "$150", description: "Professional website and marketing copy" },
        { name: "SEO Optimization", price: "$300", description: "Search engine optimization and keyword strategy" },
        { name: "Social Media Strategy", price: "$500", description: "Complete social media planning and setup" },
        { name: "Email Marketing Setup", price: "$400", description: "Email campaigns and automation setup" },
        { name: "Content Marketing Package", price: "$2,500", description: "Comprehensive content strategy and creation" }
      ]
    },
    {
      id: "ecommerce-services",
      name: "E-commerce Solutions",
      tagline: "Sell more online",
      icon: Target,
      description: "Specialized e-commerce development and optimization services for online stores and marketplaces.",
      priceRange: "$400 - $4,000",
      services: [
        { name: "Shopify Store Setup", price: "$800", description: "Complete Shopify store configuration and design" },
        { name: "WooCommerce Development", price: "$1,200", description: "Custom WordPress e-commerce solution" },
        { name: "Payment Gateway Integration", price: "$400", description: "Secure payment processing setup" },
        { name: "Inventory Management System", price: "$2,500", description: "Automated inventory tracking and management" },
        { name: "E-commerce Analytics Setup", price: "$600", description: "Sales tracking and performance analytics" }
      ]
    },
    {
      id: "maintenance-support",
      name: "Maintenance & Support",
      tagline: "Always running smooth",
      icon: Shield,
      description: "Ongoing maintenance and support services to keep your systems running perfectly.",
      priceRange: "$100/month - $1,200/month",
      services: [
        { name: "Website Maintenance", price: "$200/month", description: "Regular updates, backups, and security monitoring" },
        { name: "Software Support & Updates", price: "$500/month", description: "Application maintenance and feature updates" },
        { name: "Performance Monitoring", price: "$300/month", description: "24/7 performance tracking and optimization" },
        { name: "Backup & Recovery Services", price: "$100/month", description: "Automated backups and disaster recovery" },
        { name: "Technical Support Package", price: "$1,200/month", description: "Dedicated technical support and troubleshooting" }
      ]
    },
    {
      id: "database-integration",
      name: "Database & Integration",
      tagline: "Connected systems",
      icon: Zap,
      description: "Database design, API integrations, and system connectivity solutions for seamless operations.",
      priceRange: "$400 - $3,500",
      services: [
        { name: "Database Design & Setup", price: "$1,500", description: "Custom database architecture and implementation" },
        { name: "Third-Party API Integration", price: "$800", description: "Connect external services and platforms" },
        { name: "CRM Integration", price: "$1,200", description: "Customer relationship management system setup" },
        { name: "Workflow Automation", price: "$2,000", description: "Automated business process implementation" },
        { name: "Data Migration Services", price: "$3,500", description: "Safe and secure data transfer between systems" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Unique Animated Pricing Focus */}
      <section className="relative py-20 overflow-hidden bg-morton-purple-950">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-morton-orange/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-morton-orange/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
            
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-5xl mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
                <span className="font-brand text-morton-orange">Morton</span> It Happen
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-morton-purple-200">
                  Starting at just <span className="font-brand text-morton-orange">$100</span>
                </span>
            </h1>
            
              <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                No complex packages. No hidden fees. Just honest pricing that grows with you. 
                Pick what you need, when you need it.
              </p>
            </div>

            {/* Service Category Navigation - Two Rows */}
            <div className="space-y-4 mb-16">
              {/* Top Row - First 6 Categories */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {serviceCategories.slice(0, 6).map((category) => (
                  <button key={category.name} 
                    className="group relative overflow-hidden bg-morton-purple/20 backdrop-blur-sm border border-slate-700 
                               hover:border-morton-orange/50 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-morton-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-center">
                      <category.icon className="h-8 w-8 text-morton-orange mx-auto mb-2" />
                      <div className="text-white font-bold text-sm">{category.name}</div>
                      <div className="text-slate-300 text-xs">{category.priceRange}</div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Bottom Row - Last 6 Categories */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {serviceCategories.slice(6, 12).map((category) => (
                  <button key={category.name} 
                    className="group relative overflow-hidden bg-morton-purple/20 backdrop-blur-sm border border-slate-700 
                               hover:border-morton-orange/50 rounded-2xl p-4 transition-all duration-300 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-morton-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-center">
                      <category.icon className="h-8 w-8 text-morton-orange mx-auto mb-2" />
                      <div className="text-white font-bold text-sm">{category.name}</div>
                      <div className="text-slate-300 text-xs">{category.priceRange}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories - Unique Creative Layout */}
      <section className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <div className="group relative">
                  <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-3xl hover:border-morton-orange/30 transition-all duration-300">
                    {/* Category Header */}
                    <div className="p-8 border-b border-morton-purple-700">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex items-center space-x-6">
                          <div className="p-4 rounded-2xl bg-morton-orange/10 border border-morton-orange/30">
                            <category.icon className="h-10 w-10 text-morton-orange" />
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-white mb-2">{category.name}</h3>
                            <p className="text-slate-300 text-lg">{category.tagline}</p>
                            <p className="text-slate-400 text-sm mt-1">{category.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-morton-orange">{category.priceRange}</div>
                          <div className="text-slate-400 text-sm">Starting prices</div>
                        </div>
                      </div>
              </div>

                    {/* Services Grid */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {category.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="relative">
                            {/* Service price badge */}
                            <div className="absolute -top-2 -right-2 z-20">
                              <div className="px-3 py-1 bg-morton-orange text-slate-950 text-sm font-bold rounded-full shadow-lg">
                                {service.price}
                              </div>
                            </div>

                            <div className="bg-morton-purple-900 border border-morton-purple-700 group/service rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-morton-orange/30">

                            <div className="space-y-4">
                              <div>
                                <h4 className="text-lg font-bold text-white group-hover/service:text-morton-orange transition-colors mb-2">
                                  {service.name}
                                </h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                  {service.description}
                                </p>
                              </div>
                              


                              <button className="w-full mt-4 py-2 px-4 bg-morton-orange hover:bg-morton-orange/90 
                                               text-slate-950 font-bold border border-morton-orange 
                                               hover:border-morton-orange/90 rounded-xl transition-all duration-300 
                                               text-sm font-medium flex items-center justify-center space-x-2">
                                <span>Get Started</span>
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </div>
                            </div>
                        </div>
                      ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Value Propositions */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white mb-6">
                Why Choose <span className="font-brand text-morton-orange">Morton</span> Pricing?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We believe great software should be accessible to everyone, from solo creators to global enterprises.
              </p>
              </div>
            </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Start Small",
                description: "Begin with a $100 strategy report and scale as you grow"
              },
              {
                icon: Target,
                title: "No Lock-in",
                description: "Pick individual services or combine them as needed"
              },
              {
                icon: Rocket,
                title: "Global Ready",
                description: "Serving clients worldwide with transparent pricing"
              },
              {
                icon: Shield,
                title: "30-Day Guarantee",
                description: "Not happy? We'll make it right or refund you"
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-morton-purple border border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]">
                  <div className="w-12 h-12 bg-morton-orange/20 rounded-lg flex items-center justify-center group-hover:bg-morton-orange/30 transition-colors mb-4">
                    <feature.icon className="h-6 w-6 text-morton-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-morton-orange transition-colors">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section - Matching Why Choose Morton Pricing Style */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              {/* CTA Card matching Why Choose Morton Pricing style */}
              <div className="bg-morton-purple border border-slate-700 rounded-2xl p-8 lg:p-12 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  Ready to Transform Your Business?
            </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Whether you need a simple $100 strategy report or a complete $15K+ transformation, 
                  we&apos;re here to make your vision tangible.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <button className="bg-morton-orange hover:bg-morton-orange/90 text-slate-950 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300">
                    Get Started Today
                  </button>
                  <button className="bg-transparent hover:bg-morton-orange/10 text-morton-orange border border-morton-orange hover:border-morton-orange/50 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300">
                    Schedule Free Consultation
                  </button>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
                  <div className="text-center">
                    <div className="text-morton-orange font-bold text-lg mb-2">Quick Response</div>
                    <div className="text-slate-300">Fast response guaranteed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-morton-orange font-bold text-lg mb-2">Global Service</div>
                    <div className="text-slate-300">Available worldwide</div>
                  </div>
                  <div className="text-center">
                    <div className="text-morton-orange font-bold text-lg mb-2">No Obligation</div>
                    <div className="text-slate-300">Free consultation</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
