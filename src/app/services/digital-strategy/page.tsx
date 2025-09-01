import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Clock,
  Star,
  MessageSquare,
  Award,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Strategy & Consulting - Maker Software',
  description: 'Expert digital strategy consulting to accelerate your transformation. Business analysis, technology roadmaps, and strategic planning services.',
  keywords: 'digital strategy, business consulting, technology roadmap, digital transformation, strategic planning',
};

export default function DigitalStrategyPage() {
  const services = [
    {
      name: "Strategy Report",
      price: "$200",
      duration: "1-2 days",
      description: "Comprehensive digital strategy analysis with actionable recommendations",
      features: [
        "Current state assessment",
        "Competitive analysis",
        "Technology recommendations",
        "Implementation roadmap",
        "ROI projections"
      ],
      deliverables: ["PDF Strategy Report", "Executive Summary", "Action Plan"]
    },
    {
      name: "Strategy Consultation",
      price: "$500",
      duration: "2 hours",
      description: "Deep-dive strategic session with our experts to chart your digital future",
      features: [
        "One-on-one expert consultation",
        "Live strategy development",
        "Q&A session",
        "Follow-up recommendations",
        "Priority action items"
      ],
      deliverables: ["Session Recording", "Strategy Notes", "Next Steps Guide"]
    },
    {
      name: "Spark Session",
      price: "$2,500",
      duration: "1 week",
      description: "Intensive workshop to ignite your digital transformation journey",
      features: [
        "3-day intensive workshop",
        "Stakeholder interviews",
        "Process mapping",
        "Technology audit",
        "Custom strategy framework"
      ],
      deliverables: ["Strategy Playbook", "Implementation Timeline", "Resource Requirements"]
    },
    {
      name: "Ignite Session",
      price: "$5,500",
      duration: "2 weeks", 
      description: "Comprehensive transformation planning with detailed execution roadmap",
      features: [
        "Complete business analysis",
        "Technology architecture design",
        "Change management planning",
        "Risk assessment",
        "Success metrics definition"
      ],
      deliverables: ["Complete Strategy Document", "Technical Specifications", "Change Management Plan"]
    },
    {
      name: "Custom Strategy Package",
      price: "$15,000+",
      duration: "4+ weeks",
      description: "Tailored strategic partnership for complex digital transformations",
      features: [
        "Dedicated strategy team",
        "Ongoing strategic guidance",
        "Implementation support",
        "Performance monitoring",
        "Continuous optimization"
      ],
      deliverables: ["Comprehensive Strategy Suite", "Ongoing Support", "Performance Dashboards"]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Clear Direction",
      description: "Get a clear roadmap for your digital transformation with prioritized actions and measurable goals."
    },
    {
      icon: TrendingUp,
      title: "Accelerated Growth", 
      description: "Identify high-impact opportunities and implement strategies that drive immediate business results."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Leverage cutting-edge technologies and industry best practices to stay ahead of competition."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access to seasoned digital transformation experts with proven track records across industries."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Deep analysis of your current state, challenges, and business objectives."
    },
    {
      step: "02", 
      title: "Assessment",
      description: "Comprehensive evaluation of your technology stack, processes, and market position."
    },
    {
      step: "03",
      title: "Strategy Design",
      description: "Custom digital strategy development aligned with your business goals and resources."
    },
    {
      step: "04",
      title: "Roadmap Creation", 
      description: "Detailed implementation plan with timelines, milestones, and success metrics."
    },
    {
      step: "05",
      title: "Execution Support",
      description: "Ongoing guidance and support to ensure successful strategy implementation."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc",
      content: "The digital strategy from Maker Software transformed our entire business approach. We saw 300% growth in 6 months.",
      rating: 5
    },
    {
      name: "Michael Rodriguez", 
      role: "CTO, Global Retail Co",
      content: "Their strategic guidance helped us navigate complex digital transformation challenges with clarity and confidence.",
      rating: 5
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-6">
                  <BarChart3 className="h-4 w-4 text-maker-yellow" />
                  <span className="text-maker-yellow font-medium">Digital Strategy & Consulting</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Chart Your 
                  <span className="font-brand text-maker-yellow block">Digital Future</span>
                </h1>
                
                <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                  Strategic guidance and comprehensive roadmaps to accelerate your digital transformation. 
                  From assessment to execution, we help you navigate the complexities of modern business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Start Your Strategy</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>View Services</span>
                    <BarChart3 className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-maker-yellow">500+</div>
                    <div className="text-sm text-maker-blue-200">Strategies Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-maker-yellow">98%</div>
                    <div className="text-sm text-maker-blue-200">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-maker-yellow">24h</div>
                    <div className="text-sm text-maker-blue-200">Response Time</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Strategy Assessment</h3>
                  <p className="text-maker-blue-200 mb-6">
                    Get a free 15-minute assessment of your current digital strategy and receive 
                    personalized recommendations.
                  </p>
                  <div className="space-y-3 mb-6">
                    {["Current state analysis", "Gap identification", "Quick wins discovery", "Next steps planning"].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-maker-yellow" />
                        <span className="text-maker-blue-100 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary w-full text-center">
                    Book Free Assessment
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Strategy <span className="font-brand text-maker-yellow">Services</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Choose the strategic service that best fits your needs and business goals
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
                    <div className="text-right">
                      <div className="text-2xl font-bold text-maker-yellow">{service.price}</div>
                      <div className="text-xs text-maker-blue-300">{service.duration}</div>
                    </div>
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

                  <div className="border-t border-maker-blue-700 pt-4 mb-6">
                    <h4 className="text-white font-semibold mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="px-2 py-1 bg-maker-yellow/10 border border-maker-yellow/30 rounded text-maker-yellow text-xs"
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
      <section className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our <span className="font-brand text-maker-yellow">Strategy</span> Services?
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Strategic clarity that drives measurable business transformation and growth
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="text-center bg-maker-blue-900 border border-maker-blue-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="p-4 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl w-fit mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-maker-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-maker-blue-200 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Strategic <span className="font-brand text-maker-yellow">Process</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                A proven methodology that ensures strategic clarity and successful implementation
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 0.1}>
                  <div className="flex items-center space-x-6 bg-maker-blue-950 border border-maker-blue-700 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                    <div className="text-4xl font-bold text-maker-yellow/30 flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-maker-blue-200 leading-relaxed">{step.description}</p>
                    </div>
                    <CheckCircle className="h-6 w-6 text-maker-yellow flex-shrink-0" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Client <span className="font-brand text-maker-yellow">Success</span> Stories
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                See how our strategic guidance has transformed businesses worldwide
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.2}>
                <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-xl p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-maker-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-maker-blue-200 leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-maker-yellow text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl">
                  <Sparkles className="h-6 w-6 text-maker-yellow" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Transform Your <span className="font-brand text-maker-yellow">Strategy</span>?
                </h2>
              </div>
              
              <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get strategic clarity and accelerate your digital transformation with expert guidance 
                tailored to your business goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Strategy Today</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <BarChart3 className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
