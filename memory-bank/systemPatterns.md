# Morton Software Insights LLC - System Patterns

## Architecture Overview
Modern, performance-first website built with Next.js App Router, emphasizing component reusability, consistent design patterns, and insights-driven user experiences that showcase analytical expertise.

## Key Technical Decisions
1. **Next.js 14 App Router**: Latest routing patterns for optimal performance
2. **TypeScript**: Type safety across all components and utilities
3. **Tailwind CSS**: Utility-first styling with custom design tokens
4. **Framer Motion**: Professional animations and micro-interactions
5. **Radix UI**: Accessible component primitives as foundation

## Design System Patterns
### Color System
```css
/* Brand Colors */
--morton-orange: #EB7513;     /* Primary brand color */
--morton-purple: #32142D;     /* Secondary brand color */
--morton-orange-light: #F08A2E; /* Hover states */
--morton-purple-light: #4a1f3d;   /* Hover states */

/* Morton Purple System (Added for Color Consistency) */
--morton-purple-800: #2A1226;  /* Lighter purple for cards */
--morton-purple-900: #1F0D1B;  /* Medium purple for sections */
--morton-purple-950: #0F0609;  /* Darkest purple for backgrounds */

/* Neutral System */
--neutral-50: #fafafa;
--neutral-900: #171717;
--background: #ffffff;
--foreground: #171717;
```

### Typography Hierarchy
```css
/* CroissantOne for brand elements */
.font-brand: 'Croissant One', cursive;

/* Inter for body text */
.font-sans: 'Inter', system-ui, sans-serif;

/* Scale */
--text-hero: clamp(3rem, 8vw, 6rem);
--text-section: clamp(2rem, 5vw, 3rem);
--text-body: 1rem;
--text-small: 0.875rem;
```

### Component Patterns
1. **Cards**: Consistent rounded-2xl, subtle shadows, hover animations
2. **Buttons**: Gradient backgrounds, smooth transitions, accessibility focus
3. **Sections**: Structured with consistent padding and spacing rhythm
4. **Navigation**: Sticky header with scroll-based transparency
5. **Forms**: Clean inputs with validation states and smooth feedback

## Animation Principles
1. **Purposeful Motion**: Every animation serves a UX purpose
2. **Performance First**: 60fps animations using transform properties
3. **Consistent Timing**: Unified easing curves (cubic-bezier(0.4, 0, 0.2, 1))
4. **Staggered Reveals**: Content appears in logical sequence
5. **Reduced Motion**: Respect user preferences for accessibility

## Service Page Design Patterns (Revolutionary Implementation)

### Hero Section Variations
**Pattern Philosophy**: Each service page has a unique hero layout while maintaining Morton purple branding and core functionality.

1. **Centered Layout with Feature Cards** (Web & Digital Solutions)
   - Full-width centered content with three horizontal feature cards
   - Integrated statistics within feature cards
   - Additional background blur elements

2. **Centered Layout with Statistics Grid** (Software & Application Development)
   - Centered content with four enhanced statistics cards
   - Descriptive elements for each statistic
   - Horizontal grid layout below main content

3. **Split Layout with Service Icons** (Cloud Solutions)
   - 2/3 + 1/3 grid with vertical service icons on right
   - Two-column statistics on left
   - Vertical service feature cards

4. **Vertical Layout with Security Badges** (Security & Compliance)
   - Centered content with three security badges
   - Centered assessment card below
   - Multiple background blur elements

5. **Asymmetric Layout with Process Flow** (Prototyping & Validation)
   - 3/5 + 2/5 grid with process flow on right
   - Numbered process steps visualization
   - Compact statistics grid

6. **Diagonal Split with Tech Icons** (Innovation & Emerging Tech)
   - 7/12 + 5/12 grid with technology icons
   - 2x2 technology grid on right
   - Diagonal layout emphasis

7. **Stacked Layout with Enhanced Metrics** (Content & Marketing)
   - Centered content with three large metrics cards
   - Icons integrated within metrics cards
   - Centered assessment card below

8. **Offset Layout with Horizontal Metrics** (E-commerce Services)
   - 4/6 + 2/6 grid with side-aligned metrics
   - Horizontal metrics with icons and descriptions
   - Offset positioning for visual interest

9. **Compact Layout with Support Tiers** (Maintenance & Support)
   - Centered content with three support tier badges
   - Icon and label combinations
   - Compact, efficient layout

10. **Wide Layout with Data Flow** (Database & Integration)
    - Full-width centered content
    - Five data flow visualization cards
    - Wide horizontal grid layout

### Pricing Card Variations
**Pattern Philosophy**: Diverse pricing presentations that suit each service type while maintaining Morton branding.

