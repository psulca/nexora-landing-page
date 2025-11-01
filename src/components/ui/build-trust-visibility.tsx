import type React from "react"

interface BuildTrustVisibilityProps {
  width?: number | string
  height?: number | string
  className?: string
}

const BuildTrustVisibility: React.FC<BuildTrustVisibilityProps> = ({ width = 482, height = 300, className = "" }) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Main content container - fixed size like other components */}
      <div
        className="w-[280px] h-[180px] sm:w-[360px] sm:h-[240px]"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="w-[280px] h-[180px] sm:w-[360px] sm:h-[240px]"
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(0, 0, 0, 0.06)",
            display: "flex",
            flexDirection: "column",
            padding: "clamp(12px, 2vw, 20px)",
            gap: "clamp(8px, 2vw, 16px)",
            position: "relative",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12"
              style={{
                background: "#37322F",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(14px, 2vw, 18px)",
                flexShrink: 0,
              }}
            >
              ONG
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                minWidth: 0,
                flex: 1,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(11px, 2.5vw, 14px)",
                    color: "#37322F",
                    lineHeight: "1.2",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Fundación Verde
                </span>
                <div
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  style={{
                    background: "#10B981",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(9px, 2.2vw, 12px)",
                  color: "#605A57",
                  lineHeight: "1.3",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                Protección del medio ambiente
              </span>
            </div>
          </div>
        </div>

        <div
          className="hidden sm:flex flex-col"
          style={{
            gap: "8px",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "12px",
              color: "#37322F",
            }}
          >
            Misión
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "11px",
              color: "#605A57",
              lineHeight: "1.45",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            Conservar y proteger los ecosistemas naturales mediante la educación y acción comunitaria.
          </div>
        </div>

        {/* Compact description for small screens */}
        <div
          className="flex sm:hidden flex-col"
          style={{
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              color: "#37322F",
            }}
          >
            Misión
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              color: "#605A57",
              lineHeight: "1.3",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            Conservar y proteger los ecosistemas naturales mediante la educación y acción comunitaria.
          </div>
        </div>

        <div
          className="hidden sm:flex"
          style={{
            gap: "16px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                color: "#37322F",
                lineHeight: "1.2",
              }}
            >
              15+
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                color: "#605A57",
                lineHeight: "1.3",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Proyectos activos
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "18px",
                color: "#37322F",
                lineHeight: "1.2",
              }}
            >
              2.5K+
            </div>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "11px",
                color: "#605A57",
                lineHeight: "1.3",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              Voluntarios
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            background: "rgba(16, 185, 129, 0.08)",
            borderRadius: "6px",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            minWidth: 0,
            overflow: "hidden",
          }}
          className="mt-auto"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16V12M12 8H12.01"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "11px",
              color: "#065F46",
              lineHeight: "1.3",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              flex: 1,
              minWidth: 0,
            }}
          >
            Perfil verificado • Transparencia certificada
          </span>
        </div>
        
        {/* Small project cards in background for depth */}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            width: "120px",
            height: "80px",
            background: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            opacity: 0.6,
            transform: "rotate(-4deg)",
            zIndex: -1,
          }}
          className="hidden sm:block"
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "4px",
                background: "#10B981",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "10px",
                color: "#37322F",
              }}
            >
              Proyecto activo
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            width: "100px",
            height: "70px",
            background: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            opacity: 0.5,
            transform: "rotate(3deg)",
            zIndex: -1,
          }}
          className="hidden sm:block"
        >
          <div
            style={{
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "3px",
                background: "#0EA5E9",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "9px",
                color: "#37322F",
              }}
            >
              Impacto
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BuildTrustVisibility

