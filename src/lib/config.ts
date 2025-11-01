// Constantes de colores
export const COLORS = {
  primary: "#37322F",
  primaryDark: "#2A2520",
  primaryLight: "rgba(55, 50, 47, 0.05)",
  background: "#F7F5F3",
  textPrimary: "#37322F",
  textSecondary: "#49423D",
  textTertiary: "#605A57",
  textMuted: "rgba(73, 66, 61, 0.50)",
  border: "rgba(55, 50, 47, 0.12)",
  borderLight: "rgba(55, 50, 47, 0.06)",
  white: "#FFFFFF",
} as const

// Constantes de textos de la aplicación
export const APP_TEXT = {
  brand: "Nexora",
  tagline: "Conectando voluntarios con causas",
  hero: {
    title: "Conecta con causas que importan",
    description: "Encuentra oportunidades de voluntariado cerca de ti y genera impacto real.",
    cta: "Explorar voluntariados",
    featureCards: [
      {
        title: "Descubre ONGs confiables",
        description: "Explora organizaciones verificadas y conoce sus proyectos de impacto social.",
      },
      {
        title: "Crea tu perfil y guarda oportunidades",
        description: "Construye tu perfil de voluntario y guarda las oportunidades que te interesan.",
      },
      {
        title: "Aplica con un clic",
        description: "Postúlate a oportunidades de forma rápida y sencilla desde tu perfil.",
      },
    ],
    dashboardImages: [
      {
        src: "slide1.webp",
        alt: "Schedules Dashboard - Customer Subscription Management",
      },
      {
        src: "slide2.webp",
        alt: "Analytics Dashboard",
      },
      {
        src: "slide3.webp",
        alt: "Data Visualization Dashboard",
      },
    ],
  },
  navigation: {
    findVolunteer: "Voluntariado",
    volunteer: "Voluntariado",
    organizations: "Organizaciones",
    menu: [
      {
        title: "Encuentra Voluntariado",
        url: "#",
        items: [
          {
            title: "Voluntariado",
            description: "Explora oportunidades de voluntariado cerca de ti",
            url: "/",
          },
          {
            title: "Organizaciones",
            description: "Conecta con organizaciones y encuentra tu causa ideal",
            url: "#",
          },
        ],
      },
      {
        title: "Publica",
        url: "#",
        items: [
          {
            title: "Publica una oportunidad",
            description: "Crea y publica oportunidades de voluntariado",
            url: "/publicar-oportunidad",
          },
          {
            title: "Suma tu organización",
            description: "Registra tu organización y empieza a publicar",
            url: "/registrar-organizacion",
          },
        ],
      },
    ],
    mobileExtraLinks: [
      { name: "Sobre Nosotros", url: "/about" },
      { name: "Contacto", url: "/contact" },
      { name: "Términos", url: "/terms" },
      { name: "Privacidad", url: "/privacy" },
    ],
  },
  auth: {
    login: "Ingresa",
    signup: "Regístrate",
  },
} as const

// Constantes de metadata
export const METADATA = {
  title: "Nexora - Conecta tu pasión con causas que importan",
  description:
    "Encuentra oportunidades de voluntariado cerca de ti y haz una diferencia en tu comunidad. Plataforma para conectar voluntarios con organizaciones.",
} as const

