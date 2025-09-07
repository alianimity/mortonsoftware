import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Sparkles, 
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Cpu,
  Star,
  Lightbulb,
  Rocket,
  Target,
  Users,
  TrendingUp,
  Award,
  Eye
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Innovation & Emerging Tech - Morton Software Insights LLC',
  description: 'Cutting-edge AI, ML, blockchain, and IoT solutions. Innovation workshops and proof-of-concept development.',
  keywords: 'AI, machine learning, blockchain, IoT, emerging technologies, innovation, automation, smart contracts',
};

export default function InnovationEmergingTechPage() {
  const services = [
    {
      name: "AI/ML Proof of Concept",
      price: "$5,500",
      description: "Machine learning model development and testing with comprehensive analysis and implementation roadmap",
      features: [
        "Model development",
        "Data analysis",
        "Performance testing",
        "Implementation plan",
        "ROI assessment"
      ],
      deliverables: ["POC Documentation", "Model Performance Report", "Implementation Roadmap"]
    },
    {
      name: "Blockchain Smart Contract",
      price: "$7,500", 
      description: "Custom smart contract development and deployment with security auditing and testing framework",
      features: [
        "Smart contract coding",
        "Security audit",
        "Deployment support",
        "Testing framework",
        "Documentation"
      ],
      deliverables: ["Smart Contract Code", "Security Audit Report", "Deployment Guide"]
    },
    {
      name: "IoT Solution Development",
      price: "$8,200",
      description: "Connected device integration and dashboard with real-time analytics and mobile application",
      features: [
        "Device integration",
        "Data collection",
        "Real-time dashboard",
        "Analytics platform",
        "Mobile app"
      ],
      deliverables: ["IoT Platform", "Analytics Dashboard", "Mobile Application"]
    },
    {
      name: "AI Chatbot Integration",
      price: "$3,500",
      description: "Intelligent customer service automation with natural language processing and analytics tracking",
      features: [
        "NLP training",
        "Integration setup",
        "Custom responses",
        "Analytics tracking",
        "Ongoing optimization"
      ],
      deliverables: ["Chatbot System", "Training Documentation", "Analytics Setup"]
    },
    {
      name: "Data Analytics Platform",
      price: "$12,000",
      description: "Custom analytics with AI insights, interactive dashboards, and predictive analytics capabilities",
      features: [
        "Data pipeline",
        "AI-powered insights",
        "Interactive dashboards",
        "Predictive analytics",
        "Reporting tools"
      ],
      deliverables: ["Analytics Platform", "Dashboard Suite", "Reporting System"]
    },
    {
      name: "Innovation Workshop",
      price: "$18,000",
      description: "Emerging tech strategy and implementation roadmap with comprehensive technology assessment",
      features: [
        "Technology assessment",
        "Innovation roadmap",
        "Proof of concept",
        "Implementation plan",
        "Team training"
      ],
      deliverables: ["Innovation Strategy", "Technology Roadmap", "Training Materials"]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Advanced artificial intelligence and machine learning solutions that drive automation, insights, and competitive advantage."
    },
    {
      icon: Rocket,
      title: "Innovation Acceleration",
      description: "Rapid prototyping and proof-of-concept development to validate ideas and accelerate time-to-market for new technologies."
    },
    {
      icon: Target,
      title: "Future-Ready Solutions",
      description: "Cutting-edge blockchain, IoT, and emerging tech implementations that position your business for tomorrow&apos;s opportunities."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access to innovation specialists with proven track records in emerging technologies and successful digital transformation."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Comprehensive analysis of your business needs, current technology stack, and innovation opportunities to identify the best emerging tech solutions."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Development of innovation roadmap with prioritized technology implementations, risk assessments, and ROI projections for maximum impact."
    },
    {
      step: "03",
      title: "Prototyping",
      description: "Rapid proof-of-concept development and testing to validate technical feasibility and business value before full implementation."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Full-scale deployment of emerging technology solutions with integration support, testing, and performance optimization."
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous monitoring, performance tuning, and enhancement of deployed solutions with ongoing support and innovation updates."
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CTO, TechForward Inc",
      content: "Morton Software Insights delivered an exceptional AI solution that transformed our customer service. The machine learning model they built increased our efficiency by 300% and customer satisfaction by 45%.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Innovation Director, BlockChain Ventures",
      content: "The blockchain smart contract development was flawless. Their expertise in emerging technologies helped us launch our DeFi platform ahead of schedule with enterprise-grade security and performance.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Diagonal Split with Tech Icons */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-morton-orange/4 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                  <Sparkles className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium">Innovation & Emerging Tech</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Tomorrow&apos;s Tech
                  <span className="font-brand text-morton-orange block">Today</span>
                </h1>
                
                <p className="text-xl text-morton-purple-200 leading-relaxed mb-8">
                  Cutting-edge AI, ML, blockchain, and IoT solutions to give you a competitive advantage. 
                  From proof of concept to full implementation, we bring the future to your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Explore Innovation</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>View Services</span>
                    <Sparkles className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">50+</div>
                    <div className="text-sm text-morton-purple-200">AI Solutions Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">95%</div>
                    <div className="text-sm text-morton-purple-200">Innovation Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">30-Day</div>
                    <div className="text-sm text-morton-purple-200">Prototyping</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <AnimatedSection delay={0.2}>
                  <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                    <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                      <Brain className="h-6 w-6 text-morton-orange" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">AI & ML</h3>
                    <p className="text-morton-purple-200 text-xs">Intelligent solutions</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                    <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                      <Cpu className="h-6 w-6 text-morton-orange" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Blockchain</h3>
                    <p className="text-morton-purple-200 text-xs">Decentralized systems</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                    <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                      <Zap className="h-6 w-6 text-morton-orange" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">IoT</h3>
                    <p className="text-morton-purple-200 text-xs">Connected devices</p>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                    <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                      <Lightbulb className="h-6 w-6 text-morton-orange" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Innovation</h3>
                    <p className="text-morton-purple-200 text-xs">Future technologies</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Innovation <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Harness the power of emerging technologies for competitive advantage and business transformation
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
                Why Choose Our <span className="font-brand text-morton-orange">Innovation</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Leading-edge technology solutions that drive business transformation and competitive advantage
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
                Our Innovation <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures successful emerging technology implementation and maximum business impact
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
                Innovation <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our emerging technology solutions have transformed businesses and created competitive advantages
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
                  <Sparkles className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to <span className="font-brand text-morton-orange">Innovate</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI, blockchain, and IoT solutions. 
                Let&apos;s build the future of your industry together with proven emerging technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Innovation Journey</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Sparkles className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
