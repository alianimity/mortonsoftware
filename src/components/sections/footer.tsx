import * as React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const serviceLinks = [
  { name: "Digital Strategy & Consulting", href: "/services/digital-strategy" },
  { name: "Custom Software Development", href: "/services/software-development" },
  { name: "Digital Product Design & UX", href: "/services/product-design" },
  { name: "Cloud & Infrastructure Solutions", href: "/services/cloud-solutions" },
  { name: "E-commerce & Digital Commerce", href: "/services/ecommerce" },
  { name: "Data & Analytics Solutions", href: "/services/data-analytics" },
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
    <footer className="bg-maker-blue-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <img 
                  src="/logos/icon-white.svg" 
                  alt="Maker Software" 
                  className="h-10 w-10"
                />
                <div className="flex flex-col">
                  <span className="font-brand text-xl text-white">
                    Maker Software
                  </span>
                  <span className="text-sm text-blue-200 -mt-1">
                    Digital Transformation
                  </span>
                </div>
              </Link>
              
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                We make digital transformation tangible. Through expert craftsmanship and 
                innovative technology, we transform complex business challenges into elegant 
                software solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-blue-100">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>6065 Roswell Rd, #450<br />Atlanta, GA 30328</span>
                </div>
                <a 
                  href="tel:+16789185109" 
                  className="flex items-center space-x-3 text-sm text-blue-100 hover:text-maker-yellow transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(678) 918-5109</span>
                </a>
                <a 
                  href="mailto:hello@makersoftwares.com" 
                  className="flex items-center space-x-3 text-sm text-blue-100 hover:text-maker-yellow transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>hello@makersoftwares.com</span>
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
                      className="text-sm text-blue-100 hover:text-maker-yellow transition-colors"
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
                      className="text-sm text-blue-100 hover:text-maker-yellow transition-colors"
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
                <p className="text-sm text-blue-100 mb-3">
                  Get insights on digital transformation and technology trends.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-maker-yellow focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-maker-yellow text-maker-blue px-4 py-2 rounded-md font-medium hover:bg-maker-yellow-light transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-md text-blue-100 hover:text-maker-yellow hover:bg-white/20 transition-all"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-md text-blue-100 hover:text-maker-yellow hover:bg-white/20 transition-all"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-md text-blue-100 hover:text-maker-yellow hover:bg-white/20 transition-all"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-blue-100">
              © {new Date().getFullYear()} Maker Software LLC. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-blue-100 hover:text-maker-yellow transition-colors"
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
