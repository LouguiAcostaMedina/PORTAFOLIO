import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1020" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Andre Acosta Medina | Software Developer",
  description:
    "Portafolio profesional de Lougui Andre Acosta Medina. Desarrollador de Software y estudiante de Ingeniería de Sistemas en la Universidad Peruana Unión (UPeU). Aplicaciones web modernas, APIs REST, soluciones Full Stack y arquitectura de software.",
  keywords: [
    "Andre Acosta Medina",
    "Lougui Andre Acosta",
    "Software Developer",
    "Full Stack",
    "Backend Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "UPeU",
    "Kerigma",
    "HIS UPeU",
  ],
  authors: [{ name: "Andre Acosta Medina", url: "https://github.com/LouguiAcostaMedina" }],
  creator: "Andre Acosta Medina",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://andreacosta-portfolio.vercel.app/",
    title: "Andre Acosta Medina | Software Developer",
    description:
      "Desarrollador de Software enfocado en aplicaciones web modernas, APIs REST, soluciones Full Stack y sistemas mantenibles.",
    siteName: "Portafolio Andre Acosta Medina",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark) || !saved) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased selection:bg-[var(--accent-primary)] selection:text-[#0B1020]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--accent-primary)] text-[#0B1020] font-semibold rounded-md shadow-md outline-none"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
