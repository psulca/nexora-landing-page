"use client";

import { useState } from "react";

type OrganizationType = "ong" | "corporate";

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  publications: number;
  features: string[];
  ctaText: string;
  ctaAction?: "purchase" | "contact";
}

export default function PricingSection() {
  const [organizationType, setOrganizationType] =
    useState<OrganizationType>("ong");

  const ongPlans: PricingPlan[] = [
    {
      name: "Starter",
      description:
        "Ideal para pequeñas organizaciones o colectivos comunitarios que publican de forma ocasional.",
      price: 15,
      publications: 3,
      features: [
        "Acceso a voluntarios verificados",
        "Panel de gestión de postulaciones",
        "Analíticas básicas",
        "Soporte por correo",
      ],
      ctaText: "Adquirir paquete",
      ctaAction: "purchase",
    },
    {
      name: "Professional",
      description:
        "Para ONGs activas que gestionan múltiples programas de voluntariado.",
      price: 45,
      publications: 10,
      features: [
        "Acceso a voluntarios verificados",
        "Panel de gestión de postulaciones",
        "Analíticas básicas",
        "Soporte por correo",
        "Organizaciones verificadas obtienen prioridad",
        "Métricas detalladas",
      ],
      ctaText: "Adquirir paquete",
      ctaAction: "purchase",
    },
    {
      name: "Enterprise",
      description:
        "Para redes o fundaciones con varios equipos y campañas simultáneas.",
      price: 90,
      publications: 25,
      features: [
        "Acceso a voluntarios verificados",
        "Panel de gestión de postulaciones",
        "Analíticas básicas",
        "Soporte por correo",
        "Organizaciones verificadas obtienen prioridad",
        "Métricas detalladas",
        "Gestión avanzada de múltiples equipos",
      ],
      ctaText: "Contactar equipo Nexora",
      ctaAction: "contact",
    },
  ];

  const corporatePlans: PricingPlan[] = [
    {
      name: "Starter",
      description:
        "Para empresas con iniciativas de voluntariado interno o RSE.",
      price: 30,
      publications: 3,
      features: [
        "Publicaciones destacadas",
        "Panel de métricas avanzadas",
        "Soporte prioritario",
        "Integraciones con CRM o intranet",
      ],
      ctaText: "Adquirir paquete",
      ctaAction: "purchase",
    },
    {
      name: "Professional",
      description: "Para compañías con programas regulares de voluntariado.",
      price: 90,
      publications: 10,
      features: [
        "Publicaciones destacadas",
        "Panel de métricas avanzadas",
        "Soporte prioritario",
        "Integraciones con CRM o intranet",
        "Reportes de impacto personalizado",
      ],
      ctaText: "Adquirir paquete",
      ctaAction: "purchase",
    },
    {
      name: "Enterprise",
      description:
        "Para alianzas o programas masivos de voluntariado corporativo.",
      price: 180,
      publications: 25,
      features: [
        "Publicaciones destacadas",
        "Panel de métricas avanzadas",
        "Soporte prioritario",
        "Integraciones con CRM o intranet",
        "Reportes de impacto personalizado",
        "Gestión de múltiples programas simultáneos",
        "Soporte dedicado",
      ],
      ctaText: "Contactar equipo Nexora",
      ctaAction: "contact",
    },
  ];

  const currentPlans = organizationType === "ong" ? ongPlans : corporatePlans;

  return (
    <div className="w-full bg-[#FFF9E9] border-t-4 border-b-4 border-black flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center gap-4 sm:gap-6">
          <div className="w-full text-center flex justify-center flex-col text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight md:leading-[60px] font-darker-grotesque tracking-tight">
            Planes para publicar
          </div>
        </div>
      </div>

      {/* Organization Type Toggle Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex justify-center items-center">
          {/* Toggle Container - Neobrutalista */}
          <div className="relative flex border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
            {/* Indicador activo amarillo */}
            <div
              className={`absolute top-0 left-0 h-full bg-[#FFC942] border-2 border-black transition-all duration-300 ease-in-out ${
                organizationType === "ong" ? "w-1/2" : "w-1/2 translate-x-full"
              }`}
              style={{
                boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
              }}
            />
            
            {/* Botón ONGs / Fundaciones */}
            <button
              onClick={() => setOrganizationType("ong")}
              type="button"
              className="relative z-10 flex-1 px-8 py-4 text-sm font-bold font-sans border-r-2 border-black transition-colors duration-300 flex items-center justify-center"
              style={{
                backgroundColor: organizationType === "ong" ? "transparent" : "white",
              }}
            >
              <span
                className={`transition-colors duration-300 text-center ${
                  organizationType === "ong" ? "text-black" : "text-[#6B7280]"
                }`}
              >
                ONGs / Fundaciones
              </span>
            </button>

            {/* Botón Corporativos */}
            <button
              onClick={() => setOrganizationType("corporate")}
              type="button"
              className="relative z-10 flex-1 px-8 py-4 text-sm font-bold font-sans transition-colors duration-300 flex items-center justify-center"
              style={{
                backgroundColor: organizationType === "corporate" ? "transparent" : "white",
              }}
            >
              <span
                className={`transition-colors duration-300 text-center ${
                  organizationType === "corporate" ? "text-black" : "text-[#6B7280]"
                }`}
              >
                Corporativos
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 flex justify-center items-center">
        <div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6">
            {currentPlans.map((plan, index) => {
              const isProfessional = plan.name === "Professional";
              const isEnterprise = plan.name === "Enterprise";

              return (
                <div
                  key={plan.name}
                  className={`flex-1 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-start items-start gap-6 p-6 md:p-8 ${
                    isProfessional
                      ? "bg-[#F97930] border-black"
                      : "bg-white"
                  }`}
                >
                  {/* Plan Header */}
                  <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div
                        className={`text-xl font-bold leading-7 font-darker-grotesque ${
                          isProfessional
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {plan.name}
                      </div>
                      <div
                        className={`w-full text-sm font-medium leading-5 font-sans ${
                          isProfessional
                            ? "text-white"
                            : "text-black/70"
                        }`}
                      >
                        {plan.description}
                      </div>
                    </div>

                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div className="flex flex-col justify-start items-start gap-1">
                        <div
                          className={`relative h-[60px] flex items-center text-5xl font-bold leading-[60px] font-darker-grotesque ${
                            isProfessional ? "text-white" : "text-black"
                          }`}
                        >
                          <span className="invisible">
                            $
                            {organizationType === "ong"
                              ? ongPlans[index].price
                              : corporatePlans[index].price}
                          </span>
                          <span
                            className="absolute inset-0 flex items-center transition-all duration-500"
                            style={{
                              opacity: organizationType === "ong" ? 1 : 0,
                              transform: `scale(${
                                organizationType === "ong" ? 1 : 0.8
                              })`,
                              filter: `blur(${
                                organizationType === "ong" ? 0 : 4
                              }px)`,
                            }}
                            aria-hidden={organizationType !== "ong"}
                          >
                            ${ongPlans[index].price}
                          </span>
                          <span
                            className="absolute inset-0 flex items-center transition-all duration-500"
                            style={{
                              opacity: organizationType === "corporate" ? 1 : 0,
                              transform: `scale(${
                                organizationType === "corporate" ? 1 : 0.8
                              })`,
                              filter: `blur(${
                                organizationType === "corporate" ? 0 : 4
                              }px)`,
                            }}
                            aria-hidden={organizationType !== "corporate"}
                          >
                            ${corporatePlans[index].price}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-bold font-sans ${
                            isProfessional ? "text-white" : "text-black/70"
                          }`}
                        >
                          = {plan.publications} publicaciones
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`self-stretch px-4 py-3 border-4 border-black flex justify-center items-center transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                        isProfessional 
                          ? "bg-[#FFC942] text-black" 
                          : "bg-black text-white"
                      }`}
                      style={{
                        boxShadow: isProfessional 
                          ? "4px 4px 0px 0px rgba(0,0,0,1)" 
                          : "4px 4px 0px 0px rgba(0,0,0,1)",
                      }}
                    >
                      <div className="text-sm font-bold leading-5 font-sans">
                        {plan.ctaText}
                      </div>
                    </button>
                  </div>

                  {/* Features List */}
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="self-stretch flex justify-start items-center gap-3"
                      >
                        <div className="w-5 h-5 border-2 border-black bg-[#76A69D] flex items-center justify-center flex-shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div
                          className={`flex-1 text-sm font-medium leading-5 font-sans ${
                            isProfessional
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}
