"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VolunteerSearch } from "@/components/volunteer-search"
import { MainNav } from "@/components/main-nav"

export function Header() {
  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3] sticky top-0 z-50">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-2">
          {/* Left side - Main Navigation */}
          <MainNav />
          
          {/* Right side - Auth buttons */}
          <div className="flex items-center gap-3">
            <Link href="/ingresa">
              <Button
                variant="ghost"
                className="text-[#37322f] hover:bg-[#37322f]/5"
              >
                Ingresa
              </Button>
            </Link>
            <Link href="/registrate">
              <Button
                className="bg-[#37322F] text-white hover:opacity-90"
              >
                Regístrate
              </Button>
            </Link>
          </div>
        </nav>
        
        {/* Search Bar */}
        <div className="w-full border-t border-[#37322f]/6 pt-2">
          <VolunteerSearch />
        </div>
      </div>
    </header>
  )
}