1. **Gradient Headers with Timeline** (Cloud Solutions)
   - Gradient header backgrounds
   - Timeline and savings information
   - Enhanced visual hierarchy

2. **Standard with Deliverables Focus** (Security, Prototyping, Innovation, Content)
   - Traditional layout with enhanced deliverables section
   - Consistent Morton purple styling
   - Focus on service outcomes

3. **Tiered Pricing with Price Headers** (E-commerce Services)
   - Prominent price headers
   - Hover border effects
   - Centered pricing emphasis

4. **Monthly Pricing with Service Badges** (Maintenance & Support)
   - Service type badges (Monthly/One-Time)
   - Separated header sections
   - Monthly service emphasis

5. **Complexity-Based Pricing** (Database & Integration)
   - Complexity indicators (Simple/Advanced/Enterprise)
   - Gradient headers with service level
   - Progressive complexity visualization

### Morton Purple Color System Implementation
**Consistent Alternating Pattern**: 950 → 900 → 950 → 900 → 950 → 900

```css
/* Section Background Pattern */
.hero-section: bg-morton-purple-950
.services-section: bg-morton-purple-900
.benefits-section: bg-morton-purple-950
.process-section: bg-morton-purple-900
.testimonials-section: bg-morton-purple-950
.cta-section: bg-morton-purple-900
```

## Component Relationships
```
Layout (MainLayout)
├── Header (Navigation + Theme)
├── Main Content (Page-specific)
│   ├── Hero Section (Unique Layouts)
│   ├── Services Section (Varied Pricing)
│   ├── Benefits Section (Consistent)
│   ├── Process Section (Consistent)
│   ├── Testimonials Section (Consistent)
│   └── CTA Section (Consistent)
└── Footer (Links + Contact Info)
```

## Design System Flexibility
**Core Principle**: Maintain brand consistency while allowing creative expression through:
- **Flexible Grid Systems**: Various column configurations (1/2, 2/3+1/3, 3/5+2/5, 7/12+5/12, etc.)
- **Modular Statistics Cards**: Reusable with different layouts and icon integrations
- **Consistent Color Application**: Morton purple system applied consistently across all variations
- **Unified Animation Timing**: Consistent delay patterns and hover effects
- **Scalable Typography**: Responsive text sizing across all hero variations

## Favicon Configuration Pattern
**Comprehensive Favicon System**: Properly configured favicon hierarchy for Morton Software Insights branding.

### Layout Configuration (`src/app/layout.tsx`)
```tsx
<head>
  <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
  <link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
  <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
  <link rel="manifest" href="/favicons/site.webmanifest" />
</head>
```

### Web App Manifest (`public/favicons/site.webmanifest`)
```json
{
  "name": "Morton Software Insights LLC",
  "short_name": "Morton Software",
  "theme_color": "#EB7513",
  "background_color": "#32142D",
  "display": "standalone"
}
```

## Legal Pages Design Pattern
**Consistent Legal Documentation**: All legal pages follow unified Morton branding pattern.

### Legal Page Structure
```tsx
// Hero Section with Morton branding
<section className="relative py-20 overflow-hidden bg-morton-purple-950">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-64 h-64 bg-morton-orange/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-morton-purple/10 rounded-full blur-3xl"></div>
  </div>
  // Badge + Title + Description + Compliance badges
</section>

// Table of Contents with Morton styling
<section className="py-16 bg-morton-purple">
  // Interactive TOC with morton-purple-950 cards and morton-orange accents
</section>

// Main Content with Morton purple sections
<section className="py-20 bg-morton-purple-950">
  // Content sections with bg-morton-purple borders and morton-orange headings
</section>
```

### Legal Page Contact Information Pattern
```tsx
// Consistent contact information across all legal pages
{
  company: "Morton Software Insights LLC",
  address: "Westminister Pl, Atlanta, GA 30350",
  phone: "(404) 826-2654",
  email: "hello@mortonsoftware.io",
  legal: "legal@mortonsoftware.io"
}
```

## Critical Implementation Paths
1. **Performance**: Image optimization, lazy loading, code splitting
2. **SEO**: Structured data, meta tags, semantic HTML
3. **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation
4. **Mobile**: Touch-friendly interactions, responsive breakpoints
5. **Analytics**: User behavior tracking, conversion optimization
6. **Design Consistency**: Morton purple system enforcement across all new components
7. **Visual Variety**: Unique layouts that prevent user fatigue while maintaining brand recognition
8. **Favicon Management**: Proper favicon configuration with Morton branding and PWA support
9. **Legal Compliance**: Consistent legal page design patterns with Morton branding
