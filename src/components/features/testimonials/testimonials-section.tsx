"use client"

import { useState, useEffect } from "react"
import type { Testimonial } from "@/types"

const TESTIMONIALS: Testimonial[] = [
    {
      quote:
        "Gracias a esta plataforma, pude encontrar una oportunidad perfecta para enseñar inglés a niños en mi comunidad. Ha sido la experiencia más gratificante de mi vida.",
      name: "María García",
      company: "Voluntaria, Educación",
      image: "/testimonial-volunteer-maria.webp",
    },
    {
      quote:
        "Encontré voluntarios increíbles en cuestión de días. La plataforma hizo que reclutar talento para nuestro proyecto de reforestación fuera increíblemente fácil.",
      name: "Carlos López",
      company: "Director, ONG Ambiental",
      image: "/testimonial-ceo-carlos.webp",
    },
    {
      quote:
        "Como voluntario, me encanta poder ver todas las oportunidades disponibles en mi área. Ahora dedico 10 horas a la semana ayudando en un refugio local.",
      name: "Juan Rodríguez",
      company: "Voluntario, Bienestar Animal",
      image: "/testimonial-volunteer-juan.webp",
  },
]

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 300)
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  const handleNavigationClick = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTestimonial(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  const currentTestimonial = TESTIMONIALS[activeTestimonial]

  return (
    <div className="w-full bg-[#76A69D] border-t-4 border-b-4 border-black flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[900px] flex flex-col justify-start items-center gap-4 sm:gap-6">
          <div className="w-full text-center flex justify-center flex-col text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-[50px] font-darker-grotesque tracking-tight">
            Historias que inspiran
          </div>
          <div className="w-full max-w-[700px] text-center text-white text-sm sm:text-base font-bold leading-6 sm:leading-7 font-sans">
            Descubre cómo voluntarios y organizaciones están
            <br className="hidden sm:block" />
            haciendo una diferencia real en sus comunidades.
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 overflow-hidden flex justify-center items-center">
        <div className="w-full max-w-[900px] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8 mx-auto">
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-center gap-6 md:gap-8 lg:gap-10">
            <img
              className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-black object-cover transition-all duration-300 flex-shrink-0"
              style={{
                opacity: isTransitioning ? 0.8 : 1,
                transform: isTransitioning ? "scale(0.98)" : "scale(1)",
                transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
              }}
              src={currentTestimonial.image || "/placeholder.svg"}
              alt={currentTestimonial.name}
            />
            <div className="flex-1 w-full flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4 md:gap-6">
                <div
                  className="w-full justify-start flex flex-col text-black text-lg sm:text-xl md:text-2xl font-bold leading-7 sm:leading-8 md:leading-9 font-sans min-h-[120px] md:min-h-[160px] lg:min-h-[180px] transition-all duration-300 tracking-tight"
                  style={{
                    opacity: isTransitioning ? 0.7 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  "{currentTestimonial.quote}"
                </div>
                <div
                  className="flex flex-col justify-start items-start gap-2 transition-all duration-300"
                  style={{
                    opacity: isTransitioning ? 0.7 : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <div className="text-black text-base md:text-lg font-black leading-6 md:leading-[26px] font-sans">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-black text-base md:text-lg font-bold leading-6 md:leading-[26px] font-sans">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-center md:justify-start items-center gap-[14px] flex-shrink-0 pt-4 md:pt-0">
            <button
              onClick={() =>
                handleNavigationClick((activeTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              className="w-12 h-12 border-4 border-black bg-[#FFC942] justify-center items-center gap-2 flex hover:bg-[#FFD966] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              }}
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <button
              onClick={() => handleNavigationClick((activeTestimonial + 1) % TESTIMONIALS.length)}
              className="w-12 h-12 border-4 border-black bg-[#FFC942] justify-center items-center gap-2 flex hover:bg-[#FFD966] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              style={{
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              }}
            >
              <div className="w-6 h-6 relative overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
