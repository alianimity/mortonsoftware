import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    variant?: "default" | "service" | "testimonial" | "pricing";
    hover?: boolean;
  }
>(({ className, variant = "default", hover = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "card",
      variant === "service" && "service-card",
      hover && "hover:shadow-card-hover",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Service Card Component with built-in styling
const ServiceCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    icon?: React.ReactNode;
    title: string;
    description: string;
    price?: string;
    features?: string[];
    ctaText?: string;
    onCtaClick?: () => void;
    badgeType?: string;
  }
>(({ 
  className, 
  icon, 
  title, 
  description, 
  price, 
  features, 
  ctaText = "Learn More",
  onCtaClick,
  badgeType,
  ...props 
}, ref) => (
  <div className="relative">
    {badgeType && (
      <div className="absolute -top-3 -right-3 z-20">
        <span className="px-3 py-1 bg-morton-orange text-slate-950 rounded-full text-sm font-semibold shadow-lg">
          {badgeType}
        </span>
      </div>
    )}
    <Card ref={ref} variant="service" className={cn("group relative", className)} {...props}>
    <CardHeader>
      <div className="flex items-center space-x-3 mb-3">
        {icon && (
          <div className="p-2 rounded-lg bg-morton-orange/20 text-morton-orange">
            {icon}
          </div>
        )}
        <CardTitle className="text-white group-hover:text-morton-orange transition-colors">
          {title}
        </CardTitle>
      </div>
      <CardDescription className="text-base text-slate-300">
        {description}
      </CardDescription>
    </CardHeader>
    
    <CardContent>
      {features && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-slate-200">
              <svg
                className="mr-2 h-4 w-4 text-morton-orange flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </CardContent>
    
    <CardFooter className="flex justify-between items-center gap-4">
      {price && (
        <div className="text-left">
          <div className="text-xs text-slate-400 mb-1">Starting at</div>
          <div className="text-base font-semibold text-morton-orange">
            {price.replace('Starting at ', '').replace('/month', '')}
          </div>
        </div>
      )}
      <button
        onClick={onCtaClick}
        className="btn-primary text-sm px-3 py-2 flex-shrink-0"
      >
        Learn More
      </button>
    </CardFooter>
    </Card>
  </div>
));
ServiceCard.displayName = "ServiceCard";

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  ServiceCard 
};
