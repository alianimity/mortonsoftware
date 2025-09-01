import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Maker Software LLC - Digital Transformation & Custom Software Development",
    template: "%s | Maker Software LLC",
  },
  description: "We make digital transformation tangible. Expert craftsmanship and innovative technology solutions for growing businesses in Atlanta and nationwide.",
  keywords: [
    "digital transformation",
    "custom software development",
    "Atlanta software company",
    "web application development",
    "cloud solutions",
    "product design",
    "technology consulting"
  ],
  authors: [{ name: "Maker Software LLC" }],
  creator: "Maker Software LLC",
  publisher: "Maker Software LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://makersoftwares.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://makersoftwares.com",
    siteName: "Maker Software LLC",
    title: "Maker Software LLC - Digital Transformation & Custom Software Development",
    description: "We make digital transformation tangible. Expert craftsmanship and innovative technology solutions for growing businesses in Atlanta and nationwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maker Software LLC - Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maker Software LLC - Digital Transformation & Custom Software Development",
    description: "We make digital transformation tangible. Expert craftsmanship and innovative technology solutions for growing businesses in Atlanta and nationwide.",
    images: ["/og-image.jpg"],
    creator: "@makersoftwarellc",
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
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Croissant+One&family=Inter:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
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