import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Zap, 
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Server,
  Database,
  Shield,
  Star,
  Sparkles,
  Clock,
  Users,
  TrendingUp,
  Layers
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software & Application Development - Maker Software',
  description: 'Custom software development, web applications, mobile apps, and enterprise solutions. Modern tech stack with scalable architecture.',
  keywords: 'software development, web applications, mobile apps, custom development, enterprise software, API development',
};

export default function SoftwareDevelopmentPage() {
  const services = [
    {
      name: "Feature Development Sprint",
      price: "$2,800",
      duration: "2 weeks",
      description: "Focused 2-week development sprint for specific functionality or features",
      techStack: ["React", "Node.js", "TypeScript"],
      features: [
        "Specific feature development",
        "Code review & testing",
        "Documentation",
        "Deployment support"
      ],
      ideal: "Adding new features to existing products"
    },
    {
      name: "API Development",
      price: "$4,500", 
      duration: "3-4 weeks",
      description: "RESTful API development with comprehensive documentation and testing",
      techStack: ["Node.js", "Express", "PostgreSQL", "JWT"],
      features: [
        "RESTful API design",
        "Database integration",
        "Authentication & authorization",
        "API documentation",
        "Testing & validation"
      ],
      ideal: "Backend systems and integrations"
    },
    {
      name: "Custom Web Application",
      price: "$9,500",
      duration: "6-8 weeks", 
      description: "Full-stack web application with custom functionality and database",
      techStack: ["React/Next.js", "Node.js", "PostgreSQL", "AWS"],
      features: [
        "Custom frontend interface",
        "Backend API development",
        "Database design & setup",
        "User authentication",
        "Admin panel",
        "Deployment & hosting"
      ],
      ideal: "Business automation and workflows",
      popular: true
    },
    {
      name: "Mobile Application",
      price: "$14,000",
      duration: "8-12 weeks",
      description: "Cross-platform mobile app with native performance and modern UX",
      techStack: ["React Native", "Expo", "Firebase", "Push Notifications"],
      features: [
        "iOS & Android compatibility",
        "Native performance",
        "Push notifications",
        "Offline capabilities",
        "App store submission",
        "Analytics integration"
      ],
      ideal: "Customer-facing mobile experiences",
      popular: true
    },
    {
      name: "Enterprise Application",
      price: "$25,000",
      duration: "12-16 weeks",
      description: "Large-scale enterprise solution with advanced features and integrations",
      techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      features: [
        "Scalable architecture",
        "Advanced user management",
        "Third-party integrations",
        "Reporting & analytics",
        "Security compliance",
        "Ongoing support"
      ],
      ideal: "Large organizations and complex workflows"
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      icon: Globe,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend", 
      icon: Server,
      techs: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"]
    },
    {
      category: "Mobile",
      icon: Smartphone, 
      techs: ["React Native", "Expo", "Flutter", "Swift", "Kotlin"]
    },
    {
      category: "Database",
      icon: Database,
      techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"]
    },
    {
      category: "Cloud & DevOps",
      icon: Shield,
      techs: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"]
    },
    {
      category: "Tools & More",
      icon: Layers,
      techs: ["Git", "Jest", "Cypress", "Figma", "Analytics"]
    }
  ];

  const developmentProcess = [
    {
      phase: "Planning",
      duration: "Week 1",
      description: "Requirements analysis, technical planning, and architecture design",
      deliverables: ["Technical Specification", "Project Timeline", "Architecture Diagram"]
    },
    {
      phase: "Development",
      duration: "Week 2-8",
      description: "Iterative development with weekly demos and continuous feedback",
      deliverables: ["Working Features", "Weekly Demos", "Progress Reports"]
    },
    {
      phase: "Testing",
      duration: "Week 9",
      description: "Comprehensive testing including unit tests, integration, and user testing",
      deliverables: ["Test Results", "Bug Reports", "Performance Metrics"]
    },
    {
      phase: "Deployment", 
      duration: "Week 10",
      description: "Production deployment with monitoring, documentation, and training",
      deliverables: ["Live Application", "Documentation", "Training Materials"]
    }
  ];

  const caseStudies = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      challenge: "Complex financial data visualization with real-time updates",
      solution: "React-based dashboard with WebSocket integration and interactive charts",
      results: [
        "90% faster data processing",
        "50% reduction in support tickets", 
        "99.9% uptime achieved"
      ],
      techStack: ["React", "Node.js", "PostgreSQL", "Redis"]
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Application", 
      challenge: "HIPAA-compliant patient management system with offline capabilities",
      solution: "React Native app with encrypted local storage and secure sync",
      results: [
        "100% HIPAA compliance",
        "40% faster patient check-ins",
        "4.8★ app store rating"
      ],
      techStack: ["React Native", "Express", "MongoDB", "AWS"]
    },
    {
      title: "E-learning Platform",
      category: "Enterprise Application",
      challenge: "Scalable platform for 10,000+ concurrent users with video streaming",
      solution: "Microservices architecture with CDN integration and adaptive streaming",
      results: [
        "Support for 15,000+ users",
        "95% faster video loading",
        "60% increase in course completion"
      ],
      techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS"]
    }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "CTO, DataFlow Inc",
      content: "Exceptional development team. They delivered our complex web application on time and exceeded our performance expectations.",
      rating: 5,
      project: "Custom Web Application"
    },
    {
      name: "Sarah Kim",
      role: "Founder, MedTech Solutions", 
      content: "The mobile app they built transformed our patient experience. The attention to security and compliance was outstanding.",
      rating: 5,
      project: "Mobile Application"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Software & Application Development</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Crafted Code,
                <span className="font-brand text-maker-yellow block">Lasting Value</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Build robust, scalable applications with modern technologies. From MVPs to enterprise 
                solutions, we create software that grows with your business and delights your users.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#case-studies"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Case Studies</span>
                  <Code className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-maker-yellow">200+</div>
                  <div className="text-sm text-maker-blue-200">Apps Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-maker-yellow">99.9%</div>
                  <div className="text-sm text-maker-blue-200">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-maker-yellow">10M+</div>
                  <div className="text-sm text-maker-blue-200">Users Served</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {technologies.slice(0, 4).map((tech) => (
                    <div key={tech.category} className="text-center">
                      <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl w-fit mx-auto mb-3">
                        <tech.icon className="h-6 w-6 text-maker-yellow" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-2">{tech.category}</h4>
                      <div className="space-y-1">
                        {tech.techs.slice(0, 3).map((item) => (
                          <div key={item} className="text-maker-blue-200 text-xs">{item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="#technologies" className="btn-secondary w-full text-center mt-6">
                  View All Technologies
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Development <span className="font-brand text-maker-yellow">Services</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                From rapid prototypes to enterprise applications, we build software that scales
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] relative">
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="px-3 py-1 bg-maker-yellow text-maker-blue-950 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Service Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-maker-yellow transition-colors">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-maker-yellow">{service.price}</div>
                          <div className="text-sm text-maker-blue-300">{service.duration}</div>
                        </div>
                      </div>

                      <p className="text-maker-blue-200 mb-6 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3">What&apos;s Included:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-maker-yellow flex-shrink-0" />
                                <span className="text-maker-blue-100 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-maker-yellow/10 border border-maker-yellow/30 rounded text-maker-yellow text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="text-maker-blue-300 text-sm">
                            <strong>Ideal for:</strong> {service.ideal}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col justify-center">
                      <Link
                        href="/contact"
                        className="btn-primary text-center mb-4"
                      >
                        Get Started
                      </Link>
                      <Link
                        href="/contact"
                        className="btn-secondary text-center"
                      >
                        Schedule Call
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Modern <span className="font-brand text-maker-yellow">Technology</span> Stack
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                We use cutting-edge technologies to build fast, secure, and scalable applications
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech.category} delay={index * 0.1}>
                <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="p-4 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl w-fit mx-auto mb-4">
                    <tech.icon className="h-8 w-8 text-maker-yellow" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.techs.map((item) => (
                      <div key={item} className="text-maker-blue-200 text-sm">{item}</div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Development <span className="font-brand text-maker-yellow">Process</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Agile development with continuous feedback and transparent communication
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((phase, index) => (
              <AnimatedSection key={phase.phase} delay={index * 0.1}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-xl p-6 text-center hover:scale-[1.02] transition-all duration-300">
                  <div className="text-3xl font-bold text-maker-yellow mb-4">{phase.phase}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{phase.phase}</h3>
                  <div className="text-maker-yellow text-sm mb-4">{phase.duration}</div>
                  <p className="text-maker-blue-200 text-sm leading-relaxed mb-4">
                    {phase.description}
                  </p>
                  <div className="space-y-1">
                    {phase.deliverables.map((deliverable) => (
                      <div key={deliverable} className="text-maker-blue-100 text-xs">
                        • {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Success <span className="font-brand text-maker-yellow">Stories</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Real applications, real results. See how our development drives business success.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.title} delay={index * 0.1}>
                <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                          <span className="text-maker-yellow">{study.category}</span>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                          <p className="text-maker-blue-200">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Solution:</h4>
                          <p className="text-maker-blue-200">{study.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-maker-yellow/10 border border-maker-yellow/30 rounded text-maker-yellow text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-4">Results:</h4>
                      <div className="space-y-3">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-center space-x-2">
                            <TrendingUp className="h-4 w-4 text-maker-yellow flex-shrink-0" />
                            <span className="text-maker-blue-100 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                What Clients <span className="font-brand text-maker-yellow">Say</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Trusted by businesses worldwide for quality development and exceptional service
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.2}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-maker-yellow fill-current" />
                      ))}
                    </div>
                    <span className="px-2 py-1 bg-maker-yellow/10 text-maker-yellow text-xs rounded">
                      {testimonial.project}
                    </span>
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
      <section className="py-16 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl">
                  <Zap className="h-6 w-6 text-maker-yellow" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Build Your <span className="font-brand text-maker-yellow">Application</span>?
                </h2>
              </div>
              
              <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your project requirements and create a custom software solution 
                that drives your business forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Development</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <Code className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
