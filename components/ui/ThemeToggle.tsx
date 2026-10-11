"use client";

import { useSyncExternalStore, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [isDark, setIsDark] = useState<boolean>(true);

  // Sincronizar el estado con el DOM al montar en el cliente
  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    // Usar requestAnimationFrame para no bloquear el render sincrónico del efecto
    const frame = requestAnimationFrame(() => {
      setIsDark(hasDarkClass);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio-theme", "light");
    }
  };

  if (!isMounted) {
    return (
      <button
        type="button"
        className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] flex items-center justify-center opacity-70"
        aria-label="Cargando selector de tema"
        disabled
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-9 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all flex items-center justify-center cursor-pointer shadow-xs"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#F5F7FF] hover:text-[var(--accent-primary)] transition-colors" />
      ) : (
        <Moon className="w-4 h-4 text-[#0F172A] hover:text-[var(--accent-primary)] transition-colors" />
      )}
    </button>
  );
}
