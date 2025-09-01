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
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security & Compliance - Maker Software',
  description: 'Comprehensive security solutions and compliance frameworks. Security audits, penetration testing, and compliance consulting.',
  keywords: 'cybersecurity, security audit, penetration testing, compliance, GDPR, HIPAA, PCI, security consulting',
};

export default function SecurityCompliancePage() {
  const services = [
    {
      name: "Security Monitoring Service",
      price: "$1,500/month",
      description: "24/7 security monitoring and incident response",
      features: [
        "Real-time threat detection",
        "Incident response",
        "Security alerts",
        "Monthly reports",
        "Emergency support"
      ]
    },
    {
      name: "Cybersecurity Audit",
      price: "$2,500",
      description: "Comprehensive security assessment and recommendations",
      features: [
        "Infrastructure assessment",
        "Vulnerability analysis",
        "Risk evaluation",
        "Remediation plan",
        "Executive summary"
      ]
    },
    {
      name: "Penetration Testing",
      price: "$3,200",
      description: "Ethical hacking and vulnerability assessment",
      features: [
        "External penetration testing",
        "Internal network testing",
        "Web application testing",
        "Detailed reporting",
        "Remediation guidance"
      ]
    },
    {
      name: "Security Controls Implementation",
      price: "$4,000",
      description: "Complete security infrastructure setup",
      features: [
        "Firewall configuration",
        "Access controls",
        "Encryption setup",
        "Monitoring tools",
        "Security policies"
      ]
    },
    {
      name: "Compliance Consulting",
      price: "$5,000",
      description: "GDPR, HIPAA, or PCI compliance implementation",
      features: [
        "Compliance assessment",
        "Gap analysis",
        "Policy development",
        "Implementation support",
        "Audit preparation"
      ]
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
                <Lock className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Security & Compliance</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Secure &
                <span className="font-brand text-maker-yellow block">Compliant</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Comprehensive security solutions and compliance frameworks to protect your business. 
                From audits to implementation, we keep you secure and compliant.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Secure Your Business</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>All Services</span>
                  <Lock className="h-4 w-4" />
                </Link>
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
                Security <span className="font-brand text-maker-yellow">Services</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Comprehensive security solutions to protect your business and ensure compliance
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-maker-yellow transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-2xl font-bold text-maker-yellow">{service.price}</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl">
                  <Lock className="h-6 w-6 text-maker-yellow" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Secure Your <span className="font-brand text-maker-yellow">Business</span>?
                </h2>
              </div>
              
              <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Protect your business with comprehensive security solutions and ensure 
                compliance with industry standards.
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
