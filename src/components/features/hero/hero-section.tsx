"use client"

import Link from "next/link"
import { APP_TEXT } from "@/lib/config"
import Image from "next/image"

interface HeroSectionProps {
  title?: string
  description?: string
}

export function HeroSection({
  title,
  description,
}: HeroSectionProps = {}) {
  // Default to APP_TEXT values if not provided
  const finalTitle = title || APP_TEXT.hero.title
  const finalDescription = description || APP_TEXT.hero.description

  return (
    <div 
      className="h-[calc(100vh-52.8px)] w-full relative flex flex-col justify-start items-center overflow-hidden pt-12 sm:pt-16 md:pt-6 lg:pt-8">
      {/* Hero Image - Full Height */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/new-hero2.webp"
          alt="Hero image"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Center Content */}
      <div className="w-full max-w-[1200px] lg:w-[1200px] flex flex-col justify-start items-center gap-4 sm:gap-5 md:gap-6 lg:gap-6 relative z-10 px-4 sm:px-0 md:px-0 lg:px-8">
        {/* Title */}
        <h1 className="w-full max-w-[1000px] lg:w-[1000px] text-center text-balance flex justify-center flex-col text-black text-[40px] xs:text-[48px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-black leading-[1.1] sm:leading-[1.15] md:leading-[1.2] whitespace-pre-line font-lanze-halbred drop-shadow-[3px_3px_0px_rgba(255,255,255,0.8)]">
          {finalTitle}
        </h1>

        {/* Description */}
        <p className="w-full max-w-[600px] lg:w-[600px] text-center text-balance flex justify-center flex-col text-black text-base sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.5] font-medium whitespace-pre-line font-sans drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)]">
          {finalDescription}
        </p>

        {/* CTA Button - Neobrutalista Style */}
        <Link
          href="/#oportunidades"
          className="mt-2 sm:mt-3 md:mt-4 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm sm:text-base md:text-base transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
        >
          Explorar oportunidades
        </Link>
      </div>
    </div>
  )
}
