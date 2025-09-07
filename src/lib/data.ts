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
    title: "Strategy & Transformation",
    tagline: "Chart Your Digital Future",
    description: "Strategic clarity before tactical execution. Transform your business with expert guidance and data-driven insights.",
    icon: Lightbulb,
    price: "Starting at $200",
    priceRange: "$200 - $15,000+",
    badgeType: "Most Popular",
    features: [
      "Business Analysis Report",
      "Strategic Advisory Call",
      "Digital Roadmap Workshop",
      "Technology Assessment",
      "Enterprise Advisory Retainer"
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
    title: "Software & Application Development",
    tagline: "Crafted Code, Lasting Value",
    description: "Build robust, scalable applications with modern technologies. Custom solutions that grow with your business.",
    icon: Code,
    price: "Starting at $2,800",
    priceRange: "$2,800 - $25,000",
    badgeType: "Featured",
    features: [
      "Feature Development Sprint",
      "API Development",
      "Custom Web Application",
      "Mobile Application",
      "Enterprise Application"
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
    title: "Design & Experience",
    tagline: "Designed for Success",
    description: "User-centered design that drives business results. Create compelling visual identities and intuitive experiences.",
    icon: Palette,
    price: "Starting at $500",
    priceRange: "$500 - $12,000",
    badgeType: "Trending",
    features: [
      "Logo Design",
      "Brand Identity Package",
      "UX/UI Design",
      "Website Redesign",
      "Complete Brand Transformation"
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
    description: "Modernize infrastructure with secure, scalable cloud solutions. 24/7 monitoring and automated deployments.",
    icon: Cloud,
    price: "Starting at $1,200",
    priceRange: "$1,200 - $8,000",
    features: [
      "Cloud Infrastructure Assessment",
      "Cloud Migration Services",
      "DevOps Pipeline Setup",
      "Managed Cloud Services",
      "Disaster Recovery Setup"
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
    description: "Professional websites and digital solutions that drive results. From landing pages to complex e-commerce platforms.",
    icon: ShoppingCart,
    price: "Starting at $1,200",
    priceRange: "$1,200 - $6,500",
    badgeType: "Best Value",
    features: [
      "Conversion Landing Page",
      "Business Website",
      "E-commerce Platform",
      "Digital Marketplace"
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
    description: "Comprehensive security and compliance solutions. Protect your business with expert cybersecurity guidance.",
    icon: BarChart3,
    price: "Starting at $1,500",
    priceRange: "$1,500 - $12,000",
    badgeType: "Premium",
    features: [
      "Security Monitoring Service",
      "Cybersecurity Audit",
      "Penetration Testing",
      "Security Controls Implementation",
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
    icon: Target
  },
  {
    id: "design",
    title: "Design", 
    description: "Strategic planning, architecture design, and user experience mapping",
    icon: Palette
  },
  {
    id: "develop",
    title: "Develop",
    description: "Agile development with continuous feedback and iteration",
    icon: Code
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Secure, scalable deployment with comprehensive testing",
    icon: Cloud
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Knowledge transfer, training, and ongoing optimization",
    icon: CheckCircle
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc.",
    content: "Morton Software Insights transformed our entire digital infrastructure. Their strategic approach and technical expertise helped us scale from 10 to 100 employees seamlessly.",
    rating: 5,
    avatar: "/testimonials/sarah-johnson.jpg"
  },
  {
    id: 2, 
    name: "Michael Chen",
    role: "Founder & CEO",
    company: "GrowthCorp",
    content: "The team at Morton Software Insights doesn't just code - they deliver insights-driven solutions. Our customer portal has increased engagement by 300% since launch.",
    rating: 5,
    avatar: "/testimonials/michael-chen.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "VP of Technology",
    company: "InnovateCo",
    content: "Working with Morton Software Insights felt like having an extended team of senior developers. They understood our vision and brought it to life beautifully.",
    rating: 5,
    avatar: "/testimonials/emily-rodriguez.jpg"
  }
];

export const faqs = [
  {
    question: "What makes Morton Software Insights different from other development companies?",
    answer: "We combine strategic thinking with artisan-level craftsmanship. Unlike agencies that just execute, we partner with you to understand your business goals and create solutions that drive measurable results. Our insights-driven approach means every line of code is crafted with strategic purpose and business intelligence."
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
    answer: "Our 5-phase 'Morton Insights Method' ensures clear communication, regular checkpoints, and measurable outcomes. We use agile development with weekly demos, maintain comprehensive documentation, and track business metrics - not just technical deliverables."
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
  phone: "(404) 826-2654",
  email: "hello@mortonsoftware.io",
  supportEmail: "support@mortonsoftware.io",
  legalEmail: "legal@mortonsoftware.io",
  address: {
    street: "Westminister Pl",
    city: "Atlanta",
    state: "GA", 
    zip: "30350",
    full: "Westminister Pl, Atlanta, GA 30350"
  }
};
