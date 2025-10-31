"use client"

import { InfiniteSlider } from "@/components/ui/infinite-slider-horizontal"
import { Badge } from "@/components/ui/badge"
import type { Opportunity } from "@/types"

const OPPORTUNITIES: Opportunity[] = [
    {
      company: "USDA Forest Service",
      category: "Forestry",
      title: "Wildland Firefighter",
      salary: "$32-78K/yr",
      type: "Full-time job",
      location: "Eureka, CA",
      logo: "🌲",
    },
    {
      company: "Waffle House, Inc.",
      category: "Restaurants & food service",
      title: "Restaurant Operations Management",
      salary: "$63-80K/yr",
      type: "Full-time job",
      location: "Fayetteville, AR",
      logo: "🧇",
    },
    {
      company: "Qualcomm",
      category: "Electronic & computer hardware",
      title: "Machine Learning & Artificial Intelligence Engineering Intern",
      salary: "$17-98/hr",
      type: "Internship",
      location: "San Diego, CA",
      logo: "Q",
    },
    {
      company: "Activision Blizzard",
      category: "Internet & software",
      title: "Graphic Design Intern",
      salary: "$25-43/hr",
      type: "Internship",
      location: "New York, NY (Hybrid)",
      logo: "🎮",
    },
    {
      company: "NASA",
      category: "Aerospace",
      title: "Aerospace Engineer",
      salary: "$55-98K/yr",
      type: "Full-time job",
      location: "Huntsville, AL",
      logo: "🚀",
    },
    {
      company: "Gap, Inc.",
      category: "Fashion",
      title: "Gap Brand Marketing Intern",
      salary: "$33-35/hr",
      type: "Internship",
      location: "New York, NY (Hybrid)",
      logo: "G",
  },
]

export default function OpportunitiesCarousel() {
  const firstHalf = OPPORTUNITIES.slice(0, 3)
  const secondHalf = OPPORTUNITIES.slice(3, 6)

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <Badge
            icon={
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
                <rect x="2" y="4" width="1" height="1" fill="#37322F" />
                <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
                <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
                <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
                <rect x="8" y="2" width="1" height="1" fill="#37322F" />
                <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
                <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
                <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
                <rect x="8" y="5" width="1" height="1" fill="#37322F" />
                <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
              </svg>
            }
            text="Oportunidades destacadas"
          />
          <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Oportunidades que te esperan
          </div>
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
            Explora voluntariados y oportunidades de impacto
            <br className="hidden sm:block" />
            disponibles en tu área.
          </div>
        </div>
      </div>

      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 py-12 md:py-16 flex justify-center items-center">
        <div className="w-full max-w-[1060px] lg:w-[1060px] space-y-8">
          {/* First Slider - Moving Right */}
          <InfiniteSlider gap={16} duration={30} direction="horizontal" reverse={false}>
            {firstHalf.map((opp, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-lg p-5 md:p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Company Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#37322F]/10 flex items-center justify-center text-xl font-semibold text-[#37322F] flex-shrink-0">
                      {opp.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#37322F] text-sm font-semibold leading-tight truncate">{opp.company}</p>
                      <p className="text-[#605A57] text-xs leading-tight truncate">{opp.category}</p>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-[#37322F] text-base font-semibold leading-snug mb-3 line-clamp-2">{opp.title}</h3>

                  {/* Job Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#37322F] font-semibold text-sm">{opp.salary}</span>
                      <span className="text-[#605A57] text-xs">• {opp.type}</span>
                    </div>
                    <p className="text-[#605A57] text-xs">{opp.location}</p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-3 py-2 bg-[#37322F] text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                    Ver oportunidad
                  </button>
                </div>
              </div>
            ))}
          </InfiniteSlider>

          {/* Second Slider - Moving Left */}
          <InfiniteSlider gap={16} duration={30} direction="horizontal" reverse={true}>
            {secondHalf.map((opp, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div className="bg-white border border-[rgba(55,50,47,0.12)] rounded-lg p-5 md:p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  {/* Company Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#37322F]/10 flex items-center justify-center text-xl font-semibold text-[#37322F] flex-shrink-0">
                      {opp.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#37322F] text-sm font-semibold leading-tight truncate">{opp.company}</p>
                      <p className="text-[#605A57] text-xs leading-tight truncate">{opp.category}</p>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-[#37322F] text-base font-semibold leading-snug mb-3 line-clamp-2">{opp.title}</h3>

                  {/* Job Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#37322F] font-semibold text-sm">{opp.salary}</span>
                      <span className="text-[#605A57] text-xs">• {opp.type}</span>
                    </div>
                    <p className="text-[#605A57] text-xs">{opp.location}</p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-3 py-2 bg-[#37322F] text-white text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                    Ver oportunidad
                  </button>
                </div>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  )
}

