import type React from "react"

interface VolunteerAvatarProps {
  x: number
  y: number
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function VolunteerAvatar({ x, y, size = 40, className = "", style }: VolunteerAvatarProps) {
  const PersonSilhouette = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="4" fill="currentColor" />
      <path d="M12 13C8.13401 13 5 15.6863 5 19V21H19V19C19 15.6863 15.866 13 12 13Z" fill="currentColor" />
    </svg>
  )

  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x - size / 2}px`,
        top: `${y - size / 2}px`,
        position: "absolute",
        background: "#ffffff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid rgba(55, 50, 47, 0.1)",
        color: "#37322f",
        ...style,
      }}
    >
      <PersonSilhouette />
    </div>
  )
}

