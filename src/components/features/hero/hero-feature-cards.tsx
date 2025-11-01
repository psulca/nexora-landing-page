"use client"

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
    <div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-center items-stretch gap-4">
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
  )
}

