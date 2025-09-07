'use client';

import { AnimatedSection } from '@/components/ui/animated-section';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Globe,
  ArrowRight,
  Sparkles,
  Calendar,
  Users,
  Zap,
  Shield
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        projectType: '',
        message: '',
        timeline: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@mortonsoftware.io",
      secondary: "support@mortonsoftware.io",
      description: "For general inquiries and support"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "(404) 826-2654",
      secondary: "Business Hours Only",
      description: "Direct line to our team"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "Westminister Pl",
      secondary: "Atlanta, GA 30350",
      description: "Our headquarters location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Fri: 9AM - 6PM EST",
      secondary: "Emergency Support: 24/7",
      description: "When we&apos;re available"
    }
  ];

  const projectTypes = [
    "Digital Strategy Consulting",
    "Custom Software Development", 
    "Web Development",
    "Mobile App Development",
    "UX/UI Design",
    "Cloud Infrastructure",
    "E-commerce Solution",
    "Security & Compliance",
    "AI/ML Implementation",
    "Blockchain Development",
    "Other"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000", 
    "$5,000 - $15,000",
    "$15,000 - $25,000",
    "$25,000+"
  ];

  const timelineOptions = [
    "ASAP",
    "Within 1 month",
    "1-3 months", 
    "3-6 months",
    "6+ months"
  ];

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with local timezone support"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Initial response within 2 hours during business hours"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your project gets a dedicated team of experts"
    },
    {
      icon: Shield,
      title: "NDA Protection",
      description: "All discussions protected under strict confidentiality"
    }
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-morton-purple-950">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-8">
                <MessageSquare className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Let&apos;s Start Building Together</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to <span className="font-brand text-morton-orange">Create</span> Something Great?
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Whether you&apos;re an individual with a vision, a startup ready to scale, or an enterprise 
                seeking transformation – we&apos;re here to turn your ideas into reality. Let&apos;s discuss 
                your project and find the perfect solution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {features.map((feature, index) => (
                  <div key={feature.title} className="text-center">
                    <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-3">
                      <feature.icon className="h-5 w-5 text-morton-orange" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-xs">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl">
                    <Send className="h-6 w-6 text-morton-orange" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Start Your Project</h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-morton-orange mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-slate-300">
                      Thank you for reaching out. We&apos;ll get back to you within 2 hours during business hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-morton-purple-900 border border-morton-purple-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-morton-orange transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-morton-purple-900 border border-morton-purple-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-morton-orange transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-morton-purple-900 border border-morton-purple-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-morton-orange transition-colors"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-morton-purple-900 border border-morton-purple-700 rounded-lg text-white focus:outline-none focus:border-morton-orange transition-colors"
                        >
                          <option value="">Select Type</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-morton-purple-900 border border-morton-purple-700 rounded-lg text-white focus:outline-none focus:border-morton-orange transition-colors"
                        >
                          <option value="">Select Budget</option>
                          {budgetRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-morton-purple-900 border border-morton-purple-700 rounded-lg text-white focus:outline-none focus:border-morton-orange transition-colors"
                        >
                          <option value="">Select Timeline</option>
                          {timelineOptions.map(timeline => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-morton-purple-900 border border-morton-purple-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-morton-orange transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>

                    <p className="text-slate-400 text-sm text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Get In <span className="font-brand text-morton-orange">Touch</span>
                  </h2>
                  <p className="text-slate-300 leading-relaxed">
                    Ready to start your digital transformation journey? We&apos;re here to help at every step. 
                    Choose the contact method that works best for you.
                  </p>
                </div>

                <div className="space-y-6">
                {contactMethods.map((method) => (
                    <div key={method.title} className="flex items-start space-x-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl p-6">
                      <div className="p-3 bg-morton-orange/10 border border-morton-orange/30 rounded-xl flex-shrink-0">
                        <method.icon className="h-5 w-5 text-morton-orange" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                        <p className="text-morton-orange font-medium">{method.primary}</p>
                        <p className="text-slate-300 text-sm">{method.secondary}</p>
                        <p className="text-slate-400 text-xs mt-1">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-morton-orange/10 to-morton-purple/10 border border-morton-orange/30 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Sparkles className="h-5 w-5 text-morton-orange" />
                    <h3 className="text-white font-semibold">Quick Response Guarantee</h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    We respond to all inquiries within 2 hours during business hours. 
                    For urgent matters, call us directly at (404) 826-2654.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Frequently Asked <span className="font-brand text-morton-orange">Questions</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Quick answers to common questions about working with Morton Software Insights
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    question: "How quickly can you start my project?",
                    answer: "We can typically begin new projects within 1-2 weeks. For urgent projects, we offer expedited onboarding within 48 hours."
                  },
                  {
                    question: "Do you work with international clients?", 
                    answer: "Absolutely! We serve clients worldwide and have experience working across different time zones and cultures. We provide support in multiple languages."
                  },
                  {
                    question: "What&apos;s included in your project pricing?",
                    answer: "Our pricing includes development, testing, deployment, documentation, and 30-day warranty. We provide transparent fixed-price quotes with no hidden fees."
                  },
                  {
                    question: "Do you provide ongoing support after launch?",
                    answer: "Yes, we offer comprehensive maintenance and support packages starting at $100/month. We also provide 24/7 emergency support for critical issues."
                  },
                  {
                    question: "Can you work with our existing team?",
                    answer: "Definitely! We excel at collaborating with in-house teams and can integrate seamlessly into your existing development workflow and tools."
                  },
                  {
                    question: "What technologies do you specialize in?",
                    answer: "We specialize in modern web technologies (React, Next.js, Node.js), cloud platforms (AWS, Azure), mobile development, AI/ML, and blockchain solutions."
                  }
                ].map((faq) => (
                  <AnimatedSection key={faq.question}>
                <div className="bg-morton-purple-900 border border-morton-purple-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-morton-purple-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Other Ways to <span className="font-brand text-morton-orange">Connect</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Choose the communication method that works best for you
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="text-center bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8">
                <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-morton-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Schedule a Call</h3>
                <p className="text-slate-300 mb-6">
                  Book a free 30-minute consultation to discuss your project
                </p>
                <button className="btn-primary w-full">
                  Schedule Call
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="text-center bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8">
                <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-morton-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                <p className="text-slate-300 mb-6">
                  Chat with our team in real-time during business hours
                </p>
                <button className="btn-secondary w-full">
                  Start Chat
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center bg-morton-purple-950 border border-morton-purple-700 rounded-2xl p-8">
                <div className="p-4 bg-morton-orange/10 border border-morton-orange/30 rounded-xl w-fit mx-auto mb-6">
                  <Mail className="h-8 w-8 text-morton-orange" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-slate-300 mb-6">
                  Send us a detailed message and get a response within 2 hours
                </p>
                <a href="mailto:hello@mortonsoftware.io" className="btn-secondary w-full inline-block">
                  Send Email
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
