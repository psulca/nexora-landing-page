"use client"

import { useEffect, useState, useRef } from "react"

export function useHeroVisibility() {
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroElement = heroRef.current
    if (!heroElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // Account for header height
      }
    )

    observer.observe(heroElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { isHeroVisible, heroRef }
}

