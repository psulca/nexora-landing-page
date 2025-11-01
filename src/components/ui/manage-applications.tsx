import type React from "react"
import { VolunteerAvatar } from "./volunteer-avatar"
import { DashboardPanel } from "./dashboard-panel"

export interface VolunteerPosition {
  /** Angle in radians for position on ring */
  angle: number
  /** Radius from center */
  radius: number
}

interface ManageApplicationsProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
  /** Center X position (default: 250) */
  centerX?: number
  /** Center Y position (default: 179) */
  centerY?: number
  /** Custom volunteer positions (if not provided, uses default positions) */
  volunteerPositions?: readonly VolunteerPosition[]
  /** Size of volunteer avatars (default: 40) */
  volunteerSize?: number
  /** Size of dashboard panel (default: 64) */
  panelSize?: number
}

/**
 * Manage Applications – Volunteer management panel visualization
 * Shows volunteers (people silhouettes) around a central dashboard panel
 * Generic and reusable component
 */
const ManageApplications: React.FC<ManageApplicationsProps> = ({
  width = 482,
  height = 300,
  className = "",
  centerX = 250,
  centerY = 179,
  volunteerPositions,
  volunteerSize = 40,
  panelSize = 64,
}) => {
  const getPositionOnRing = (ringRadius: number, angle: number) => ({
    x: centerX + ringRadius * Math.cos(angle),
    y: centerY + ringRadius * Math.sin(angle),
  })

  // Default volunteer positions if not provided
  const defaultPositions: readonly VolunteerPosition[] = [
    { radius: 80, angle: Math.PI }, // Inner ring left
    { radius: 80, angle: 0 }, // Inner ring right
    { radius: 120, angle: -Math.PI / 4 }, // Middle ring top-right
    { radius: 120, angle: (3 * Math.PI) / 4 }, // Middle ring bottom-left
    { radius: 120, angle: (5 * Math.PI) / 4 }, // Middle ring bottom-left diagonal
    { radius: 160, angle: Math.PI }, // Outer ring left
    { radius: 160, angle: 0 }, // Outer ring right
  ]

  const positions = volunteerPositions || defaultPositions

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.1) 100%)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      {/* Calculate max radius and ring radii */}
      {(() => {
        const maxRadius = Math.max(...positions.map((p) => p.radius), 160)
        const ringRadii = Array.from(new Set(positions.map((p) => p.radius))).sort((a, b) => a - b)
        
        return (
          <>
            {/* Render rings based on volunteer positions */}
            {ringRadii.map((radius: number, index: number) => (
              <div
                key={radius}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  borderRadius: "50%",
                  border: "1px solid rgba(55, 50, 47, 0.2)",
                  opacity: 0.8 - index * 0.1,
                }}
              />
            ))}
          </>
        )
      })()}

      {/* Volunteers and central panel */}
      <div
        style={{
          width: "500px",
          height: "358px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        }}
      >
        {/* Central dashboard panel */}
        <DashboardPanel x={centerX} y={centerY} size={panelSize} />

        {/* Render volunteers at specified positions */}
        {positions.map((position, index) => {
          const pos = getPositionOnRing(position.radius, position.angle)
          return <VolunteerAvatar key={index} x={pos.x} y={pos.y} size={volunteerSize} />
        })}

        {/* Connection lines from panel to volunteers */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <defs>
            <linearGradient id="volunteerConnectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(55, 50, 47, 0.1)" />
              <stop offset="50%" stopColor="rgba(55, 50, 47, 0.05)" />
              <stop offset="100%" stopColor="rgba(55, 50, 47, 0.1)" />
            </linearGradient>
          </defs>

          {positions.map((position, index) => {
            const pos = getPositionOnRing(position.radius, position.angle)
            const opacity = position.radius <= 80 ? 0.2 : position.radius <= 120 ? 0.15 : 0.1
            return (
              <line
                key={index}
                x1={centerX}
                y1={centerY}
                x2={pos.x}
                y2={pos.y}
                stroke="url(#volunteerConnectionGradient)"
                strokeWidth="1"
                opacity={opacity}
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}

export default ManageApplications
