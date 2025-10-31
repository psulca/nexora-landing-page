"use client"

import { MainNav } from "@/components/layout/main-nav"
import { StickySearchBar } from "@/components/layout/sticky-search-bar"

interface HeaderProps {
  showStickySearch?: boolean
}

export function Header({ showStickySearch = false }: HeaderProps) {
  return (
    <>
      <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3] sticky top-0 z-50">
        <div className="max-w-[1060px] mx-auto px-4">
          {/* Main Navigation (includes logo, menu, and auth buttons) */}
          <MainNav />
        </div>
      </header>
      <StickySearchBar show={showStickySearch} />
    </>
  )
}
