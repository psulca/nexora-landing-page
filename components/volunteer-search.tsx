"use client";

import { useState } from "react";
import { SearchIcon, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export function VolunteerSearch() {
  const [filters, setFilters] = useState({
    category: "",
    search: "",
    location: "",
  });

  return (
    <div className="w-full p-3">
      <div className="flex items-center gap-3">
        {/* Category Filter */}
        <Select
          value={filters.category}
          onValueChange={(value) => setFilters({ ...filters, category: value })}
        >
          <SelectTrigger className="text-[#37322F] bg-white font-sans">
            <SelectValue placeholder="Todas las categorías" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="education">Educación</SelectItem>
            <SelectItem value="health">Salud</SelectItem>
            <SelectItem value="environment">Medio Ambiente</SelectItem>
            <SelectItem value="social">Social</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Input */}
        <InputGroup className="text-[#37322F] bg-white font-sans">
          <InputGroupInput placeholder="Buscar por palabra clave o interés" />
        </InputGroup>

        {/* Location Filter */}
        <div className="w-90">
          <InputGroup className="text-[#37322F] bg-white font-sans">
            <InputGroupInput placeholder="En cualquier lugar" />
            <InputGroupAddon>
              <MapPin />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Search Button */}
        <button className="px-6 py-2 bg-[#37322F] text-white rounded-md font-medium text-sm font-sans hover:opacity-90 transition-opacity whitespace-nowrap">
          Buscar
        </button>
      </div>
    </div>
  );
}
