# Estructura del Proyecto - Next.js 15

Este proyecto sigue la estructura estándar recomendada para Next.js 15 con App Router y principios de Domain-Driven Design (DDD).

## Estructura de Directorios

```
nexora-landing-page/
├── src/                          # 🔥 Código fuente principal
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Layout raíz
│   │   ├── page.tsx             # Página principal
│   │   ├── globals.css          # Estilos globales (importado desde styles)
│   │   └── organizations/       # Rutas de la aplicación
│   │       └── page.tsx
│   │
│   ├── components/              # Componentes React organizados
│   │   ├── ui/                  # Componentes UI base (solo shadcn/ui)
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── navigation-menu.tsx
│   │   │
│   │   ├── shared/              # Componentes compartidos personalizados
│   │   │   ├── decorative-pattern.tsx
│   │   │   ├── feature-card.tsx
│   │   │   ├── infinite-slider-horizontal.tsx
│   │   │   ├── smart-simple-brilliant.tsx
│   │   │   ├── your-work-in-sync.tsx
│   │   │   ├── effortless-integration.tsx
│   │   │   └── numbers-that-speak.tsx
│   │   │
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── main-nav.tsx
│   │   │
│   │   └── features/            # Bounded contexts / Features (DDD)
│   │       ├── hero/
│   │       │   └── hero-section.tsx
│   │       ├── volunteer-search/
│   │       ├── opportunities/
│   │       ├── testimonials/
│   │       ├── faq/
│   │       ├── cta/
│   │       ├── documentation/
│   │       └── pricing/
│   │
│   ├── utils/                   # Utilidades y hooks
│   │   ├── index.ts            # Exporta cn() y hooks
│   │   ├── use-carousel-progress.ts
│   │   └── use-intersection-observer.ts
│   │
│   ├── constants/              # Constantes de la aplicación
│   │   └── index.ts            # APP_TEXT, COLORS, METADATA
│   │
│   ├── types/                  # Tipos TypeScript compartidos
│   │   └── index.ts            # Opportunity, Testimonial, FAQItem, etc.
│   │
│   └── styles/                 # Estilos globales
│       └── globals.css
│
├── public/                      # Assets estáticos
├── package.json
├── tsconfig.json               # TypeScript config (paths apuntan a src/)
└── next.config.mjs
```

## Convenciones de Importación

- **Componentes UI (shadcn)**: `@/components/ui/component-name`
- **Componentes Compartidos**: `@/components/shared/component-name`
- **Layout**: `@/components/layout/component-name`
- **Features**: `@/components/features/feature-name/component-name`
- **Utils/Hooks**: `@/utils` (usa index.ts para exports)
- **Constantes**: `@/constants`
- **Tipos**: `@/types`
- **Estilos**: `@/styles/globals.css`

## Separación de Componentes

### `components/ui/` - Solo shadcn/ui
Contiene únicamente componentes de la librería shadcn/ui:
- button.tsx
- input.tsx
- select.tsx
- textarea.tsx
- navigation-menu.tsx
- badge.tsx (versión personalizada, pero mantiene estructura de shadcn)

### `components/shared/` - Componentes personalizados compartidos
Componentes propios del proyecto que se usan en múltiples features:
- decorative-pattern.tsx
- feature-card.tsx
- infinite-slider-horizontal.tsx
- smart-simple-brilliant.tsx
- your-work-in-sync.tsx
- effortless-integration.tsx
- numbers-that-speak.tsx

## Organización por Features (DDD)

Cada feature en `components/features/` representa un bounded context:
- Contiene sus propios componentes
- Puede tener sus propios tipos (si no son compartidos)
- Es independiente y escalable

## Componentes Compartidos

- `components/ui/`: Componentes base reutilizables (shadcn/ui)
- `components/layout/`: Componentes de estructura (header, footer, nav)
- `utils/`: Funciones y hooks reutilizables
- `constants/`: Constantes del dominio
- `types/`: Tipos TypeScript compartidos

