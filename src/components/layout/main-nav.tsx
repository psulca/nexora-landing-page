"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { APP_TEXT } from "@/lib/config";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  items?: readonly MenuItem[];
}

interface MainNavProps {
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

export function MainNav({
  auth = {
    login: { text: APP_TEXT.auth.login, url: "/ingresa" },
    signup: { text: APP_TEXT.auth.signup, url: "/registrate" },
  },
}: MainNavProps = {}) {
  const menu = APP_TEXT.navigation.menu as unknown as readonly MenuItem[];

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title} className="text-black">
          <NavigationMenuTrigger className="bg-transparent text-black font-medium text-sm hover:bg-white border-0 px-4 py-2">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80 p-2 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 p-3 leading-none no-underline outline-none transition-all bg-white hover:bg-white border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    href={subItem.url}
                  >
                    <div>
                      <div className="text-sm font-black text-black">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-xs leading-snug text-black/70 font-bold mt-1">
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
      );
    }
    return (
      <Link
        key={item.title}
        className="group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-bold text-black transition-all hover:bg-white border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        href={item.url}
      >
        {item.title}
      </Link>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <AccordionItem
          key={item.title}
          value={item.title}
          className="border-b-0"
        >
          <AccordionTrigger className="py-3 font-black hover:no-underline text-black bg-transparent border-0 hover:bg-white transition-all duration-150">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2 pl-2">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                className="flex select-none gap-4 p-3 leading-none outline-none transition-all bg-white border-2 border-transparent hover:border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                href={subItem.url}
              >
                <div>
                  <div className="text-sm font-black text-black">
                    {subItem.title}
                  </div>
                  {subItem.description && (
                    <p className="text-xs leading-snug text-black/70 font-bold mt-1">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      );
    }
    return (
      <Link
        key={item.title}
        href={item.url}
        className="font-black text-black bg-white border-2 border-black px-4 py-3 inline-block hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
      >
        {item.title}
      </Link>
    );
  };

  return (
    <>
      <nav className="hidden lg:flex justify-between items-center gap-6 flex-1 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-black font-black text-xl sm:text-2xl hover:opacity-80 transition-opacity font-darker-grotesque"
        >
          <span>{APP_TEXT.brand}</span>
        </Link>

        <div className="flex items-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="bg-white hover:bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold text-sm rounded-none hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
          >
            <Link href={auth.login.url}>{auth.login.text}</Link>
          </Button>

          <Button
            asChild
            variant="default"
            size="sm"
            className="px-4 bg-black text-white font-bold text-sm rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
          >
            <Link href={auth.signup.url}>{auth.signup.text}</Link>
          </Button>
        </div>
      </nav>

      <div className="block lg:hidden py-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-black font-black text-xl sm:text-2xl font-darker-grotesque">
            {APP_TEXT.brand}
          </span>
          <div className="flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-none transition-all duration-150">
                  <Menu className="size-5 text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white border-l-4 border-black">
                <SheetHeader className="border-b-4 border-black pb-4 mb-4 pr-10">
                  <SheetTitle>
                    <span className="flex items-center gap-2 text-black font-black text-xl sm:text-2xl font-darker-grotesque">
                      {APP_TEXT.brand}
                    </span>
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
                  <div className="border-t-4 border-black py-4">
                    <div className="grid grid-cols-2 justify-start gap-2">
                      {APP_TEXT.navigation.mobileExtraLinks.map((link, idx) => (
                        <Link
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-bold text-black transition-all bg-white border-2 border-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                          href={link.url}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black font-bold rounded-none hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150">
                      <Link href={auth.login.url}>{auth.login.text}</Link>
                    </Button>
                    <Button
                      asChild
                      variant="default"
                      className="bg-black text-white font-bold rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
                    >
                      <Link href={auth.signup.url}>{auth.signup.text}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
}
