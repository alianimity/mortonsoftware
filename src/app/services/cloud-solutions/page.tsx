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
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud, DevOps & Infrastructure - Maker Software',
  description: 'Modernize your infrastructure with secure, scalable cloud solutions. Cloud migration, DevOps automation, and 24/7 monitoring.',
  keywords: 'cloud solutions, devops, infrastructure, cloud migration, automation, monitoring, AWS, deployment',
};

export default function CloudSolutionsPage() {
  const services = [
    {
      name: "Cloud Infrastructure Assessment",
      price: "$1,800",
      description: "Infrastructure analysis and migration planning",
      features: [
        "Current infrastructure audit",
        "Cloud migration roadmap",
        "Cost optimization analysis",
        "Security assessment",
        "Performance recommendations"
      ]
    },
    {
      name: "Cloud Migration Services",
      price: "$5,500",
      description: "Complete migration with minimal downtime",
      features: [
        "Data migration planning",
        "Application modernization",
        "Minimal downtime strategy",
        "Testing & validation",
        "Go-live support"
      ]
    },
    {
      name: "DevOps Pipeline Setup",
      price: "$4,500",
      description: "CI/CD automation and deployment pipelines",
      features: [
        "Automated deployments",
        "Testing automation",
        "Code quality gates",
        "Environment management",
        "Monitoring integration"
      ]
    },
    {
      name: "Infrastructure as Code",
      price: "$3,800",
      description: "Automated infrastructure deployment and management",
      features: [
        "Terraform/CloudFormation",
        "Version controlled infrastructure",
        "Automated provisioning",
        "Environment consistency",
        "Disaster recovery"
      ]
    },
    {
      name: "Managed Cloud Services",
      price: "$1,200/month",
      description: "24/7 monitoring, support, and optimization",
      features: [
        "24/7 monitoring",
        "Performance optimization",
        "Security updates",
        "Backup management",
        "Technical support"
      ]
    },
    {
      name: "Disaster Recovery Setup",
      price: "$8,000",
      description: "Backup systems and recovery procedures",
      features: [
        "Backup automation",
        "Recovery testing",
        "RTO/RPO planning",
        "Business continuity",
        "Documentation"
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
                <Shield className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Cloud, DevOps & Infrastructure</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Built to
                <span className="font-brand text-maker-yellow block">Scale</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Modernize your infrastructure with secure, scalable cloud solutions. 24/7 monitoring 
                and automated deployments that grow with your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>All Services</span>
                  <Shield className="h-4 w-4" />
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
                Cloud <span className="font-brand text-maker-yellow">Services</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Comprehensive cloud solutions from migration to ongoing management
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
                  <Shield className="h-6 w-6 text-maker-yellow" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Scale Your <span className="font-brand text-maker-yellow">Infrastructure</span>?
                </h2>
              </div>
              
              <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s modernize your infrastructure with secure, scalable cloud solutions 
                that grow with your business.
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
