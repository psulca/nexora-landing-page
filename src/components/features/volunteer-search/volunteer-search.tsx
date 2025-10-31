"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

interface VolunteerSearchProps {
  compact?: boolean
}

export function VolunteerSearch({ compact = false }: VolunteerSearchProps) {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
  })

  if (compact) {
    return (
      <div className="w-full mx-auto">
        <div className="flex items-center gap-2 p-2">
          {/* Search Input */}
          <div className="flex-1">
            <InputGroup className="bg-white border border-[rgba(55,50,47,0.2)] shadow-none h-auto rounded-md">
              <InputGroupInput
                id="search-keyword-compact"
                placeholder="Buscar por palabra clave o interés"
                className="text-sm border-0 focus-visible:ring-0 placeholder:text-[rgba(55,50,47,0.6)] py-2.5 px-3"
              />
            </InputGroup>
          </div>

          {/* Location Input */}
          <div className="w-56">
            <InputGroup className="bg-white border border-[rgba(55,50,47,0.2)] shadow-none h-auto rounded-md">
              <InputGroupInput
                id="search-location-compact"
                placeholder="En cualquier lugar"
                className="text-sm border-0 focus-visible:ring-0 placeholder:text-[rgba(55,50,47,0.6)] py-2.5 px-3 pr-2"
              />
              <InputGroupAddon className="text-[#37322F] pr-3">
                <MapPin className="w-4 h-4" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="px-5 py-2.5 bg-[#37322F] text-white font-semibold text-sm hover:bg-[#2a2623] active:scale-[0.98] transition-all duration-200 whitespace-nowrap rounded-md"
          >
            Buscar
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full p-3">
      <div className="bg-white rounded-lg shadow-md border border-[rgba(55,50,47,0.08)] p-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
          {/* Search Input */}
          <div className="flex-1 flex flex-col gap-1.5">
            <label
              htmlFor="search-keyword"
              className="text-sm font-medium text-[#37322F] font-sans"
            >
              Buscar
            </label>
            <InputGroup className="text-[#37322F] bg-white font-sans h-11 shadow-sm border-[rgba(55,50,47,0.15)]">
              <InputGroupInput
                id="search-keyword"
                placeholder="Palabra clave o interés"
                className="text-sm sm:text-base h-full"
              />
            </InputGroup>
          </div>

          {/* Location Filter */}
          <div className="w-full sm:w-56 flex flex-col gap-1.5">
            <label
              htmlFor="search-location"
              className="text-sm font-medium text-[#37322F] font-sans"
            >
              Ubicación
            </label>
            <InputGroup className="text-[#37322F] bg-white font-sans h-11 shadow-sm border-[rgba(55,50,47,0.15)]">
              <InputGroupInput
                id="search-location"
                placeholder="En cualquier lugar"
                className="text-sm sm:text-base h-full"
              />
              <InputGroupAddon className="text-[#37322F]">
                <MapPin className="w-4 h-4" />
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Search Button */}
          <button className="px-6 py-2.5 bg-[#37322F] text-white rounded-lg font-semibold text-sm sm:text-base font-sans hover:bg-[#2a2623] hover:shadow-md active:scale-[0.98] transition-all duration-200 whitespace-nowrap h-11 mb-0">
            Buscar
          </button>
        </div>
      </div>
    </div>
  )
}
