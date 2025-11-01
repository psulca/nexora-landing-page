"use client"

import { useState } from "react"
import type { FAQItem } from "@/types"

const FAQ_DATA: FAQItem[] = [
  {
    question: "¿Qué es Nexora y para quién es?",
    answer:
      "Nexora es una plataforma que conecta voluntarios con organizaciones sin fines de lucro. Es perfecta para personas que quieren hacer voluntariado y para organizaciones que buscan voluntarios comprometidos.",
  },
  {
    question: "¿Cómo funciona el sistema de búsqueda de voluntariados?",
    answer:
      "Puedes buscar oportunidades de voluntariado por ubicación, categoría o palabra clave. Una vez que encuentres una oportunidad que te interese, puedes ver los detalles y aplicar directamente desde la plataforma.",
  },
  {
    question: "¿Puedo crear un perfil como voluntario?",
    answer:
      "¡Sí! Puedes crear tu perfil de voluntario, guardar tus oportunidades favoritas y hacer un seguimiento de tus aplicaciones. Tu perfil te ayuda a destacar tus habilidades e intereses.",
  },
  {
    question: "¿Qué tipo de apoyo ofrecen?",
    answer:
      "Ofrecemos documentación completa, comunidad de apoyo, y asistencia para ayudarte a encontrar las mejores oportunidades de voluntariado. Estamos aquí para apoyarte en cada paso.",
  },
  {
    question: "¿Es seguro usar Nexora?",
    answer:
      "Absolutamente. Todas las organizaciones son verificadas y utilizamos medidas de seguridad para proteger tu información personal. Tu privacidad es nuestra prioridad.",
  },
  {
    question: "¿Cómo empiezo a usar Nexora?",
    answer:
      "¡Es muy simple! Regístrate de forma gratuita, completa tu perfil y comienza a explorar oportunidades de voluntariado en tu área. En minutos podrás encontrar la causa perfecta para ti.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full bg-[#76A69D] border-t-4 border-b-4 border-black flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-start gap-4 sm:gap-6">
          <div className="w-full text-left flex justify-start flex-col text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-[60px] font-darker-grotesque tracking-tight">
            Preguntas Frecuentes
          </div>
          <div className="w-full text-left text-white/90 text-base sm:text-lg font-normal leading-7 font-sans">
            Encuentra respuestas a las dudas más comunes sobre cómo usar Nexora.
          </div>
        </div>
      </div>

      {/* FAQ Items Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col gap-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openItems.includes(index)

            return (
              <div
                key={index}
                className="w-full bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center gap-4 text-left transition-all duration-200 active:translate-x-1 active:translate-y-1"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 text-black text-base sm:text-lg font-bold leading-6 sm:leading-7 font-sans">
                    {item.question}
                  </div>
                  <div className="flex justify-center items-center flex-shrink-0">
                    <ChevronDownIcon
                      className={`w-6 h-6 text-black transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-black/70 text-sm sm:text-base font-medium leading-6 sm:leading-7 font-sans">
                    {item.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
