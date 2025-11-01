import type React from "react"
import { Badge } from "./badge"

interface SectionHeaderProps {
  badge?: {
    icon?: React.ReactNode
    text: string
  }
  title: string
  description: string | React.ReactNode
  className?: string
}

export function SectionHeader({ badge, title, description, className }: SectionHeaderProps) {
  return (
    <div className={`w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 ${className || ""}`}>
      {badge && <Badge icon={badge.icon} text={badge.text} />}
      <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-darker-grotesque tracking-tight">
        {title}
      </div>
      <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
        {typeof description === "string" ? description : description}
      </div>
    </div>
  )
}

