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
    title: "Conecta tu pasión\ncon causas que importan",
    description: "Encuentra oportunidades de voluntariado cerca de ti\ny haz una diferencia en tu comunidad.",
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
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dsadsadsa.jpg-xTHS4hGwCWp2H5bTj8np6DXZUyrxX7.jpeg",
        alt: "Schedules Dashboard - Customer Subscription Management",
      },
      {
        src: "/analytics-dashboard-with-charts-graphs-and-data-vi.jpg",
        alt: "Analytics Dashboard",
      },
      {
        src: "/data-visualization-dashboard-with-interactive-char.jpg",
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
            url: "/organizations",
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
  organizations: {
    hero: {
      title: "Conecta con voluntarios\ncomprometidos",
      description: "Comparte tus proyectos y encuentra voluntarios\napasionados por tu causa.",
      cta: "Crear cuenta de organización",
    },
    features: {
      badge: "Funcionalidades",
      title: "Herramientas poderosas para tu organización",
      description: "Todo lo que necesitas para gestionar voluntarios\ny maximizar el impacto de tus proyectos.",
      items: [
        {
          title: "Publica oportunidades en minutos",
          description: "Crea y publica oportunidades de voluntariado de forma rápida y sencilla.",
          icon: "📝",
        },
        {
          title: "Gestiona postulaciones fácilmente",
          description: "Revisa, evalúa y selecciona voluntarios desde un panel centralizado.",
          icon: "✓",
        },
        {
          title: "Crea perfil institucional",
          description: "Muestra tus proyectos y construye confianza con voluntarios potenciales.",
          icon: "ℹ",
        },
        {
          title: "Análisis y reportes",
          description: "Obtén insights sobre el impacto de tus voluntarios y proyectos.",
          icon: "📊",
        },
      ],
    },
    socialProof: {
      stat: "+200 organizaciones",
      description: "ya publican en nuestra plataforma",
    },
    cta: {
      title: "¿Listo para encontrar voluntarios?",
      primaryButton: "Crear cuenta",
      secondaryButton: "Volver al inicio",
      secondaryButtonHref: "/",
    },
  },
} as const

// Constantes de metadata
export const METADATA = {
  title: "Nexora - Conecta tu pasión con causas que importan",
  description:
    "Encuentra oportunidades de voluntariado cerca de ti y haz una diferencia en tu comunidad. Plataforma para conectar voluntarios con organizaciones.",
} as const

