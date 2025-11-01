"use client"

import { useState, useEffect } from "react"
import type { FeatureCard as FeatureCardType } from "@/types"

const DOCUMENTATION_CARDS: FeatureCardType[] = [
    {
      title: "Publica tu oportunidad",
      description: "Crea convocatorias de voluntariado en minutos y destaca tus proyectos ante una comunidad comprometida.",
      image: "/modern-dashboard-interface-with-data-visualization.jpg",
    },
    {
      title: "Gestiona postulaciones fácilmente",
      description: "Revisa perfiles, recibe notificaciones y organiza a tus voluntarios desde un panel centralizado.",
      image: "/analytics-dashboard.png",
    },
    {
      title: "Conecta y genera impacto",
      description: "Impulsa tu misión con voluntarios comprometidos y lleva tu trabajo al siguiente nivel.",
      image: "/team-collaboration-interface-with-shared-workspace.jpg",
  },
]

export default function PlatformFeaturesSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % DOCUMENTATION_CARDS.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  return (
    <div className="w-full bg-white border-t-4 border-b-4 border-black flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-4 sm:gap-6">
          <div className="w-full text-center flex justify-center flex-col text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-[60px] font-darker-grotesque tracking-tight">
            Gestiona tus oportunidades de voluntariado
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden flex justify-center items-center">
        <div className="w-full max-w-[1000px] py-4 md:py-6 flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8">
          {/* Feature Cards - Stacked vertically on all screen sizes, side-by-side with image on lg+ */}
          <div className="w-full md:w-auto md:max-w-[400px] flex flex-col gap-4 order-2 md:order-1">
            {DOCUMENTATION_CARDS.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-start items-start transition-all duration-300 cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                    isActive ? "bg-[#FFC942]" : "bg-white"
                  }`}
                >
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-start flex-col text-black text-sm font-bold leading-6 font-darker-grotesque">
                      {card.title}
                    </div>
                    <div className="self-stretch text-black text-[13px] font-medium leading-[22px] font-sans whitespace-pre-line">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-auto flex flex-col justify-center items-center gap-2 order-1 md:order-2">
            <div className="w-full md:w-[580px] h-[250px] md:h-[420px] bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-start items-start relative">
              {DOCUMENTATION_CARDS.map((card, index) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
