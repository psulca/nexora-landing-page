"use client"

import { GridSection, type GridItem } from "./grid-section"
import SmartSimpleBrilliant from "@/components/ui/smart-simple-brilliant"
import YourWorkInSync from "@/components/ui/your-work-in-sync"
import EffortlessIntegration from "@/components/ui/effortless-integration"
import NumbersThatSpeak from "@/components/ui/numbers-that-speak"
import { COLORS } from "@/lib/config"

export function BentoGridSection() {
  const gridItems: GridItem[] = [
    {
      title: "Smart. Simple. Brilliant.",
      description: "Your data is beautifully organized so you see everything clearly without the clutter.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
          <SmartSimpleBrilliant
            width="100%"
            height="100%"
            theme="light"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
    {
      title: "Your work, in sync",
      description: "Every update flows instantly across your team and keeps collaboration effortless and fast.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
          <YourWorkInSync
            width="400"
            height="250"
            theme="light"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
    {
      title: "Effortless Integration",
      description: "Connect your favorite tools and services seamlessly without breaking your workflow.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
          <EffortlessIntegration
            width="100%"
            height="100%"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
    {
      title: "Numbers that speak",
      description: "Track your progress with powerful analytics and insights that drive better decisions.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
          <NumbersThatSpeak
            width="100%"
            height="100%"
            theme="light"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
  ]

  return (
    <GridSection
      badge={{
        icon: (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="4" height="4" stroke={COLORS.primary} strokeWidth="1" fill="none" />
            <rect x="7" y="1" width="4" height="4" stroke={COLORS.primary} strokeWidth="1" fill="none" />
            <rect x="1" y="7" width="4" height="4" stroke={COLORS.primary} strokeWidth="1" fill="none" />
            <rect x="7" y="7" width="4" height="4" stroke={COLORS.primary} strokeWidth="1" fill="none" />
          </svg>
        ),
        text: "Bento grid",
      }}
      title="Built for absolute clarity and focused work"
      description="Stay focused with tools that organize, connect and turn information into confident decisions."
      items={gridItems}
    />
  )
}

