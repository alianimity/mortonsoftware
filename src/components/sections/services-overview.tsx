"use client";

import * as React from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { ServiceCard } from "@/components/ui/card";
import { AnimatedSection, StaggeredList } from "@/components/ui/animated-section";
import { services } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-24 bg-maker-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection variant="fade-up">
            <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 text-maker-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Our Services</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Comprehensive Digital Solutions
            </h2>
            
            <p className="text-lg text-maker-blue-200 leading-relaxed">
              From strategic consulting to full-scale development, we provide end-to-end 
              solutions that transform your business and accelerate growth.
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <StaggeredList staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <ServiceCard
                key={service.id}
                icon={<IconComponent className="h-6 w-6" />}
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features.slice(0, 3)}
                ctaText="Learn More"
                onCtaClick={() => {
                  // Navigate to service detail page
                  window.location.href = `/services/${service.id}`;
                }}
                className="h-full"
              />
            );
          })}
        </StaggeredList>

        {/* CTA Section */}
        <AnimatedSection variant="fade-up" delay={0.3}>
                      <div className="text-center bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-8 lg:p-12 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-maker-blue-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and explore how our expertise can help you 
              achieve your digital transformation goals.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2 px-8 py-4 text-lg">
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link href="/services" className="btn-secondary flex items-center justify-center px-8 py-4 text-lg">
                View All Services
              </Link>
            </div>
            
            {/* Quick Contact */}
            <div className="mt-8 pt-6 border-t border-maker-blue-600">
              <p className="text-sm text-maker-blue-300 mb-3">
                Or get in touch directly
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                <a 
                  href="tel:+16789185109" 
                  className="flex items-center space-x-2 text-maker-yellow hover:text-maker-yellow-light transition-colors"
                >
                  <span>(678) 918-5109</span>
                </a>
                <span className="hidden sm:block text-maker-blue-400">•</span>
                <a 
                  href="mailto:hello@makersoftwares.com" 
                  className="flex items-center space-x-2 text-maker-yellow hover:text-maker-yellow-light transition-colors"
                >
                  <span>hello@makersoftwares.com</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
