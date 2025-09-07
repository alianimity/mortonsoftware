import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { FileText, Shield, Users, CreditCard, AlertTriangle, Scale, Clock, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Morton Software Insights',
  description: 'Terms and conditions for using Morton Software Insights services. Professional software development and digital transformation service agreements.',
  keywords: 'terms of service, service agreement, software development terms, digital transformation contract',
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 2, 2025";

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
    { id: "services", title: "Service Description", icon: Shield },
    { id: "client-obligations", title: "Client Obligations", icon: Users },
    { id: "payment-terms", title: "Payment Terms", icon: CreditCard },
    { id: "intellectual-property", title: "Intellectual Property", icon: Shield },
    { id: "warranties", title: "Warranties & Disclaimers", icon: AlertTriangle },
    { id: "limitation-liability", title: "Limitation of Liability", icon: Scale },
    { id: "termination", title: "Termination", icon: Clock },
    { id: "dispute-resolution", title: "Dispute Resolution", icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-8">
                <Scale className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Legal Terms & Conditions</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                These terms govern your use of Morton Software Insights LLC services and establish 
                the legal framework for our professional relationship.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2">
                  <Shield className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium text-sm">Professional Services</span>
                </div>
                <div className="flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2">
                  <FileText className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium text-sm">Legally Binding</span>
                </div>
                <div className="flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2">
                  <Clock className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium text-sm">Last Updated: {lastUpdated}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-morton-purple">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                      <section.icon className="h-4 w-4 text-morton-orange" />
                    </div>
                    <span className="text-white group-hover:text-morton-orange transition-colors">
                      {index + 1}. {section.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance of Terms */}
            <AnimatedSection>
              <div id="acceptance" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <FileText className="h-8 w-8 text-morton-orange mr-3" />
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    By accessing our website, engaging our services, or entering into a service agreement with Morton Software Insights LLC 
                    (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you (&quot;Client,&quot; &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms of Service 
                    (&quot;Terms&quot;). These Terms constitute a legally binding agreement between you and Morton Software Insights LLC.
                  </p>
                  
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-3">Company Information</h3>
                    <div className="space-y-2 text-slate-300">
                      <p><strong>Legal Name:</strong> Morton Software Insights LLC</p>
                      <p><strong>Business Address:</strong> Westminister Pl, Atlanta, GA 30350</p>
                      <p><strong>State of Formation:</strong> Georgia, United States</p>
                      <p><strong>General Contact:</strong> hello@mortonsoftware.io</p>
                      <p><strong>Legal Contact:</strong> legal@mortonsoftware.io</p>
                      <p><strong>Phone:</strong> (404) 826-2654</p>
                    </div>
                  </div>

                  <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-3">Important Notice</h3>
                    <p className="text-slate-300">
                      If you do not agree to these Terms, you must not use our services or website. 
                      By proceeding, you acknowledge that you have read, understood, and agree to be bound by these Terms.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Termination */}
            <AnimatedSection>
              <div id="termination" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Clock className="h-8 w-8 text-morton-orange mr-3" />
                  2. Termination
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">Termination by Client</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• 30 days written notice for ongoing services</li>
                        <li>• Immediate termination for project services (subject to payment for work completed)</li>
                        <li>• Must pay for all work completed to date</li>
                        <li>• Receive deliverables for paid work</li>
                      </ul>
                    </div>

                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">Termination by Morton Software Insights</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• 30 days written notice without cause</li>
                        <li>• Immediate termination for material breach</li>
                        <li>• Immediate termination for non-payment</li>
                        <li>• Refund of prepaid amounts for undelivered work</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Effect of Termination</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• All outstanding invoices become immediately due</li>
                      <li>• Client receives all deliverables for paid work</li>
                      <li>• Confidentiality obligations survive termination</li>
                      <li>• Return or destruction of confidential information</li>
                      <li>• Intellectual property rights remain as specified</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Dispute Resolution */}
            <AnimatedSection>
              <div id="dispute-resolution" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Scale className="h-8 w-8 text-morton-orange mr-3" />
                  3. Dispute Resolution
                </h2>
                <div className="space-y-6">
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Governing Law</h3>
                    <p className="text-slate-300">
                      These Terms are governed by and construed in accordance with the laws of the State of Georgia, 
                      United States, without regard to conflict of law principles. Any legal action or proceeding 
                      arising under these Terms will be brought exclusively in the federal or state courts located 
                      in Fulton County, Georgia.
                    </p>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Dispute Resolution Process</h3>
                    <ol className="space-y-2 text-slate-300">
                      <li>1. <strong>Direct Negotiation:</strong> Parties will first attempt to resolve disputes through good faith negotiation</li>
                      <li>2. <strong>Mediation:</strong> If negotiation fails, disputes will be submitted to binding mediation</li>
                      <li>3. <strong>Arbitration:</strong> Unresolved disputes will be settled by binding arbitration under AAA Commercial Rules</li>
                      <li>4. <strong>Court Action:</strong> Only for injunctive relief or intellectual property disputes</li>
                    </ol>
                  </div>

                  <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-3">Important Legal Notices</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• These Terms constitute the entire agreement between parties</li>
                      <li>• No modification except in writing signed by both parties</li>
                      <li>• If any provision is unenforceable, remainder remains in effect</li>
                      <li>• No waiver of rights unless expressly stated in writing</li>
                      <li>• Assignment requires written consent except for business transfers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Section */}
            <AnimatedSection>
              <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
                <p className="text-slate-300 mb-6">
                  If you have any questions about these Terms of Service or need clarification 
                  on any provisions, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hello@mortonsoftware.io"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Email Us</span>
                  </a>
                  <a
                    href="tel:+14048262654"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  );
}
