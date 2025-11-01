"use client"

import type { ReactNode } from "react"

interface PageContainerProps {
  children: ReactNode
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="w-full">
      <div className="w-full max-w-none relative flex flex-col justify-start items-start min-h-screen">
        <div className="self-stretch overflow-hidden flex flex-col justify-center items-center relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}

