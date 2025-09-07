import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Lock, 
  ArrowRight,
  CheckCircle,
  Shield,
  AlertTriangle,
  FileCheck,
  Star,
  Sparkles,
  Eye,
  Users,
  Clock,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & Compliance - Morton Software Insights LLC',
  description: 'Comprehensive security solutions and compliance frameworks. Security audits, penetration testing, and compliance consulting.',
  keywords: 'cybersecurity, security audit, penetration testing, compliance, GDPR, HIPAA, PCI, security consulting',
};

export default function SecurityCompliancePage() {
  const services = [
    {
      name: "Security Monitoring Service",
      price: "$1,500/month",
      description: "24/7 security monitoring and incident response with real-time threat detection",
      features: [
        "Real-time threat detection",
        "Incident response",
        "Security alerts",
        "Monthly reports",
        "Emergency support"
      ],
      deliverables: ["Monitoring Dashboard", "Monthly Reports", "Incident Response Plan"]
    },
    {
      name: "Cybersecurity Audit",
      price: "$2,500",
      description: "Comprehensive security assessment and recommendations with detailed analysis",
      features: [
        "Infrastructure assessment",
        "Vulnerability analysis",
        "Risk evaluation",
        "Remediation plan",
        "Executive summary"
      ],
      deliverables: ["Security Assessment Report", "Risk Analysis", "Action Plan"]
    },
    {
      name: "Penetration Testing",
      price: "$3,200",
      description: "Ethical hacking and vulnerability assessment with comprehensive testing methodology",
      features: [
        "External penetration testing",
        "Internal network testing",
        "Web application testing",
        "Detailed reporting",
        "Remediation guidance"
      ],
      deliverables: ["Penetration Test Report", "Vulnerability List", "Fix Recommendations"]
    },
    {
      name: "Security Controls Implementation",
      price: "$4,000",
      description: "Complete security infrastructure setup with enterprise-grade protection",
      features: [
        "Firewall configuration",
        "Access controls",
        "Encryption setup",
        "Monitoring tools",
        "Security policies"
      ],
      deliverables: ["Security Infrastructure", "Policy Documentation", "Training Materials"]
    },
    {
      name: "Compliance Consulting",
      price: "$5,000",
      description: "GDPR, HIPAA, or PCI compliance implementation with ongoing support",
      features: [
        "Compliance assessment",
        "Gap analysis",
        "Policy development",
        "Implementation support",
        "Audit preparation"
      ],
      deliverables: ["Compliance Framework", "Policy Suite", "Audit Readiness Package"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Multi-layered security approach protecting against advanced threats, data breaches, and cyber attacks."
    },
    {
      icon: FileCheck,
      title: "Compliance Assurance",
      description: "Ensure adherence to industry standards like GDPR, HIPAA, PCI-DSS with expert guidance and implementation."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring with real-time threat detection and immediate incident response capabilities."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access to certified security professionals with proven track records in cybersecurity and compliance frameworks."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive security evaluation of your current infrastructure, policies, and potential vulnerabilities."
    },
    {
      step: "02",
      title: "Planning",
      description: "Strategic security roadmap development with prioritized recommendations and implementation timeline."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deployment of security controls, policies, and monitoring systems with minimal business disruption."
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Continuous security monitoring with real-time threat detection and automated response protocols."
    },
    {
      step: "05",
      title: "Optimization",
      description: "Ongoing security improvements and compliance maintenance with regular assessments and updates."
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "CISO, FinanceCore Inc",
      content: "Morton Software Insights transformed our security posture completely. Their comprehensive approach helped us achieve 100% compliance and significantly reduced our risk exposure.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      role: "IT Director, HealthTech Solutions",
      content: "The security audit and implementation services were exceptional. We now have enterprise-grade security with 24/7 monitoring and complete HIPAA compliance.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Vertical Layout with Security Badges */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-morton-orange/4 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-morton-purple/8 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                <Lock className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Security & Compliance</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Secure &
                <span className="font-brand text-morton-orange block">Compliant</span>
              </h1>
              
              <p className="text-xl text-morton-purple-200 leading-relaxed mb-8">
                Comprehensive security solutions and compliance frameworks to protect your business. 
                From audits to implementation, we keep you secure and compliant with industry standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Secure Your Business</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Services</span>
                  <Lock className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection delay={0.2}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <Shield className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">500+</div>
                <div className="text-white font-semibold mb-1">Audits Completed</div>
                <div className="text-morton-purple-200 text-sm">Comprehensive assessments</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <Eye className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">99.9%</div>
                <div className="text-white font-semibold mb-1">Threat Detection</div>
                <div className="text-morton-purple-200 text-sm">Advanced monitoring</div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6 text-morton-orange" />
                </div>
                <div className="text-2xl font-bold text-morton-orange mb-1">24/7</div>
                <div className="text-white font-semibold mb-1">Monitoring</div>
                <div className="text-morton-purple-200 text-sm">Continuous protection</div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5}>
            <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Free Security Assessment</h3>
              <p className="text-morton-purple-200 mb-6 text-center">
                Get a comprehensive security assessment of your current infrastructure and receive 
                personalized recommendations to strengthen your security posture.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["Infrastructure analysis", "Vulnerability identification", "Risk assessment", "Compliance review"].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-morton-orange" />
                    <span className="text-morton-purple-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary w-full text-center">
                Book Free Assessment
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Security <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Comprehensive security solutions to protect your business and ensure compliance
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
                Why Choose Our <span className="font-brand text-morton-orange">Security</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Enterprise-grade security solutions that protect your business and ensure regulatory compliance
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
                Our Security <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures comprehensive security and successful compliance implementation
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
                Client <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our security solutions have protected businesses and ensured compliance
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
                  Ready to Secure Your <span className="font-brand text-morton-orange">Business</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Protect your business with comprehensive security solutions and ensure 
                compliance with industry standards through expert guidance and implementation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Security Assessment</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Shield className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
