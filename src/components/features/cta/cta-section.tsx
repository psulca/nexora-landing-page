"use client"

import { FlexibleCTASection } from "./flexible-cta-section"

export default function CTASection() {
  return (
    <FlexibleCTASection
      title="¿Listo para hacer una diferencia?"
      description="Únete a miles de voluntarios transformando sus comunidades, o publica tu oportunidad de voluntariado hoy."
      primaryButton={{
        text: "Explorar oportunidades",
      }}
      secondaryButton={{
        text: "Soy organización",
      }}
      showBackgroundPattern={true}
    />
  )
}
