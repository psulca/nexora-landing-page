"use client"

import { Header } from "@/components/layout/header"
import { PageContainer } from "@/components/layout/page-container"
import { HeroSection } from "@/components/features/hero/hero-section"
import { BentoGridSection } from "@/components/features/showcase/bento-grid-section"
import PlatformFeaturesSection from "@/components/features/showcase/platform-features-section"
import TestimonialsSection from "@/components/features/testimonials/testimonials-section"
import PricingSection from "@/components/features/pricing/pricing-section"
import FAQSection from "@/components/features/faq/faq-section"
import CTASection from "@/components/features/cta/cta-section"
import FooterSection from "@/components/layout/footer"
import { APP_TEXT } from "@/lib/config"


export default function LandingPage() {
  const heroFeatureCards = APP_TEXT.hero.featureCards.map((card, index) => ({
    title: card.title,
    description: card.description,
    image: APP_TEXT.hero.dashboardImages[index] 
      ? `/${APP_TEXT.hero.dashboardImages[index].src}` 
      : undefined,
  }))

  const documentationCards = [
    {
      title: "Publica tu oportunidad",
      description: "Crea convocatorias de voluntariado en minutos y destaca tus proyectos ante una comunidad comprometida.",
      image: "/slide4.png",
    },
    {
      title: "Gestiona postulaciones fácilmente",
      description: "Revisa perfiles, recibe notificaciones y organiza a tus voluntarios desde un panel centralizado.",
      image: "/slide5.png",
    },
    {
      title: "Conecta y genera impacto",
      description: "Impulsa tu misión con voluntarios comprometidos y lleva tu trabajo al siguiente nivel.",
      image: "/slide6.png",
    },
  ]

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-start items-center">
      <Header />
      <PageContainer>
        <HeroSection />
        <PlatformFeaturesSection
          title="Cómo funciona Nexora"
          cards={heroFeatureCards}
          backgroundColor="bg-[#FFC942]"
          activeCardColor="bg-[#76A69D]"
          autoPlay={true}
          showImage={true}
        />
        <TestimonialsSection />
        <BentoGridSection />
        <PlatformFeaturesSection
          title="Gestiona tus oportunidades de voluntariado"
          cards={documentationCards}
          backgroundColor="bg-white"
          activeCardColor="bg-[#FFC942]"
          autoPlay={true}
          showImage={true}
        />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </PageContainer>

      <FooterSection />
    </div>
  )
}
