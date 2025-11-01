"use client"

import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { HeroSection } from "@/components/features/hero/hero-section"
import { PlatformFeaturesHero } from "@/components/features/showcase/platform-features-hero"
import { BentoGridSection } from "@/components/features/showcase/bento-grid-section"
import PlatformFeaturesSection from "@/components/features/showcase/platform-features-section"
import TestimonialsSection from "@/components/features/testimonials/testimonials-section"
import PricingSection from "@/components/features/pricing/pricing-section"
import FAQSection from "@/components/features/faq/faq-section"
import CTASection from "@/components/features/cta/cta-section"
import FooterSection from "@/components/layout/footer"


export default function LandingPage() {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <Header />
      <PageContainer>
        <HeroSection />
        <PlatformFeaturesHero />
        <TestimonialsSection />
        <BentoGridSection />
        <PlatformFeaturesSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </PageContainer>

      <FooterSection />
    </div>
  )
}
