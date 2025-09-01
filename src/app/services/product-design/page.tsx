import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Palette, 
  ArrowRight,
  CheckCircle,
  Eye,
  Heart,
  Zap,
  Users,
  Star,
  Sparkles,
  MousePointer,
  Smartphone,
  Monitor,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Design & Branding - Maker Software',
  description: 'Beautiful, user-centered designs that drive engagement. Logo design, UX/UI, branding, and design systems that convert visitors into customers.',
  keywords: 'product design, branding, logo design, UX UI design, design systems, user experience, visual identity',
};

export default function ProductDesignPage() {
  const services = [
    {
      name: "Logo Design",
      price: "$500",

      description: "Professional logo design that captures your brand essence and stands the test of time",
      features: [
        "3 unique logo concepts",
        "Unlimited revisions",
        "Vector files (AI, EPS, SVG)",
        "PNG/JPG in multiple sizes",
        "Logo usage guidelines"
      ],
      popular: false
    },
    {
      name: "Brand Identity Package",
      price: "$1,800",

      description: "Complete visual identity system including logo, colors, typography, and brand guidelines",
      features: [
        "Logo design + variations",
        "Color palette development",
        "Typography selection",
        "Brand style guide",
        "Business card design",
        "Letterhead template"
      ],
      popular: true
    },
    {
      name: "UX/UI Design",
      price: "$2,800",

      description: "User research, wireframes, and beautiful interface design that converts",
      features: [
        "User research & personas",
        "Information architecture",
        "Wireframing & prototyping",
        "Visual interface design",
        "Interactive prototypes",
        "Design handoff files"
      ],
      popular: true
    },
    {
      name: "Website Redesign",
      price: "$4,500",

      description: "Complete visual overhaul with improved user experience and conversion optimization",
      features: [
        "UX audit & analysis",
        "New visual design",
        "Mobile responsiveness",
        "Conversion optimization",
        "Performance improvements",
        "SEO-friendly design"
      ],
      popular: false
    },
    {
      name: "Design System Creation",
      price: "$6,500",

      description: "Comprehensive design system with reusable components and documentation",
      features: [
        "Component library",
        "Design tokens",
        "Usage guidelines",
        "Code specifications",
        "Team training",
        "Maintenance plan"
      ],
      popular: false
    },
    {
      name: "Complete Brand Transformation",
      price: "$12,000",

      description: "Full rebrand including strategy, identity design, and all marketing materials",
      features: [
        "Brand strategy development",
        "Complete visual identity",
        "Marketing materials suite",
        "Digital asset library",
        "Brand implementation guide",
        "Team training & support"
      ],
      popular: false
    }
  ];

  const portfolio = [
    {
      title: "FinTech Mobile App",
      category: "UX/UI Design",
      description: "Intuitive banking app with 40% increase in user engagement",
      metrics: "40% ↑ engagement"
    },
    {
      title: "E-commerce Platform",
      category: "Web Design", 
      description: "Modern e-commerce design resulting in 65% conversion improvement",
      metrics: "65% ↑ conversions"
    },
    {
      title: "SaaS Dashboard",
      category: "Product Design",
      description: "Complex data visualization made simple and beautiful",
      metrics: "90% user satisfaction"
    },
    {
      title: "Healthcare Brand",
      category: "Brand Identity",
      description: "Trustworthy medical brand identity with complete guidelines",
      metrics: "Brand recognition +200%"
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding your users, market, and business goals through comprehensive research.",
      icon: Eye
    },
    {
      step: "02",
      title: "Strategy & Concepts",
      description: "Developing design strategy and initial concepts based on research insights.",
      icon: Sparkles
    },
    {
      step: "03",
      title: "Design & Iterate",
      description: "Creating detailed designs with continuous feedback and refinement cycles.",
      icon: Palette
    },
    {
      step: "04",
      title: "Test & Validate",
      description: "User testing and validation to ensure designs meet objectives and user needs.",
      icon: Users
    },
    {
      step: "05",
      title: "Deliver & Support",
      description: "Final delivery with comprehensive documentation and ongoing support.",
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Founder, StyleCo",
      content: "The brand identity they created perfectly captured our vision. Our customer engagement increased 150% after the rebrand.",
      rating: 5,
      project: "Complete Brand Transformation"
    },
    {
      name: "David Park",
      role: "Product Manager, TechFlow",
      content: "Outstanding UX/UI design that transformed our user experience. The attention to detail and user-centered approach was exceptional.",
      rating: 5,
      project: "UX/UI Design"
    }
  ];

  const capabilities = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Responsive websites that look great on all devices"
    },
    {
      icon: Smartphone,
      title: "Mobile Design", 
      description: "Native and web app interfaces optimized for mobile"
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable component libraries and style guides"
    },
    {
      icon: Heart,
      title: "Brand Identity",
      description: "Memorable visual identities that resonate with users"
    }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-maker-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-maker-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <Palette className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Product Design & Branding</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Designs That 
                <span className="font-brand text-maker-yellow block">Drive Results</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Beautiful, user-centered designs that convert visitors into customers. From brand identity 
                to digital experiences, we create designs that users love and businesses need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Design</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#portfolio"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Portfolio</span>
                  <Eye className="h-4 w-4" />
                </Link>
              </div>

              {/* Design Capabilities */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {capabilities.map((capability, index) => (
                  <div key={capability.title} className="text-center">
                    <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl w-fit mx-auto mb-3">
                      <capability.icon className="h-5 w-5 text-maker-yellow" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{capability.title}</h3>
                    <p className="text-maker-blue-300 text-xs">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Design <span className="font-brand text-maker-yellow">Services</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Comprehensive design solutions from brand identity to digital experiences
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full relative">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="px-3 py-1 bg-maker-yellow text-maker-blue-950 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-maker-yellow transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-maker-yellow">{service.price}</div>
                    </div>
                  </div>

                  <p className="text-maker-blue-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-maker-yellow flex-shrink-0" />
                        <span className="text-maker-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Design <span className="font-brand text-maker-yellow">Portfolio</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Real projects, real results. See how our designs drive business success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-maker-yellow transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-maker-yellow text-sm">{project.category}</span>
                    </div>
                    <div className="px-3 py-1 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full">
                      <span className="text-maker-yellow text-xs font-semibold">{project.metrics}</span>
                    </div>
                  </div>
                  <p className="text-maker-blue-200 leading-relaxed">{project.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Design <span className="font-brand text-maker-yellow">Process</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                A proven methodology that ensures beautiful, functional designs that drive results
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {designProcess.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.1}>
                  <div className="flex items-center space-x-6 bg-maker-blue-950 border border-maker-blue-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group">
                    <div className="text-4xl font-bold text-maker-yellow/30 flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-maker-yellow transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-maker-blue-200 leading-relaxed">{step.description}</p>
                    </div>
                    <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl flex-shrink-0">
                      <step.icon className="h-6 w-6 text-maker-yellow" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Client <span className="font-brand text-maker-yellow">Love</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                What our clients say about our design work and collaboration
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.2}>
                <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-maker-yellow fill-current" />
                      ))}
                    </div>
                    <span className="px-2 py-1 bg-maker-yellow/10 text-maker-yellow text-xs rounded">
                      {testimonial.project}
                    </span>
                  </div>
                  <p className="text-maker-blue-200 leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-maker-yellow text-sm">{testimonial.role}</div>
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
                  <Palette className="h-6 w-6 text-maker-yellow" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Create Amazing <span className="font-brand text-maker-yellow">Designs</span>?
                </h2>
              </div>
              
              <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s collaborate to create beautiful, user-centered designs that drive real business results 
                and delight your users.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Design Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Palette className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
