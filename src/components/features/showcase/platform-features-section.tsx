"use client"

import { useState, useEffect } from "react"

interface FeatureCard {
  title: string
  description: string
  image?: string
}

interface DashboardImage {
  src: string
  alt: string
}

interface PlatformFeaturesSectionProps {
  title: string
  cards: readonly FeatureCard[]
  backgroundColor?: string
  activeCardColor?: string
  autoPlay?: boolean
  autoPlayInterval?: number
  showImage?: boolean
  imageContainerClassName?: string
  dashboardImages?: readonly DashboardImage[]
  showDashboardPreview?: boolean
}

export default function PlatformFeaturesSection({
  title,
  cards,
  backgroundColor = "bg-white",
  activeCardColor = "bg-[#F7D96C]",
  autoPlay = true,
  autoPlayInterval = 5000,
  showImage = true,
  imageContainerClassName = "w-full md:w-[580px] h-[250px] md:h-[420px]",
  dashboardImages,
  showDashboardPreview = false,
}: PlatformFeaturesSectionProps) {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!autoPlay || cards.length === 0) return

    const cardInterval = setInterval(() => {
      setActiveCard((prev) => {
        const next = (prev + 1) % cards.length
        setProgress(0) // Reset progress when card changes
        return next
      })
    }, autoPlayInterval)

    return () => clearInterval(cardInterval)
  }, [autoPlay, autoPlayInterval, cards.length])

  // Handle progress bar animation
  useEffect(() => {
    if (!autoPlay) return

    setProgress(0) // Reset on card change
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = (100 / (autoPlayInterval / 100))
        const newProgress = Math.min(prev + increment, 100)
        return newProgress
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [activeCard, autoPlay, autoPlayInterval])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setProgress(0)
  }

  const borderClass = backgroundColor === "bg-white" ? "border-b-4" : "border-t-4 border-b-4"

  return (
    <div className={`w-full ${backgroundColor} ${borderClass} border-black flex flex-col justify-center items-center`}>
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-4 sm:gap-6">
          <div className="w-full text-center flex justify-center flex-col text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-[60px] font-darker-grotesque tracking-tight">
            {title}
          </div>
        </div>
      </div>

      {/* Dashboard Preview (if showDashboardPreview is true) */}
      {showDashboardPreview && dashboardImages && dashboardImages.length > 0 && (
        <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-6 md:pb-8 flex justify-center items-center">
          <div className="w-full max-w-[800px] flex flex-col justify-center items-center">
            <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-start items-start">
              <div className="self-stretch flex-1 flex justify-start items-start">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden">
                    {dashboardImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                          activeCard === index
                            ? "opacity-100 scale-100 blur-0"
                            : "opacity-0 scale-95 blur-sm"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden flex justify-center items-center">
        <div className="w-full max-w-[1000px] py-4 md:py-6 flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8">
          {/* Feature Cards - Stacked vertically on all screen sizes, side-by-side with image on lg+ */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-start items-start transition-all duration-300 cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative ${
                    isActive ? activeCardColor : "bg-white"
                  }`}
                >
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-start flex-col text-black text-xl font-bold leading-6 font-darker-grotesque">
                      {card.title}
                    </div>
                    <div className="self-stretch text-black text-[13px] font-medium leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                  {isActive && autoPlay && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
                      <div
                        className="h-full bg-black transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          {showImage && cards.some((card) => card.image) && (
            <div className="w-full md:w-auto flex flex-col justify-center items-center gap-2 order-1 md:order-2">
              <div className={`${imageContainerClassName} bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-start items-start relative`}>
                {cards.map((card, index) => {
                  if (!card.image) return null
                  return (
                    <img
                      key={index}
                      src={card.image}
                      alt={card.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                        activeCard === index
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                    />
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
