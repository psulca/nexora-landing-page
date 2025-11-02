"use client"

import { MainNav } from "@/components/layout/main-nav"

export function Header() {
  return (
    <header className="w-full border-b-2 border-black bg-[#F4E6CF] sticky top-0 z-50 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-[1060px] mx-auto px-4">
        <MainNav />
      </div>
    </header>
  )
}
