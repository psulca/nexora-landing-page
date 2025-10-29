"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const isOrganizationPage = pathname === "/organizations"

  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-[#37322f] font-semibold text-lg hover:opacity-80 transition-opacity">
              Brillance
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">
                Inicio
              </Link>
              <Link href="/" className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">
                Oportunidades
              </Link>
              <Link href="/" className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">
                Iniciar sesión
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/organizations">
              <Button
                variant="outline"
                className="text-[#37322f] border-[#37322f]/20 hover:bg-[#37322f]/5 bg-transparent"
              >
                Soy organización
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
