import { getPublishedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FolderGit2 } from "lucide-react";

export function ProjectsSection() {
  const projects = getPublishedProjects();

  return (
    <section id="proyectos" className="py-20 sm:py-28 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Encabezado de Sección */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
            <FolderGit2 className="w-4 h-4" />
            <span>Casos de Estudio & Proyectos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Software desarrollado y verificado
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Sistemas reales con repositorios auditables, arquitectura por capas, validación de esquemas y cobertura de pruebas. Cada caso de estudio documenta decisiones técnicas y aprendizajes aplicados.
          </p>
        </div>

        {/* Grilla de Proyectos Publicados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
