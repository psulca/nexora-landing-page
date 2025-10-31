"use client"

interface HeroDashboardPreviewProps {
  images: readonly { src: string; alt: string }[]
  activeIndex: number
}

export function HeroDashboardPreview({ images, activeIndex }: HeroDashboardPreviewProps) {
  return (
    <div className="w-full max-w-[960px] lg:w-[960px] pt-1 sm:pt-2 pb-2 sm:pb-3 md:pb-4 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-1 relative z-5 my-2 sm:my-3 md:my-4 lg:my-5 mb-0 lg:pb-0">
      <div className="w-full max-w-[960px] lg:w-[960px] h-[120px] sm:h-[160px] md:h-[240px] lg:h-[360px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
        <div className="self-stretch flex-1 flex justify-start items-start">
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "opacity-100 scale-100 blur-0"
                      : "opacity-0 scale-95 blur-sm"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full ${index === 2 ? "object-contain" : "object-cover"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

