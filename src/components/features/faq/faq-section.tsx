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
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Explore your data, build your dashboard,
            <br className="hidden md:block" />
            bring your team together.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
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
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
