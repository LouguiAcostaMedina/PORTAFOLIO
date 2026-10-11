import { SKILL_CATEGORIES } from "@/data/skills";
import { Cpu, Layout, Server, Database, ShieldCheck, Wrench } from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Frontend Development": <Layout className="w-5 h-5 text-[var(--accent-primary)]" />,
  "Backend & APIs": <Server className="w-5 h-5 text-[var(--accent-secondary)]" />,
  "Bases de Datos & Persistencia": <Database className="w-5 h-5 text-[var(--accent-primary)]" />,
  "Testing & Calidad de Código": <ShieldCheck className="w-5 h-5 text-[var(--accent-secondary)]" />,
  "Herramientas & Entorno de Trabajo": <Wrench className="w-5 h-5 text-[var(--accent-primary)]" />,
};

export function TechStackSection() {
  return (
    <section id="tecnologias" className="py-20 sm:py-28 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            <Cpu className="w-4 h-4" />
            <span>Habilidades Respaldadas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Tech Stack & Herramientas
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Tecnologías utilizadas y validadas en proyectos de software reales. Sin indicadores arbitrarios de porcentaje; cada herramienta cuenta con un propósito específico en el ciclo de vida del software.
          </p>
        </div>

        {/* Categorías de Tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] flex flex-col justify-between space-y-5 hover:border-[var(--accent-primary)]/50 transition-all shadow-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center">
                    {CATEGORY_ICONS[cat.title] ?? <Cpu className="w-4 h-4 text-[var(--accent-primary)]" />}
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)]">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-0.5"
                  >
                    <div className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                      {skill.name}
                    </div>
                    <div className="text-[11px] text-[var(--text-muted)]">
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
