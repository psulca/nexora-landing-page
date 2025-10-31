"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { APP_TEXT } from "@/lib/config"

interface MenuItem {
  title: string
  url: string
  description?: string
  items?: readonly MenuItem[]
}

interface MainNavProps {
  auth?: {
    login: {
      text: string
      url: string
    }
    signup: {
      text: string
      url: string
    }
  }
}

export function MainNav({
  auth = {
    login: { text: APP_TEXT.auth.login, url: "/ingresa" },
    signup: { text: APP_TEXT.auth.signup, url: "/registrate" },
  },
}: MainNavProps = {}) {
  const menu = APP_TEXT.navigation.menu as unknown as readonly MenuItem[]

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title} className="text-[#37322F]">
          <NavigationMenuTrigger className="bg-transparent">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80 p-3">
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors bg-transparent hover:text-[#37322F]"
                    href={subItem.url}
                  >
                    <div>
                      <div className="text-sm font-semibold text-[#37322F]">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-[#605A57]">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    }
    return (
      <Link
        key={item.title}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-[#37322F] transition-colors hover:text-[#37322F]"
        href={item.url}
      >
        {item.title}
      </Link>
    )
  }

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline text-[#37322F]">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-[#37322F]/5 hover:text-[#37322F]"
                href={subItem.url}
              >
                <div>
                  <div className="text-sm font-semibold text-[#37322F]">
                    {subItem.title}
                  </div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-[#605A57]">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      )
    }
    return (
      <Link
        key={item.title}
        href={item.url}
        className="font-semibold text-[#37322F]"
      >
        {item.title}
      </Link>
    )
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-between items-center gap-6 flex-1 py-2">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 text-[#37322F] font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          <span>{APP_TEXT.brand}</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="flex items-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm" className="bg-transparent hover:bg-white border-0">
            <Link href={auth.login.url}>{auth.login.text}</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="bg-transparent hover:bg-white border-0">
            <Link href={auth.signup.url}>{auth.signup.text}</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="block lg:hidden py-2">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#37322F] font-semibold text-lg"
          >
            <span>{APP_TEXT.brand}</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-[#F7F5F3]">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-[#37322F] font-semibold text-lg"
                  >
                    <span>{APP_TEXT.brand}</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="my-6 flex flex-col gap-6">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                <div className="border-t border-[rgba(55,50,47,0.12)] py-4">
                  <div className="grid grid-cols-2 justify-start">
                    {APP_TEXT.navigation.mobileExtraLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-[#605A57] transition-colors hover:bg-[#37322F]/5 hover:text-[#37322F]"
                        href={link.url}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline">
                    <Link href={auth.login.url}>{auth.login.text}</Link>
                  </Button>
                  <Button asChild className="bg-[#37322F] text-white hover:opacity-90">
                    <Link href={auth.signup.url}>{auth.signup.text}</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}

