import { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Cookie, Shield, Settings, Eye, Clock, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Morton Software Insights',
  description: 'Learn about how Morton Software Insights uses cookies and similar technologies to enhance your browsing experience and provide personalized services.',
  keywords: 'cookie policy, cookies, tracking, privacy, data collection, GDPR, CCPA, web analytics',
  openGraph: {
    title: 'Cookie Policy | Morton Software Insights',
    description: 'Learn about how Morton Software Insights uses cookies and similar technologies to enhance your browsing experience.',
    type: 'website',
  },
}

export default function CookiePolicy() {
  const lastUpdated = "January 2, 2025";

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
                <Cookie className="h-4 w-4 text-morton-orange" />
                <span className="text-morton-orange font-medium">Cookie & Privacy Policy</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Understanding how Morton Software Insights uses cookies and similar technologies 
                to enhance your browsing experience and provide personalized services.
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <div className="flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2">
                  <Shield className="h-4 w-4 text-morton-orange" />
                  <span className="text-morton-orange font-medium text-sm">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2 bg-morton-orange/10 border border-morton-orange/30 rounded-full px-4 py-2">
                  <Globe className="h-4 w-4 text-morton-orange" />
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
                <a href="#what-are-cookies" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Cookie className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">1. What Are Cookies?</span>
                </a>
                <a href="#how-we-use-cookies" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Settings className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">2. How We Use Cookies</span>
                </a>
                <a href="#types-of-cookies" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Eye className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">3. Types of Cookies We Use</span>
                </a>
                <a href="#third-party-cookies" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Globe className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">4. Third-Party Cookies</span>
                </a>
                <a href="#cookie-management" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Settings className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">5. Managing Your Cookie Preferences</span>
                </a>
                <a href="#cookie-consent" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Shield className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">6. Cookie Consent</span>
                </a>
                <a href="#updates" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Clock className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">7. Policy Updates</span>
                </a>
                <a href="#contact" className="flex items-center space-x-3 p-4 bg-morton-purple-950 border border-morton-purple-700 rounded-xl hover:border-morton-orange/30 transition-all duration-300 group">
                  <div className="p-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg group-hover:bg-morton-orange/20 transition-colors">
                    <Shield className="h-4 w-4 text-morton-orange" />
                  </div>
                  <span className="text-white group-hover:text-morton-orange transition-colors">8. Contact Information</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-morton-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* What Are Cookies */}
            <AnimatedSection>
              <div id="what-are-cookies" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Cookie className="h-8 w-8 text-morton-orange mr-3" />
                  1. What Are Cookies?
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. 
                    They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Cookies contain information that is transferred to your device&apos;s hard drive. They help us improve our services and 
                    deliver a more personalized and convenient experience.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* How We Use Cookies */}
            <AnimatedSection>
              <div id="how-we-use-cookies" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Settings className="h-8 w-8 text-morton-orange mr-3" />
                  2. How We Use Cookies
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">We use cookies for several purposes:</p>
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <ul className="space-y-3 text-slate-300">
                      <li><strong className="text-morton-orange">Essential Website Functionality:</strong> To ensure our website works properly and securely</li>
                      <li><strong className="text-morton-orange">Performance and Analytics:</strong> To understand how visitors interact with our website</li>
                      <li><strong className="text-morton-orange">Personalization:</strong> To remember your preferences and provide customized content</li>
                      <li><strong className="text-morton-orange">Marketing and Advertising:</strong> To deliver relevant advertisements and measure their effectiveness</li>
                      <li><strong className="text-morton-orange">Security:</strong> To protect against fraud and enhance website security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Types of Cookies */}
            <AnimatedSection>
              <div id="types-of-cookies" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="h-8 w-8 text-morton-orange mr-3" />
                  3. Types of Cookies We Use
                </h2>
                <div className="space-y-6">
                  
                  {/* Essential Cookies */}
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Essential Cookies</h3>
                    <p className="text-slate-300 mb-4">
                      These cookies are necessary for the website to function and cannot be switched off. They are usually set in 
                      response to actions made by you which amount to a request for services.
                    </p>
                    <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-lg p-4">
                      <p className="text-sm text-slate-300">
                        <strong>Examples:</strong> Session management, security tokens, load balancing, form submissions
                      </p>
                    </div>
                  </div>

                  {/* Performance Cookies */}
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Performance Cookies</h3>
                    <p className="text-slate-300 mb-4">
                      These cookies collect information about how visitors use our website, such as which pages are visited most often. 
                      This data helps us optimize our website performance.
                    </p>
                    <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-lg p-4">
                      <p className="text-sm text-slate-300">
                        <strong>Examples:</strong> Google Analytics, page load times, error tracking, user journey analysis
                      </p>
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Functional Cookies</h3>
                    <p className="text-slate-300 mb-4">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences 
                      and providing customized content.
                    </p>
                    <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-lg p-4">
                      <p className="text-sm text-slate-300">
                        <strong>Examples:</strong> Language preferences, theme settings, form auto-fill, chat widgets
                      </p>
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-morton-orange mb-4">Marketing Cookies</h3>
                    <p className="text-slate-300 mb-4">
                      These cookies track your browsing habits to deliver advertisements that are relevant to you and your interests. 
                      They also help measure the effectiveness of advertising campaigns.
                    </p>
                    <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-lg p-4">
                      <p className="text-sm text-slate-300">
                        <strong>Examples:</strong> Google Ads, Facebook Pixel, retargeting pixels, conversion tracking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Third-Party Cookies */}
            <AnimatedSection>
              <div id="third-party-cookies" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Globe className="h-8 w-8 text-morton-orange mr-3" />
                  4. Third-Party Cookies
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We may allow third-party service providers to place cookies on your device to help us analyze website traffic, 
                    provide social media features, and deliver targeted advertising.
                  </p>
                  
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h4 className="font-semibold text-morton-orange mb-4">Common Third-Party Services:</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                      <div className="space-y-2">
                        <p><strong>Google Analytics:</strong> Website analytics and performance tracking</p>
                        <p><strong>Google Ads:</strong> Advertising and conversion tracking</p>
                      </div>
                      <div className="space-y-2">
                        <p><strong>Social Media Platforms:</strong> Social sharing and login features</p>
                        <p><strong>Customer Support:</strong> Live chat and help desk services</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    These third parties have their own privacy policies and cookie practices. We encourage you to review their 
                    policies to understand how they collect and use your information.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Cookie Management */}
            <AnimatedSection>
              <div id="cookie-management" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Settings className="h-8 w-8 text-morton-orange mr-3" />
                  5. Managing Your Cookie Preferences
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    You have several options for managing cookies on our website:
                  </p>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h4 className="font-semibold text-morton-orange mb-4">Cookie Control Options:</h4>
                    <div className="space-y-3 text-slate-300">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-morton-orange rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-morton-orange rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Cookie Banner:</strong> Use our cookie consent banner to manage your preferences</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-morton-orange rounded-full mt-2 flex-shrink-0"></div>
                        <p><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <h4 className="font-semibold text-morton-orange mb-4">Browser-Specific Instructions:</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                      <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                      <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                      <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>

                  <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-xl p-6">
                    <p className="text-sm text-slate-300">
                      <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Cookie Consent */}
            <AnimatedSection>
              <div id="cookie-consent" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-morton-orange mr-3" />
                  6. Cookie Consent
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We respect your privacy choices and comply with applicable data protection laws, including GDPR and CCPA. 
                    When you first visit our website, you&apos;ll see a cookie consent banner that allows you to:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h4 className="font-semibold text-morton-orange mb-2">Accept All Cookies</h4>
                      <p className="text-sm text-slate-300">
                        Consent to all cookie categories for the full website experience
                      </p>
                    </div>
                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h4 className="font-semibold text-morton-orange mb-2">Customize Settings</h4>
                      <p className="text-sm text-slate-300">
                        Choose which types of cookies you want to allow
                      </p>
                    </div>
                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h4 className="font-semibold text-morton-orange mb-2">Essential Only</h4>
                      <p className="text-sm text-slate-300">
                        Allow only necessary cookies for basic website functionality
                      </p>
                    </div>
                    <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                      <h4 className="font-semibold text-morton-orange mb-2">Change Preferences</h4>
                      <p className="text-sm text-slate-300">
                        Update your cookie preferences at any time
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    Your consent choices are stored and respected across your browsing sessions. You can withdraw or modify 
                    your consent at any time through our cookie preference center.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Policy Updates */}
            <AnimatedSection>
              <div id="updates" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Clock className="h-8 w-8 text-morton-orange mr-3" />
                  7. Policy Updates
                </h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed">
                    We may update this Cookie Policy from time to time to reflect changes in our practices, technology, 
                    legal requirements, or other factors. When we make significant changes, we will:
                  </p>
                  <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-6">
                    <ul className="space-y-2 text-slate-300">
                      <li>• Update the &quot;Last Modified&quot; date at the top of this policy</li>
                      <li>• Notify you through our website or other appropriate means</li>
                      <li>• Obtain your consent again if required by applicable law</li>
                      <li>• Provide clear information about what has changed</li>
                    </ul>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies 
                    and similar technologies.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection>
              <div id="contact" className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Shield className="h-8 w-8 text-morton-orange mr-3" />
                  8. Contact Information
                </h2>
                <div className="bg-morton-orange/10 border border-morton-orange/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Questions About This Cookie Policy?</h3>
                  <p className="text-slate-300 mb-6">
                    If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-morton-orange mb-3">Morton Software Insights LLC</h4>
                      <div className="text-slate-300 space-y-1">
                        <p>Westminister Pl</p>
                        <p>Atlanta, GA 30350</p>
                        <p>United States</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-morton-orange mb-3">Contact Details</h4>
                      <div className="text-slate-300 space-y-1">
                        <p>General Email: hello@mortonsoftware.io</p>
                        <p>Legal Email: legal@mortonsoftware.io</p>
                        <p>Phone: (404) 826-2654</p>
                        <p>Business Hours: Mon-Fri, 9 AM - 6 PM EST</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300">
                  For data protection inquiries specifically related to GDPR or CCPA, please contact legal@mortonsoftware.io 
                  and include &quot;Data Protection Request&quot; in your email subject line to ensure prompt handling.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
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
              </div>
            </AnimatedSection>

            {/* Compliance Badges */}
            <AnimatedSection>
              <div className="text-center">
                <div className="bg-morton-purple border border-morton-purple-700 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Privacy Compliance</h3>
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg px-4 py-2">
                      <Shield className="w-5 h-5 text-morton-orange" />
                      <span className="text-sm font-medium text-morton-orange">GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg px-4 py-2">
                      <Globe className="w-5 h-5 text-morton-orange" />
                      <span className="text-sm font-medium text-morton-orange">CCPA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 bg-morton-orange/10 border border-morton-orange/30 rounded-lg px-4 py-2">
                      <Cookie className="w-5 h-5 text-morton-orange" />
                      <span className="text-sm font-medium text-morton-orange">Cookie Consent</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </div>
  )
}
