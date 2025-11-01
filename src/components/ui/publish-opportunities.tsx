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
      categoryIcon: "🌱",
      title: "Reforestación Parque Central",
      location: "Lima, Perú",
      color: {
        background: "rgba(16,185,129,0.1)",
        border: "#10B981",
        text: "#064E3B",
        categoryText: "#064E3B",
        locationText: "#065F46",
      },
    },
    {
      category: "Educación",
      categoryIcon: "📚",
      title: "Clases de Inglés para Niños",
      location: "Cusco, Perú",
      skill: "Enseñanza",
      color: {
        background: "rgba(14,165,233,0.1)",
        border: "#0EA5E9",
        text: "#0C4A6E",
        categoryText: "#0C4A6E",
        locationText: "#075985",
        skillText: "#0369A1",
      },
    },
    {
      category: "Animales",
      categoryIcon: "🐾",
      title: "Cuidado en Refugio",
      location: "Arequipa, Perú",
      color: {
        background: "rgba(245,158,11,0.1)",
        border: "#F59E0B",
        text: "#92400E",
        categoryText: "#92400E",
        locationText: "#B45309",
      },
    },
  ]

  const defaultRightCards: readonly OpportunityCardData[] = [
    {
      category: "Comunidad",
      categoryIcon: "🤝",
      title: "Apoyo a Adultos Mayores",
      location: "Trujillo, Perú",
      color: {
        background: "rgba(139,92,246,0.1)",
        border: "#8B5CF6",
        text: "#581C87",
        categoryText: "#581C87",
        locationText: "#6B21A8",
      },
    },
    {
      category: "Salud",
      categoryIcon: "❤️",
      title: "Campaña de Donación",
      location: "Iquitos, Perú",
      color: {
        background: "#FFE4E6",
        border: "#F43F5E",
        text: "#BE123C",
        categoryText: "#BE123C",
        locationText: "#9F1239",
      },
    },
    {
      category: "Social",
      categoryIcon: "🏠",
      title: "Construcción Viviendas",
      location: "Piura, Perú",
      skill: "Construcción",
      color: {
        background: "rgba(139,92,246,0.1)",
        border: "#8B5CF6",
        text: "#581C87",
        categoryText: "#581C87",
        locationText: "#6B21A8",
        skillText: "#7C3AED",
      },
    },
  ]

  const finalLeftCards = leftCards || defaultLeftCards
  const finalRightCards = rightCards || defaultRightCards
  const themeVars =
    theme === "light"
      ? {
          "--po-surface": "#ffffff",
          "--po-text": "#1b1919",
          "--po-border": "rgba(0,0,0,0.08)",
          "--po-inner-border": "rgba(0,0,0,0.12)",
          "--po-shadow": "rgba(0,0,0,0.12)",
        }
      : ({
          "--po-surface": "#333937",
          "--po-text": "#f8f8f8",
          "--po-border": "rgba(255,255,255,0.16)",
          "--po-inner-border": "rgba(255,255,255,0.12)",
          "--po-shadow": "rgba(0,0,0,0.28)",
        } as React.CSSProperties)

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
          ...themeVars,
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
              style={{
                boxShadow:
                  "-8px 6px 11.3px rgba(0,0,0,0.12), 0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.06)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishOpportunities

