import type React from "react"
import { OpportunityCardsStack } from "./opportunity-cards-stack"
import type { OpportunityCardData } from "./opportunity-card"

interface PublishOpportunitiesProps {
  width?: number | string
  height?: number | string
  className?: string
  theme?: "light" | "dark"
  leftCards?: readonly OpportunityCardData[]
  rightCards?: readonly OpportunityCardData[]
}

const PublishOpportunities: React.FC<PublishOpportunitiesProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "light",
  leftCards,
  rightCards,
}) => {
  const defaultLeftCards: readonly OpportunityCardData[] = [
    {
      category: "Ambiente",
      title: "Reforestación Parque Central",
      location: "Lima, Perú",
      color: {
        background: "#F7D96C",
        border: "#F6A54A",
        text: "#000000",
        categoryText: "#000000",
        locationText: "#000000",
      },
    },
    {
      category: "Educación",
      title: "Clases de Inglés para Niños",
      location: "Cusco, Perú",
      skill: "Enseñanza",
      color: {
        background: "#76A69D",
        border: "#000000",
        text: "#000000",
        categoryText: "#000000",
        locationText: "#000000",
        skillText: "#000000",
      },
    },
    {
      category: "Animales",
      title: "Cuidado en Refugio",
      location: "Arequipa, Perú",
      color: {
        background: "#FFF9E9",
        border: "#F6A54A",
        text: "#000000",
        categoryText: "#000000",
        locationText: "#000000",
      },
    },
  ]

  const defaultRightCards: readonly OpportunityCardData[] = [
    {
      category: "Comunidad",
      title: "Apoyo a Adultos Mayores",
      location: "Trujillo, Perú",
      color: {
        background: "#F4E6CF",
        border: "#F6A54A",
        text: "#000000",
        categoryText: "#000000",
        locationText: "#000000",
      },
    },
    {
      category: "Salud",
      title: "Campaña de Donación",
      location: "Iquitos, Perú",
      color: {
        background: "#F7D96C",
        border: "#000000",
        text: "#000000",
        categoryText: "#000000",
        locationText: "#000000",
      },
    },
    {
      category: "Social",
      title: "Construcción Viviendas",
      location: "Piura, Perú",
      skill: "Construcción",
      color: {
        background: "#76A69D",
        border: "#000000",
        text: "#000000",
        categoryText: "#000000",
        locationText: "#000000",
        skillText: "#000000",
      },
    },
  ]

  const finalLeftCards = leftCards || defaultLeftCards
  const finalRightCards = rightCards || defaultRightCards
  return (
    <div
      className={className}
      style={
        {
          width,
          height,
          position: "relative",
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        } as React.CSSProperties
      }
      role="img"
      aria-label="Tarjetas de oportunidades de voluntariado"
    >
      <div
        style={{
          position: "relative",
          width: "295.297px",
          height: "212.272px",
          transform: "scale(1.2)",
        }}
      >
        <div style={{ position: "absolute", left: "123.248px", top: "0px", width: 0, height: 0 }}>
          <div style={{ transform: "rotate(5deg)", transformOrigin: "center" }}>
            <OpportunityCardsStack cards={finalLeftCards} />
          </div>
        </div>
        
        <div style={{ position: "absolute", left: "0px", top: "6.075px", width: "155.25px" }}>
          <div style={{ transform: "rotate(-5deg)", transformOrigin: "center" }}>
            <OpportunityCardsStack
              cards={finalRightCards}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishOpportunities

