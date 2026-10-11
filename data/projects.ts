export interface TechnicalDecision {
  title: string;
  rationale: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  repositoryFrontend?: string | null;
  repositoryBackend?: string | null;
  liveUrl?: string | null;
  images: string[];
  status: "completed" | "in-progress" | "planned";
  published: boolean;
  featured: boolean;
  // Detalles para Estudio de Caso
  problem?: string;
  objective?: string;
  architectureNotes?: string[];
  decisions?: TechnicalDecision[];
  challenges?: string[];
  deploymentNotes?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "kerigma",
    slug: "kerigma",
    name: "Kerigma — Sistema de Gestión Misionera",
    tagline: "Plataforma Full Stack para administración eclesiástica, métricas en tiempo real y credenciales QR.",
    description:
      "Plataforma web integral para la gestión y seguimiento eclesiástico y misionero. Diseñada con arquitectura desacoplada compuesta por un cliente interactivo en React 19 y una API REST robusta en Node.js con TypeScript estricto, Sequelize y PostgreSQL. Incluye control de roles jerárquicos, generación de credenciales con código QR y reportes dinámicos.",
    category: "Full Stack / Gestión / Dashboards",
    technologies: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Redis",
      "Zod",
      "Vitest",
      "Chart.js",
      "Vite",
      "Tailwind CSS",
    ],
    features: [
      "Dashboard analítico con KPIs e indicadores de participación, iglesias y miembros.",
      "Control de acceso basado en roles (Administrador, Director, Líder, Lector) con validación granular.",
      "Emisión y escaneo de credenciales de identificación mediante códigos QR interactivos.",
      "Generación y exportación de reportes analíticos a formatos PDF (jsPDF) y Excel (XLSX).",
      "API REST en TypeScript estricto con validación de esquemas con Zod y tipado inferido.",
      "Aislamiento multi-sede mediante middleware scopeByChurch para integridad de datos.",
      "Seguridad avanzada: cookies HttpOnly, rate limiting por IP, sanitización y cabeceras Helmet.",
      "Suite de pruebas automatizadas con Vitest (100% de cobertura en servicios críticos de lógica de negocio).",
    ],
    problem:
      "La gestión de comunidades y sedes misioneras descentralizadas solía depender de registros manuales y planillas dispersas, lo que dificultaba la consolidación de indicadores de asistencia, la emisión confiable de credenciales y la auditoría de miembros.",
    objective:
      "Desarrollar un sistema Full Stack unificado, escalable y seguro que centralice las operaciones de iglesias, ofrezca trazabilidad de asistencia mediante QR y genere analítica directiva en tiempo real.",
    architectureNotes: [
      "Frontend: Arquitectura de componentes desacoplados con Vite, React Router 7 y consumo centralizado vía Axios con interceptores de autenticación y renovación de sesión.",
      "Backend: Arquitectura en capas estricta (Routes -> Middlewares -> Controllers -> Services -> Models Sequelize) con manejo centralizado de excepciones y envelope uniforme { ok, data } / { ok, error }.",
      "Caché y Rendimiento: Soporte para Redis con fallback automático a memoria interna para entornos de baja latencia.",
    ],
    decisions: [
      {
        title: "TypeScript Estricto en el Backend",
        rationale:
          "Se migró la base heredada en JS a TypeScript 5 con configuración estricta para garantizar contratos de datos confiables y prevenir errores de tipo en tiempo de ejecución.",
      },
      {
        title: "Validación Declarativa con Zod",
        rationale:
          "Permite validar exhaustivamente los payloads entrantes en los controladores y deducir tipos estáticos automáticamente sin duplicidad de interfaces.",
      },
      {
        title: "Aislamiento de Iglesias por Middleware",
        rationale:
          "El middleware scopeByChurch inyecta el identificador de sede en el contexto de la consulta, asegurando que ningún usuario acceda a información de otra sede.",
      },
    ],
    challenges: [
      "Garantizar coherencia transaccional en operaciones concurrentes de asistencia y membresía.",
      "Exportación en cliente de grandes volúmenes de datos a hojas de cálculo con estilos institucionales y gráficos vectoriales.",
    ],
    repositoryFrontend: "https://github.com/LouguiAcostaMedina/kerigma-frontend",
    repositoryBackend: "https://github.com/LouguiAcostaMedina/kerigma-backend",
    liveUrl: null, // Sin despliegue público abierto reportado; se informa con honestidad técnica
    images: [],
    status: "completed",
    published: true,
    featured: true,
  },
  {
    id: "his-upeu",
    slug: "his-upeu",
    name: "HIS UPeU — Hospital Information System Frontend",
    tagline: "Aplicación frontend empresarial para gestión hospitalaria, citas, farmacia y auditoría médica.",
    description:
      "Sistema de Información Hospitalaria desarrollado para la gestión clínica, operativa y administrativa de centros de salud. Implementado bajo Clean Architecture en frontend con React 19 y Tailwind CSS 4, integrando autenticación federada con Auth0, enrutamiento protegido por rol, expedientes médicos, logística farmacéutica y módulos de auditoría.",
    category: "Frontend / Enterprise Web Application",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "React Router 7",
      "Auth0",
      "Axios",
      "Lucide React",
      "Sonner",
    ],
    features: [
      "Core Clínico Completo: Módulos de citas, gestión de turnos, consultas médicas, órdenes de laboratorio y expedientes de historial clínico.",
      "Directorio y Admisión: Registro estructurado de pacientes y seguimiento de antecedentes clínicos.",
      "Farmacia, POS & Suministros: Terminal Punto de Venta (POS) de medicamentos, logística de almacén y control de insumos clínicos.",
      "Mesa de Ayuda TI: Helpdesk hospitalario integrado para reporte y resolución de incidencias tecnológicas.",
      "Facturación y Finanzas: Liquidación de prestaciones de salud, pagos y comprobantes.",
      "Directorio Médico: Asignación de médicos y especialidades con control de rol 'admin'.",
      "Gestión Multi-Sede y Logs Criptográficos: Supervisión de sucursales clínicas y trazabilidad con rol 'superadmin'.",
      "Seguridad por Token Bridge: Integración reactiva de credenciales Auth0 con capas de interceptores de red.",
    ],
    problem:
      "La interoperabilidad entre el área clínica (consultas, laboratorio, citas) y el área operativa (farmacia, POS, facturación, auditoría) suele verse fragmentada, creando cuellos de botella y demoras en la atención médica.",
    objective:
      "Construir una interfaz de usuario frontend modular, de alto rendimiento y fácil adopción hospitalaria que unifique los flujos de atención ambulatoria, suministros y seguridad en una sola experiencia de usuario.",
    architectureNotes: [
      "Clean Architecture Frontend: Estructuración en capas claras de Presentation (Páginas, Layouts, Componentes reutilizables) e Infrastructure (Configuraciones, Bridge de Auth0, Rutas protegidas).",
      "Control de Acceso Basado en Roles (RBAC): Enrutador con validación dinámica que restringe vistas según el nivel del profesional (médico, administrativo, admin, superadmin).",
      "Feedback Reactivo al Usuario: Notificaciones de estado de transacciones clínicas y errores en tiempo real mediante Sonner.",
    ],
    decisions: [
      {
        title: "Integración de Auth0 con Token Bridge",
        rationale:
          "Delega la autenticación en un proveedor de identidad de nivel industrial que cumple estándares de seguridad médica y facilita el control de tokens JWT seguros.",
      },
      {
        title: "Adopción de React 19 y Vite",
        rationale:
          "Garantiza compilaciones ultra-rápidas y tiempos de carga mínimos indispensables para el ritmo de trabajo en estaciones hospitalarias.",
      },
    ],
    challenges: [
      "Diseñar una jerarquía visual que mantenga la legibilidad en formularios densos (historias clínicas, posología farmacológica).",
      "Gestionar estados de sesión complejos respetando permisos multi-módulo de forma transparente.",
    ],
    repositoryFrontend: "https://github.com/LouguiAcostaMedina/his-frontend",
    repositoryBackend: null,
    liveUrl: "https://his-frontend-upeu.vercel.app/",
    deploymentNotes:
      "Despliegue activo en la infraestructura de Vercel con protección SSO / Vercel Authentication habilitada por seguridad institucional.",
    images: [],
    status: "completed",
    published: true,
    featured: true,
  },
  {
    id: "finatrack",
    slug: "finatrack",
    name: "FinaTrack — Gestión Financiera Personal",
    tagline: "Plataforma de finanzas personales, presupuestos y control inteligente de gastos.",
    description:
      "Aplicación web orientada a la salud financiera personal. Permite a los usuarios categorizar ingresos y gastos, planificar presupuestos mensuales y proyectar metas de ahorro mediante tableros analíticos intuitivos.",
    category: "Full Stack / Finanzas",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    features: [
      "Registro y clasificación inteligente de transacciones financieras.",
      "Creación de presupuestos por categoría con alertas de desviación.",
      "Visualización gráfica del flujo de caja mensual y anual.",
    ],
    problem: "Pendiente de publicación.",
    objective: "Pendiente de publicación.",
    repositoryFrontend: "https://github.com/LouguiAcostaMedina/finatrack-web",
    repositoryBackend: null,
    liveUrl: "https://finatrack-web-upeu.vercel.app/",
    images: [],
    status: "planned",
    published: false, // RESERVADO: No se publica en catálogo, sitemap ni rutas públicas
    featured: false,
  },
];

// Helper: Proyectos públicos visibles en catálogo y home
export function getPublishedProjects(): Project[] {
  return PROJECTS.filter((project) => project.published);
}

// Helper: Proyectos destacados para home
export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.published && project.featured);
}

// Helper: Obtener proyecto individual protegido (solo si está publicado)
export function getProjectBySlug(slug: string): Project | null {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project || !project.published) {
    return null;
  }
  return project;
}

// Helper: Slugs de proyectos para generateStaticParams y sitemap
export function getAllProjectSlugs(): string[] {
  return PROJECTS.filter((p) => p.published).map((p) => p.slug);
}
