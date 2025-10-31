"use client"

import { useEffect } from "react"
import { VolunteerSearch } from "@/components/features/volunteer-search/volunteer-search"
import { APP_TEXT } from "@/lib/config"
import { useHeroVisibility } from "@/lib/hooks/use-hero-visibility"
import Image from "next/image"

interface HeroSectionProps {
  title?: string
  description?: string
  showVolunteerSearch?: boolean
  onVisibilityChange?: (isVisible: boolean) => void
}

export function HeroSection({
  title,
  description,
  showVolunteerSearch = true,
  onVisibilityChange,
}: HeroSectionProps = {}) {
  // Default to APP_TEXT values if not provided
  const finalTitle = title || APP_TEXT.hero.title
  const finalDescription = description || APP_TEXT.hero.description

  const { isHeroVisible, heroRef } = useHeroVisibility()

  useEffect(() => {
    onVisibilityChange?.(!isHeroVisible)
  }, [isHeroVisible, onVisibilityChange])

  return (
    <div 
      ref={heroRef}
      className="min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-90px)] lg:min-h-[calc(100vh-100px)] flex flex-col justify-center items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0 relative py-8 sm:py-12 md:py-16">
      {/* Hero Content with Side Images */}
      <div className="w-full max-w-[1200px] lg:w-full relative flex items-start justify-center gap-4 lg:gap-8">
        {/* Left Image - Plantando */}
        <div className="hidden lg:block absolute left-0 top-0 w-[200px] xl:w-[250px] h-auto -z-10">
          <Image
            src="/plantando.svg"
            alt="Persona plantando"
            width={250}
            height={375}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Center Content */}
        <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative z-10">
          <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <h1 className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0 whitespace-pre-line">
              {finalTitle}
            </h1>
            <p className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm whitespace-pre-line">
              {finalDescription}
            </p>
          </div>

          {/* Volunteer Search */}
          {showVolunteerSearch && (
            <div className="w-full max-w-[700px] lg:w-[700px] mt-1">
              <VolunteerSearch />
            </div>
          )}
        </div>

        {/* Right Image - Barriendo */}
        <div className="hidden lg:block absolute right-0 top-0 w-[200px] xl:w-[250px] h-auto -z-10">
          <Image
            src="/barriendo.svg"
            alt="Persona barriendo"
            width={250}
            height={350}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  )
}
