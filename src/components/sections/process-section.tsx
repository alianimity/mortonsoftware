"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredList } from "@/components/ui/animated-section";
import { processSteps } from "@/lib/data";

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-24 bg-morton-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection variant="fade-up">
            <div className="inline-flex items-center space-x-2 bg-morton-orange/10 text-morton-orange px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>Strategic Process</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our Proven 5-Phase Process
            </h2>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Every successful transformation follows a structured path. Our methodology 
              ensures clear communication, measurable outcomes, and successful delivery.
            </p>
          </AnimatedSection>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-morton-purple-700 transform -translate-y-1/2" />
          
          {/* Process Grid */}
          <StaggeredList staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              
              return (
                <div key={step.id} className="relative">
                  {/* Timeline Node - Desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-morton-orange rounded-full border-4 border-morton-purple shadow-lg z-10" />
                  
                  {/* Card */}
                  <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group lg:mt-16">
                    {/* Step Header */}
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="w-12 h-12 bg-morton-orange/20 rounded-lg flex items-center justify-center group-hover:bg-morton-orange/30 transition-colors">
                        <IconComponent className="h-6 w-6 text-morton-orange" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-morton-orange transition-colors">
                        {index + 1}. {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-200 text-sm leading-relaxed mt-4">
                      {step.description}
                    </p>

                    {/* Progress Indicator - Mobile */}
                    <div className="lg:hidden mt-4 flex items-center space-x-2">
                      {processSteps.map((_, stepIndex) => (
                        <div
                          key={stepIndex}
                          className={`h-2 flex-1 rounded ${
                            stepIndex <= index ? 'bg-morton-orange' : 'bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </StaggeredList>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection variant="fade-up" delay={0.5} className="text-center mt-16">
          <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8 lg:p-12 text-white shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s begin with a discovery session to understand your goals and chart the path forward.
            </p>
            
            <motion.a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2 px-8 py-4 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Schedule Discovery Session</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
