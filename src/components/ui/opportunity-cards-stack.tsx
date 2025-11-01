import type React from "react"
import { OpportunityCard } from "./opportunity-card"
import type { OpportunityCardData } from "./opportunity-card"

interface OpportunityCardsStackProps {
  cards: readonly OpportunityCardData[]
  className?: string
  style?: React.CSSProperties
}

/**
 * Generic stack of opportunity cards within a container card
 */
export function OpportunityCardsStack({ cards, className = "", style }: OpportunityCardsStackProps) {
  return (
    <div
      className={className}
      style={{
        width: "155.25px",
        background: "#ffffff",
        borderRadius: "9px",
        padding: "6px",
        boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.08), 0px 2px 4px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {cards.map((card, index) => (
        <OpportunityCard key={index} data={card} className={index === 0 ? "first-card" : ""} />
      ))}
    </div>
  )
}

