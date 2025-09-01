import { 
  Lightbulb, 
  Code, 
  Palette, 
  Cloud, 
  ShoppingCart, 
  BarChart3,
  CheckCircle,
  Target
} from "lucide-react";

export const services = [
  {
    id: "digital-strategy",
    title: "Digital Strategy & Consulting",
    tagline: "Chart Your Digital Future",
    description: "Strategic clarity before tactical execution. We help you navigate digital transformation with comprehensive roadmaps and expert guidance.",
    icon: Lightbulb,
    price: "Starting at $200",
    priceRange: "$200 - $15,000+",
    featured: true,
    features: [
      "Strategy Report (PDF)",
      "Strategy Consultation (30 min)", 
      "\"Spark Session\" Consultation",
      "\"Ignite Session\" Consultation",
      "Custom Consultation Package"
    ],
    services: [
      { name: "Strategy Report (PDF)", price: "$100", description: "Comprehensive analysis and recommendations" },
      { name: "Strategy Consultation (30 min)", price: "$200", description: "One-on-one strategic session" },
      { name: "\"Spark Session\" Consultation", price: "$1,200", description: "Deep-dive strategy workshop" },
      { name: "\"Ignite Session\" Consultation", price: "$2,500", description: "Comprehensive transformation planning" },
      { name: "Custom Consultation Package", price: "$5,000+", description: "Tailored strategic partnership" }
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    tagline: "Crafted Code, Lasting Value",
    description: "Artisan-level code quality with modern architecture. From MVPs to enterprise systems, we build software that scales with your business.",
    icon: Code,
    price: "Starting at $2,800",
    priceRange: "$2,800 - $25,000",
    featured: true,
    features: [
      "Feature Development",
      "API Integration",
      "MVP Development",
      "Web Application",
      "Mobile Apps"
    ],
    services: [
      { name: "Feature Development", price: "$1,500", description: "2-week development sprints" },
      { name: "API Integration", price: "$2,500", description: "Secure third-party integrations" },
      { name: "MVP Development", price: "$8,000", description: "Market-ready minimum viable product" },
      { name: "Web Application", price: "$12,000", description: "Full-stack custom applications" },
      { name: "Mobile Apps", price: "$15,000", description: "Native & cross-platform development" }
    ]
  },
  {
    id: "product-design",
    title: "Product Design & Branding",
    tagline: "Designed for Success",
    description: "User-centered design that drives business results. We create digital experiences that users love and businesses profit from.",
    icon: Palette,
    price: "Starting at $500",
    priceRange: "$500 - $12,000",
    featured: true,
    features: [
      "Logo Design",
      "Marketing Materials",
      "UX/UI Design",
      "Brand Identity",
      "Design System"
    ],
    services: [
      { name: "Logo Design", price: "$300", description: "Professional brand identity" },
      { name: "Marketing Materials", price: "$400", description: "Complete brand collateral" },
      { name: "UX/UI Design", price: "$600", description: "Interface design and user experience" },
      { name: "Brand Identity", price: "$1,200", description: "Comprehensive brand system" },
      { name: "Design System", price: "$3,000", description: "Scalable design foundation" }
    ]
  },
  {
    id: "cloud-solutions",
    title: "Cloud, DevOps & Infrastructure",
    tagline: "Built to Scale",
    description: "Scalable, secure, and cost-effective infrastructure. We help you leverage cloud technologies for maximum efficiency and growth.",
    icon: Cloud,
    price: "Starting at $1,200/month",
    priceRange: "$1,200/month - $8,000",
    features: [
      "Managed Services",
      "Cloud Assessment",
      "Cloud Migration",
      "Infrastructure Setup",
      "DevOps Implementation"
    ],
    services: [
      { name: "Managed Services", price: "$800/month", description: "Ongoing cloud management" },
      { name: "Cloud Assessment", price: "$1,500", description: "Readiness evaluation and planning" },
      { name: "Cloud Migration", price: "$3,500", description: "Seamless infrastructure migration" },
      { name: "Infrastructure Setup", price: "$5,000", description: "Complete cloud implementation" },
      { name: "DevOps Implementation", price: "$6,000", description: "CI/CD automation and deployment" }
    ]
  },
  {
    id: "web-development",
    title: "Web & Digital Solutions",
    tagline: "Websites That Convert",
    description: "Professional websites that drive results. From landing pages to complex web applications, we build sites that engage users and grow businesses.",
    icon: ShoppingCart,
    price: "Starting at $1,200",
    priceRange: "$1,200 - $6,500",
    featured: true,
    features: [
      "Landing Page",
      "CMS Website",
      "Website Redesign",
      "E-commerce Store"
    ],
    services: [
      { name: "Landing Page", price: "$800", description: "High-converting single pages" },
      { name: "CMS Website", price: "$1,200", description: "Content management system" },
      { name: "Website Redesign", price: "$1,800", description: "Complete website overhaul" },
      { name: "E-commerce Store", price: "$2,500", description: "Complete online store solution" }
    ]
  },
  {
    id: "security-compliance",
    title: "Security & Compliance",
    tagline: "Secure & Compliant",
    description: "Comprehensive security solutions to protect your business. From audits to implementation, we ensure your systems are secure and compliant.",
    icon: BarChart3,
    price: "Starting at $1,500/month",
    priceRange: "$1,500/month - $12,000",
    featured: true,
    features: [
      "Incident Response",
      "Security Audit", 
      "Penetration Testing",
      "Security Implementation",
      "Compliance Consulting"
    ],
    services: [
      { name: "Incident Response", price: "$1,200/month", description: "Security monitoring and response" },
      { name: "Security Audit", price: "$1,500", description: "Comprehensive security assessment" },
      { name: "Penetration Testing", price: "$2,000", description: "Ethical hacking and vulnerability testing" },
      { name: "Security Implementation", price: "$3,000", description: "Complete security controls setup" },
      { name: "Compliance Consulting", price: "$4,000", description: "Regulatory compliance guidance" }
    ]
  }
];

export const processSteps = [
  {
    id: "discover",
    title: "Discover",
    description: "Deep dive into business goals, user needs, and technical requirements",
    icon: Target,
    duration: "1-2 weeks"
  },
  {
    id: "design",
    title: "Design", 
    description: "Strategic planning, architecture design, and user experience mapping",
    icon: Palette,
    duration: "2-3 weeks"
  },
  {
    id: "develop",
    title: "Develop",
    description: "Agile development with continuous feedback and iteration",
    icon: Code,
    duration: "4-12 weeks"
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Secure, scalable deployment with comprehensive testing",
    icon: Cloud,
    duration: "1 week"
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Knowledge transfer, training, and ongoing optimization",
    icon: CheckCircle,
    duration: "Ongoing"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc.",
    content: "Maker Software transformed our entire digital infrastructure. Their strategic approach and technical expertise helped us scale from 10 to 100 employees seamlessly.",
    rating: 5,
    avatar: "/testimonials/sarah-johnson.jpg"
  },
  {
    id: 2, 
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "GrowthCorp",
    content: "The team at Maker Software doesn't just code - they craft solutions. Our customer portal has increased engagement by 300% since launch.",
    rating: 5,
    avatar: "/testimonials/michael-chen.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "VP of Technology",
    company: "InnovateCo",
    content: "Working with Maker Software felt like having an extended team of senior developers. They understood our vision and brought it to life beautifully.",
    rating: 5,
    avatar: "/testimonials/emily-rodriguez.jpg"
  }
];

export const faqs = [
  {
    question: "What makes Maker Software different from other development companies?",
    answer: "We combine strategic thinking with artisan-level craftsmanship. Unlike agencies that just execute, we partner with you to understand your business goals and create solutions that drive measurable results. Our 'maker' approach means every line of code is crafted with care and purpose."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Small projects (MVP, design sprints) typically take 2-6 weeks, medium projects (web applications, integrations) take 2-4 months, and large enterprise solutions can take 6-12 months. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We work with businesses at all stages - from early-stage startups needing MVP development to enterprise clients requiring complex digital transformation. Our pricing and approach scale with your business size and needs."
  },
  {
    question: "What's included in your ongoing support?",
    answer: "We offer 30-day warranty on all projects, plus optional ongoing support packages including maintenance, updates, monitoring, and optimization. We believe in long-term partnerships, not just project delivery."
  },
  {
    question: "How do you ensure project success?",
    answer: "Our 5-phase 'Maker Method' ensures clear communication, regular checkpoints, and measurable outcomes. We use agile development with weekly demos, maintain comprehensive documentation, and track business metrics - not just technical deliverables."
  },
  {
    question: "Can you help with digital strategy, not just development?",
    answer: "Absolutely! Digital strategy and technology consulting are core services. We help businesses navigate digital transformation, choose the right technology stack, and create roadmaps for growth. Many clients start with strategy consulting before moving to implementation."
  }
];

export const companyStats = {
  projectsDelivered: "100+",
  yearsExperience: "5+", 
  clientSatisfaction: "98%",
  supportAvailability: "24/7"
};

export const contactInfo = {
  phone: "+1 (678) 918-5109",
  email: "hello@makersoftwares.com",
  supportEmail: "support@makersoftwares.com",
  legalEmail: "legal@makersoftwares.com",
  address: {
    street: "6065 Roswell Rd, #450",
    city: "Atlanta",
    state: "GA", 
    zip: "30328",
    full: "6065 Roswell Rd, #450, Atlanta, GA 30328"
  }
};
