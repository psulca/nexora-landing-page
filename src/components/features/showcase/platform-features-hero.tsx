"use client"

import { HeroDashboardPreview } from "@/components/features/hero/hero-dashboard-preview"
import { HeroFeatureCards } from "@/components/features/hero/hero-feature-cards"
import { useCarouselProgress } from "@/lib/hooks"
import { APP_TEXT } from "@/lib/config"

interface PlatformFeaturesHeroProps {
  dashboardImages?: readonly { src: string; alt: string }[]
  featureCards?: readonly { title: string; description: string }[]
}

export function PlatformFeaturesHero({
  dashboardImages,
  featureCards,
}: PlatformFeaturesHeroProps = {}) {
  const finalFeatureCards = featureCards || APP_TEXT.hero.featureCards
  const finalDashboardImages = dashboardImages || APP_TEXT.hero.dashboardImages

  const { activeItem: activeCard, progress, handleItemClick } = useCarouselProgress({
    itemCount: finalFeatureCards.length,
  })

  return (
    <div className="w-full bg-[#FFC942] border-t-4 border-b-4 border-black flex flex-col justify-center items-center">
      {/* Section Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col justify-center items-center gap-3 sm:gap-4">
          <h2 className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-black leading-tight font-darker-grotesque tracking-tight">
            Cómo funciona Nexora
          </h2>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-6 md:pb-8 flex justify-center items-center">
        <HeroDashboardPreview images={finalDashboardImages} activeIndex={activeCard} />
      </div>

      {/* Feature Cards */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 pb-8 sm:pb-12 md:pb-16 flex justify-center items-center">
        <HeroFeatureCards
          cards={finalFeatureCards}
          activeIndex={activeCard}
          progress={progress}
          onCardClick={handleItemClick}
        />
      </div>
    </div>
  )
}

