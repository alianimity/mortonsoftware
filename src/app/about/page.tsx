import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Maker Software',
  description: 'Learn about Maker Software LLC - global digital transformation experts serving individuals, startups, SMBs, and enterprises worldwide. Atlanta-based with international reach.',
  keywords: 'about maker software, digital transformation company, global software development, atlanta tech company, makers of digital transformation',
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Craftsmanship",
      description: "Every solution built with meticulous attention to detail and pride in workmanship. We don&apos;t just develop software – we craft digital experiences."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge technologies to create competitive advantages. From AI/ML to blockchain, we bring tomorrow&apos;s tech today."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Long-term relationships built on trust, transparency, and mutual success. Your success is our success."
    },
    {
      icon: Target,
      title: "Results",
      description: "Measuring success by tangible business outcomes, not just technical deliverables. We focus on what moves your business forward."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest communication, realistic timelines, and ethical business practices. We build trust through transparency."
    }
  ];

  const achievements = [
    {
      icon: Globe,
      number: "Global",
      label: "Reach",
      description: "Serving clients across all continents with 24/7 support"
    },
    {
      icon: Users,
      number: "100+",
      label: "Projects Delivered",
      description: "Successfully completed projects from $100 to $25,000+"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations worldwide"
    },
    {
      icon: Zap,
      number: "Web3 & Web2",
      label: "Ready",
      description: "Expert in both traditional and emerging technologies"
    }
  ];

  const team = [
    {
      name: "Digital Strategy Team",
      role: "Strategic Visionaries",
      description: "Expert consultants who transform business challenges into digital opportunities",
      expertise: ["Business Analysis", "Market Research", "Technology Assessment", "Digital Roadmaps"]
    },
    {
      name: "Development Team",
      role: "Code Craftsmen",
      description: "Full-stack developers who build scalable, secure, and performant solutions",
      expertise: ["React/Next.js", "Node.js", "Python", "Cloud Architecture"]
    },
    {
      name: "Design Team",
      role: "Experience Architects",
      description: "UX/UI designers who create intuitive and beautiful digital experiences",
      expertise: ["User Research", "Interface Design", "Brand Identity", "Design Systems"]
    },
    {
      name: "DevOps Team",
      role: "Infrastructure Experts",
      description: "Cloud specialists who ensure reliable, scalable, and secure deployments",
      expertise: ["AWS/Azure", "CI/CD", "Security", "Performance Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-maker-yellow/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-maker-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">About Maker Software LLC</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                The <span className="font-brand text-maker-yellow">Makers</span> of Digital Transformation
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                We&apos;re a global team of digital craftsmen, transforming businesses through innovative technology 
                solutions. From our Atlanta headquarters, we serve individuals, startups, SMBs, and enterprises 
                worldwide with the precision of artisans and the innovation of visionaries.
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
                  href="/pricing"
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

      {/* Mission & Vision Section */}
      <section className="py-16 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <AnimatedSection>
              <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl">
                    <Target className="h-6 w-6 text-maker-yellow" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-maker-blue-200 leading-relaxed text-lg">
                  &ldquo;We make digital transformation tangible. Through expert craftsmanship and innovative 
                  technology, we transform complex business challenges into elegant software solutions 
                  that drive measurable growth.&rdquo;
                </p>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection delay={0.2}>
              <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl">
                    <Lightbulb className="h-6 w-6 text-maker-yellow" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-maker-blue-200 leading-relaxed text-lg">
                  &ldquo;To be the premier makers of digital transformation, where every line of code, 
                  every interface, and every solution is crafted with the precision of artisans 
                  and the innovation of visionaries.&rdquo;
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Core <span className="font-brand text-maker-yellow">Values</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                The principles that guide every decision, every project, and every client relationship
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="service-card group hover:scale-105 transition-all duration-300">
                  <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl w-fit mb-6 group-hover:bg-maker-yellow/20 transition-colors">
                    <value.icon className="h-6 w-6 text-maker-yellow" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-maker-yellow transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-maker-blue-200 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our <span className="font-brand text-maker-yellow">Impact</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Numbers that tell the story of our global reach and commitment to excellence
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={achievement.label} delay={index * 0.1}>
                <div className="text-center bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="p-4 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl w-fit mx-auto mb-6">
                    <achievement.icon className="h-8 w-8 text-maker-yellow" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-maker-yellow mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-maker-blue-200 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Meet Our <span className="font-brand text-maker-yellow">Team</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Global experts united by a passion for digital craftsmanship and client success
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="service-card">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-maker-yellow/10 border border-maker-yellow/30 rounded-xl flex-shrink-0">
                      <Users className="h-6 w-6 text-maker-yellow" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-maker-yellow font-medium">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-maker-blue-200 mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Core Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-maker-blue-900 border border-maker-blue-700 rounded-full text-maker-blue-100 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Maker Method Section */}
      <section className="py-16 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                The <span className="font-brand text-maker-yellow">Maker Method™</span>
              </h2>
              <p className="text-lg text-maker-blue-200 max-w-2xl mx-auto">
                Our proven 5-phase methodology ensures successful outcomes for every project
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  phase: "01",
                  title: "Discover",
                  description: "Deep dive into business goals, user needs, and technical requirements"
                },
                {
                  phase: "02", 
                  title: "Design",
                  description: "Strategic planning, architecture design, and user experience mapping"
                },
                {
                  phase: "03",
                  title: "Develop", 
                  description: "Agile development with continuous feedback and iteration"
                },
                {
                  phase: "04",
                  title: "Deploy",
                  description: "Secure, scalable deployment with comprehensive testing"
                },
                {
                  phase: "05",
                  title: "Deliver",
                  description: "Knowledge transfer, training, and ongoing optimization"
                }
              ].map((step, index) => (
                <AnimatedSection key={step.phase} delay={index * 0.1}>
                  <div className="flex items-center space-x-6 bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-6">
                    <div className="text-6xl font-bold text-maker-yellow/20 flex-shrink-0">
                      {step.phase}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-maker-blue-200 leading-relaxed">{step.description}</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-maker-yellow flex-shrink-0" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-maker-blue-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your <span className="font-brand text-maker-yellow">Business</span>?
              </h2>
              
              <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients worldwide who have trusted us with their digital transformation. 
                Let&apos;s make something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Pricing</span>
                  <Award className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
