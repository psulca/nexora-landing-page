import { cn } from "@/utils"

interface DecorativePatternProps {
  count?: number
  className?: string
  direction?: "diagonal" | "horizontal"
}

export function DecorativePattern({
  count = 50,
  className,
  direction = "diagonal",
}: DecorativePatternProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "self-stretch h-3 sm:h-4 outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]",
              direction === "diagonal" && "rotate-[-45deg] origin-top-left"
            )}
          />
        ))}
      </div>
    </div>
  )
}

