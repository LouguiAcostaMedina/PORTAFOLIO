import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { GithubIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Identidad */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-5 h-5 rounded bg-[var(--accent-primary)] text-[#0B1020] font-black text-[10px] flex items-center justify-center">
              AA
            </span>
            <span className="text-sm font-bold text-[var(--text-primary)]">
              {PROFILE.preferredName}
            </span>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            {PROFILE.degree} • {PROFILE.university}
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--text-secondary)]" aria-label="Navegación del pie de página">
          <Link href="/#hero" className="hover:text-[var(--text-primary)] transition-colors">
            Inicio
          </Link>
          <Link href="/#proyectos" className="hover:text-[var(--text-primary)] transition-colors">
            Proyectos
          </Link>
          <Link href="/#sobre-mi" className="hover:text-[var(--text-primary)] transition-colors">
            Sobre mí
          </Link>
          <Link href="/#tecnologias" className="hover:text-[var(--text-primary)] transition-colors">
            Tecnologías
          </Link>
          <Link href="/#contacto" className="hover:text-[var(--text-primary)] transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Créditos y Copyright */}
        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-center hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
            aria-label="GitHub de Andre Acosta"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <span>© 2026 • Desarrollado con Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
