"use client"

import type React from "react"

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
    <div className="w-full bg-[#F7D96C] flex flex-col justify-center items-center py-36">
      {/* Content */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-6 sm:gap-8">
          <div className="self-stretch flex flex-col justify-start items-center gap-4 sm:gap-6">
            <h2 className="self-stretch text-center flex justify-center flex-col text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-[60px] font-darker-grotesque tracking-tight">
              {title}
            </h2>
            {description && (
              <div className="self-stretch text-center text-black text-base sm:text-lg font-medium leading-7 font-sans">
                {description}
              </div>
            )}
          </div>
          <div className="w-full max-w-[600px] flex flex-col sm:flex-row justify-center items-center gap-4">
            {primaryButton.href ? (
              <a
                href={primaryButton.href}
                className="px-6 py-4 bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-bold leading-5 font-sans transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                {primaryButton.text}
              </a>
            ) : (
              <button
                onClick={primaryButton.onClick}
                className="px-6 py-4 bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-bold leading-5 font-sans transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                {primaryButton.text}
              </button>
            )}
            {secondaryButton && (
              <>
                {secondaryButton.href ? (
                  <a
                    href={secondaryButton.href}
                    className="px-6 py-4 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-bold leading-5 font-sans transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
                  >
                    {secondaryButton.text}
                  </a>
                ) : (
                  <button
                    onClick={secondaryButton.onClick}
                    className="px-6 py-4 bg-white text-black border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-bold leading-5 font-sans transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-2 active:translate-y-2 active:shadow-none"
                  >
                    {secondaryButton.text}
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

