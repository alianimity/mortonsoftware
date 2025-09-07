"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Users, 
  Clock, 
  Shield, 
  Target, 
  Zap,
  TrendingUp,
  Heart
} from "lucide-react";
import { AnimatedSection, StaggeredList } from "@/components/ui/animated-section";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide from individuals to enterprises, making digital transformation accessible to everyone."
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Whether you're a solo founder or Fortune 500 company, we have solutions that scale with your needs."
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times with our proven 5-phase process. Most projects start within 48 hours."
    },
    {
      icon: Shield,
      title: "30-Day Guarantee",
      description: "Not satisfied? We'll make it right or provide a full refund. Your success is our commitment."
    },
    {
      icon: Target,
      title: "Transparent Pricing",
      description: "No hidden fees, no surprises. Clear, upfront pricing starting from just $100."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Web3, Web2, AI, cloud-native solutions. We stay ahead so you can lead your industry."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 lg:py-24 bg-morton-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <AnimatedSection variant="fade-up">
            <div className="inline-flex items-center space-x-2 bg-morton-orange/10 text-morton-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4 fill-current" />
              <span>Why Choose Morton Software Insights</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Your Vision, Our <span className="font-brand text-morton-orange">Expertise</span>
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              We don&apos;t just build software – we craft digital experiences that transform businesses 
              and empower growth. Here&apos;s why thousands of clients worldwide trust us with their most 
              important projects.
            </p>
          </AnimatedSection>
        </div>

        {/* Features Grid */}
        <StaggeredList staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div key={index} className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]">
                {/* Icon */}
                <div className="w-12 h-12 bg-morton-orange/20 rounded-lg flex items-center justify-center group-hover:bg-morton-orange/30 transition-colors mb-4">
                  <IconComponent className="h-6 w-6 text-morton-orange" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-morton-orange transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </StaggeredList>

        {/* Stats Section */}
        <AnimatedSection variant="fade-up" delay={0.6}>
          <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Trusted by Growing Businesses <span className="font-brand text-morton-orange">Worldwide</span>
              </h3>
              <p className="text-slate-200 text-lg max-w-2xl mx-auto">
                Our track record speaks for itself. Join the companies that have transformed 
                their digital presence with Morton Software Insights.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-morton-orange mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-200">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="mt-12 pt-8 border-t border-morton-purple-700 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <TrendingUp className="h-8 w-8 text-morton-orange mx-auto mb-4" />
                <p className="text-lg text-slate-100 italic leading-relaxed">
                  &ldquo;Our mission is simple: deliver exceptional digital solutions accessible to everyone. 
                  From $100 strategy reports to $15K+ enterprise transformations, we believe every 
                  business deserves the tools to succeed in the digital age.&rdquo;
                </p>
                <div className="mt-4 text-morton-orange font-semibold">
                  — The Morton Software Insights Team
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
