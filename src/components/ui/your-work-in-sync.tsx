import type React from "react"

interface YourWorkInSyncProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
  /** Theme palette */
  theme?: "light" | "dark"
}

/**
 * Your work, in sync – Chat conversation UI
 * Neobrutalist style following the design system
 * Single-file component following the v0-ready pattern used in this repo.
 */
const YourWorkInSync: React.FC<YourWorkInSyncProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "light",
}) => {
  // Neobrutalist color palette from design system
  const colors = {
    light: {
      surface: "#ffffff",
      textPrimary: "#000000",
      textSecondary: "#6b7280",
      bubbleLight: "#F7D96C", // Light yellow from design system
      bubbleDark: "#000000", // Black for dark bubbles
      border: "#000000",
    },
    dark: {
      surface: "#1f2937",
      textPrimary: "#f9fafb",
      textSecondary: "#d1d5db",
      bubbleLight: "#374151",
      bubbleDark: "#111827",
      border: "#000000",
    },
  }

  const themeColors = colors[theme]

  // Figma-exported assets
  const imgFrame2147223205 = "/placeholder.svg"
  const imgFrame2147223206 = "/placeholder.svg"
  const imgFrame2147223207 = "/placeholder.svg"
  const imgArrowUp =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='m5 12 7-7 7 7'/%3E%3Cpath d='M12 19V5'/%3E%3C/svg%3E"

  return (
    <div
      className={className}
      style={
        {
          width,
          height,
          position: "relative",
          background: "transparent",
        } as React.CSSProperties
      }
      role="img"
      aria-label="Chat conversation showing team collaboration sync"
    >
      {/* Root frame size 482×300 – content centered */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "356px",
          height: "216px",
        }}
      >
        {/* Remove the flip transformation and position messages normally */}
        <div style={{ width: "356px", height: "216px", position: "relative", transform: "scale(1.1)" }}>
          {/* Message 1: Left side with avatar */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              width: "356px",
              height: "36px",
            }}
          >
            {/* Avatar */}
            <div
              className="bg-white border-2 border-black flex-shrink-0"
              style={{
                width: "36px",
                height: "36px",
                backgroundImage: `url('${imgFrame2147223205}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Message bubble */}
            <div
              className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              style={{
                background: themeColors.bubbleLight,
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="font-medium whitespace-nowrap"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.4px",
                  color: themeColors.textPrimary,
                }}
              >
                Hola, vi su convocatoria sobre reforestación
              </span>
            </div>
          </div>

          {/* Message 2: Right side with avatar */}
          <div
            style={{
              position: "absolute",
              right: "0px",
              top: "60px",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            {/* Message bubble */}
            <div
              className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              style={{
                background: themeColors.bubbleDark,
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="text-white font-medium whitespace-nowrap"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.4px",
                }}
              >
                ¡Genial! Nos encantaría contar contigo 🙌
              </span>
            </div>
            {/* Avatar */}
            <div
              className="bg-white border-2 border-black flex-shrink-0"
              style={{
                width: "36px",
                height: "36px",
                backgroundImage: `url('${imgFrame2147223206}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>

          {/* Message 3: Left side with avatar */}
          <div
            style={{
              position: "absolute",
              left: "0px",
              top: "120px",
              display: "flex",
              gap: "10px",
              alignItems: "flex-start",
              width: "210px",
              height: "36px",
            }}
          >
            {/* Avatar */}
            <div
              className="bg-white border-2 border-black flex-shrink-0"
              style={{
                width: "36px",
                height: "36px",
                backgroundImage: `url('${imgFrame2147223207}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Message bubble */}
            <div
              className="border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              style={{
                background: themeColors.bubbleLight,
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="font-medium whitespace-nowrap"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.4px",
                  color: themeColors.textPrimary,
                }}
              >
                ¿Necesitan ayuda este fin de semana?
              </span>
            </div>
          </div>

          {/* Message 4: Center with send button */}
          <div
            style={{
              position: "absolute",
              right: "0px",
              top: "180px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              height: "36px",
            }}
          >
            {/* Message bubble */}
            <div
              className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
              style={{
                background: themeColors.bubbleDark,
                padding: "0px 12px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                className="text-white font-medium whitespace-nowrap"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  lineHeight: "16px",
                  letterSpacing: "-0.4px",
                }}
              >
                Sí 💚 te enviamos los detalles.
              </span>
            </div>
            {/* Send button */}
            <div
              className="border-2 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              style={{
                width: "36px",
                height: "36px",
                background: themeColors.bubbleDark,
              }}
            >
              <img
                src={imgArrowUp || "/placeholder.svg"}
                alt="Send"
                className="brightness-0 invert"
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourWorkInSync
