import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-md w-full p-8 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-center space-y-6 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--accent-primary)] mx-auto flex items-center justify-center">
          <ShieldAlert className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
            Error 404 • Recurso No Disponible
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            Página o Proyecto No Encontrado
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            La página que buscas no existe o corresponde a un proyecto en estado reservado que aún no ha sido publicado en el catálogo oficial.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-primary)] text-[#0B1020] text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
