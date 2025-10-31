"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { HeroSection } from "@/components/features/hero/hero-section"
import { PlatformFeaturesHero } from "@/components/features/showcase/platform-features-hero"
import { BentoGridSection } from "@/components/features/showcase/bento-grid-section"
import PlatformFeaturesSection from "@/components/features/showcase/platform-features-section"
import OpportunitiesCarousel from "@/components/features/opportunities/opportunities-carousel"
import TestimonialsSection from "@/components/features/testimonials/testimonials-section"
import FAQSection from "@/components/features/faq/faq-section"
import CTASection from "@/components/features/cta/cta-section"
import FooterSection from "@/components/layout/footer"

export default function LandingPage() {
  const [showStickySearch, setShowStickySearch] = useState(false)

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] flex flex-col justify-start items-center">
      <Header showStickySearch={showStickySearch} />
      <PageContainer>
        <HeroSection onVisibilityChange={setShowStickySearch} />
        <PlatformFeaturesHero />
        <OpportunitiesCarousel />
        <BentoGridSection />
        <PlatformFeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </PageContainer>

      <FooterSection />
    </div>
  )
}
