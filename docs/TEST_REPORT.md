# Informe de Pruebas y Aseguramiento de Calidad (Test Report)

**Fecha:** Octubre 2026  
**Proyecto:** Portafolio Profesional de Andre Acosta Medina  
**Entorno de Pruebas:** Node.js v22.16.0, npm 11.5.2, Next.js 16.4.0 (Turbopack), Windows  
**Rama:** `feature/portfolio-redesign-acosta`

---

## 1. Resumen Ejecutivo de Pruebas

| Categoría | Comando / Método | Estado | Evidencia Observada |
| :--- | :--- | :--- | :--- |
| **Linting** | `npm run lint` | **APROBADO** | 0 errores, 0 advertencias (ESLint 9 con reglas de React 19). |
| **Typecheck** | `npm run typecheck` | **APROBADO** | 0 errores en TypeScript estricto (`tsc --noEmit`). |
| **Pruebas Unitarias** | `npm test` (`node:test`) | **APROBADO** | 8 suites/tests ejecutados con éxito en 20ms. |
| **Smoke Tests E2E** | `node scripts/smoke-test.mjs` | **APROBADO** | Servidor de producción en puerto local: 5 rutas probadas con verificación de status codes y contenido. |
| **Build de Producción** | `npm run build` | **APROBADO** | 8 páginas estáticas/SSG generadas de forma óptima sin fallos de prerenderizado. |

---

## 2. Detalle de Pruebas Unitarias (`tests/projects.test.mjs`)

1. **Catálogo Base Controlado:** Verifica que el modelo contiene únicamente los 3 proyectos autorizados (`kerigma`, `his-upeu`, `finatrack`).
2. **Filtrado de Proyectos Públicos (`published: true`):** `getPublishedProjects()` devuelve exclusivamente 2 proyectos (`kerigma` y `his-upeu`).
3. **Reserva Segura de FinaTrack:** Confirma que FinaTrack posee `published: false`, `status: "planned"` y `featured: false`.
4. **Protección de Rutas Dinámicas:** `getProjectBySlug("finatrack")` devuelve `null`, activando la página 404 controlada.
5. **Aislamiento en Sitemap:** `getAllProjectSlugs()` excluye a FinaTrack de indexación en motores de búsqueda.
6. **Separación Arquitectónica de Kerigma:** Repositorios de Frontend y Backend diferenciados; sin enlaces falsos a despliegues públicos no existentes.
7. **Verificación de HIS UPeU:** Repositorio Frontend y URL de despliegue institucional comprobados.
8. **Integridad del Perfil:** Datos del desarrollador sin información ficticia, certificaciones no comprobadas ni redes inventadas.

---

## 3. Detalle de Smoke Tests de Servidor Local (`scripts/smoke-test.mjs`)

- `GET /` -> **HTTP 200 OK** (Renderiza titular hero, proyectos publicados Kerigma e HIS UPeU, sin links de portafolio anterior).
- `GET /projects/kerigma` -> **HTTP 200 OK** (Caso de estudio completo con arquitectura y stack desacoplado).
- `GET /projects/his-upeu` -> **HTTP 200 OK** (Caso de estudio frontend hospitalario y módulos clínicos).
- `GET /projects/finatrack` -> **HTTP 404 NOT FOUND** (Protegido por `dynamicParams = false` y `notFound()`).
- `GET /sitemap.xml` -> **HTTP 200 OK** (XML válido conteniendo únicamente rutas publicadas).

---

## 4. Pruebas de Accesibilidad & UX
- Contraste visual validado tanto en modo oscuro (`#0B1020` / `#F5F7FF` / `#68E1DB`) como en modo claro (`#F8FAFC` / `#0F172A` / `#0D9488`).
- Navegación por teclado operativa con skip-link `Saltar al contenido principal`.
- Enlaces externos provistos con `target="_blank"` y `rel="noopener noreferrer"`.
- Respeto del estándar `prefers-reduced-motion` integrado en CSS global.
