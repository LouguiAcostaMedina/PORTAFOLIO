import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { GithubIcon, ExternalLinkIcon } from "@/components/ui/icons";
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Lightbulb,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Deshabilita la generación dinámica en tiempo de petición: solo los slugs publicados existen
export const dynamicParams = false;

// Genera rutas estáticas exclusivamente para proyectos con published: true
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Metadatos dinámicos con protección contra proyectos no publicados
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Andre Acosta",
      description: "El proyecto solicitado no existe o no se encuentra publicado.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.name} | Estudio de Caso — Andre Acosta`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Estudio de Caso`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Protección estricta: si no existe o published === false -> HTTP 404
  if (!project) {
    notFound();
  }

  const isFullStack = Boolean(project.repositoryFrontend && project.repositoryBackend);

  return (
    <article className="py-12 sm:py-20 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navegación de retorno */}
        <div className="mb-8">
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-md px-1 py-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a proyectos</span>
          </Link>
        </div>

        {/* Encabezado Editorial del Caso de Estudio */}
        <header className="space-y-4 pb-8 border-b border-[var(--border-color)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--accent-primary)]">
              {project.category}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
              {project.status === "completed" ? "Proyecto Verificado" : "En Desarrollo"}
            </span>
            {isFullStack && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                Frontend & Backend Desacoplados
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            {project.tagline}
          </p>

          {/* Enlaces y Recursos del Proyecto */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.repositoryFrontend && (
              <a
                href={project.repositoryFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repositorio Frontend</span>
              </a>
            )}

            {project.repositoryBackend && (
              <a
                href={project.repositoryBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Repositorio Backend (API)</span>
              </a>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-[#0B1020] text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all shadow-xs"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                <span>Ver Aplicación</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-xs text-[var(--text-muted)] font-mono">
                <span>Despliegue público: Entorno local / Intranet</span>
              </div>
            )}
          </div>

          {project.deploymentNotes && (
            <p className="text-xs text-[var(--text-muted)] italic pt-1">
              Nota técnica: {project.deploymentNotes}
            </p>
          )}
        </header>

        {/* Contenido Modular del Caso de Estudio */}
        <div className="py-10 space-y-12">
          {/* 1. Resumen y Contexto */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Visión General del Proyecto</span>
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* 2. El Problema y Objetivo */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.problem && (
              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--accent-secondary)] font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>El Desafío / Problema</span>
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {project.objective && (
              <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[var(--accent-primary)] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Objetivo de la Solución</span>
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.objective}
                </p>
              </div>
            )}
          </section>

          {/* 3. Arquitectura del Sistema */}
          {project.architectureNotes && project.architectureNotes.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>Arquitectura & Patrones de Diseño</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {project.architectureNotes.map((note, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono font-bold flex items-center justify-center shrink-0 text-[var(--accent-primary)]">
                      {index + 1}
                    </span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 4. Funcionalidades y Módulos Verificados */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)]" />
              <span>Funcionalidades Verificadas en Código</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Decisiones Técnicas Respaldadas */}
          {project.decisions && project.decisions.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-[var(--accent-secondary)]" />
                <span>Decisiones de Ingeniería Fundamentadas</span>
              </h2>
              <div className="space-y-3">
                {project.decisions.map((decision, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] space-y-1.5"
                  >
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {decision.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {decision.rationale}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Desafíos Técnicos Documentados */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-[var(--accent-primary)]" />
                <span>Desafíos & Aprendizajes Técnicos</span>
              </h2>
              <ul className="space-y-2.5">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="p-4 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-sm text-[var(--text-secondary)] flex items-start gap-3"
                  >
                    <span className="text-[var(--accent-primary)] font-mono font-bold">›</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 7. Stack Completo */}
          <section className="space-y-4 pt-4 border-t border-[var(--border-color)]">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              Tecnologías y Herramientas del Proyecto
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Footer de Navegación del Estudio */}
          <div className="pt-8 border-t border-[var(--border-color)] flex items-center justify-between">
            <Link
              href="/#proyectos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] hover:underline underline-offset-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Explorar otros proyectos</span>
            </Link>

            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <span>Conversar sobre este proyecto</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
