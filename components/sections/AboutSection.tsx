import { PROFILE } from "@/data/profile";
import { GraduationCap, Code2, Compass, CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Introducción & Formación Académica */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
              <Compass className="w-4 h-4" />
              <span>Perfil Profesional</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Sobre mí
            </h2>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              {PROFILE.bio}
            </p>

            {/* Tarjeta de Formación Universitaria Real */}
            <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3 shadow-xs">
              <div className="flex items-center gap-3 text-[var(--text-primary)]">
                <div className="w-9 h-9 rounded-lg bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">
                    {PROFILE.university}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-medium">
                    {PROFILE.degree}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Formación universitaria enfocada en ingeniería de software, arquitectura de sistemas distribuidos, bases de datos y desarrollo de soluciones tecnológicas aplicadas.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Filosofía de Desarrollo & Principios */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Filosofía de Desarrollo & Calidad</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE.philosophy.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-2 hover:border-[var(--accent-primary)]/50 transition-colors shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-md bg-[var(--bg-secondary)] text-[var(--accent-primary)] font-mono text-xs font-bold flex items-center justify-center">
                    0{index + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Enfoque en Soluciones Mantenibles */}
            <div className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--accent-secondary)] font-semibold">
                Criterios Clave de Trabajo
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>Sin datos ficticios ni métricas infladas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>Modularidad e interoperabilidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>Código autodocumentado y versionado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>Diseño accesible y responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
