"use client"

import { HeroDashboardPreview } from "@/components/features/hero/hero-dashboard-preview"
import { HeroFeatureCards } from "@/components/features/hero/hero-feature-cards"
import { HeroBackgroundPattern } from "@/components/features/hero/hero-background-pattern"
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
    <div className="w-full relative flex flex-col justify-start items-center py-4 sm:py-6 md:py-8">
      {/* Background Pattern */}
      <HeroBackgroundPattern />

      {/* Dashboard Preview */}
      <HeroDashboardPreview images={finalDashboardImages} activeIndex={activeCard} />

      {/* Feature Cards */}
      <HeroFeatureCards
        cards={finalFeatureCards}
        activeIndex={activeCard}
        progress={progress}
        onCardClick={handleItemClick}
      />
    </div>
  )
}

