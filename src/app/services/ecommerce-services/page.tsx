import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  ShoppingCart, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Users,
  Eye,
  Zap,
  Award,
  BarChart3,
  CreditCard,
  Package,
  Globe
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-commerce Solutions - Morton Software Insights LLC',
  description: 'Data-driven e-commerce solutions from setup to optimization. Shopify, WooCommerce, payment integration, and analytics-powered growth strategies.',
  keywords: 'ecommerce, online store, shopify, woocommerce, payment integration, inventory management, data insights, analytics',
};

export default function EcommerceServicesPage() {
  const services = [
    {
      name: "Shopify Store Setup",
      price: "$800",
      description: "Complete Shopify store with analytics-driven configuration and performance optimization",
      features: [
        "Store setup",
        "Theme customization",
        "Product upload",
        "Payment configuration",
        "Launch support"
      ],
      deliverables: ["Shopify Store", "Custom Theme", "Analytics Setup"]
    },
    {
      name: "WooCommerce Development",
      price: "$1,200",
      description: "Custom WordPress e-commerce with insights tracking and comprehensive optimization",
      features: [
        "WordPress setup",
        "WooCommerce configuration",
        "Custom design",
        "Plugin integration",
        "SEO optimization"
      ],
      deliverables: ["WooCommerce Store", "Custom Design", "SEO Configuration"]
    },
    {
      name: "Payment Gateway Integration",
      price: "$400",
      description: "Secure payment processing with data insights and comprehensive testing",
      features: [
        "Multiple payment options",
        "Security compliance",
        "Testing & validation",
        "Documentation",
        "Support"
      ],
      deliverables: ["Payment Integration", "Security Documentation", "Testing Report"]
    },
    {
      name: "Inventory Management System",
      price: "$2,500",
      description: "Analytics-powered inventory tracking and management with multi-location support",
      features: [
        "Inventory tracking",
        "Stock alerts",
        "Supplier integration",
        "Reporting dashboard",
        "Multi-location support"
      ],
      deliverables: ["Inventory System", "Dashboard Interface", "Integration Setup"]
    },
    {
      name: "E-commerce Analytics Setup",
      price: "$600",
      description: "Advanced sales tracking and performance insights with comprehensive reporting",
      features: [
        "Analytics integration",
        "Conversion tracking",
        "Custom reports",
        "Performance monitoring",
        "ROI analysis"
      ],
      deliverables: ["Analytics Platform", "Custom Reports", "Performance Dashboard"]
    },
    {
      name: "E-commerce Optimization Package",
      price: "$3,500",
      description: "Complete e-commerce optimization with conversion rate improvement and growth strategies",
      features: [
        "Conversion optimization",
        "A/B testing setup",
        "Performance analysis",
        "Growth strategies",
        "Ongoing support"
      ],
      deliverables: ["Optimization Report", "A/B Testing Framework", "Growth Strategy"]
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Data-Driven Growth",
      description: "Analytics-powered e-commerce strategies that deliver measurable sales growth, conversion optimization, and customer insights."
    },
    {
      icon: CreditCard,
      title: "Seamless Payments",
      description: "Secure, reliable payment processing with multiple gateway options and comprehensive fraud protection for customer confidence."
    },
    {
      icon: Package,
      title: "Inventory Excellence",
      description: "Advanced inventory management systems that optimize stock levels, reduce costs, and improve operational efficiency."
    },
    {
      icon: Globe,
      title: "Scalable Solutions",
      description: "Future-ready e-commerce platforms designed to grow with your business and adapt to changing market demands."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Comprehensive analysis of your business requirements, target audience, and competitive landscape to design the optimal e-commerce strategy."
    },
    {
      step: "02",
      title: "Platform Development",
      description: "Custom e-commerce platform development with optimized user experience, mobile responsiveness, and performance optimization."
    },
    {
      step: "03",
      title: "Integration & Testing",
      description: "Payment gateway integration, inventory management setup, and comprehensive testing to ensure seamless functionality."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Strategic launch with performance monitoring, conversion tracking, and initial optimization based on real user data."
    },
    {
      step: "05",
      title: "Growth & Support",
      description: "Ongoing optimization, feature enhancements, and strategic support to maximize sales growth and customer satisfaction."
    }
  ];

  const testimonials = [
    {
      name: "Rachel Chen",
      role: "Founder, StyleHub Boutique",
      content: "Morton Software Insights built our Shopify store and the results exceeded expectations. Our online sales increased by 400% in the first quarter, and the analytics insights help us make data-driven decisions daily.",
      rating: 5
    },
    {
      name: "David Martinez",
      role: "CEO, TechGear Solutions",
      content: "The WooCommerce development and inventory management system transformed our operations. We reduced inventory costs by 30% while increasing sales by 250% through better stock management and customer insights.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Offset Layout with E-commerce Features */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-2/3 left-1/3 w-36 h-36 bg-morton-orange/4 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 items-start">
            <div className="lg:col-span-4 lg:col-start-1">
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                  <ShoppingCart className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium">E-commerce Solutions</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Insights-Driven
                  <span className="font-brand text-morton-orange block">E-commerce</span>
                </h1>
                
                <p className="text-xl text-morton-purple-200 leading-relaxed mb-8">
                  Data-powered e-commerce solutions from setup to optimization with 
                  analytics-driven growth strategies that deliver measurable results and exceptional customer experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Start Selling</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>View Services</span>
                    <ShoppingCart className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 lg:col-start-5 space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg">
                      <ShoppingCart className="h-5 w-5 text-morton-orange" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-morton-orange">200+</div>
                      <div className="text-white font-semibold text-sm">Stores Built</div>
                    </div>
                  </div>
                  <p className="text-morton-purple-200 text-xs">Complete e-commerce solutions</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-morton-orange" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-morton-orange">400%</div>
                      <div className="text-white font-semibold text-sm">Sales Growth</div>
                    </div>
                  </div>
                  <p className="text-morton-purple-200 text-xs">Average client improvement</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg">
                      <Globe className="h-5 w-5 text-morton-orange" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-morton-orange">99.9%</div>
                      <div className="text-white font-semibold text-sm">Uptime</div>
                    </div>
                  </div>
                  <p className="text-morton-purple-200 text-xs">Reliable performance</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Tiered Pricing Design */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                E-commerce <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Complete e-commerce solutions powered by data insights and analytics for sustainable business growth
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-morton-purple-950 border-2 border-morton-purple-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full hover:border-morton-orange/50">
                  {/* Price Header */}
                  <div className="bg-morton-purple-900 p-6 text-center border-b border-morton-purple-700">
                    <h3 className="text-xl font-bold text-white group-hover:text-morton-orange transition-colors mb-2">
                      {service.name}
                    </h3>
                    <div className="text-3xl font-bold text-morton-orange">{service.price}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-morton-purple-200 mb-6 leading-relaxed text-center">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-morton-orange flex-shrink-0" />
                          <span className="text-morton-purple-100 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-morton-purple-700 pt-4 mb-6">
                      <h4 className="text-white font-semibold mb-2">Deliverables:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="px-2 py-1 bg-morton-orange/10 border border-morton-orange/30 rounded text-morton-orange text-xs"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-primary w-full text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                E-commerce <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Complete e-commerce solutions powered by data insights and analytics for sustainable business growth
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  <div className="flex items-center justify-between mb-4">
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

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-morton-orange flex-shrink-0" />
                        <span className="text-morton-purple-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-morton-purple-700 pt-4 mb-6">
                    <h4 className="text-white font-semibold mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="px-2 py-1 bg-morton-orange/10 border border-morton-orange/30 rounded text-morton-orange text-xs"
                        >
                          {deliverable}
                        </span>
                      ))}
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

      {/* Benefits Section */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our <span className="font-brand text-morton-orange">E-commerce</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Strategic e-commerce solutions that drive sales growth, optimize conversions, and deliver exceptional customer experiences
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="text-center bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-morton-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-morton-purple-200 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our E-commerce <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures successful e-commerce implementation and sustainable sales growth
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.1}>
                  <div className="flex items-center space-x-6 bg-morton-purple-950 border border-morton-purple-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                    <div className="text-4xl font-bold text-morton-orange/30 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-morton-purple-200 leading-relaxed">{step.description}</p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-morton-orange flex-shrink-0" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                E-commerce <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our e-commerce solutions have driven exceptional sales growth and business transformation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.2}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-morton-orange fill-current" />
                    ))}
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
      <section className="py-16 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl">
                  <ShoppingCart className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Launch Your <span className="font-brand text-morton-orange">Store</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your e-commerce vision into reality with data-driven solutions that deliver 
                measurable growth and exceptional customer experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start E-commerce Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <ShoppingCart className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
