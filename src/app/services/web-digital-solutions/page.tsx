import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Rocket, 
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Star,
  Sparkles,
  Zap,
  Users,
  Clock,
  Target
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Web & Digital Solutions - Morton Software Insights LLC',
  description: 'Professional websites and digital solutions that drive results. Landing pages, business websites, e-commerce platforms that convert visitors.',
  keywords: 'web development, website design, e-commerce, landing pages, digital solutions, responsive websites',
};

export default function WebDevelopmentPage() {
  const services = [
    {
      name: "Conversion Landing Page",
      price: "$1,200",
      description: "High-converting single-page website designed to drive specific actions",
      features: [
        "Mobile-responsive design",
        "Lead capture forms",
        "Analytics integration",
        "Speed optimization",
        "A/B testing ready",
        "CMS integration"
      ],
      perfectFor: "Product launches, marketing campaigns, lead generation",
      includes: ["Custom Design", "Content Management", "Analytics", "1 Month Support"]
    },
    {
      name: "Business Website",
      price: "$2,800",
      description: "Professional multi-page website that showcases your business professionally",
      features: [
        "5-10 custom pages",
        "Contact forms",
        "SEO optimization",
        "Social media integration",
        "Blog functionality",
        "Team & portfolio sections"
      ],
      perfectFor: "Small businesses, agencies, consultants",
      includes: ["Custom Design", "CMS", "SEO Setup", "3 Months Support"],
      popular: true
    },
    {
      name: "E-commerce Platform",
      price: "$4,200",
      description: "Complete online store with product management and payment processing",
      features: [
        "Product catalog",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Inventory management",
        "Order tracking",
        "Customer accounts"
      ],
      perfectFor: "Retail businesses, online stores, marketplaces",
      includes: ["Store Setup", "Payment Integration", "Product Upload", "6 Months Support"],
      popular: true
    },
    {
      name: "Digital Marketplace",
      price: "$6,500",
      description: "Multi-vendor platform with advanced features and analytics",
      features: [
        "Multi-vendor support",
        "Commission management",
        "Advanced analytics",
        "Review & rating system",
        "Admin dashboard",
        "API integrations"
      ],
      perfectFor: "Marketplace businesses, multi-vendor platforms",
      includes: ["Platform Setup", "Vendor Portal", "Analytics Dashboard", "12 Months Support"]
    }
  ];

  const webFeatures = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Every website is built mobile-first to ensure perfect user experience across all devices."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with 95+ PageSpeed scores and instant loading times."
    },
    {
      icon: Target,
      title: "Conversion Focused",
      description: "Designed with user psychology and conversion optimization principles in mind."
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help your website rank higher in search results."
    }
  ];

  const technologies = [
    { name: "Next.js", description: "React framework for production" },
    { name: "React", description: "Modern JavaScript library" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "Vercel", description: "Fast, reliable hosting" },
    { name: "Stripe", description: "Secure payment processing" },
    { name: "Sanity/Contentful", description: "Headless CMS solutions" },
    { name: "Google Analytics", description: "Advanced tracking & insights" }
  ];

  const portfolio = [
    {
      title: "SaaS Landing Page",
      category: "Landing Page",
      description: "Conversion-optimized landing page for B2B SaaS startup",
      results: "85% increase in sign-ups",
      features: ["Lead Generation", "A/B Testing", "Analytics"]
    },
    {
      title: "Restaurant Website", 
      category: "Business Website",
      description: "Modern restaurant website with online ordering system",
      results: "300% increase in online orders",
      features: ["Online Ordering", "Reservation System", "Menu Management"]
    },
    {
      title: "Fashion E-commerce",
      category: "E-commerce",
      description: "Complete fashion e-commerce store with custom features",
      results: "250% revenue growth",
      features: ["Inventory Management", "Size Guide", "Wishlist"]
    },
    {
      title: "Digital Marketplace",
      category: "Marketplace",
      description: "Multi-vendor marketplace for handmade crafts",
      results: "500+ vendors onboarded",
      features: ["Vendor Portal", "Commission Tracking", "Reviews"]
    }
  ];

  const developmentProcess = [
    {
      step: "Planning",
      description: "Requirements gathering, wireframing, and technical planning"
    },
    {
      step: "Design",
      description: "UI/UX design, mockups, and client feedback integration"
    },
    {
      step: "Development",
      description: "Frontend and backend development with regular updates"
    },
    {
      step: "Testing",
      description: "Quality assurance, performance testing, and bug fixes"
    },
    {
      step: "Launch",
      description: "Deployment, training, and post-launch support"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director, TechCorp",
      content: "Our new website increased leads by 400% in the first month. The design is beautiful and the conversion rate is incredible.",
      rating: 5,
      project: "Business Website"
    },
    {
      name: "Robert Chen",
      role: "Founder, StyleShop",
      content: "The e-commerce platform they built transformed our business. Sales increased 300% and customer feedback has been amazing.",
      rating: 5,
      project: "E-commerce Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-morton-orange/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-5xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                <Rocket className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Web & Digital Solutions</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Websites That
                <span className="font-brand text-morton-orange block">Convert Visitors</span>
              </h1>
              
              <p className="text-xl text-morton-purple-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                Professional websites and digital solutions that drive real business results. From landing 
                pages to complex e-commerce platforms, we create digital experiences that convert.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#portfolio"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Portfolio</span>
                  <Globe className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-2xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-morton-orange" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Mobile-First Design</h3>
                <p className="text-morton-purple-200 text-sm mb-4">Perfect experience across all devices</p>
                <div className="text-2xl font-bold text-morton-orange">95+</div>
                <div className="text-xs text-morton-purple-200">PageSpeed Score</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-2xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-4">
                  <Zap className="h-8 w-8 text-morton-orange" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-morton-purple-200 text-sm mb-4">Optimized for speed and performance</p>
                <div className="text-2xl font-bold text-morton-orange">300+</div>
                <div className="text-xs text-morton-purple-200">Websites Built</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-2xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-morton-orange" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Conversion Focused</h3>
                <p className="text-morton-purple-200 text-sm mb-4">Designed to turn visitors into customers</p>
                <div className="text-2xl font-bold text-morton-orange">99.9%</div>
                <div className="text-xs text-morton-purple-200">Uptime</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Web Development <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                From simple landing pages to complex e-commerce platforms, we build websites that work
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full relative">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="px-3 py-1 bg-morton-orange text-morton-purple-950 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-morton-orange transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-morton-orange">{service.price}</div>
                    </div>
                  </div>

                  <p className="text-morton-purple-200 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-morton-orange flex-shrink-0" />
                            <span className="text-morton-purple-100 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Perfect For:</h4>
                      <p className="text-morton-purple-200 text-sm mb-4">{service.perfectFor}</p>
                      
                      <h4 className="text-white font-semibold mb-3">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.includes.map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 bg-morton-orange/10 border border-morton-orange/30 rounded text-morton-orange text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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

      {/* Technologies Section */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Modern <span className="font-brand text-morton-orange">Technologies</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                We use cutting-edge technologies to build fast, secure, and scalable websites
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.name} delay={index * 0.05}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                  <p className="text-morton-purple-200 text-sm">{tech.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Web <span className="font-brand text-morton-orange">Portfolio</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Real websites, real results. See how our web solutions drive business success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-morton-orange transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-morton-orange text-sm">{project.category}</span>
                    </div>
                    <div className="px-3 py-1 bg-morton-orange/10 border border-morton-orange/30 rounded-full">
                      <span className="text-morton-orange text-xs font-semibold">{project.results}</span>
                    </div>
                  </div>
                  
                  <p className="text-morton-purple-200 leading-relaxed mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-morton-purple-800 text-morton-purple-200 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Development <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A streamlined process that ensures quality delivery and clear communication
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {developmentProcess.map((phase, index) => (
                <AnimatedSection key={phase.step} delay={index * 0.1}>
                  <div className="text-center bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                    <div className="text-2xl font-bold text-morton-orange mb-2">{index + 1}</div>
                    <h3 className="text-white font-bold mb-2">{phase.step}</h3>
                    <p className="text-morton-purple-200 text-sm leading-relaxed">{phase.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Client <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our web solutions have transformed businesses and driven real results
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.2}>
                <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-morton-orange fill-current" />
                      ))}
                    </div>
                    <span className="px-2 py-1 bg-morton-orange/10 text-morton-orange text-xs rounded">
                      {testimonial.project}
                    </span>
                  </div>
                  <p className="text-morton-purple-200 leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-morton-orange text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl">
                  <Rocket className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Launch Your <span className="font-brand text-morton-orange">Website</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s create a website that not only looks amazing but drives real business results 
                and converts visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Website</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Globe className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
