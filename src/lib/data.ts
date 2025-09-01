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
    title: "Digital Strategy & Transformation Consulting",
    tagline: "Chart Your Digital Future",
    description: "Strategic clarity before tactical execution. We help you navigate digital transformation with comprehensive roadmaps and expert guidance.",
    icon: Lightbulb,
    price: "Starting at $5,000",
    priceRange: "$5,000 - $50,000",
    features: [
      "Digital Transformation Roadmap",
      "Technology Assessment & Planning", 
      "Executive Technology Advisory",
      "Enterprise Digital Strategy",
      "Innovation Workshop Series"
    ],
    services: [
      { name: "Digital Transformation Roadmap", price: "$5,000", description: "Comprehensive strategy document" },
      { name: "Technology Assessment & Planning", price: "$8,000", description: "Current state analysis + recommendations" },
      { name: "Executive Technology Advisory", price: "$15,000", description: "3-month strategic partnership" },
      { name: "Enterprise Digital Strategy", price: "$25,000", description: "Complete transformation blueprint" },
      { name: "Innovation Workshop Series", price: "$50,000", description: "Quarterly innovation sessions" }
    ]
  },
  {
    id: "software-development",
    title: "Custom Software Development",
    tagline: "Crafted Code, Lasting Value",
    description: "Artisan-level code quality with modern architecture. From MVPs to enterprise systems, we build software that scales with your business.",
    icon: Code,
    price: "Starting at $15,000",
    priceRange: "$15,000 - $250,000+",
    features: [
      "MVP Development",
      "Web Application Development",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Legacy System Modernization"
    ],
    services: [
      { name: "MVP Development", price: "$15,000", description: "Market-ready minimum viable product" },
      { name: "Web Application Development", price: "$35,000", description: "Full-featured web applications" },
      { name: "Enterprise Software Solutions", price: "$75,000", description: "Complex business systems" },
      { name: "API Development & Integration", price: "$25,000", description: "Seamless system connectivity" },
      { name: "Legacy System Modernization", price: "$150,000+", description: "Modernizing outdated systems" }
    ]
  },
  {
    id: "product-design",
    title: "Digital Product Design & UX",
    tagline: "Designed for Success",
    description: "User-centered design that drives business results. We create digital experiences that users love and businesses profit from.",
    icon: Palette,
    price: "Starting at $8,000",
    priceRange: "$8,000 - $40,000",
    features: [
      "UX/UI Design Sprint",
      "Complete Product Design",
      "Design System Creation",
      "User Experience Optimization",
      "Brand Digital Identity"
    ],
    services: [
      { name: "UX/UI Design Sprint", price: "$8,000", description: "Rapid prototyping and validation" },
      { name: "Complete Product Design", price: "$20,000", description: "End-to-end design system" },
      { name: "Design System Creation", price: "$15,000", description: "Scalable design framework" },
      { name: "User Experience Optimization", price: "$12,000", description: "Existing product improvements" },
      { name: "Brand Digital Identity", price: "$25,000", description: "Comprehensive digital brand system" }
    ]
  },
  {
    id: "cloud-solutions",
    title: "Cloud & Infrastructure Solutions",
    tagline: "Built to Scale",
    description: "Scalable, secure, and cost-effective infrastructure. We help you leverage cloud technologies for maximum efficiency and growth.",
    icon: Cloud,
    price: "Starting at $10,000",
    priceRange: "$10,000 - $100,000+",
    features: [
      "Cloud Migration Strategy",
      "DevOps Implementation",
      "Infrastructure as Code",
      "Performance Optimization",
      "Enterprise Cloud Architecture"
    ],
    services: [
      { name: "Cloud Migration Strategy", price: "$10,000", description: "Migration planning and execution" },
      { name: "DevOps Implementation", price: "$25,000", description: "CI/CD and automation setup" },
      { name: "Infrastructure as Code", price: "$20,000", description: "Scalable infrastructure management" },
      { name: "Performance Optimization", price: "$15,000", description: "Speed and efficiency improvements" },
      { name: "Enterprise Cloud Architecture", price: "$75,000+", description: "Comprehensive cloud solutions" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce & Digital Commerce",
    tagline: "Commerce Without Limits",
    description: "Commerce solutions that grow with your business. From custom online stores to enterprise marketplaces, we build commerce platforms that convert.",
    icon: ShoppingCart,
    price: "Starting at $20,000",
    priceRange: "$20,000 - $150,000+",
    features: [
      "E-commerce Platform Development",
      "Marketplace Integration",
      "Payment Systems Integration",
      "Inventory Management Systems",
      "Enterprise Commerce Solutions"
    ],
    services: [
      { name: "E-commerce Platform Development", price: "$20,000", description: "Custom online stores" },
      { name: "Marketplace Integration", price: "$15,000", description: "Multi-channel selling solutions" },
      { name: "Payment Systems Integration", price: "$10,000", description: "Secure payment processing" },
      { name: "Inventory Management Systems", price: "$30,000", description: "Automated inventory solutions" },
      { name: "Enterprise Commerce Solutions", price: "$100,000+", description: "Large-scale commerce platforms" }
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics Solutions",
    tagline: "Data-Driven Decisions",
    description: "Transform data into competitive advantage. We help you collect, analyze, and act on data to drive business growth and innovation.",
    icon: BarChart3,
    price: "Starting at $12,000",
    priceRange: "$12,000 - $80,000+",
    features: [
      "Business Intelligence Dashboards",
      "Data Pipeline Development", 
      "Analytics Implementation",
      "Machine Learning Solutions",
      "Enterprise Data Strategy"
    ],
    services: [
      { name: "Business Intelligence Dashboards", price: "$12,000", description: "Real-time business insights" },
      { name: "Data Pipeline Development", price: "$25,000", description: "Automated data processing" },
      { name: "Analytics Implementation", price: "$18,000", description: "Comprehensive analytics setup" },
      { name: "Machine Learning Solutions", price: "$40,000", description: "Predictive analytics and AI" },
      { name: "Enterprise Data Strategy", price: "$60,000+", description: "Comprehensive data architecture" }
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
