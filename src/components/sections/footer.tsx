import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { name: "Strategy & Transformation", href: "/services/strategy-transformation" },
  { name: "Design & Experience", href: "/services/design-experience" },
  { name: "Web & Digital Solutions", href: "/services/web-digital-solutions" },
  { name: "Software & Application Development", href: "/services/software-application-development" },
  { name: "Cloud, DevOps & Infrastructure", href: "/services/cloud-solutions" },
  { name: "Security & Compliance", href: "/services/security-compliance" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Process", href: "/process" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-morton-purple-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logos/icon-white.svg" 
                  alt="Morton Software Insights" 
                  className="h-10 w-10"
                />
                <div className="flex flex-col">
                  <span className="font-brand text-xl text-white">
                    Morton Software Insights
                  </span>
                  <span className="text-sm text-morton-purple-200 -mt-1">
                    Strategic Software Solutions
                  </span>
                </div>
              </Link>
              
              <p className="text-morton-purple-200 text-sm leading-relaxed mb-6">
                Strategic software solutions that drive results. Through expert craftsmanship and 
                innovative technology, we transform complex business challenges into elegant 
                software solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-morton-purple-200">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>Westminister Pl<br />Atlanta, GA 30350</span>
                </div>
                <a 
                  href="tel:+14048262654" 
                  className="flex items-center space-x-3 text-sm text-morton-purple-200 hover:text-morton-orange transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(404) 826-2654</span>
                </a>
                <a 
                  href="mailto:hello@mortonsoftware.io" 
                  className="flex items-center space-x-3 text-sm text-morton-purple-200 hover:text-morton-orange transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>hello@mortonsoftware.io</span>
                </a>
                <a 
                  href="mailto:support@mortonsoftware.io" 
                  className="flex items-center space-x-3 text-sm text-morton-purple-200 hover:text-morton-orange transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>support@mortonsoftware.io</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-morton-purple-200 hover:text-morton-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-morton-purple-200 hover:text-morton-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Stay Connected</h3>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <p className="text-sm text-morton-purple-200 mb-3">
                  Get insights on digital transformation and technology trends.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-morton-orange focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="btn-primary w-full px-4 py-2"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-morton-purple-200">
              © {new Date().getFullYear()} Morton Software Insights LLC. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-morton-purple-200 hover:text-morton-orange transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
