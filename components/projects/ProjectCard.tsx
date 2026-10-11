import Link from "next/link";
import { Project } from "@/data/projects";
import { GithubIcon, ExternalLinkIcon } from "@/components/ui/icons";
import { ArrowRight, Code, Server, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isFullStack = Boolean(project.repositoryFrontend && project.repositoryBackend);

  return (
    <article className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-primary)]/70 hover:shadow-lg flex flex-col group">
      {/* Cabecera visual neutra de alta fidelidad técnica */}
      <div className="p-6 sm:p-7 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Glow sutil */}
        <div
          className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--accent-glow)] rounded-full blur-2xl group-hover:scale-125 transition-transform"
          aria-hidden="true"
        />

        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="text-xs font-mono font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--accent-primary)]">
            {project.category}
          </span>

          <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-muted)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>Verificado</span>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-visible:outline-none focus-visible:underline decoration-2"
          >
            {project.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
          {project.tagline}
        </p>

        {/* Indicadores de Arquitectura */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          {isFullStack ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)] font-medium">
              <Server className="w-3 h-3" />
              <span>Full Stack Desacoplado (Front + Back)</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] font-medium">
              <Code className="w-3 h-3" />
              <span>Frontend Enterprise • Clean Architecture</span>
            </span>
          )}
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        {/* Características principales */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            Módulos y Capacidades Verificadas
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
            {project.features.slice(0, 3).map((feat, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stack de Tecnologías */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2.5">
            Tecnologías Implementadas
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                +{project.technologies.length - 6} más
              </span>
            )}
          </div>
        </div>

        {/* Acciones y Enlaces Externos */}
        <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.repositoryFrontend && (
              <a
                href={project.repositoryFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
                title="Ver repositorio Frontend en GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Frontend</span>
              </a>
            )}

            {project.repositoryBackend && (
              <a
                href={project.repositoryBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
                title="Ver repositorio Backend en GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Backend</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
                title="Abrir despliegue (requiere acceso institucional SSO)"
              >
                <ExternalLinkIcon className="w-3.5 h-3.5" />
                <span>Despliegue</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--accent-primary)] hover:underline underline-offset-4 group/link"
          >
            <span>Estudio de caso</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
