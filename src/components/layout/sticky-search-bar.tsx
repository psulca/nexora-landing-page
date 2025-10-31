"use client"

import { VolunteerSearch } from "@/components/features/volunteer-search/volunteer-search"

interface StickySearchBarProps {
  show: boolean
}

export function StickySearchBar({ show }: StickySearchBarProps) {
  if (!show) return null

  return (
    <div className="w-full bg-[#f7f5f3] border-b border-[#37322f]/6 sticky top-[52px] z-40 shadow-sm">
      <div className="max-w-[1060px] mx-auto px-4">
        <VolunteerSearch compact />
      </div>
    </div>
  )
}
