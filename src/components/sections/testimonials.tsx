"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 lg:py-24 bg-maker-blue-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection variant="fade-up">
            <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 text-maker-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span>Client Success Stories</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Trusted by Growing Businesses
            </h2>
            
            <p className="text-lg text-maker-blue-200 leading-relaxed">
                              See how we&apos;ve helped businesses like yours transform their digital presence 
              and achieve measurable growth.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-maker-blue-900 border border-maker-blue-700 rounded-2xl p-8 lg:p-12 shadow-xl"
            >
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-maker-yellow mb-6" />
              
              {/* Content */}
              <div className="mb-8">
                <p className="text-lg lg:text-xl text-maker-blue-100 leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-maker-yellow fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-maker-yellow/20 rounded-full flex items-center justify-center">
                  <span className="text-maker-yellow font-semibold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-sm text-maker-blue-200">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-full lg:-translate-x-16 bg-maker-blue-900 border border-maker-blue-700 shadow-lg hover:bg-maker-blue-800 text-white"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-full lg:translate-x-16 bg-maker-blue-900 border border-maker-blue-700 shadow-lg hover:bg-maker-blue-800 text-white"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-maker-yellow w-8' 
                  : 'bg-maker-blue-600 hover:bg-maker-blue-500'
              }`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <AnimatedSection variant="fade-up" delay={0.3} className="mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-maker-yellow mb-2">
                98%
              </div>
              <div className="text-sm text-maker-blue-200">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-maker-yellow mb-2">
                100+
              </div>
              <div className="text-sm text-maker-blue-200">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-maker-yellow mb-2">
                5+
              </div>
              <div className="text-sm text-maker-blue-200">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-maker-yellow mb-2">
                24/7
              </div>
              <div className="text-sm text-maker-blue-200">
                Support Available
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
