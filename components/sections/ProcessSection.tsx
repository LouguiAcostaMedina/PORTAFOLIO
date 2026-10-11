import { GitBranch, Search, PenTool, Code2, TestTube2, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Análisis & Requisitos",
    icon: <Search className="w-5 h-5 text-[var(--accent-primary)]" />,
    description:
      "Comprensión del dominio y delimitación del alcance técnico. Identificación de entidades, flujos críticos y reglas de negocio.",
  },
  {
    step: "02",
    title: "Diseño & Arquitectura",
    icon: <PenTool className="w-5 h-5 text-[var(--accent-secondary)]" />,
    description:
      "Definición de capas de software, esquemas de base de datos relacional, contratos de endpoints y sistema visual con tokens semánticos.",
  },
  {
    step: "03",
    title: "Implementación Type-Safe",
    icon: <Code2 className="w-5 h-5 text-[var(--accent-primary)]" />,
    description:
      "Construcción modular en React y Node.js con TypeScript estricto, validación declarativa con Zod y componentes desacoplados.",
  },
  {
    step: "04",
    title: "Pruebas & Validación",
    icon: <TestTube2 className="w-5 h-5 text-[var(--accent-secondary)]" />,
    description:
      "Automatización de pruebas con Vitest, pruebas de integración de endpoints, verificación de build y accesibilidad de interfaz.",
  },
  {
    step: "05",
    title: "Despliegue & Monitoreo",
    icon: <Rocket className="w-5 h-5 text-[var(--accent-primary)]" />,
    description:
      "Configuración de pipelines, variables de entorno seguras, optimización de bundles e integración continua en plataformas como Vercel.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            <GitBranch className="w-4 h-4" />
            <span>Metodología de Trabajo</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Proceso de Desarrollo
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Flujo estructurado de ingeniería de software orientado a la confiabilidad, legibilidad y entrega incremental con verificación continua en cada fase.
          </p>
        </div>

        {/* Pasos del Proceso */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between space-y-4 hover:border-[var(--accent-primary)]/50 transition-all shadow-2xs group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-extrabold text-[var(--accent-primary)] px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  {step.step}
                </span>
                <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
