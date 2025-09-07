import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Database, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Users,
  Eye,
  Zap,
  Award,
  Link2,
  Server,
  GitBranch,
  BarChart3,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Database & Integration Services - Morton Software Insights LLC',
  description: 'Data-driven integrations and intelligent database solutions. Database design, API integration, CRM setup, and analytics-powered workflow automation.',
  keywords: 'database design, API integration, CRM integration, workflow automation, data migration, system integration, data insights, analytics',
};

export default function DatabaseIntegrationPage() {
  const services = [
    {
      name: "Database Design & Setup",
      price: "$1,500",
      description: "Insights-driven database architecture and implementation with performance optimization",
      features: [
        "Database design",
        "Schema optimization",
        "Performance tuning",
        "Security setup",
        "Documentation"
      ],
      deliverables: ["Database Schema", "Performance Report", "Security Documentation"]
    },
    {
      name: "Third-Party API Integration",
      price: "$800",
      description: "Connect external services with data insights tracking and comprehensive error handling",
      features: [
        "API connections",
        "Data synchronization",
        "Error handling",
        "Testing & validation",
        "Documentation"
      ],
      deliverables: ["API Integration", "Testing Documentation", "Error Handling System"]
    },
    {
      name: "CRM Integration",
      price: "$1,200",
      description: "Analytics-powered customer relationship management setup with automation and training",
      features: [
        "CRM setup",
        "Data migration",
        "Custom fields",
        "Automation rules",
        "User training"
      ],
      deliverables: ["CRM System", "Migration Report", "Training Materials"]
    },
    {
      name: "Workflow Automation",
      price: "$2,000",
      description: "Data-driven automated business process implementation with monitoring and optimization",
      features: [
        "Process mapping",
        "Automation setup",
        "Integration testing",
        "Performance monitoring",
        "Optimization"
      ],
      deliverables: ["Automation System", "Process Documentation", "Monitoring Dashboard"]
    },
    {
      name: "Data Migration Services",
      price: "$3,500",
      description: "Secure data transfer with insights validation between systems and comprehensive support",
      features: [
        "Data analysis",
        "Migration planning",
        "Secure transfer",
        "Validation testing",
        "Support"
      ],
      deliverables: ["Migration Plan", "Data Validation Report", "Support Documentation"]
    },
    {
      name: "Enterprise Integration Package",
      price: "$5,000",
      description: "Complete integration solution with multiple systems, advanced analytics, and ongoing support",
      features: [
        "Multi-system integration",
        "Advanced analytics",
        "Custom dashboards",
        "Performance optimization",
        "Ongoing support"
      ],
      deliverables: ["Integration Platform", "Analytics Dashboard", "Support Package"]
    }
  ];

  const benefits = [
    {
      icon: Link2,
      title: "Seamless Connectivity",
      description: "Intelligent integrations that connect all your systems and data sources for unified operations and comprehensive insights."
    },
    {
      icon: Server,
      title: "Optimized Performance",
      description: "High-performance database solutions designed for scalability, reliability, and maximum efficiency in data processing."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Advanced analytics and reporting capabilities that transform raw data into actionable business intelligence and strategic insights."
    },
    {
      icon: Users,
      title: "Expert Implementation",
      description: "Experienced database and integration specialists with proven expertise in complex system architectures and data management."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Analysis & Planning",
      description: "Comprehensive assessment of your current systems, data architecture, and integration requirements to design the optimal solution."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Development of detailed database schema and integration architecture with performance optimization and security considerations."
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description: "Systematic implementation of database solutions and integrations with comprehensive testing and validation procedures."
    },
    {
      step: "04",
      title: "Data Migration & Sync",
      description: "Secure data migration and synchronization processes with validation testing and minimal downtime implementation."
    },
    {
      step: "05",
      title: "Optimization & Support",
      description: "Performance monitoring, optimization, and ongoing support to ensure maximum efficiency and system reliability."
    }
  ];

  const testimonials = [
    {
      name: "Patricia Williams",
      role: "Data Director, AnalyticsCorp",
      content: "Morton Software Insights transformed our data infrastructure completely. The database optimization improved our query performance by 500%, and the integration platform unified all our systems seamlessly.",
      rating: 5
    },
    {
      name: "James Anderson",
      role: "CTO, IntegrateFlow Solutions",
      content: "The enterprise integration package exceeded expectations. We went from managing 12 separate systems to a unified platform with real-time analytics. The data migration was flawless with zero downtime.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Wide Layout with Data Flow Visualization */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-morton-orange/4 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-morton-purple/6 rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                <Database className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Database & Integration</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
                Data-Driven
                <span className="font-brand text-morton-orange block">Integration</span>
              </h1>
              
              <p className="text-xl text-morton-purple-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                Intelligent integrations and analytics-powered database solutions that deliver 
                actionable insights for streamlined operations and unified data management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Connect Systems</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Services</span>
                  <Database className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <Database className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">100+</div>
                <div className="text-white font-semibold text-sm mb-1">Integrations</div>
                <div className="text-morton-purple-200 text-xs">Systems connected</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">500%</div>
                <div className="text-white font-semibold text-sm mb-1">Performance</div>
                <div className="text-morton-purple-200 text-xs">Speed improvement</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">Zero</div>
                <div className="text-white font-semibold text-sm mb-1">Data Loss</div>
                <div className="text-morton-purple-200 text-xs">Secure migrations</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <Link2 className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">24/7</div>
                <div className="text-white font-semibold text-sm mb-1">Sync</div>
                <div className="text-morton-purple-200 text-xs">Real-time data</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <BarChart3 className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">AI</div>
                <div className="text-white font-semibold text-sm mb-1">Insights</div>
                <div className="text-morton-purple-200 text-xs">Smart analytics</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section - Complexity-Based Pricing */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Integration <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Comprehensive database and integration solutions powered by data insights and advanced analytics
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full overflow-hidden">
                  {/* Complexity Indicator */}
                  <div className="bg-gradient-to-r from-morton-purple-800 to-morton-purple-900 p-4 border-b border-morton-purple-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Database className="h-5 w-5 text-morton-orange" />
                        <span className="text-white font-semibold text-sm">
                          {index < 2 ? 'Simple' : index < 4 ? 'Advanced' : 'Enterprise'}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-morton-orange">{service.price}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-morton-orange transition-colors mb-4 text-center">
                      {service.name}
                    </h3>

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
                Integration <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Comprehensive database and integration solutions powered by data insights and advanced analytics
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
                Why Choose Our <span className="font-brand text-morton-orange">Integration</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Strategic database and integration solutions that unify systems, optimize performance, and deliver actionable insights
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
                Our Integration <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures successful database implementation and seamless system integration
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
                Integration <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our database and integration solutions have transformed operations and delivered exceptional results
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
                  <Database className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Integrate Your <span className="font-brand text-morton-orange">Data</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your data infrastructure with intelligent integrations that deliver 
                actionable insights and streamlined workflows for maximum efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Integration</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Database className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
