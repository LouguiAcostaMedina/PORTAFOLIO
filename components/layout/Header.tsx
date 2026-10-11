"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

const NAV_ITEMS = [
  { label: "Inicio", href: "/#hero" },
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Tecnologías", href: "/#tecnologias" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-primary)]/85 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logotipo tipográfico personal */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-[var(--text-primary)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-md px-1 py-0.5"
          aria-label="Ir al inicio - Andre Acosta Medina"
        >
          <span className="w-7 h-7 rounded-md bg-[var(--accent-primary)] text-[#0B1020] font-black text-xs flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
            AA
          </span>
          <span className="text-base sm:text-lg font-semibold tracking-tight">
            Andre Acosta
          </span>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded-full border border-[var(--border-color)] text-[var(--text-muted)] bg-[var(--bg-secondary)]">
            Dev
          </span>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-1.5 rounded-md hover:bg-[var(--bg-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Controles: GitHub + ThemeToggle + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/LouguiAcostaMedina"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            aria-label="Perfil de GitHub de Andre Acosta (abre en nueva pestaña)"
            title="GitHub de Andre Acosta"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <ThemeToggle />

          {/* Botón hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] cursor-pointer"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-4 space-y-1 transition-all">
          <nav className="flex flex-col space-y-1" aria-label="Navegación móvil">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[var(--text-primary)] px-3 py-2.5 rounded-lg hover:bg-[var(--bg-card)] flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)]" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
