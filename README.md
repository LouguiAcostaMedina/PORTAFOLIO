# Portafolio Profesional — Andre Acosta Medina

> Software Developer | Full Stack & Backend Development  
> Estudiante de Ingeniería de Sistemas — Universidad Peruana Unión (UPeU)

Portafolio web profesional diseñado con un enfoque editorial contemporáneo (*Editorial Tech / Product Showcase*). Desarrollado en Next.js (App Router) con TypeScript estricto, Tailwind CSS y arquitectura modular por componentes.

---

## 🌟 Características Principales

- **Diseño Editorial & Minimalismo Tecnológico:** Jerarquía tipográfica rigurosa, paleta de colores personalizada con tokens semánticos y contrastes WCAG 2.2 AA.
- **Dark Mode & Light Mode:** Soporte con persistencia en `localStorage`, script inline libre de parpadeo (FOUC) y conmutador reactivo.
- **Catálogo de Proyectos Verificados:**
  - **Kerigma — Sistema de Gestión Misionera:** Caso de estudio Full Stack desacoplado con React 19, Node.js, Express, Sequelize, PostgreSQL, Zod, Vitest y credenciales QR.
  - **HIS UPeU — Hospital Information System Frontend:** Caso de estudio frontend empresarial con Clean Architecture, React 19, Vite, Tailwind CSS 4, Auth0 y módulos clínicos completos.
  - **FinaTrack (Reservado):** Configuración tipada protegida y desactivada en producción (`published: false`), respondiendo 404 dinámicamente y oculta de sitemap y metadatos hasta su publicación.
- **Canales de Contacto Directo:** Enlace a GitHub, correo institucional (`lougui.acosta@upeu.edu.pe`) con copiado interactivo al portapapeles y enlace directo `mailto:` sin formularios ficticios.
- **Rendimiento & SEO:** Generación Estática (SSG), sitemap dinámico (`/sitemap.xml`), robots (`/robots.txt`), favicon vectorial SVG y optimización con Turbopack.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Framework Web** | [Next.js](https://nextjs.org/) 16 (App Router) con [React](https://react.dev/) 19 |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) 5 (Configuración Estricta) |
| **Estilos & UI** | [Tailwind CSS](https://tailwindcss.com/) 4 con tokens CSS semánticos |
| **Iconografía** | [Lucide React](https://lucide.dev/) y componentes SVG vectoriales |
| **Calidad & Tipos** | ESLint 9, TypeScript typecheck (`tsc --noEmit`) |
| **Testing** | Node.js Native Test Runner (`node:test`, `node:assert/strict`) |

---

## 📁 Estructura del Proyecto

```
PORTAFOLIO/
├── app/
│   ├── layout.tsx              # Root Layout, persistencia de tema y metadatos SEO
│   ├── page.tsx                # Página principal (Hero, Proyectos, Sobre mí, Stack, Contacto)
│   ├── globals.css             # Tokens semánticos, modo claro/oscuro y reglas de movimiento reducido
│   ├── icon.svg                # Favicon vectorial
│   ├── not-found.tsx           # Página 404 personalizada y accesible
│   ├── robots.ts               # Configuración dinámica de robots.txt
│   ├── sitemap.ts              # Sitemap dinámico con filtrado de proyectos no publicados
│   └── projects/
│       └── [slug]/
│           └── page.tsx        # Estudios de caso dinámicos protegidos por guard de publicación
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Barra de navegación accesible, brand tipográfico y toggle
│   │   └── Footer.tsx          # Pie de página editorial con año dinámico
│   ├── projects/
│   │   └── ProjectCard.tsx     # Tarjetas de proyectos con badges de arquitectura y links
│   ├── sections/
│   │   ├── Hero.tsx            # Propuesta de valor y vitrina arquitectónica
│   │   ├── ProjectsSection.tsx # Grilla de proyectos publicados
│   │   ├── AboutSection.tsx    # Perfil profesional y formación universitaria
│   │   ├── TechStackSection.tsx# Stack clasificado por áreas de ingeniería
│   │   ├── ProcessSection.tsx  # Metodología de desarrollo en 5 etapas
│   │   └── ContactSection.tsx  # Correo con copiado al portapapeles y GitHub
│   └── ui/
│       ├── ThemeToggle.tsx     # Conmutador de modo claro/oscuro
│       └── icons.tsx           # Iconos SVG nativos (GitHub, ExternalLink)
├── data/
│   ├── projects.ts             # Modelo y catálogo de proyectos (publicados y reservados)
│   ├── profile.ts              # Información profesional y principios de ingeniería
│   └── skills.ts               # Habilidades técnicas clasificadas
├── docs/
│   ├── PROJECT_AUDIT.md        # Auditoría de repositorios de Kerigma, HIS y FinaTrack
│   ├── DESIGN_SYSTEM.md        # Tokens visuales, colores, tipografía y accesibilidad
│   ├── PROGRESS.md             # Matriz de progreso por fases y cambios
│   ├── TEST_REPORT.md          # Evidencia de ejecución de lint, tipos, tests y smoke test
│   └── DEPLOYMENT.md           # Guía de preparación y publicación para Vercel
├── scripts/
│   └── smoke-test.mjs          # Smoke tests end-to-end con servidor local
└── tests/
    └── projects.test.mjs       # Pruebas automatizadas de aislamiento de datos y 404 guards
```

---

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo local (http://localhost:3000)
npm run dev

# Ejecutar pruebas automatizadas de catálogo
npm test

# Verificación de tipos en TypeScript
npm run typecheck

# Análisis estático con ESLint
npm run lint

# Compilar para producción (SSG)
npm run build

# Iniciar servidor compilado de producción
npm run start

# Ejecutar smoke test E2E contra el build
node scripts/smoke-test.mjs
```

---

## 🔒 Privacidad y Transparencia

- No se utilizan datos de experiencia ficticios, certificaciones inventadas ni métricas infladas.
- Los proyectos no publicados (como FinaTrack) permanecen inaccesibles para el usuario y motores de búsqueda hasta su lanzamiento oficial.
- No se exponen credenciales, tokens ni variables de entorno sensibles en el código fuente.

---

## 📬 Contacto

- **Desarrollador:** Lougui Andre Acosta Medina (Andre Acosta)
- **Correo Institucional:** [lougui.acosta@upeu.edu.pe](mailto:lougui.acosta@upeu.edu.pe)
- **GitHub:** [github.com/LouguiAcostaMedina](https://github.com/LouguiAcostaMedina)
