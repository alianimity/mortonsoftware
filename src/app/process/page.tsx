import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Target, 
  Palette, 
  Code, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Shield,
  Award,
  Lightbulb,
  Clock,
  FileText,
  Zap
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Process - The Morton Method™ | Morton Software Insights',
  description: 'Discover the proven 5-phase Morton Method™ that ensures successful digital transformation projects. From discovery to delivery, learn how we craft exceptional solutions.',
  keywords: 'morton method, software development process, digital transformation methodology, agile development, project methodology',
};

export default function ProcessPage() {
  const processPhases = [
    {
      phase: "01",
      title: "Discover",
      subtitle: "Understanding Your Vision",
      description: "We begin every project with deep discovery to understand your business goals, user needs, and technical requirements. This foundation ensures we build the right solution for your specific challenges.",
      icon: Target,
      duration: "1-2 weeks",
      deliverables: [
        "Business Analysis Report",
        "User Research Findings", 
        "Technical Requirements Document",
        "Project Roadmap & Timeline",
        "Risk Assessment & Mitigation Plan"
      ],
      activities: [
        "Stakeholder interviews and workshops",
        "Market and competitor analysis", 
        "User research and persona development",
        "Technical architecture assessment",
        "Goal setting and success metrics definition"
      ]
    },
    {
      phase: "02", 
      title: "Design",
      subtitle: "Crafting the Blueprint",
      description: "Strategic planning, architecture design, and user experience mapping. We create comprehensive designs and prototypes that align perfectly with your business objectives and user needs.",
      icon: Palette,
      duration: "2-3 weeks",
      deliverables: [
        "System Architecture Diagrams",
        "UX/UI Design Mockups",
        "Interactive Prototypes",
        "Technical Specifications",
        "Design System & Style Guide"
      ],
      activities: [
        "Information architecture planning",
        "Wireframing and user flow mapping",
        "Visual design and branding",
        "Technical architecture design",
        "Prototype development and testing"
      ]
    },
    {
      phase: "03",
      title: "Develop", 
      subtitle: "Building with Precision",
      description: "Agile development with continuous feedback and iteration. Our expert craftsmen write clean, scalable code while maintaining constant communication and delivering working software incrementally.",
      icon: Code,
      duration: "4-12 weeks",
      deliverables: [
        "Working Software Increments",
        "Code Documentation",
        "Automated Test Suites",
        "API Documentation",
        "Development Progress Reports"
      ],
      activities: [
        "Sprint planning and execution",
        "Daily standups and progress tracking",
        "Code reviews and quality assurance",
        "Continuous integration and testing",
        "Regular client demos and feedback sessions"
      ]
    },
    {
      phase: "04",
      title: "Deploy",
      subtitle: "Launching with Confidence",
      description: "Secure, scalable deployment with comprehensive testing. We ensure your solution is production-ready with robust infrastructure, monitoring systems, and security measures in place.",
      icon: Cloud,
      duration: "1-2 weeks",
      deliverables: [
        "Production Environment Setup",
        "Security & Performance Testing Results",
        "Monitoring & Analytics Dashboard",
        "Deployment Documentation",
        "Backup & Recovery Procedures"
      ],
      activities: [
        "Infrastructure provisioning and configuration",
        "Security auditing and penetration testing",
        "Performance optimization and load testing",
        "Monitoring and alerting setup",
        "Production deployment and verification"
      ]
    },
    {
      phase: "05",
      title: "Deliver",
      subtitle: "Ensuring Long-term Success",
      description: "Knowledge transfer, training, and ongoing optimization. We provide comprehensive documentation, training sessions, and continued support to maximize your investment and ensure long-term success.",
      icon: CheckCircle,
      duration: "Ongoing",
      deliverables: [
        "Complete Documentation Package",
        "Team Training Sessions",
        "Maintenance & Support Plan",
        "Performance Analytics Reports",
        "Future Enhancement Roadmap"
      ],
      activities: [
        "Knowledge transfer workshops",
        "Team training and onboarding",
        "Documentation and user guides creation",
        "Performance monitoring and optimization",
        "Ongoing support and maintenance planning"
      ]
    }
  ];

  const methodologyBenefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Early identification and mitigation of potential risks through comprehensive discovery and planning phases."
    },
    {
      icon: Users,
      title: "Stakeholder Alignment",
      description: "Continuous communication ensures all stakeholders are aligned throughout the entire project lifecycle."
    },
    {
      icon: Zap,
      title: "Faster Time to Market",
      description: "Agile methodology and iterative development accelerate delivery while maintaining high quality standards."
    },
    {
      icon: Award,
      title: "Measurable Results",
      description: "Clear success metrics and regular progress tracking ensure projects deliver tangible business value."
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Our Proven Methodology</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                The <span className="font-brand text-morton-orange">Morton Method™</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Our proven 5-phase methodology ensures successful outcomes for every project, 
                combining strategic thinking with meticulous execution. From discovery to delivery, 
                we guide you through a structured transformation journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Our Services</span>
                  <Target className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why the <span className="font-brand text-morton-orange">Morton Method™</span> Works
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Every successful transformation follows a structured path. Our methodology ensures clear communication, 
                measurable outcomes, and successful delivery through proven phases that have delivered results for hundreds of projects.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologyBenefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="text-center bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-morton-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-morton-purple-200 leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Phases */}
      <section className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                The 5 Phases of <span className="font-brand text-morton-orange">Digital Transformation</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-3xl mx-auto">
                Each phase builds upon the previous one, creating a comprehensive approach that minimizes risk 
                and maximizes success. Here&apos;s how we guide you through your transformation journey.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-20">
              {processPhases.map((phase, index) => (
                <AnimatedSection key={phase.phase} delay={index * 0.15}>
                  <div className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="flex-1 bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]">
                      <div className="flex items-start gap-6 mb-8">
                        <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl flex-shrink-0 group-hover:bg-morton-orange/20 transition-colors">
                          <phase.icon className="h-8 w-8 text-morton-orange" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="text-3xl font-bold text-white group-hover:text-morton-orange transition-colors">
                              {phase.title}
                            </h3>
                            <span className="text-morton-orange/60 font-mono text-sm">
                              {phase.phase}
                            </span>
                          </div>
                          <p className="text-xl font-medium text-morton-orange mb-4">
                            {phase.subtitle}
                          </p>
                          <p className="text-morton-purple-200 leading-relaxed mb-6">
                            {phase.description}
                          </p>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-morton-orange" />
                              <span className="text-morton-purple-100 text-sm font-medium">Duration: {phase.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Deliverables and Activities */}
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <FileText className="h-4 w-4 text-morton-orange" />
                            Key Deliverables
                          </h4>
                          <div className="space-y-2">
                            {phase.deliverables.map((deliverable) => (
                              <div key={deliverable} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-morton-orange flex-shrink-0 mt-0.5" />
                                <span className="text-morton-purple-100 text-sm">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <Zap className="h-4 w-4 text-morton-orange" />
                            Core Activities
                          </h4>
                          <div className="space-y-2">
                            {phase.activities.map((activity) => (
                              <div key={activity} className="flex items-start space-x-2">
                                <ArrowRight className="h-4 w-4 text-morton-orange flex-shrink-0 mt-0.5" />
                                <span className="text-morton-purple-100 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phase Circle */}
                    <div className="relative flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-r from-morton-orange to-morton-orange/80 rounded-full flex items-center justify-center shadow-lg border-4 border-morton-purple-900">
                        <span className="text-2xl font-bold text-morton-purple-950">
                          {phase.phase}
                        </span>
                      </div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 w-24 h-24 bg-morton-orange/30 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Visual */}
      <section className="py-16 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Project <span className="font-brand text-morton-orange">Timeline</span> Overview
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A typical project timeline showing how our phases flow together for optimal results
              </p>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-morton-purple-600 transform -translate-y-1/2" />
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4">
              {processPhases.map((phase, index) => (
                <AnimatedSection key={phase.phase} delay={index * 0.1}>
                  <div className="relative">
                    {/* Timeline Node */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-morton-orange rounded-full border-4 border-morton-purple-900 shadow-lg z-10" />
                    
                    {/* Card */}
                    <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group lg:mt-16">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-morton-orange/20 rounded-lg flex items-center justify-center group-hover:bg-morton-orange/30 transition-colors">
                          <phase.icon className="h-5 w-5 text-morton-orange" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-morton-orange transition-colors">
                            {phase.title}
                          </h3>
                          <p className="text-morton-orange text-sm">{phase.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-morton-purple-200 text-sm leading-relaxed">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your <span className="font-brand text-morton-orange">Transformation Journey</span>?
              </h2>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto">
                Let&apos;s begin with a discovery session to understand your goals and chart the path forward.
                Our proven methodology ensures your project&apos;s success from day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Schedule Discovery Session</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Explore Our Services</span>
                  <Lightbulb className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
