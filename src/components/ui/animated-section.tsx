"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-in" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
  once?: boolean;
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  "slide-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  "slide-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  }
};

export const AnimatedSection = React.forwardRef<HTMLDivElement, AnimatedSectionProps>(
  ({ 
    children, 
    className, 
    variant = "fade-up", 
    delay = 0, 
    stagger = false, 
    staggerDelay = 0.1,
    once = true
  }, ref) => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { 
      once, 
      margin: "-100px 0px" 
    });

    // Combine refs
    React.useImperativeHandle(ref, () => sectionRef.current as HTMLDivElement);

    if (stagger) {
      return (
        <motion.div
          ref={sectionRef}
          className={className}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            staggerChildren: staggerDelay,
            delayChildren: delay,
          }}

        >
          {React.Children.map(children, (child, index) => (
            <motion.div
              key={index}
              variants={variants[variant]}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={sectionRef}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants[variant]}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          delay,
        }}

      >
        {children}
      </motion.div>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

// Individual animated components for specific use cases
export const AnimatedCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { delay?: number }
>(({ children, className, delay = 0, ...props }, ref) => (
  <AnimatedSection
    ref={ref}
    variant="fade-up"
    delay={delay}
    className={cn("group", className)}
    {...props}
  >
    {children}
  </AnimatedSection>
));

AnimatedCard.displayName = "AnimatedCard";

export const AnimatedText = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { delay?: number }
>(({ children, className, delay = 0, ...props }, ref) => (
  <AnimatedSection
    ref={ref}
    variant="fade-up"
    delay={delay}
    className={className}
    {...props}
  >
    {children}
  </AnimatedSection>
));

AnimatedText.displayName = "AnimatedText";

export const StaggeredList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { delay?: number; staggerDelay?: number }
>(({ children, className, delay = 0, staggerDelay = 0.1, ...props }, ref) => (
  <AnimatedSection
    ref={ref}
    variant="fade-up"
    delay={delay}
    stagger={true}
    staggerDelay={staggerDelay}
    className={className}
    {...props}
  >
    {children}
  </AnimatedSection>
));

StaggeredList.displayName = "StaggeredList";
