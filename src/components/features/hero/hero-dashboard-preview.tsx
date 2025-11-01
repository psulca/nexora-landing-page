"use client"

interface HeroDashboardPreviewProps {
  images: readonly { src: string; alt: string }[]
  activeIndex: number
}

export function HeroDashboardPreview({ images, activeIndex }: HeroDashboardPreviewProps) {
  return (
    <div className="w-full max-w-[800px] flex flex-col justify-center items-center">
      <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-start items-start">
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
                    className={`w-full h-full object-contain`}
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

