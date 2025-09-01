import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/animated-section';
import { ShoppingCart, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'E-commerce Solutions - Maker Software',
  description: 'Complete e-commerce solutions from setup to optimization. Shopify, WooCommerce, payment integration, and growth strategies.',
  keywords: 'ecommerce, online store, shopify, woocommerce, payment integration, inventory management',
};

export default function EcommerceServicesPage() {
  const services = [
    {
      name: "Shopify Store Setup",
      price: "$800",
      description: "Complete Shopify store configuration and design",
      features: ["Store setup", "Theme customization", "Product upload", "Payment configuration", "Launch support"]
    },
    {
      name: "WooCommerce Development",
      price: "$1,200",
      description: "Custom WordPress e-commerce solution",
      features: ["WordPress setup", "WooCommerce configuration", "Custom design", "Plugin integration", "SEO optimization"]
    },
    {
      name: "Payment Gateway Integration",
      price: "$400",
      description: "Secure payment processing setup",
      features: ["Multiple payment options", "Security compliance", "Testing & validation", "Documentation", "Support"]
    },
    {
      name: "Inventory Management System",
      price: "$2,500",
      description: "Automated inventory tracking and management",
      features: ["Inventory tracking", "Stock alerts", "Supplier integration", "Reporting dashboard", "Multi-location support"]
    },
    {
      name: "E-commerce Analytics Setup",
      price: "$600",
      description: "Sales tracking and performance analytics",
      features: ["Analytics integration", "Conversion tracking", "Custom reports", "Performance monitoring", "ROI analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-maker-blue-950">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-maker-yellow/10 border border-maker-yellow/30 rounded-full px-4 py-2 mb-8">
                <ShoppingCart className="h-4 w-4 text-maker-yellow" />
                <span className="text-maker-yellow font-medium">E-commerce Solutions</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Sell More
                <span className="font-brand text-maker-yellow block">Online</span>
              </h1>
              
              <p className="text-xl text-maker-blue-200 leading-relaxed mb-8">
                Complete e-commerce solutions from setup to optimization and growth strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center space-x-2">
                  <span>Start Selling</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-maker-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.name} delay={index * 0.1}>
                <div className="bg-maker-blue-950 border border-maker-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-[1.02] h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <div className="text-2xl font-bold text-maker-yellow">{service.price}</div>
                  </div>
                  <p className="text-maker-blue-200 mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-maker-yellow flex-shrink-0" />
                        <span className="text-maker-blue-100 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-primary w-full text-center">Get Started</Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
