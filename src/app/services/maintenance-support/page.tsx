import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Settings, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Maintenance & Support - Maker Software',
  description: 'Ongoing maintenance, support, and optimization. 24/7 technical support, performance monitoring, and regular updates.',
  keywords: 'website maintenance, technical support, performance monitoring, software updates, backup services',
};

export default function MaintenanceSupportPage() {
  const services = [
    {
      name: "Website Maintenance",
      price: "$200/month",
      description: "Regular updates, backups, and security monitoring",
      features: ["Regular updates", "Security monitoring", "Automated backups", "Performance optimization", "Monthly reports"]
    },
    {
      name: "Software Support & Updates",
      price: "$500/month",
      description: "Application maintenance and feature updates",
      features: ["Bug fixes", "Feature updates", "Performance improvements", "Security patches", "Technical support"]
    },
    {
      name: "Performance Monitoring",
      price: "$300/month",
      description: "24/7 performance tracking and optimization",
      features: ["Real-time monitoring", "Performance alerts", "Optimization recommendations", "Uptime tracking", "Analytics reports"]
    },
    {
      name: "Backup & Recovery Services",
      price: "$100/month",
      description: "Automated backups and disaster recovery",
      features: ["Automated backups", "Data recovery", "Disaster planning", "Testing procedures", "Documentation"]
    },
    {
      name: "Technical Support Package",
      price: "$1,200/month",
      description: "Dedicated technical support and troubleshooting",
      features: ["Priority support", "Dedicated contact", "Emergency response", "Troubleshooting", "System optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <Settings className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Maintenance & Support</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Always There When
                <span className="font-brand text-maker-yellow block">You Need Us</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Ongoing maintenance, support, and optimization to keep your systems running smoothly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Get Support</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-maker-yellow">{service.price}</div>
                  </div>
                  <p className="text-maker-blue-200 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-maker-yellow flex-shrink-0" />
                        <span className="text-maker-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary w-full text-center">Get Started</Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
