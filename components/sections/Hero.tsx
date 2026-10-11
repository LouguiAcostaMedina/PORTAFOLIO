import Link from "next/link";
import { ArrowDown, Mail, Terminal, Layers, ShieldCheck, Database, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Resplandor decorativo de fondo sutil */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[var(--accent-glow)] rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Columna de Contenido Editorial */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badge de estado real y académico */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[var(--badge-border)] bg-[var(--badge-bg)] text-[var(--badge-text)] text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span>Universidad Peruana Unión (UPeU) • Ingeniería de Sistemas</span>
            </div>

            {/* Título Principal Autorizado */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]">
              Construyo experiencias digitales y software{" "}
              <span className="text-[var(--accent-primary)] underline decoration-[var(--border-color)] decoration-wavy underline-offset-8">
                que resuelve problemas.
              </span>
            </h1>

            {/* Subtítulo Profesional Real */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Soy desarrollador de software y estudiante de Ingeniería de Sistemas. Me enfoco en construir aplicaciones web modernas, APIs, soluciones Full Stack y sistemas mantenibles, prestando atención a la arquitectura, la experiencia de usuario y la calidad del código.
            </p>

            {/* Tags de Enfoque */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                TypeScript Estricto
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                React & Next.js
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                Node.js & Express
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                PostgreSQL & Sequelize
              </span>
            </div>

            {/* Acciones Principales Autorizadas */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-primary)] text-[#0B1020] font-semibold text-sm hover:bg-[var(--accent-hover)] transition-all transform hover:-translate-y-0.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <span>Explorar proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all transform hover:-translate-y-0.5 shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
              >
                <Mail className="w-4 h-4" />
                <span>Contactarme</span>
              </Link>
            </div>
          </div>

          {/* Columna Gráfica Propia: Vitrina Arquitectónica de Código y Principios */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] p-5 sm:p-6 shadow-md relative overflow-hidden transition-all hover:border-[var(--accent-primary)]/50 group">
              {/* Header de consola */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span>developer.profile.ts</span>
                </div>
              </div>

              {/* Módulos de Enfoque de Ingeniería */}
              <div className="space-y-3 font-mono text-xs text-[var(--text-secondary)]">
                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-1">
                  <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                    <Layers className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Arquitectura en Capas & DDD</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Separación clara de responsabilidades: controladores, servicios, modelos y validación estricta de esquemas.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-1">
                  <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[var(--accent-secondary)]" />
                    <span>Seguridad & Control de Roles</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Manejo de tokens, cookies seguras HttpOnly, rate limiting, middlewares de autorización y auditoría.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-1">
                  <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                    <Code2 className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Frontend Declarativo & Accesible</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Diseño modular en React, tipado estricto con TypeScript y experiencia fluida orientada al usuario final.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-1">
                  <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                    <Database className="w-4 h-4 text-[var(--accent-secondary)]" />
                    <span>Persistencia & Calidad</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Modelado relacional con Sequelize/PostgreSQL, validaciones con Zod y pruebas automatizadas con Vitest.
                  </p>
                </div>
              </div>

              {/* Pie de la tarjeta */}
              <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span>status: ready_to_build</span>
                <span className="text-[var(--accent-primary)] font-semibold">git: clean</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
