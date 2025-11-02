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
      className={`${className} border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] bg-white`}
      style={{
        width: "155.25px",
        padding: "6px",
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

