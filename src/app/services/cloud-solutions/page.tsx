import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Cloud,
  Server,
  Monitor,
  Lock,
  Star,
  Sparkles,
  Zap,
  Users,
  TrendingUp,
  Award,
  Database,
  Settings
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud, DevOps & Infrastructure - Morton Software Insights LLC',
  description: 'Data-driven cloud solutions with insights-powered infrastructure. Cloud migration, DevOps automation, and analytics-driven monitoring.',
  keywords: 'cloud solutions, devops, infrastructure, cloud migration, automation, monitoring, AWS, deployment, data insights, analytics',
};

export default function CloudSolutionsPage() {
  const services = [
    {
      name: "Cloud Infrastructure Assessment",
      price: "$1,800",
      description: "Data-driven infrastructure analysis and migration planning with comprehensive recommendations",
      features: [
        "Current infrastructure audit",
        "Cloud migration roadmap",
        "Cost optimization analysis",
        "Security assessment",
        "Performance recommendations"
      ],
      deliverables: ["Assessment Report", "Migration Plan", "Cost Analysis"],
      timeline: "1-2 weeks",
      savings: "Up to 40% cost reduction"
    },
    {
      name: "Cloud Migration Services",
      price: "$5,500",
      description: "Complete migration with minimal downtime and data insights integration",
      features: [
        "Data migration planning",
        "Application modernization",
        "Minimal downtime strategy",
        "Testing & validation",
        "Go-live support"
      ],
      deliverables: ["Migrated Infrastructure", "Documentation", "Training"],
      timeline: "4-8 weeks",
      savings: "99.9% uptime maintained"
    },
    {
      name: "DevOps Pipeline Setup",
      price: "$4,500",
      description: "CI/CD automation with analytics-driven deployment pipelines and monitoring",
      features: [
        "Automated deployments",
        "Testing automation",
        "Code quality gates",
        "Environment management",
        "Monitoring integration"
      ],
      deliverables: ["CI/CD Pipeline", "Automation Scripts", "Monitoring Setup"],
      timeline: "3-5 weeks",
      savings: "80% faster deployments"
    },
    {
      name: "Infrastructure as Code",
      price: "$3,800",
      description: "Automated infrastructure deployment with insights management and version control",
      features: [
        "Terraform/CloudFormation",
        "Version controlled infrastructure",
        "Automated provisioning",
        "Environment consistency",
        "Disaster recovery"
      ],
      deliverables: ["IaC Templates", "Version Control", "Recovery Plan"],
      timeline: "2-4 weeks",
      savings: "90% provisioning time saved"
    },
    {
      name: "Managed Cloud Services",
      price: "$1,200/month",
      description: "24/7 monitoring with data-driven optimization insights and proactive support",
      features: [
        "24/7 monitoring",
        "Performance optimization",
        "Security updates",
        "Backup management",
        "Technical support"
      ],
      deliverables: ["Monitoring Dashboard", "Monthly Reports", "Support Portal"],
      timeline: "Ongoing",
      savings: "24/7 peace of mind"
    },
    {
      name: "Disaster Recovery Setup",
      price: "$8,000",
      description: "Backup systems with analytics-driven recovery procedures and business continuity",
      features: [
        "Backup automation",
        "Recovery testing",
        "RTO/RPO planning",
        "Business continuity",
        "Documentation"
      ],
      deliverables: ["DR System", "Recovery Procedures", "Testing Reports"],
      timeline: "6-10 weeks",
      savings: "99.99% data protection"
    }
  ];

  const benefits = [
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Cloud solutions that automatically scale with your business needs, ensuring optimal performance and cost efficiency."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security measures and compliance frameworks that protect your data and meet industry standards."
    },
    {
      icon: Zap,
      title: "Automated Operations",
      description: "DevOps automation that streamlines deployments, reduces errors, and accelerates development cycles."
    },
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description: "Comprehensive monitoring and alerting systems that provide insights into performance and potential issues."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive evaluation of your current infrastructure and development of a strategic cloud migration plan."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design of scalable, secure cloud architecture optimized for your specific business requirements and workloads."
    },
    {
      step: "03",
      title: "Migration & Implementation",
      description: "Systematic migration of applications and data with minimal downtime and comprehensive testing procedures."
    },
    {
      step: "04",
      title: "Automation & DevOps",
      description: "Implementation of CI/CD pipelines, infrastructure as code, and automated deployment processes."
    },
    {
      step: "05",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring, performance optimization, and ongoing support to ensure maximum efficiency."
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      role: "CTO, ScaleTech Solutions",
      content: "Morton Software Insights transformed our infrastructure completely. The cloud migration reduced our costs by 45% while improving performance by 300%. Their DevOps automation saved us countless hours.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "IT Director, InnovateCorp",
      content: "The managed cloud services have been exceptional. 24/7 monitoring and proactive optimization mean we never worry about downtime. Our deployment speed increased by 80% with their CI/CD pipelines.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Split Layout with Cloud Icons */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-morton-orange/3 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                  <Shield className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium">Cloud, DevOps & Infrastructure</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Insights-Driven
                  <span className="font-brand text-morton-orange block">Infrastructure</span>
                </h1>
                
                <p className="text-xl text-morton-purple-200 leading-relaxed mb-8">
                  Modernize your infrastructure with data-driven cloud solutions. Analytics-powered 
                  monitoring and automated deployments that scale with intelligent insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Start Migration</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>View Services</span>
                    <Shield className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">99.9%</div>
                    <div className="text-sm text-morton-purple-200">Uptime Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">45%</div>
                    <div className="text-sm text-morton-purple-200">Cost Reduction</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                    <Cloud className="h-6 w-6 text-morton-orange" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Cloud Migration</h3>
                  <p className="text-morton-purple-200 text-sm">Seamless transition to cloud</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                    <Settings className="h-6 w-6 text-morton-orange" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">DevOps Automation</h3>
                  <p className="text-morton-purple-200 text-sm">Streamlined deployments</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                    <Monitor className="h-6 w-6 text-morton-orange" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">24/7 Monitoring</h3>
                  <p className="text-morton-purple-200 text-sm">Proactive system oversight</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Unique Pricing Cards with Timeline & Savings */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Cloud <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Comprehensive cloud solutions from migration to ongoing management with data insights
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  {/* Header with Price */}
                  <div className="bg-gradient-to-r from-morton-orange/10 to-morton-purple/10 p-6 border-b border-morton-purple-700">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-morton-orange transition-colors">
                        {service.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-morton-orange">{service.price}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-morton-purple-200">Timeline: {service.timeline}</span>
                      <span className="text-morton-orange font-semibold">{service.savings}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
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
                Why Choose Our <span className="font-brand text-morton-orange">Cloud</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Strategic cloud solutions that optimize performance, reduce costs, and ensure scalability
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
                Our Cloud <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures successful cloud transformation and optimal performance
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
                Cloud <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our cloud solutions have transformed infrastructure and delivered exceptional results
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
                  <Shield className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Scale Your <span className="font-brand text-morton-orange">Infrastructure</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your infrastructure with data-driven cloud solutions that deliver 
                scalability, security, and cost optimization for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Migration</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Cloud className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
