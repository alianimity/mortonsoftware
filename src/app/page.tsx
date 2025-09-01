import { HeroSection } from "@/components/sections/hero";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverview />
      <ProcessSection />
      <TestimonialsSection />
    </>
  );
}