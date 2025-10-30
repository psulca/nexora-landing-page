"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useMotionValue, animate, motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import useMeasure from "react-use-measure"

type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [key, setKey] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const controlsRef = useRef<any>(null)

  useEffect(() => {
    const size = direction === "horizontal" ? width : height
    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    // Si está pausado, detener la animación actual pero mantener la posición
    if (isPaused) {
      if (controlsRef.current) {
        controlsRef.current.stop()
      }
      return
    }

    // Si se reanuda, continuar desde la posición actual
    if (isTransitioning) {
      controlsRef.current = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false)
          setKey((prevKey) => prevKey + 1)
        },
      })
    } else {
      // Calcular desde dónde empezar basado en la posición actual
      const currentPos = translation.get()
      controlsRef.current = animate(translation, [currentPos, to], {
        ease: "linear",
        duration: currentDuration * Math.abs((currentPos - to) / contentSize),
        onComplete: () => {
          // Cuando termina, reiniciar desde el inicio
          translation.set(from)
          setKey((prevKey) => prevKey + 1)
        },
      })
    }

    return () => {
      if (controlsRef.current) {
        controlsRef.current.stop()
      }
    }
  }, [key, translation, currentDuration, width, height, gap, isTransitioning, direction, reverse, isPaused])

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true)
          setCurrentDuration(durationOnHover)
        },
        onHoverEnd: () => {
          setIsTransitioning(true)
          setCurrentDuration(duration)
        },
      }
    : {
        onMouseEnter: () => {
          setIsPaused(true)
        },
        onMouseLeave: () => {
          setIsPaused(false)
        },
      }

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
