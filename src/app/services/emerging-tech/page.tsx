import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Cpu,
  Star
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Emerging Technologies - Maker Software',
  description: 'Cutting-edge AI, ML, blockchain, and IoT solutions. Innovation workshops and proof-of-concept development.',
  keywords: 'AI, machine learning, blockchain, IoT, emerging technologies, innovation, automation, smart contracts',
};

export default function EmergingTechPage() {
  const services = [
    {
      name: "AI/ML Proof of Concept",
      price: "$5,500",
      description: "Machine learning model development and testing",
      features: ["Model development", "Data analysis", "Performance testing", "Implementation plan", "ROI assessment"]
    },
    {
      name: "Blockchain Smart Contract",
      price: "$7,500", 
      description: "Custom smart contract development and deployment",
      features: ["Smart contract coding", "Security audit", "Deployment support", "Testing framework", "Documentation"]
    },
    {
      name: "IoT Solution Development",
      price: "$8,200",
      description: "Connected device integration and dashboard",
      features: ["Device integration", "Data collection", "Real-time dashboard", "Analytics platform", "Mobile app"]
    },
    {
      name: "AI Chatbot Integration",
      price: "$3,500",
      description: "Intelligent customer service automation",
      features: ["NLP training", "Integration setup", "Custom responses", "Analytics tracking", "Ongoing optimization"]
    },
    {
      name: "Data Analytics Platform",
      price: "$12,000",
      description: "Custom analytics with AI insights",
      features: ["Data pipeline", "AI-powered insights", "Interactive dashboards", "Predictive analytics", "Reporting tools"]
    },
    {
      name: "Innovation Workshop",
      price: "$18,000",
      description: "Emerging tech strategy and implementation roadmap",
      features: ["Technology assessment", "Innovation roadmap", "Proof of concept", "Implementation plan", "Team training"]
    }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-maker-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-maker-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Emerging Technologies</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Tomorrow&apos;s Tech
                <span className="font-brand text-maker-yellow block">Today</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Cutting-edge AI, ML, and blockchain solutions to give you a competitive advantage. 
                From proof of concept to full implementation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Explore Innovation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-secondary inline-flex items-center space-x-2">
                  <span>All Services</span>
                  <Sparkles className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Innovation <span className="font-brand text-maker-yellow">Services</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Harness the power of emerging technologies for competitive advantage
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

                  <Link href="/contact" className="btn-primary w-full text-center">
                    Get Started
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
