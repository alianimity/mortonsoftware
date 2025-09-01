# Maker Software LLC - Design System

## Brand Identity

### Visual Philosophy
"Crafted Precision" - Our design system reflects the artisan approach to software development. Every element is purposefully designed with attention to detail, creating a professional yet approachable aesthetic that builds trust and showcases innovation.

### Color System

#### Primary Brand Colors
```css
/* Maker Yellow - Energy, Innovation, Optimism */
--maker-yellow: #FFD009;
--maker-yellow-light: #FFE14D;
--maker-yellow-dark: #E6BB08;
--maker-yellow-hover: #FFDC33;

/* Maker Blue - Trust, Reliability, Depth */
--maker-blue: #002C73;
--maker-blue-light: #1E4A8C;
--maker-blue-dark: #001B4D;
--maker-blue-hover: #003D99;
```

#### Neutral Palette
```css
/* Light Theme Base */
--neutral-50: #fafafa;
--neutral-100: #f5f5f5;
--neutral-200: #e5e5e5;
--neutral-300: #d4d4d4;
--neutral-600: #525252;
--neutral-700: #404040;
--neutral-800: #262626;
--neutral-900: #171717;

/* Semantic Colors */
--background: #ffffff;
--foreground: #171717;
--card: #ffffff;
--card-foreground: #171717;
--muted: #f5f5f5;
--muted-foreground: #737373;
```

#### Usage Guidelines
- **Maker Yellow**: Primary CTAs, highlights, brand moments, accent elements
- **Maker Blue**: Headers, professional elements, secondary actions, trust indicators
- **Neutral**: Body text, backgrounds, subtle elements, structural components

### Typography System

#### Font Families
```css
/* Brand Font - CroissantOne for logo and display elements */
--font-brand: 'Croissant One', cursive;

/* Body Font - Inter for readability and professionalism */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;

/* Code Font - JetBrains Mono for technical content */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

#### Typography Scale
```css
/* Display Typography */
--text-display-xl: clamp(4rem, 12vw, 8rem);     /* Hero headlines */
--text-display-lg: clamp(3rem, 8vw, 6rem);      /* Section headers */
--text-display-md: clamp(2rem, 5vw, 4rem);      /* Subsection headers */

/* Heading Typography */
--text-h1: clamp(2.5rem, 6vw, 3.5rem);          /* Page titles */
--text-h2: clamp(2rem, 4vw, 2.5rem);            /* Section titles */
--text-h3: clamp(1.5rem, 3vw, 2rem);            /* Subsection titles */
--text-h4: clamp(1.25rem, 2vw, 1.5rem);         /* Component titles */

/* Body Typography */
--text-xl: 1.25rem;      /* Large body text */
--text-lg: 1.125rem;     /* Emphasized body text */
--text-base: 1rem;       /* Standard body text */
--text-sm: 0.875rem;     /* Small text */
--text-xs: 0.75rem;      /* Micro text */
```

#### Typography Rules
```css
/* Brand Typography */
.font-brand {
  font-family: var(--font-brand);
  font-weight: 400;
  letter-spacing: -0.02em;
}

/* Display Typography */
.display-text {
  font-family: var(--font-sans);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

/* Body Typography */
.body-text {
  font-family: var(--font-sans);
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0;
}
```

## Component Design System

### Spacing & Layout
```css
/* Spacing Scale */
--space-xs: 0.25rem;    /* 4px */
--space-sm: 0.5rem;     /* 8px */
--space-md: 1rem;       /* 16px */
--space-lg: 1.5rem;     /* 24px */
--space-xl: 2rem;       /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */

/* Section Spacing */
--section-padding: clamp(4rem, 8vw, 8rem);
--container-padding: clamp(1rem, 4vw, 2rem);
```

### Component Patterns

#### Button System
```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(135deg, var(--maker-yellow), var(--maker-yellow-light));
  color: var(--maker-blue);
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 rgba(255, 208, 9, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px 0 rgba(255, 208, 9, 0.4);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--maker-blue);
  border: 2px solid var(--maker-blue);
  padding: 0.75rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--maker-blue);
  color: white;
}
```

#### Card System
```css
/* Base Card */
.card {
  background: var(--card);
  border: 1px solid var(--neutral-200);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

/* Service Card */
.service-card {
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--maker-yellow), var(--maker-blue));
}
```

### Animation System

#### Motion Principles
1. **Purposeful**: Every animation serves a UX purpose
2. **Performant**: GPU-accelerated transforms only
3. **Consistent**: Unified timing and easing curves
4. **Accessible**: Respects reduced motion preferences

#### Timing & Easing
```css
/* Easing Curves */
--ease-out-cubic: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in-out-cubic: cubic-bezier(0.4, 0, 0.6, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

/* Duration Scale */
--duration-fast: 0.15s;
--duration-normal: 0.3s;
--duration-slow: 0.5s;
--duration-slower: 0.8s;
```

#### Animation Patterns
```css
/* Fade In Animation */
.fade-in {
  opacity: 0;
  transform: translateY(2rem);
  transition: all var(--duration-slow) var(--ease-out-cubic);
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Scale In Animation */
.scale-in {
  opacity: 0;
  transform: scale(0.95);
  transition: all var(--duration-normal) var(--ease-out-cubic);
}

.scale-in.visible {
  opacity: 1;
  transform: scale(1);
}

/* Slide In Animation */
.slide-in-left {
  opacity: 0;
  transform: translateX(-2rem);
  transition: all var(--duration-slow) var(--ease-out-cubic);
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}
```

## Layout System

### Grid System
```css
/* Container System */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.container-fluid {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

/* Grid Layouts */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.grid-services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}
```

### Responsive Breakpoints
```css
/* Breakpoint System */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;

/* Usage Example */
@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## Accessibility Standards

### Focus States
```css
/* Focus Ring */
.focus-ring:focus {
  outline: 2px solid var(--maker-yellow);
  outline-offset: 2px;
}

/* Focus Visible (for keyboard users only) */
.focus-visible:focus-visible {
  outline: 2px solid var(--maker-yellow);
  outline-offset: 2px;
}
```

### Color Contrast
- **Text on White**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Interactive Elements**: Minimum 3:1 contrast ratio
- **Brand Colors**: Tested for WCAG AA compliance

### Motion Accessibility
```css
/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This design system creates a unique, professional, and accessible visual identity for Maker Software LLC while maintaining consistency across all components and interactions.
