"use client"

import { DecorativePattern } from "@/components/ui/decorative-pattern"
import { FeatureCard } from "@/components/ui/feature-card"

interface FeatureCardData {
  title: string
  description: string
}

interface HeroFeatureCardsProps {
  cards: readonly FeatureCardData[]
  activeIndex: number
  progress: number
  onCardClick: (index: number) => void
}

export function HeroFeatureCards({ cards, activeIndex, progress, onCardClick }: HeroFeatureCardsProps) {
  return (
    <div className="self-stretch border-t border-b border-[#E0DEDB] flex justify-center items-start">
      <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
        <DecorativePattern count={50} />
      </div>

      <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            description={card.description}
            isActive={activeIndex === index}
            progress={activeIndex === index ? progress : 0}
            onClick={() => onCardClick(index)}
          />
        ))}
      </div>

      <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
        <DecorativePattern count={50} />
      </div>
    </div>
  )
}

