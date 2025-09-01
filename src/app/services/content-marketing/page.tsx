import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { PenTool, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content & Marketing Services - Maker Software',
  description: 'Strategic content creation and marketing solutions. SEO, copywriting, social media, and marketing automation.',
  keywords: 'content marketing, SEO, copywriting, social media, email marketing, digital marketing',
};

export default function ContentMarketingPage() {
  const services = [
    {
      name: "Copywriting Services",
      price: "$150",
      description: "Professional website and marketing copy",
      features: ["Website copy", "Marketing materials", "Blog content", "Email campaigns", "Social media copy"]
    },
    {
      name: "SEO Optimization",
      price: "$300",
      description: "Search engine optimization and keyword strategy", 
      features: ["Keyword research", "On-page optimization", "Content strategy", "Technical SEO", "Performance tracking"]
    },
    {
      name: "Social Media Strategy",
      price: "$500",
      description: "Complete social media planning and setup",
      features: ["Content calendar", "Platform optimization", "Engagement strategy", "Analytics setup", "Brand consistency"]
    },
    {
      name: "Email Marketing Setup",
      price: "$400", 
      description: "Email campaigns and automation setup",
      features: ["Campaign design", "Automation flows", "List segmentation", "A/B testing", "Performance tracking"]
    },
    {
      name: "Content Marketing Package",
      price: "$2,500",
      description: "Comprehensive content strategy and creation",
      features: ["Content strategy", "Content creation", "Distribution plan", "SEO integration", "Performance analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <PenTool className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">Content & Marketing</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Content That
                <span className="font-brand text-maker-yellow block">Converts</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Strategic content creation and marketing solutions that drive engagement and growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Start Marketing</span>
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
