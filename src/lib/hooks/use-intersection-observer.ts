"use client"

import { useEffect, useRef, useState, type RefObject } from "react"

export function useHeroVisibility(): {
  ref: RefObject<HTMLElement>
  isVisible: boolean
} {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { ref, isVisible }
}

