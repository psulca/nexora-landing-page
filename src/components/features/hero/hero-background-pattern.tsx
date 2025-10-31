export function HeroBackgroundPattern() {
  return (
    <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
      <img
        src="/mask-group-pattern.svg"
        alt=""
        className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
        style={{
          filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
        }}
      />
    </div>
  )
}

