import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Settings, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Users,
  Eye,
  Zap,
  Award,
  Shield,
  Clock,
  AlertTriangle,
  Wrench
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Maintenance & Support - Morton Software Insights LLC',
  description: 'Ongoing maintenance, support, and optimization. 24/7 technical support, performance monitoring, and regular updates.',
  keywords: 'website maintenance, technical support, performance monitoring, software updates, backup services',
};

export default function MaintenanceSupportPage() {
  const services = [
    {
      name: "Website Maintenance",
      price: "$200/month",
      description: "Regular updates, backups, and security monitoring with comprehensive performance optimization",
      features: [
        "Regular updates",
        "Security monitoring",
        "Automated backups",
        "Performance optimization",
        "Monthly reports"
      ],
      deliverables: ["Maintenance Dashboard", "Monthly Reports", "Security Updates"]
    },
    {
      name: "Software Support & Updates",
      price: "$500/month",
      description: "Application maintenance and feature updates with comprehensive technical support",
      features: [
        "Bug fixes",
        "Feature updates",
        "Performance improvements",
        "Security patches",
        "Technical support"
      ],
      deliverables: ["Update Documentation", "Support Portal", "Performance Reports"]
    },
    {
      name: "Performance Monitoring",
      price: "$300/month",
      description: "24/7 performance tracking and optimization with real-time alerts and analytics",
      features: [
        "Real-time monitoring",
        "Performance alerts",
        "Optimization recommendations",
        "Uptime tracking",
        "Analytics reports"
      ],
      deliverables: ["Monitoring Dashboard", "Alert System", "Performance Analytics"]
    },
    {
      name: "Backup & Recovery Services",
      price: "$100/month",
      description: "Automated backups and disaster recovery with comprehensive testing and documentation",
      features: [
        "Automated backups",
        "Data recovery",
        "Disaster planning",
        "Testing procedures",
        "Documentation"
      ],
      deliverables: ["Backup System", "Recovery Plan", "Testing Documentation"]
    },
    {
      name: "Technical Support Package",
      price: "$1,200/month",
      description: "Dedicated technical support and troubleshooting with priority response and optimization",
      features: [
        "Priority support",
        "Dedicated contact",
        "Emergency response",
        "Troubleshooting",
        "System optimization"
      ],
      deliverables: ["Support Portal", "Dedicated Contact", "Response SLA"]
    },
    {
      name: "Comprehensive Care Package",
      price: "$2,000/month",
      description: "Complete maintenance and support solution with all services included and premium support",
      features: [
        "All maintenance services",
        "Priority support",
        "Advanced monitoring",
        "Proactive optimization",
        "Dedicated account manager"
      ],
      deliverables: ["Complete Solution", "Account Manager", "Premium Support"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Proactive Protection",
      description: "Comprehensive security monitoring and maintenance that prevents issues before they impact your business operations."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock monitoring and support ensuring your systems are always running at peak performance."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous performance improvements and optimization to ensure maximum efficiency and user satisfaction."
    },
    {
      icon: Users,
      title: "Expert Support Team",
      description: "Access to experienced technical professionals with deep expertise in maintenance and troubleshooting."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Setup",
      description: "Comprehensive evaluation of your current systems and setup of monitoring, backup, and maintenance protocols."
    },
    {
      step: "02",
      title: "Proactive Monitoring",
      description: "Continuous monitoring of system performance, security, and functionality with automated alerts and reporting."
    },
    {
      step: "03",
      title: "Regular Maintenance",
      description: "Scheduled updates, security patches, performance optimization, and preventive maintenance to ensure reliability."
    },
    {
      step: "04",
      title: "Issue Resolution",
      description: "Rapid response to any issues with expert troubleshooting, problem resolution, and system restoration."
    },
    {
      step: "05",
      title: "Optimization & Growth",
      description: "Ongoing performance improvements, feature enhancements, and strategic recommendations for system evolution."
    }
  ];

  const testimonials = [
    {
      name: "Amanda Foster",
      role: "Operations Manager, TechFlow Solutions",
      content: "Morton Software Insights has been maintaining our systems for over two years. Their proactive approach prevented multiple potential disasters, and our uptime improved to 99.9%. The peace of mind is invaluable.",
      rating: 5
    },
    {
      name: "Robert Kim",
      role: "IT Director, GrowthCorp",
      content: "The comprehensive care package transformed our operations. We went from constant firefighting to smooth, predictable performance. Their 24/7 support and proactive maintenance saved us countless hours and headaches.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Compact Layout with Support Tiers */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-morton-orange/6 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                  <Settings className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium">Maintenance & Support</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Always There When
                  <span className="font-brand text-morton-orange block">You Need Us</span>
                </h1>
                
                <p className="text-xl text-morton-purple-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Ongoing maintenance, support, and optimization to keep your systems running smoothly 
                  with proactive monitoring and expert technical support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Get Support</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>View Services</span>
                    <Settings className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedSection delay={0.2}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Shield className="h-6 w-6 text-morton-orange" />
                    <span className="text-white font-semibold">Reliability</span>
                  </div>
                  <div className="text-3xl font-bold text-morton-orange mb-2">99.9%</div>
                  <div className="text-morton-purple-200 text-sm">Uptime Achieved</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Clock className="h-6 w-6 text-morton-orange" />
                    <span className="text-white font-semibold">Availability</span>
                  </div>
                  <div className="text-3xl font-bold text-morton-orange mb-2">24/7</div>
                  <div className="text-morton-purple-200 text-sm">Support Available</div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Zap className="h-6 w-6 text-morton-orange" />
                    <span className="text-white font-semibold">Response</span>
                  </div>
                  <div className="text-3xl font-bold text-morton-orange mb-2">15min</div>
                  <div className="text-morton-purple-200 text-sm">Response Time</div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Monthly Pricing Design */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Maintenance & <span className="font-brand text-morton-orange">Support</span> Services
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Comprehensive maintenance and support solutions to keep your systems running at peak performance
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  {/* Monthly Badge */}
                  <div className="bg-morton-orange/10 border-b border-morton-purple-700 p-3 text-center">
                    <span className="text-morton-orange font-semibold text-sm">
                      {service.price.includes('/month') ? 'Monthly Service' : 'One-Time Setup'}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="p-6 border-b border-morton-purple-700">
                    <h3 className="text-xl font-bold text-white group-hover:text-morton-orange transition-colors mb-2 text-center">
                      {service.name}
                    </h3>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-morton-orange">{service.price}</div>
                    </div>
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
                Maintenance & <span className="font-brand text-morton-orange">Support</span> Services
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Comprehensive maintenance and support solutions to keep your systems running at peak performance
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
                Why Choose Our <span className="font-brand text-morton-orange">Support</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Proactive maintenance and expert support that ensures reliability, performance, and peace of mind
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
                Our Support <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures comprehensive maintenance and reliable support for your systems
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
                Support <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our maintenance and support services have delivered reliability and peace of mind
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
                  <Settings className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready for Reliable <span className="font-brand text-morton-orange">Support</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Ensure your systems run smoothly with proactive maintenance and expert support 
                that prevents issues and maximizes performance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Support Plan</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Settings className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
