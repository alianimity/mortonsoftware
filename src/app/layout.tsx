import type { Metadata } from "next";
import { Inter, Croissant_One } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const croissantOne = Croissant_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-brand",
});

export const metadata: Metadata = {
  title: {
    default: "Morton Software Insights LLC - Digital Transformation & Custom Software Development",
    template: "%s | Morton Software Insights LLC",
  },
  description: "We deliver insights-driven digital transformation. Expert craftsmanship and innovative technology solutions for growing businesses in Atlanta and nationwide.",
  keywords: [
    "digital transformation",
    "custom software development",
    "Atlanta software company",
    "web application development",
    "cloud solutions",
    "product design",
    "technology consulting",
    "software insights"
  ],
  authors: [{ name: "Morton Software Insights LLC" }],
  creator: "Morton Software Insights LLC",
  publisher: "Morton Software Insights LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mortonsoftware.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mortonsoftware.io",
    siteName: "Morton Software Insights LLC",
    title: "Morton Software Insights LLC - Digital Transformation & Custom Software Development",
    description: "We deliver insights-driven digital transformation. Expert craftsmanship and innovative technology solutions for growing businesses in Atlanta and nationwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Morton Software Insights LLC - Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morton Software Insights LLC - Digital Transformation & Custom Software Development",
    description: "We deliver insights-driven digital transformation. Expert craftsmanship and innovative technology solutions for growing businesses in Atlanta and nationwide.",
    images: ["/og-image.jpg"],
    creator: "@mortonsoftwareinsights",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${croissantOne.variable}`}>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
