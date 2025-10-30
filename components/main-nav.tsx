"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  return (
    <>
      {/* Logo/Brand */}
      <Link
        href="/"
        className="text-[#37322f] font-semibold text-lg hover:opacity-80 transition-opacity px-4 py-2 mr-2"
      >
        Brilliance
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          {/* Encuentra Voluntariado Dropdown */}
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger className="hover:bg-[#37322F]/5">
              Encuentra Voluntariado
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/">
                      <div className="text-sm font-medium leading-none text-[#37322F]">
                        Voluntariado
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/organizations"
                      className="hover:bg-[#37322F]/5 focus:bg-[#37322F]/5"
                    >
                      <div className="text-sm font-medium leading-none text-[#37322F]">
                        Organizaciones
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Publica Dropdown */}
          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="#">Components</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Documentation</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#">Blocks</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
