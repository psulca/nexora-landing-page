"use client"

import { useState } from "react"
import { Search, MapPin, Briefcase, Calendar } from "lucide-react"

export function VolunteerSearch() {
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    modality: "",
    date: "",
  })

  return (
    <div className="w-full bg-white border border-[rgba(55,50,47,0.12)] rounded-lg p-6 sm:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-[#37322F] text-sm font-medium font-sans">Categoría</label>
          <div className="relative flex items-center">
            <Briefcase className="absolute left-3 w-4 h-4 text-[#605A57]" />
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-md text-[#37322F] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#37322F]/20"
            >
              <option value="">Todas las categorías</option>
              <option value="education">Educación</option>
              <option value="health">Salud</option>
              <option value="environment">Medio Ambiente</option>
              <option value="social">Social</option>
            </select>
          </div>
        </div>

        {/* Location Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-[#37322F] text-sm font-medium font-sans">Ubicación</label>
          <div className="relative flex items-center">
            <MapPin className="absolute left-3 w-4 h-4 text-[#605A57]" />
            <input
              type="text"
              placeholder="Ciudad o región"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-md text-[#37322F] text-sm font-sans placeholder-[#605A57] focus:outline-none focus:ring-2 focus:ring-[#37322F]/20"
            />
          </div>
        </div>

        {/* Modality Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-[#37322F] text-sm font-medium font-sans">Modalidad</label>
          <select
            value={filters.modality}
            onChange={(e) => setFilters({ ...filters, modality: e.target.value })}
            className="w-full px-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-md text-[#37322F] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#37322F]/20"
          >
            <option value="">Todas</option>
            <option value="presencial">Presencial</option>
            <option value="remoto">Remoto</option>
            <option value="hibrido">Híbrido</option>
          </select>
        </div>

        {/* Date Filter */}
        <div className="flex flex-col gap-2">
          <label className="text-[#37322F] text-sm font-medium font-sans">Fecha</label>
          <div className="relative flex items-center">
            <Calendar className="absolute left-3 w-4 h-4 text-[#605A57]" />
            <input
              type="date"
              value={filters.date}
              onChange={(e) => setFilters({ ...filters, date: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border border-[rgba(55,50,47,0.12)] rounded-md text-[#37322F] text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#37322F]/20"
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 md:flex-none px-8 py-2.5 bg-[#37322F] text-white rounded-md font-medium text-sm font-sans hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          Buscar oportunidades
        </button>
        <button className="px-6 py-2.5 border border-[rgba(55,50,47,0.12)] text-[#37322F] rounded-md font-medium text-sm font-sans hover:bg-[#37322F]/5 transition-colors">
          Limpiar filtros
        </button>
      </div>
    </div>
  )
}
