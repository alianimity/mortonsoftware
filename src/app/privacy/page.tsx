import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Shield, Lock, Eye, Users, FileText, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Morton Software Insights',
  description: 'Learn how Morton Software Insights collects, uses, and protects your personal information. GDPR and CCPA compliant privacy practices.',
  keywords: 'privacy policy, data protection, GDPR, CCPA, personal information, data security',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 2, 2025";

  const sections = [
    { id: "overview", title: "Overview", icon: Eye },
    { id: "information-collection", title: "Information We Collect", icon: FileText },
    { id: "information-use", title: "How We Use Information", icon: Users },
    { id: "data-sharing", title: "Information Sharing", icon: Shield },
    { id: "data-security", title: "Data Security", icon: Lock },
    { id: "your-rights", title: "Your Rights", icon: Users },
    { id: "cookies", title: "Cookies & Tracking", icon: Eye },
    { id: "updates", title: "Policy Updates", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-morton-purple-950">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2 mb-8">
                <Shield className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Privacy & Data Protection</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Your privacy is important to us. This policy explains how Morton Software Insights LLC 
                collects, uses, and protects your personal information.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2">
                  <Shield className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium text-sm">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2">
                  <Lock className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium text-sm">CCPA Compliant</span>
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

      {/* Privacy Policy Content */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Overview */}
            <AnimatedSection>
              <div id="overview" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="h-8 w-8 text-morton-orange mr-3" />
                  1. Overview
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Morton Software Insights LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                    use our services, or interact with us.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    This policy applies to all information collected through our website (mortonsoftware.io), services, and any related 
                    applications, sales, marketing, or events. By using our services, you consent to the data practices described in this policy.
                  </p>
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6 mt-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-3">Contact Information</h3>
                    <div className="space-y-2 text-slate-300">
                      <p><strong>Company:</strong> Morton Software Insights LLC</p>
                      <p><strong>Address:</strong> Westminister Pl, Atlanta, GA 30350</p>
                      <p><strong>General Email:</strong> hello@mortonsoftware.io</p>
                      <p><strong>Privacy Email:</strong> legal@mortonsoftware.io</p>
                      <p><strong>Phone:</strong> (404) 826-2654</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Information Collection */}
            <AnimatedSection>
              <div id="information-collection" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <FileText className="h-8 w-8 text-morton-orange mr-3" />
                  2. Information We Collect
                </h2>
                <div className="space-y-6">
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Personal Information You Provide</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• <strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                      <li>• <strong>Project Information:</strong> Project requirements, business needs, technical specifications</li>
                      <li>• <strong>Communication Records:</strong> Messages, emails, call recordings (with consent)</li>
                      <li>• <strong>Payment Information:</strong> Billing address, payment method details (processed securely)</li>
                      <li>• <strong>Account Information:</strong> Username, password, preferences (if applicable)</li>
                    </ul>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Automatically Collected Information</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• <strong>Usage Data:</strong> Pages visited, time spent, click patterns, referral sources</li>
                      <li>• <strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                      <li>• <strong>Location Data:</strong> General geographic location based on IP address</li>
                      <li>• <strong>Cookies & Tracking:</strong> Website preferences, session data, analytics information</li>
                    </ul>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Third-Party Information</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• <strong>Social Media:</strong> Public profile information if you connect social accounts</li>
                      <li>• <strong>Business Partners:</strong> Information from referral partners or collaborators</li>
                      <li>• <strong>Public Sources:</strong> Publicly available business information for B2B services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Information Use */}
            <AnimatedSection>
              <div id="information-use" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Users className="h-8 w-8 text-morton-orange mr-3" />
                  3. How We Use Information
                </h2>
                <div className="space-y-6">
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Service Delivery</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Providing digital transformation and software development services</li>
                      <li>• Project management and client communication</li>
                      <li>• Technical support and maintenance</li>
                      <li>• Quality assurance and service improvement</li>
                    </ul>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Business Operations</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Processing payments and managing accounts</li>
                      <li>• Responding to inquiries and providing customer support</li>
                      <li>• Conducting business analysis and market research</li>
                      <li>• Compliance with legal and regulatory requirements</li>
                    </ul>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Marketing & Communications</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Sending newsletters and service updates (with consent)</li>
                      <li>• Personalizing website content and recommendations</li>
                      <li>• Conducting surveys and gathering feedback</li>
                      <li>• Marketing our services to potential clients</li>
                    </ul>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Website Improvement</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Analyzing website usage and performance</li>
                      <li>• Improving user experience and functionality</li>
                      <li>• Detecting and preventing fraud or security threats</li>
                      <li>• Optimizing content and service offerings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Data Sharing */}
            <AnimatedSection>
              <div id="data-sharing" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-morton-orange mr-3" />
                  4. Information Sharing
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                    except in the following circumstances:
                  </p>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Service Providers</h3>
                    <p className="text-slate-300 mb-3">
                      We may share information with trusted third-party service providers who assist us in:
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      <li>• Payment processing (Stripe, PayPal)</li>
                      <li>• Email marketing and communication (Mailchimp, SendGrid)</li>
                      <li>• Website analytics (Google Analytics)</li>
                      <li>• Cloud hosting and infrastructure (AWS, Vercel)</li>
                      <li>• Customer support tools</li>
                    </ul>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Legal Requirements</h3>
                    <p className="text-slate-300">
                      We may disclose information when required by law, court order, or government request, 
                      or to protect our rights, property, or safety, or that of our users or others.
                    </p>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Business Transfers</h3>
                    <p className="text-slate-300">
                      In the event of a merger, acquisition, or sale of assets, your information may be 
                      transferred as part of the business transaction, with appropriate notice provided.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Data Security */}
            <AnimatedSection>
              <div id="data-security" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Lock className="h-8 w-8 text-morton-orange mr-3" />
                  5. Data Security
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">Technical Safeguards</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• SSL/TLS encryption for data transmission</li>
                        <li>• Encrypted data storage</li>
                        <li>• Regular security audits and updates</li>
                        <li>• Secure cloud infrastructure</li>
                        <li>• Multi-factor authentication</li>
                      </ul>
                    </div>

                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">Administrative Safeguards</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Limited access on need-to-know basis</li>
                        <li>• Employee training on data protection</li>
                        <li>• Regular security policy reviews</li>
                        <li>• Incident response procedures</li>
                        <li>• Vendor security assessments</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-3">Data Retention</h3>
                    <p className="text-slate-300">
                      We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, 
                      comply with legal obligations, resolve disputes, and enforce agreements. Typically, this means:
                    </p>
                    <ul className="space-y-2 text-slate-300 mt-3">
                      <li>• Client project data: Duration of project + 7 years for business records</li>
                      <li>• Marketing communications: Until you unsubscribe or request deletion</li>
                      <li>• Website analytics: 26 months (Google Analytics default)</li>
                      <li>• Support communications: 3 years for quality assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Your Rights */}
            <AnimatedSection>
              <div id="your-rights" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Users className="h-8 w-8 text-morton-orange mr-3" />
                  6. Your Rights
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Depending on your location and applicable laws (GDPR, CCPA, etc.), you may have the following rights 
                    regarding your personal information:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">Access & Portability</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Request access to your personal data</li>
                        <li>• Receive a copy of your data in portable format</li>
                        <li>• Know what data we collect and how it&apos;s used</li>
                      </ul>
                    </div>

                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">Correction & Deletion</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Correct inaccurate or incomplete data</li>
                        <li>• Request deletion of your personal data</li>
                        <li>• Restrict processing of your data</li>
                      </ul>
                    </div>

                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">Consent & Objection</h3>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Withdraw consent for data processing</li>
                        <li>• Object to processing for marketing purposes</li>
                        <li>• Opt-out of automated decision-making</li>
                      </ul>
                    </div>

                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-morton-orange mb-4">How to Exercise Rights</h3>
                      <p className="text-slate-300 mb-3">Contact us to exercise your rights:</p>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Privacy Email: legal@mortonsoftware.io</li>
                        <li>• General Email: hello@mortonsoftware.io</li>
                        <li>• Phone: (404) 826-2654</li>
                        <li>• Response time: 30 days maximum</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Cookies */}
            <AnimatedSection>
              <div id="cookies" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="h-8 w-8 text-morton-orange mr-3" />
                  7. Cookies & Tracking Technologies
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your experience on our website. 
                    For detailed information about our cookie practices, please see our <a href="/cookies" className="text-morton-orange hover:underline">Cookie Policy</a>.
                  </p>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Types of Cookies We Use</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Essential Cookies</h4>
                        <p className="text-slate-300 text-sm">Required for website functionality and security</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Analytics Cookies</h4>
                        <p className="text-slate-300 text-sm">Help us understand website usage and performance</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Preference Cookies</h4>
                        <p className="text-slate-300 text-sm">Remember your settings and preferences</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Marketing Cookies</h4>
                        <p className="text-slate-300 text-sm">Deliver relevant content and measure campaign effectiveness</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Updates */}
            <AnimatedSection>
              <div id="updates" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Clock className="h-8 w-8 text-morton-orange mr-3" />
                  8. Policy Updates
                </h2>
                <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors. We will notify you of any material changes by:
                  </p>
                  <ul className="space-y-2 text-slate-300 mb-4">
                    <li>• Posting the updated policy on our website</li>
                    <li>• Updating the &quot;Last Updated&quot; date at the top of this policy</li>
                    <li>• Sending email notifications for significant changes (if you&apos;ve provided consent)</li>
                    <li>• Displaying prominent notices on our website</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed">
                    Your continued use of our services after any changes indicates your acceptance of the updated policy. 
                    We encourage you to review this policy periodically to stay informed about how we protect your information.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Section */}
            <AnimatedSection>
              <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Questions About This Policy?</h2>
                <p className="text-slate-300 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please don&apos;t hesitate to contact us.
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
