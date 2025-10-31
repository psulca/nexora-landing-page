import { useState, useEffect, useRef } from "react"

interface UseCarouselProgressOptions {
  itemCount: number
  intervalDuration?: number
  progressStep?: number
  autoPlay?: boolean
}

export function useCarouselProgress({
  itemCount,
  intervalDuration = 100,
  progressStep = 2,
  autoPlay = true,
}: UseCarouselProgressOptions) {
  const [activeItem, setActiveItem] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)

  useEffect(() => {
    if (!autoPlay) return

    const progressInterval = setInterval(() => {
      progressRef.current += progressStep

      if (progressRef.current >= 100) {
        progressRef.current = 0
        setActiveItem((current) => (current + 1) % itemCount)
        setProgress(0)
      } else {
        setProgress(progressRef.current)
      }
    }, intervalDuration)

    return () => {
      clearInterval(progressInterval)
    }
  }, [itemCount, intervalDuration, progressStep, autoPlay])

  const handleItemClick = (index: number) => {
    setActiveItem(index)
    setProgress(0)
    progressRef.current = 0
  }

  return {
    activeItem,
    progress,
    handleItemClick,
    setActiveItem,
  }
}

