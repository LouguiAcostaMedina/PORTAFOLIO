"use client";

import { useState } from "react";
import { PROFILE } from "@/data/profile";
import { GithubIcon, ExternalLinkIcon } from "@/components/ui/icons";
import { Mail, Copy, Check, Send, Sparkles } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contacto" className="py-20 sm:py-28 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)] p-8 sm:p-12 text-center space-y-8 shadow-sm relative overflow-hidden">
          {/* Resplandor */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[var(--accent-glow)] rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-primary)] px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)]">
              <Mail className="w-3.5 h-3.5" />
              <span>Canales de Contacto Directo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
              ¿Conversamos sobre un proyecto o desafío técnico?
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              Disponible para colaborar en proyectos de desarrollo de software, pasantías y oportunidades Full Stack o Backend. Puedes escribirme directamente por correo institucional o explorar mis repositorios.
            </p>
          </div>

          {/* Tarjeta de Correo con Copiado Interactivo y Mailto */}
          <div className="max-w-md mx-auto p-4 sm:p-5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-[var(--text-muted)] block font-semibold">
                  Correo Institucional (UPeU)
                </span>
                <span className="text-sm font-mono font-medium text-[var(--text-primary)] select-all">
                  {PROFILE.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all cursor-pointer shadow-2xs"
                title="Copiar correo al portapapeles"
                aria-label="Copiar correo electrónico al portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[var(--accent-primary)] text-[#0B1020] text-xs font-semibold hover:bg-[var(--accent-hover)] transition-all shadow-2xs"
                aria-label="Abrir cliente de correo para enviar mensaje a Andre Acosta"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Escribir</span>
              </a>
            </div>
          </div>

          {/* Enlaces Reales Verificados */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/LouguiAcostaMedina</span>
            </a>

            <a
              href={PROFILE.previousPortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>Portafolio Anterior (2025)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
