import { cn } from "@/utils"

interface FeatureCardProps {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}

export function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "w-full md:flex-1 px-4 sm:px-5 py-4 sm:py-5 overflow-hidden flex flex-col justify-start items-start gap-2 sm:gap-3 cursor-pointer relative transition-all duration-200 border-4 border-black",
        isActive
          ? "bg-[#76A69D] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          : "bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1"
      )}
      onClick={onClick}
    >
      <div className="self-stretch flex justify-center flex-col text-black text-sm sm:text-base font-black leading-5 sm:leading-6 font-darker-grotesque">
        {title}
      </div>
      <div className="self-stretch text-black text-xs sm:text-sm font-bold leading-5 sm:leading-6 font-sans">
        {description}
      </div>
      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
          <div
            className="h-full bg-black transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  )
}

