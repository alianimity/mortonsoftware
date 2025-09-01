# Maker Software LLC - Technical Context

## Technology Stack

### Core Framework
- **Next.js 14**: React framework with App Router for optimal performance
- **TypeScript**: Full type safety across frontend and backend
- **React 18**: Latest React features including Suspense and concurrent rendering

### Styling & Design
- **Tailwind CSS 3.4+**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component primitives
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Consistent icon system
- **Google Fonts**: CroissantOne for brand, Inter for body text

### Development Tools
- **ESLint 9+**: Code quality and consistency
- **Prettier**: Automated code formatting
- **Husky**: Git hooks for pre-commit validation
- **npm**: Package management (preferred over yarn/pnpm for this project)

### Build & Deployment
- **Vercel**: Optimized for Next.js with edge functions
- **Vercel Analytics**: Performance and user behavior tracking
- **Edge Runtime**: Fast page loads with CDN distribution

## Development Environment Setup

### Required Software
- Node.js 18+ LTS
- npm (latest version)
- Git for version control
- VS Code (recommended) with extensions:
  - TypeScript support
  - Tailwind CSS IntelliSense
  - Prettier - Code formatter
  - ES7+ React/Redux/React-Native snippets

### Environment Variables
```bash
# Development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Production
NEXT_PUBLIC_SITE_URL=https://makersoftwares.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@makersoftwares.com
```

## Performance Requirements
- **Core Web Vitals**: All metrics in "Good" range
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3 seconds

## Technical Constraints
- **Browser Support**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- **Mobile First**: Responsive design starting from 320px width
- **Accessibility**: WCAG 2.1 AA compliance required
- **SEO**: Semantic HTML, structured data, optimized meta tags

## Integration Requirements
- **Contact Forms**: EmailJS or Resend for form submissions
- **Analytics**: Google Analytics 4 for user behavior tracking
- **Performance Monitoring**: Vercel Analytics for Core Web Vitals
- **SEO Tools**: Google Search Console integration

## Security Considerations
- **Content Security Policy**: Strict CSP headers
- **HTTPS Only**: Force HTTPS in production
- **Form Validation**: Client and server-side validation
- **Rate Limiting**: Prevent form spam and abuse
- **Input Sanitization**: Protect against XSS attacks

## Tool Usage Patterns
- **Component Development**: Start with Radix primitives, customize with Tailwind
- **Animation Development**: Use Framer Motion for all interactions
- **State Management**: React hooks for local state, no global state needed
- **Form Handling**: react-hook-form with zod validation
- **Image Optimization**: Next.js Image component with WebP/AVIF formats
