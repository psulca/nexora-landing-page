import type React from "react"

export interface OpportunityCardData {
  category: string
  categoryIcon?: string
  title: string
  location?: string
  skill?: string
  color: {
    background: string
    border: string
    text: string
    categoryText: string
    locationText?: string
    skillText?: string
  }
}

interface OpportunityCardProps {
  data: OpportunityCardData
  className?: string
}

/**
 * Generic opportunity card component with dynamic height based on content
 */
export function OpportunityCard({ data, className = "" }: OpportunityCardProps) {
  const hasLocation = !!data.location
  const hasSkill = !!data.skill
  const isFirst = className.includes("first-card")

  return (
    <div
      className={`${className} shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}
      style={{
        width: "100%",
        overflow: "hidden",
        background: data.color.background,
        display: "flex",
        marginTop: isFirst ? "0px" : "3px",
        border: "0.5px solid #000000",
      }}
    >
      {/* Left border accent */}
      <div style={{ width: "1px", background: data.color.border, flexShrink: 0 }} />

      {/* Content */}
      <div style={{ padding: "4.5px", width: "100%", display: "flex", flexDirection: "column", gap: "2px" }}>
        {/* Category */}
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "8px",
              color: data.color.categoryText,
            }}
          >
            {data.category}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "9px",
            color: data.color.text,
            lineHeight: "1.2",
            wordBreak: "break-word",
          }}
        >
          {data.title}
        </div>

        {/* Location */}
        {hasLocation && (
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "7px",
              color: data.color.locationText || data.color.text,
              marginTop: "2px",
            }}
          >
            {data.location}
          </div>
        )}

        {/* Skill */}
        {hasSkill && (
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "7px",
              color: data.color.skillText || data.color.text,
              marginTop: "3px",
            }}
          >
            Habilidades: {data.skill}
          </div>
        )}
      </div>
    </div>
  )
}

