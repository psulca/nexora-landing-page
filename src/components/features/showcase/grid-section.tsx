"use client"

import type React from "react"

export interface GridItem {
  title: string
  description: string
  icon?: string | React.ReactNode
  image?: React.ReactNode
}

interface GridSectionProps {
  title: string
  description: string
  items: GridItem[]
  className?: string
}

export function GridSection({ title, description, items, className }: GridSectionProps) {
  return (
    <div className={`w-full bg-[#F6A54A] border-b-4 border-black flex flex-col justify-center items-center ${className || ""}`}>
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-4 sm:gap-6">
          <div className="w-full text-center flex justify-center flex-col text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-[50px] font-darker-grotesque tracking-tight">
            {title}
          </div>
          <div className="w-full max-w-[700px] text-center text-white text-sm sm:text-base font-medium leading-6 sm:leading-7 font-sans">
            {description}
          </div>
        </div>
      </div>

      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-start">
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6 md:p-8 flex flex-col justify-start items-start gap-4 sm:gap-6"
            >
              {item.icon && !item.image && (
                <div className="text-4xl">{typeof item.icon === "string" ? item.icon : item.icon}</div>
              )}

              <div className="flex flex-col gap-2">
                <h3 className="text-black text-lg sm:text-xl font-bold leading-tight font-darker-grotesque">
                  {item.title}
                </h3>
                <p className="text-black text-sm md:text-base font-medium leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {item.image && (
                <div className="w-full mt-auto">
                  {item.image}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

