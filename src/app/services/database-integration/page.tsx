import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Database, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Database & Integration Services - Maker Software',
  description: 'Seamless integrations and robust database solutions. Database design, API integration, CRM setup, and workflow automation.',
  keywords: 'database design, API integration, CRM integration, workflow automation, data migration, system integration',
};

export default function DatabaseIntegrationPage() {
  const services = [
    {
      name: "Database Design & Setup",
      price: "$1,500",
      description: "Custom database architecture and implementation",
      features: ["Database design", "Schema optimization", "Performance tuning", "Security setup", "Documentation"]
    },
    {
      name: "Third-Party API Integration",
      price: "$800",
      description: "Connect external services and platforms",
      features: ["API connections", "Data synchronization", "Error handling", "Testing & validation", "Documentation"]
    },
    {
      name: "CRM Integration",
      price: "$1,200",
      description: "Customer relationship management system setup",
      features: ["CRM setup", "Data migration", "Custom fields", "Automation rules", "User training"]
    },
    {
      name: "Workflow Automation",
      price: "$2,000",
      description: "Automated business process implementation",
      features: ["Process mapping", "Automation setup", "Integration testing", "Performance monitoring", "Optimization"]
    },
    {
      name: "Data Migration Services",
      price: "$3,500",
      description: "Safe and secure data transfer between systems",
      features: ["Data analysis", "Migration planning", "Secure transfer", "Validation testing", "Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <Database className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Database & Integration</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Connected &
                <span className="font-brand text-maker-yellow block">Efficient</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Seamless integrations and robust database solutions for streamlined operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Connect Systems</span>
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
