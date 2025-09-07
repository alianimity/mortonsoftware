import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Lightbulb, 
  ArrowRight,
  CheckCircle,
  TestTube,
  Users,
  Target,
  Star,
  Sparkles,
  Zap,
  Eye,
  Clock,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Prototyping & Validation - Morton Software Insights LLC',
  description: 'Rapid prototyping and comprehensive validation to test ideas before development. User testing, interactive prototypes, and validation research.',
  keywords: 'prototyping, validation, user testing, UX research, interactive prototypes, concept validation, design validation',
};

export default function PrototypingValidationPage() {
  const services = [
    {
      name: "Wireframe Prototyping",
      price: "$900",
      description: "Low-fidelity concept validation with rapid iteration and stakeholder feedback",
      features: [
        "Wireframe creation",
        "User flow mapping",
        "Concept validation",
        "Stakeholder feedback",
        "Iteration support"
      ],
      deliverables: ["Wireframe Set", "User Flow Diagrams", "Validation Report"]
    },
    {
      name: "Interactive Prototype",
      price: "$1,800",
      description: "High-fidelity clickable prototypes with realistic interactions and user flows",
      features: [
        "Interactive prototypes",
        "Realistic user flows",
        "Animation & transitions",
        "Device-specific testing",
        "Stakeholder demos"
      ],
      deliverables: ["Interactive Prototype", "Demo Presentation", "User Guide"]
    },
    {
      name: "User Testing & Research",
      price: "$2,500",
      description: "Comprehensive user experience validation with detailed insights and recommendations",
      features: [
        "User interviews",
        "Usability testing",
        "A/B testing setup",
        "Analytics analysis",
        "Research reports"
      ],
      deliverables: ["Research Report", "User Insights", "Recommendations"]
    },
    {
      name: "Mobile App Prototype",
      price: "$3,200",
      description: "Native mobile prototype with gesture interactions and device-specific testing",
      features: [
        "Native prototyping",
        "Gesture interactions",
        "Device testing",
        "App store preview",
        "User feedback loops"
      ],
      deliverables: ["Mobile Prototype", "Device Testing Report", "App Store Assets"]
    },
    {
      name: "Prototype Testing & Iteration",
      price: "$4,500",
      description: "Multiple rounds of testing and refinement with continuous validation and optimization",
      features: [
        "Multiple iterations",
        "Continuous testing",
        "Performance metrics",
        "User feedback integration",
        "Final validation"
      ],
      deliverables: ["Final Prototype", "Testing Results", "Optimization Report"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapid Validation",
      description: "Quickly test and validate ideas before full development, saving time and resources with fast iteration cycles."
    },
    {
      icon: Target,
      title: "Risk Reduction",
      description: "Minimize development risks by identifying issues early and validating concepts with real users before building."
    },
    {
      icon: Users,
      title: "User-Centered Design",
      description: "Ensure your product meets user needs through comprehensive testing and validation with your target audience."
    },
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Reduce development costs by catching design flaws early and optimizing user experience before coding begins."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Ideation",
      description: "Collaborative brainstorming and concept development with stakeholder input and market research analysis."
    },
    {
      step: "02",
      title: "Design",
      description: "Create wireframes and visual designs based on user requirements and business objectives with iterative feedback."
    },
    {
      step: "03",
      title: "Prototype",
      description: "Build interactive prototypes with realistic functionality and user flows for comprehensive testing scenarios."
    },
    {
      step: "04",
      title: "Test",
      description: "Conduct user testing sessions with target audience and gather detailed feedback on usability and functionality."
    },
    {
      step: "05",
      title: "Iterate",
      description: "Refine and optimize based on testing results with continuous improvement and validation cycles."
    }
  ];

  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Product Manager, InnovateTech",
      content: "Morton Software Insights' prototyping process saved us months of development time. The validation insights were invaluable and helped us launch a product that users actually wanted.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Startup Founder, AppVenture",
      content: "The interactive prototypes were so realistic that investors could truly understand our vision. The user testing revealed critical insights that shaped our entire product strategy.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Asymmetric Layout with Process Flow */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-morton-orange/6 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                  <Lightbulb className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium">Prototyping & Validation</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Validate Ideas
                  <span className="font-brand text-morton-orange block">Before Building</span>
                </h1>
                
                <p className="text-xl text-morton-purple-200 leading-relaxed mb-8">
                  Rapid prototyping and validation services that test your ideas before full development. 
                  Save time and resources with data-driven validation and user testing insights.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Start Prototyping</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#services"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>View Services</span>
                    <Lightbulb className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">200+</div>
                    <div className="text-sm text-morton-purple-200">Prototypes Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">95%</div>
                    <div className="text-sm text-morton-purple-200">Validation Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-morton-orange">48h</div>
                    <div className="text-sm text-morton-purple-200">Turnaround</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <AnimatedSection delay={0.2}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-morton-orange rounded-full flex items-center justify-center text-morton-purple-950 text-xs font-bold">1</div>
                    <span className="text-white font-semibold text-sm">Ideation</span>
                  </div>
                  <p className="text-morton-purple-200 text-xs">Concept development</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-morton-orange rounded-full flex items-center justify-center text-morton-purple-950 text-xs font-bold">2</div>
                    <span className="text-white font-semibold text-sm">Prototyping</span>
                  </div>
                  <p className="text-morton-purple-200 text-xs">Rapid development</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-morton-orange rounded-full flex items-center justify-center text-morton-purple-950 text-xs font-bold">3</div>
                    <span className="text-white font-semibold text-sm">Testing</span>
                  </div>
                  <p className="text-morton-purple-200 text-xs">User validation</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-4 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-morton-orange rounded-full flex items-center justify-center text-morton-purple-950 text-xs font-bold">4</div>
                    <span className="text-white font-semibold text-sm">Validation</span>
                  </div>
                  <p className="text-morton-purple-200 text-xs">Data-driven insights</p>
                </div>
              </AnimatedSection>
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
                Prototyping <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Validate your ideas with rapid prototyping and comprehensive testing before development
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
                Why Choose Our <span className="font-brand text-morton-orange">Prototyping</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Reduce risks and accelerate development with validated prototypes and user-centered design
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
                Our Prototyping <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures successful validation and user-centered design outcomes
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
                See how our prototyping and validation services have helped businesses make informed decisions
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
                  <Lightbulb className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Validate Your <span className="font-brand text-morton-orange">Ideas</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Test and validate your concepts before full development with comprehensive prototyping 
                and user research. Save time and resources with smart validation strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Prototyping</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <TestTube className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
