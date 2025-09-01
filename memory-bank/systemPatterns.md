# Maker Software LLC - System Patterns

## Architecture Overview
Modern, performance-first website built with Next.js App Router, emphasizing component reusability and consistent design patterns.

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
--maker-yellow: #FFD009;     /* Primary brand color */
--maker-blue: #002C73;       /* Secondary brand color */
--maker-yellow-light: #FFDC33; /* Hover states */
--maker-blue-light: #1e4a8c;   /* Hover states */

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

## Component Relationships
```
Layout (MainLayout)
├── Header (Navigation + Theme)
├── Main Content (Page-specific)
│   ├── Hero Section
│   ├── Services Section
│   ├── Process Section
│   ├── Testimonials Section
│   └── Contact Section
└── Footer (Links + Contact Info)
```

## Critical Implementation Paths
1. **Performance**: Image optimization, lazy loading, code splitting
2. **SEO**: Structured data, meta tags, semantic HTML
3. **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation
4. **Mobile**: Touch-friendly interactions, responsive breakpoints
5. **Analytics**: User behavior tracking, conversion optimization
