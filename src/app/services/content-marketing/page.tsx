import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  PenTool, 
  ArrowRight, 
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Users,
  Eye,
  Zap,
  Award,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content & Marketing Services - Morton Software Insights LLC',
  description: 'Data-driven content creation and marketing solutions. SEO insights, analytics-powered copywriting, social media, and marketing automation.',
  keywords: 'content marketing, SEO, copywriting, social media, email marketing, digital marketing, data insights, analytics',
};

export default function ContentMarketingPage() {
  const services = [
    {
      name: "Copywriting Services",
      price: "$150",
      description: "Data-driven website and marketing copy with insights and performance optimization",
      features: [
        "Website copy",
        "Marketing materials",
        "Blog content",
        "Email campaigns",
        "Social media copy"
      ],
      deliverables: ["Copy Portfolio", "Style Guide", "Performance Report"]
    },
    {
      name: "SEO Optimization",
      price: "$300",
      description: "Analytics-powered SEO and keyword strategy insights with comprehensive optimization", 
      features: [
        "Keyword research",
        "On-page optimization",
        "Content strategy",
        "Technical SEO",
        "Performance tracking"
      ],
      deliverables: ["SEO Audit Report", "Keyword Strategy", "Optimization Plan"]
    },
    {
      name: "Social Media Strategy",
      price: "$500",
      description: "Data-driven social media planning and insights setup with engagement optimization",
      features: [
        "Content calendar",
        "Platform optimization",
        "Engagement strategy",
        "Analytics setup",
        "Brand consistency"
      ],
      deliverables: ["Social Media Strategy", "Content Calendar", "Analytics Dashboard"]
    },
    {
      name: "Email Marketing Setup",
      price: "$400", 
      description: "Email campaigns with analytics-driven automation and performance tracking",
      features: [
        "Campaign design",
        "Automation flows",
        "List segmentation",
        "A/B testing",
        "Performance tracking"
      ],
      deliverables: ["Email Templates", "Automation Workflows", "Analytics Setup"]
    },
    {
      name: "Content Marketing Package",
      price: "$2,500",
      description: "Comprehensive insights-driven content strategy and creation with full analytics integration",
      features: [
        "Content strategy",
        "Content creation",
        "Distribution plan",
        "SEO integration",
        "Performance analysis"
      ],
      deliverables: ["Content Strategy", "Content Library", "Performance Dashboard"]
    },
    {
      name: "Marketing Analytics Setup",
      price: "$800",
      description: "Complete marketing analytics implementation with data-driven insights and reporting",
      features: [
        "Analytics implementation",
        "Conversion tracking",
        "Custom dashboards",
        "Performance reporting",
        "ROI analysis"
      ],
      deliverables: ["Analytics Platform", "Custom Dashboards", "Reporting System"]
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: "Data-Driven Results",
      description: "Analytics-powered content strategies that deliver measurable engagement, conversions, and ROI through comprehensive performance tracking."
    },
    {
      icon: Target,
      title: "Targeted Messaging",
      description: "Precision-crafted content that resonates with your specific audience segments and drives meaningful customer engagement and action."
    },
    {
      icon: TrendingUp,
      title: "Growth-Focused Strategy",
      description: "Scalable content marketing approaches designed to accelerate business growth and establish market leadership through strategic positioning."
    },
    {
      icon: Users,
      title: "Expert Content Team",
      description: "Access to experienced content strategists, copywriters, and marketing specialists with proven track records in driving results."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive analysis of your brand, audience, competitors, and current content performance to identify opportunities and strategic direction."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creation of data-driven content strategy with clear objectives, target personas, messaging framework, and performance metrics."
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Production of high-quality, engaging content across multiple formats and channels, optimized for search engines and user experience."
    },
    {
      step: "04",
      title: "Distribution & Promotion",
      description: "Strategic content distribution across owned, earned, and paid channels with coordinated promotional campaigns for maximum reach."
    },
    {
      step: "05",
      title: "Performance Optimization",
      description: "Continuous monitoring, analysis, and optimization of content performance with data-driven improvements and strategic adjustments."
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Rodriguez",
      role: "Marketing Director, GrowthTech Solutions",
      content: "Morton Software Insights transformed our content strategy completely. Their data-driven approach increased our organic traffic by 250% and lead generation by 180% within six months.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      role: "CEO, Digital Innovations Inc",
      content: "The content marketing package delivered exceptional results. Our brand engagement increased dramatically, and we saw a 300% improvement in conversion rates from content-driven leads.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section - Stacked Layout with Content Metrics */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-morton-orange/5 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <AnimatedSection>
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-6">
                <PenTool className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Content & Marketing</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Insights-Driven
                <span className="font-brand text-morton-orange block">Content</span>
              </h1>
              
              <p className="text-xl text-morton-purple-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                Data-driven content creation and marketing solutions that deliver measurable 
                engagement and growth through analytical insights and strategic optimization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Marketing</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View Services</span>
                  <PenTool className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatedSection delay={0.2}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-8 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl font-bold text-morton-orange mb-3">500+</div>
                <div className="text-white font-semibold mb-2">Content Pieces</div>
                <div className="text-morton-purple-200 text-sm">Created and optimized</div>
                <div className="mt-4 p-2 bg-morton-orange/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-morton-orange mx-auto" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-8 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl font-bold text-morton-orange mb-3">250%</div>
                <div className="text-white font-semibold mb-2">Traffic Growth</div>
                <div className="text-morton-purple-200 text-sm">Average increase</div>
                <div className="mt-4 p-2 bg-morton-orange/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-morton-orange mx-auto" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-8 text-center hover:scale-[1.02] transition-all duration-300">
                <div className="text-4xl font-bold text-morton-orange mb-3">180%</div>
                <div className="text-white font-semibold mb-2">Lead Increase</div>
                <div className="text-morton-purple-200 text-sm">Conversion improvement</div>
                <div className="mt-4 p-2 bg-morton-orange/10 rounded-lg">
                  <Target className="h-6 w-6 text-morton-orange mx-auto" />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.5}>
            <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Free Content Strategy Assessment</h3>
              <p className="text-morton-purple-200 mb-6 text-center">
                Get a comprehensive content marketing assessment to discover opportunities for 
                growth and receive personalized recommendations for your content strategy.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["Content audit analysis", "Audience research insights", "Competitor analysis", "Growth opportunity mapping"].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-morton-orange" />
                    <span className="text-morton-purple-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary w-full text-center">
                Book Free Assessment
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Marketing <span className="font-brand text-morton-orange">Services</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Analytics-powered content and marketing solutions that drive measurable results and business growth
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
                Why Choose Our <span className="font-brand text-morton-orange">Content</span> Services?
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                Strategic content marketing solutions that drive engagement, conversions, and sustainable business growth
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
                Our Content <span className="font-brand text-morton-orange">Process</span>
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                A proven methodology that ensures successful content marketing implementation and measurable business results
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
                Content <span className="font-brand text-morton-orange">Success</span> Stories
              </h2>
              <p className="text-lg text-morton-purple-200 max-w-2xl mx-auto">
                See how our content marketing strategies have driven exceptional results and business growth
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
                  <PenTool className="h-6 w-6 text-morton-orange" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Ready to Create <span className="font-brand text-morton-orange">Impact</span>?
                </h2>
              </div>
              
              <p className="text-lg text-morton-purple-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Transform your content marketing with data-driven strategies that deliver measurable 
                results and drive meaningful engagement with your target audience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Start Content Strategy</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <PenTool className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
