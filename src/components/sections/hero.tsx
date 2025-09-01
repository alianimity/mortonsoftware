"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, AnimatedText } from "@/components/ui/animated-section";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-maker-blue-950 via-maker-blue-900 to-maker-blue-800">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-maker-yellow/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-maker-blue-700/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-maker-yellow/10 to-maker-blue-600/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-maker-yellow rounded-full opacity-80"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-6 h-6 bg-maker-blue-300/60 rounded-full"
        animate={{
          y: [10, -10, 10],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <AnimatedText delay={0.2}>
            <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 text-maker-blue px-4 py-2 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="h-4 w-4" />
              <span>Trusted by 100+ Growing Businesses</span>
            </div>
          </AnimatedText>

          {/* Main Heading */}
          <AnimatedText delay={0.4}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
              We{" "}
              <span className="relative">
                <span className="font-brand text-maker-yellow">Make</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-maker-yellow/30"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{" "}
              Digital<br />
              Transformation{" "}
              <span className="text-maker-yellow">Tangible</span>
            </h1>
          </AnimatedText>

          {/* Subtitle */}
          <AnimatedText delay={0.6}>
            <p className="text-lg sm:text-xl lg:text-2xl text-maker-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Through expert craftsmanship and innovative technology, we transform 
              complex business challenges into elegant software solutions that drive 
              measurable growth.
            </p>
          </AnimatedText>

          {/* Key Points */}
          <AnimatedText delay={0.8}>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10 text-sm font-medium text-maker-blue-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-maker-yellow" />
                <span>Strategic Partnership</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-maker-yellow" />
                <span>Atlanta-Based Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-maker-yellow" />
                <span>End-to-End Solutions</span>
              </div>
            </div>
          </AnimatedText>

          {/* CTA Buttons */}
          <AnimatedSection delay={1.0} variant="fade-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href="/services" className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Explore Our Services</span>
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={1.2} variant="fade-up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-maker-yellow mb-2">
                  100+
                </div>
                <div className="text-sm text-maker-blue-200">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-maker-yellow mb-2">
                  5+
                </div>
                <div className="text-sm text-maker-blue-200">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-maker-yellow mb-2">
                  98%
                </div>
                <div className="text-sm text-maker-blue-200">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-maker-yellow mb-2">
                  24/7
                </div>
                <div className="text-sm text-maker-blue-200">
                  Support Available
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-maker-blue-300 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-maker-blue-300 rounded-full mt-2"
            animate={{ height: [12, 6, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
