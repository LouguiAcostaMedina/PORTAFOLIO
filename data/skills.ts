export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; context: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Interfaces reactivas, componentes modulares y diseño responsivo.",
    skills: [
      { name: "React 19 & Next.js", context: "App Router, Server Components y hooks modernos" },
      { name: "TypeScript", context: "Tipado estricto, interfaces y genéricos" },
      { name: "Tailwind CSS", context: "Sistemas de diseño, variables semánticas y modo oscuro" },
      { name: "Vite", context: "Bundling ultrarrápido y configuración de módulos" },
      { name: "React Router", context: "Enrutamiento dinámico y protección de rutas" },
      { name: "Chart.js / Data Viz", context: "Visualización interactiva de analítica y KPIs" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Servidores seguros, API RESTful y lógica de negocio desacoplada.",
    skills: [
      { name: "Node.js & Express", context: "Arquitectura en capas (Controllers, Services, Models)" },
      { name: "TypeScript Backend", context: "Migración de código heredado y desarrollo type-safe" },
      { name: "RESTful Architecture", context: "Diseño uniforme de endpoints y envelope estandarizado" },
      { name: "Seguridad & Auth", context: "JWT HttpOnly cookies, Helmet, rate limiting y CORS" },
      { name: "Zod Schema Validation", context: "Validación declarativa de payloads e inferencia estática" },
      { name: "Auth0 Integration", context: "Proveedores de identidad federada y RBAC" },
    ],
  },
  {
    title: "Bases de Datos & Persistencia",
    description: "Modelado relacional, integridad referencial y estrategias de caché.",
    skills: [
      { name: "PostgreSQL", context: "Consultas relacionales, esquemas e indexación" },
      { name: "Sequelize ORM", context: "Modelos, asociaciones complejas, migraciones y seeds" },
      { name: "Redis", context: "Capa de caché en memoria para reducción de latencia" },
      { name: "Aislamiento Multi-Tenant", context: "Filtros de ámbito e integridad por entidad (scopeByChurch)" },
    ],
  },
  {
    title: "Testing & Calidad de Código",
    description: "Automatización de pruebas y verificación continua de lógica de negocio.",
    skills: [
      { name: "Vitest", context: "Unit tests y pruebas de integración de alta velocidad" },
      { name: "Supertest", context: "Validación de respuestas HTTP y controladores de API" },
      { name: "ESLint & Prettier", context: "Reglas de estilo y detección temprana de errores" },
      { name: "Smoke Testing", context: "Validación automatizada de salud en endpoints principales" },
    ],
  },
  {
    title: "Herramientas & Entorno de Trabajo",
    description: "Control de versiones, despliegue y flujo de desarrollo colaborativo.",
    skills: [
      { name: "Git & GitHub", context: "Flujos por ramas semánticas y commits descriptivos" },
      { name: "Vercel", context: "Despliegue continuo y optimización perimetral" },
      { name: "Postman", context: "Documentación y testing exploratorio de APIs" },
      { name: "npm / Node ecosystem", context: "Gestión rigurosa de dependencias y scripts de automatización" },
    ],
  },
];
