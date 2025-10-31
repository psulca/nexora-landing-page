"use client"

import type React from "react"
import { CTAButton } from "@/components/ui/cta-button"

interface FlexibleCTASectionProps {
  title: string
  description?: string | React.ReactNode
  primaryButton: {
    text: string
    href?: string
    onClick?: () => void
  }
  secondaryButton?: {
    text: string
    href?: string
    onClick?: () => void
  }
  showBackgroundPattern?: boolean
}

export function FlexibleCTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  showBackgroundPattern = false,
}: FlexibleCTASectionProps) {
  return (
    <div className={`w-full ${showBackgroundPattern ? "relative overflow-hidden" : ""} flex flex-col justify-center items-center gap-2`}>
      {/* Background Pattern (optional) */}
      {showBackgroundPattern && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 300 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`self-stretch px-6 md:px-24 py-12 md:py-12 border-t border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6 ${showBackgroundPattern ? "relative z-10" : ""}`}>
        <div className={`w-full max-w-[586px] px-6 py-5 md:py-8 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-6 ${showBackgroundPattern ? "relative z-20" : ""}`}>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[56px] font-sans tracking-tight">
              {title}
            </h2>
            {description && (
              <div className="self-stretch text-center text-[#605A57] text-base leading-7 font-sans font-medium">
                {description}
              </div>
            )}
          </div>
          <div className="w-full max-w-[497px] flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col sm:flex-row justify-start items-center gap-4 w-full">
              <CTAButton
                text={primaryButton.text}
                variant="primary"
                href={primaryButton.href}
                onClick={primaryButton.onClick}
                className="flex-1 sm:flex-none"
              />
              {secondaryButton && (
                <CTAButton
                  text={secondaryButton.text}
                  variant="secondary"
                  href={secondaryButton.href}
                  onClick={secondaryButton.onClick}
                  className="flex-1 sm:flex-none"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

