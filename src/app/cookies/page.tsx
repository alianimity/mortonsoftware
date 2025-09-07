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
  return (
    <div className="min-h-screen bg-morton-purple-950">
      {/* Header */}
      <AnimatedSection className="bg-gradient-to-r from-morton-orange to-morton-purple text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cookie className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Understanding how we use cookies and similar technologies to enhance your experience
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">CCPA Compliant</span>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Last Updated */}
      <AnimatedSection className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Last updated: January 1, 2025</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Table of Contents */}
      <AnimatedSection className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <a href="#what-are-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors">
                1. What Are Cookies?
              </a>
              <a href="#how-we-use-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors">
                2. How We Use Cookies
              </a>
              <a href="#types-of-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors">
                3. Types of Cookies We Use
              </a>
              <a href="#third-party-cookies" className="block text-blue-600 hover:text-blue-800 transition-colors">
                4. Third-Party Cookies
              </a>
            </div>
            <div className="space-y-2">
              <a href="#cookie-management" className="block text-blue-600 hover:text-blue-800 transition-colors">
                5. Managing Your Cookie Preferences
              </a>
              <a href="#cookie-consent" className="block text-blue-600 hover:text-blue-800 transition-colors">
                6. Cookie Consent
              </a>
              <a href="#updates" className="block text-blue-600 hover:text-blue-800 transition-colors">
                7. Policy Updates
              </a>
              <a href="#contact" className="block text-blue-600 hover:text-blue-800 transition-colors">
                8. Contact Information
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* What Are Cookies */}
        <div id="what-are-cookies">
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Cookie className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
                </p>
                <p>
                  Cookies contain information that is transferred to your device&apos;s hard drive. They help us improve our services and 
                  deliver a more personalized and convenient experience.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* How We Use Cookies */}
        <div id="how-we-use-cookies">
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Cookies</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>We use cookies for several purposes:</p>
                <ul className="space-y-2">
                  <li><strong>Essential Website Functionality:</strong> To ensure our website works properly and securely</li>
                  <li><strong>Performance and Analytics:</strong> To understand how visitors interact with our website</li>
                  <li><strong>Personalization:</strong> To remember your preferences and provide customized content</li>
                  <li><strong>Marketing and Advertising:</strong> To deliver relevant advertisements and measure their effectiveness</li>
                  <li><strong>Security:</strong> To protect against fraud and enhance website security</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Types of Cookies */}
        <div id="types-of-cookies">
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Types of Cookies We Use</h2>
              </div>
              <div className="space-y-6">
                
                {/* Essential Cookies */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually set in 
                    response to actions made by you which amount to a request for services.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Session management, security tokens, load balancing, form submissions
                    </p>
                  </div>
                </div>

                {/* Performance Cookies */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies collect information about how visitors use our website, such as which pages are visited most often. 
                    This data helps us optimize our website performance.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Google Analytics, page load times, error tracking, user journey analysis
                    </p>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences 
                    and providing customized content.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Language preferences, theme settings, form auto-fill, chat widgets
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    These cookies track your browsing habits to deliver advertisements that are relevant to you and your interests. 
                    They also help measure the effectiveness of advertising campaigns.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <strong>Examples:</strong> Google Ads, Facebook Pixel, retargeting pixels, conversion tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Third-Party Cookies */}
        <div id="third-party-cookies">
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Third-Party Cookies</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We may allow third-party service providers to place cookies on your device to help us analyze website traffic, 
                  provide social media features, and deliver targeted advertising.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-6 my-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Common Third-Party Services:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Google Analytics:</strong> Website analytics and performance tracking</p>
                      <p><strong>Google Ads:</strong> Advertising and conversion tracking</p>
                    </div>
                    <div>
                      <p><strong>Social Media Platforms:</strong> Social sharing and login features</p>
                      <p><strong>Customer Support:</strong> Live chat and help desk services</p>
                    </div>
                  </div>
                </div>

                <p>
                  These third parties have their own privacy policies and cookie practices. We encourage you to review their 
                  policies to understand how they collect and use your information.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Cookie Management */}
        <div id="cookie-management">
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  You have several options for managing cookies on our website:
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 my-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Cookie Control Options:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p><strong>Cookie Banner:</strong> Use our cookie consent banner to manage your preferences</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold text-gray-900 mb-3">Browser-Specific Instructions:</h4>
                <ul className="space-y-2">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Cookie Consent */}
        <div id="cookie-consent">
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Cookie Consent</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We respect your privacy choices and comply with applicable data protection laws, including GDPR and CCPA. 
                  When you first visit our website, you&apos;ll see a cookie consent banner that allows you to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Accept All Cookies</h4>
                    <p className="text-sm text-green-700">
                      Consent to all cookie categories for the full website experience
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Customize Settings</h4>
                    <p className="text-sm text-blue-700">
                      Choose which types of cookies you want to allow
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-800 mb-2">Essential Only</h4>
                    <p className="text-sm text-orange-700">
                      Allow only necessary cookies for basic website functionality
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Change Preferences</h4>
                    <p className="text-sm text-purple-700">
                      Update your cookie preferences at any time
                    </p>
                  </div>
                </div>

                <p>
                  Your consent choices are stored and respected across your browsing sessions. You can withdraw or modify 
                  your consent at any time through our cookie preference center.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Policy Updates */}
        <div id="updates">
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Policy Updates</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices, technology, 
                  legal requirements, or other factors. When we make significant changes, we will:
                </p>
                <ul className="space-y-2">
                  <li>Update the &quot;Last Modified&quot; date at the top of this policy</li>
                  <li>Notify you through our website or other appropriate means</li>
                  <li>Obtain your consent again if required by applicable law</li>
                  <li>Provide clear information about what has changed</li>
                </ul>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies 
                  and similar technologies.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Information */}
        <div id="contact">
          <AnimatedSection className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-blue-200" />
                <h2 className="text-3xl font-bold">Contact Information</h2>
              </div>
              <div className="prose prose-lg max-w-none text-blue-100">
                <p>
                  If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 my-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-3">Morton Software Insights LLC</h4>
                      <p className="text-sm">
                        Westminister Pl<br />
                        Atlanta, GA 30350<br />
                        United States
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3">Contact Details</h4>
                      <p className="text-sm">
                        General Email: hello@mortonsoftware.io<br />
                        Legal Email: legal@mortonsoftware.io<br />
                        Phone: (404) 826-2654<br />
                        Business Hours: Mon-Fri, 9 AM - 6 PM EST
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm">
                  For data protection inquiries specifically related to GDPR or CCPA, please contact legal@mortonsoftware.io 
                  and include &quot;Data Protection Request&quot; in your email subject line to ensure prompt handling.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Compliance Badges */}
        <AnimatedSection className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Privacy Compliance</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-4 py-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-2">
                <Globe className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">CCPA Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 rounded-lg px-4 py-2">
                <Cookie className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-800">Cookie Consent</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
