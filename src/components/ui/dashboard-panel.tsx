import type React from "react"

interface DashboardPanelProps {
  x: number
  y: number
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function DashboardPanel({ x, y, size = 64, className = "", style }: DashboardPanelProps) {
  const DashboardIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="6" height="6" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="14" y="4" width="6" height="6" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="4" y="14" width="6" height="6" rx="1" fill="currentColor" opacity="0.8" />
      <rect x="14" y="14" width="6" height="6" rx="1" fill="currentColor" opacity="0.8" />
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
        background: "#37322f",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        ...style,
      }}
    >
      <DashboardIcon />
    </div>
  )
}

