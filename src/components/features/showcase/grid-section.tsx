"use client"

import type React from "react"
import { DecorativePattern } from "@/components/ui/decorative-pattern"
import { SectionHeader } from "@/components/ui/section-header"
import { COLORS } from "@/lib/config"

export interface GridItem {
  title: string
  description: string
  icon?: string | React.ReactNode
  image?: React.ReactNode
}

interface GridSectionProps {
  badge?: {
    icon?: React.ReactNode
    text: string
  }
  title: string
  description: string
  items: GridItem[]
  className?: string
}

export function GridSection({ badge, title, description, items, className }: GridSectionProps) {
  return (
    <div className={`w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center ${className || ""}`}>
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <SectionHeader badge={badge} title={title} description={description} />
      </div>

      {/* Grid Content */}
      <div className="self-stretch flex justify-center items-start">
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <DecorativePattern count={200} />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < 2 ? "md:border-b-[0.5px]" : ""}`}
            >
              {/* Icon (for icon-based items, shown first) */}
              {item.icon && !item.image && (
                <div className="text-4xl">{typeof item.icon === "string" ? item.icon : item.icon}</div>
              )}

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                  {item.title}
                </h3>
                <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Image (for image-based items, shown at bottom) */}
              {item.image && (
                <div className="w-full mt-auto">
                  {item.image}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <DecorativePattern count={200} />
        </div>
      </div>
    </div>
  )
}

