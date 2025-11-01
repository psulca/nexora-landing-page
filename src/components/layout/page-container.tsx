"use client"

import type { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="w-full">
      {/* Inner Container */}
      <div className="w-full max-w-none relative flex flex-col justify-start items-start min-h-screen">
        <div className="self-stretch overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}

