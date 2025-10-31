"use client"

import type React from "react"
import Link from "next/link"

interface CTAButtonProps {
  text: string
  variant?: "primary" | "secondary"
  href?: string
  onClick?: () => void
  className?: string
}

export function CTAButton({ text, variant = "primary", href, onClick, className }: CTAButtonProps) {
  const baseClasses = "h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] overflow-hidden rounded-full flex justify-center items-center cursor-pointer transition-colors"
  
  const variantClasses = {
    primary: "relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] hover:opacity-90",
    secondary: "bg-white border border-[#37322F]/20 hover:bg-[#37322F]/5",
  }

  const textClasses = {
    primary: "text-white",
    secondary: "text-[#37322F]",
  }

  const content = (
    <>
      {variant === "primary" && (
        <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
      )}
      <div className={`flex flex-col justify-center text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans ${textClasses[variant]}`}>
        {text}
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}>
      {content}
    </button>
  )
}

