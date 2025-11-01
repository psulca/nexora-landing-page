"use client";

import { GridSection, type GridItem } from "./grid-section";
import PublishOpportunities from "@/components/ui/publish-opportunities";
import YourWorkInSync from "@/components/ui/your-work-in-sync";
import ManageApplications from "@/components/ui/manage-applications";
import BuildTrustVisibility from "@/components/ui/build-trust-visibility";

export function BentoGridSection() {
  const gridItems: GridItem[] = [
    {
      title: "Publica tus oportunidades fácilmente",
      description:
        "Crea y comparte convocatorias de voluntariado en minutos, clasificadas por causa, ubicación o habilidades.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
          <PublishOpportunities
            width="100%"
            height="100%"
            theme="light"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
    {
      title: "Gestiona postulaciones en un solo lugar",
      description:
        "Visualiza, organiza y da seguimiento a los voluntarios interesados desde un panel centralizado.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] flex overflow-hidden text-right items-center justify-center">
          <ManageApplications
            width="100%"
            height="100%"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
    {
      title: "Conecta directamente con tu comunidad",
      description:
        "Comunícate con postulantes y recibe notificaciones automáticas para coordinar actividades o confirmar participaciones.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
          <YourWorkInSync
            width="400"
            height="250"
            theme="light"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
    {
      title: "Genera confianza y visibilidad",
      description:
        "Tu perfil verificado permite mostrar tu misión, proyectos e impacto, reforzando la transparencia de tu organización.",
      image: (
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
          <BuildTrustVisibility
            width="100%"
            height="100%"
            className="scale-50 sm:scale-65 md:scale-75 lg:scale-90 !important"
          />
        </div>
      ),
    },
  ];

  return (
    <GridSection
      title="Herramientas poderosas para tu organización"
      description="Todo lo que necesitas para gestionar voluntarios y maximizar el impacto de tus proyectos."
      items={gridItems}
    />
  );
}
