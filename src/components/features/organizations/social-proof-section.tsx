"use client"

interface SocialProofSectionProps {
  stat: string
  description: string
}

export function SocialProofSection({ stat, description }: SocialProofSectionProps) {
  return (
    <div className="w-full border-t border-[rgba(55,50,47,0.12)] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[937px] lg:w-[937px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="text-center">
          <p className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 font-darker-grotesque">
            {stat}
          </p>
          <p className="text-[#605A57] text-lg sm:text-xl font-normal font-sans">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

