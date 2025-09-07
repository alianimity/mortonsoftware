"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    children: [
      { name: "Strategy & Transformation", href: "/services/strategy-transformation" },
      { name: "Design & Experience", href: "/services/design-experience" },
      { name: "Web & Digital Solutions", href: "/services/web-digital-solutions" },
      { name: "Software & Application Development", href: "/services/software-application-development" },
      { name: "Cloud, DevOps & Infrastructure", href: "/services/cloud-solutions" },
      { name: "Security & Compliance", href: "/services/security-compliance" },
      { name: "Prototyping & Validation", href: "/services/prototyping-validation" },
      { name: "Innovation & Emerging Tech", href: "/services/innovation-emerging-tech" },
      { name: "Content & Marketing", href: "/services/content-marketing" },
      { name: "E-commerce Solutions", href: "/services/ecommerce-services" },
      { name: "Maintenance & Support", href: "/services/maintenance-support" },
      { name: "Database & Integration", href: "/services/database-integration" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled 
          ? "bg-morton-purple-950/95 backdrop-blur-sm shadow-lg" 
          : "bg-morton-purple-950/90"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <img 
              src="/logos/icon-primary.svg" 
              alt="Morton Software Insights" 
              className="h-8 w-8 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="font-brand text-lg text-white group-hover:text-morton-orange transition-colors duration-200">
              Morton Software Insights
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 relative",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-morton-orange"
                      : "text-white hover:text-morton-orange"
                  )}
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  )}

                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-56 bg-morton-purple-900 border border-morton-purple-700 shadow-xl rounded-lg py-1 mt-1"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-morton-purple-100 hover:bg-morton-purple-800 hover:text-morton-orange transition-colors duration-150"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+12708028222" 
              className="flex items-center space-x-2 text-sm text-morton-purple-200 hover:text-morton-orange transition-colors duration-200 font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>(270) 802-8222</span>
            </a>
            <Link href="/contact" className="btn-primary px-6 py-2 text-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-white hover:text-morton-orange transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-morton-purple-950"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 text-base font-medium transition-colors duration-200",
                        pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-morton-orange bg-morton-orange/10 rounded-md"
                          : "text-white hover:text-morton-orange"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-morton-purple-200 hover:text-morton-orange transition-colors duration-200"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                  <div className="pt-4 border-t border-morton-purple-700">
                  <div className="space-y-3 mb-4">
                    <a 
                      href="tel:+12708028222" 
                      className="flex items-center space-x-2 text-sm text-morton-purple-200 hover:text-morton-orange transition-colors duration-200 font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      <span>(270) 802-8222</span>
                    </a>
                  </div>
                  <Link href="/contact" className="btn-primary w-full px-6 py-3 text-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
