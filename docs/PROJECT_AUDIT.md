# Auditoría de Proyectos y Fuentes — Andre Acosta Medina

Fecha: Octubre 2026  
Entorno: Local / Windows / Node v22.16.0 / npm 11.5.2

## 1. Inspección de Fuentes Externas

### Portafolio Anterior
- **URL**: `https://acosta-portafolio-2025.vercel.app/`
- **Estado**: Activo (HTTP 200).
- **Diagnóstico**: Sitio estático HTML/CSS/JS con diseño genérico, partículas e imágenes de stock no auténticas. Se toma como referencia de partida para evolucionar hacia una arquitectura moderna en Next.js App Router con tipografía editorial, diseño responsivo, dark/light mode y enfoque de caso de estudio técnico.

---

## 2. Proyectos del Catálogo

### Proyecto 1: Kerigma — Sistema de Gestión Misionera (SGM)
- **Categoría**: Full Stack / Gestión / Dashboards
- **Repositorio Frontend**: `https://github.com/LouguiAcostaMedina/kerigma-frontend`
  - **Identificador de paquete**: `iglesia-frontend`
  - **Stack verificado**: React 19.1.1, Vite 7.1.2, React Router 7.8.0, Axios, Chart.js 4.5.0, react-chartjs-2, html2canvas, jsPDF, jsPDF-autotable, XLSX, QR Code, Storybook 10.5.8, Vitest, ESLint 9.
  - **Módulos y características**: Dashboard con métricas e indicadores de gestión, control de roles (`administrador`, `director`, `lider`, `lector`), exportaciones a PDF y Excel, reportes analíticos, check-in por código QR, gestión de iglesias, miembros y grupos.
- **Repositorio Backend**: `https://github.com/LouguiAcostaMedina/kerigma-backend`
  - **Identificador de paquete**: `mission-system-backend` v2.0.0
  - **Stack verificado**: Node.js >=18 / 20+, TypeScript 5.7.2 estricto, Express 4.21.2, Sequelize 6.37.7, PostgreSQL (pg 8.16.3), Redis 6.2.0 (cache), Zod 3.23.8 (validación de esquemas), Vitest 4.1.10 (unit e integration tests), JWT HttpOnly cookies, Helmet, Morgan, Winston, Rate limiting, aislamiento por iglesia (`scopeByChurch`).
  - **Pruebas y calidad**: Vitest con cobertura completa en servicios clave (`metric`, `attendance`, `goal`), scripts de smoke test en 23 endpoints.
- **Despliegue público**: No cuenta con despliegue público documentado (entorno de pruebas local / intranet). Se documenta con honestidad técnica.
- **Ruta de caso de estudio**: `/projects/kerigma`

---

### Proyecto 2: HIS UPeU — Hospital Information System Frontend
- **Categoría**: Frontend / Enterprise Web Application
- **Repositorio Frontend**: `https://github.com/LouguiAcostaMedina/his-frontend`
  - **Identificador de paquete**: `front`
  - **Stack verificado**: React 19.1.0, Vite 6.3.5, Tailwind CSS 4, React Router 7.6.2, @auth0/auth0-react 2.24.1, Lucide React, Axios, Sonner.
  - **Arquitectura**: Arquitectura por capas (Clean Architecture / DDD ligero con capas `presentation/` e `infrastructure/`).
  - **Módulos verificados en código**:
    1. *Core Clínico*: Citas médicas, sistema de turnos, consultas ambulatorias, laboratorio clínico, historial clínico electrónico unificado, gestión de documentos médicos.
    2. *Gestión de Pacientes*: Directorio de pacientes y registro/admisión de nuevos pacientes.
    3. *Farmacia & Suministros*: Control de farmacia, Terminal Punto de Venta (POS) de farmacia, logística e inventario de insumos.
    4. *Soporte & Mesa de Ayuda*: Helpdesk TI y atención a incidencias.
    5. *Facturación & Finanzas*: Emisión de comprobantes y estado de cuentas.
    6. *Informes Médicos*: Generación de reportes clínicos.
    7. *Directorio Médico y Especialidades*: Gestión con control estricto de roles (`admin`).
    8. *Sedes Clínicas*: Gestión multi-sede (rol `superadmin`).
    9. *Auditoría & Seguridad*: Logs de eventos y trazabilidad criptográfica (rol `superadmin`).
- **Despliegue**: `https://his-frontend-upeu.vercel.app/`
  - **Estado actual**: Despliegue en Vercel con protección SSO / Deployment Protection activa (requiere autenticación de equipo Vercel para acceso externo). Se indica el enlace y su condición técnica.
- **Ruta de caso de estudio**: `/projects/his-upeu`

---

### Proyecto 3: FinaTrack — Gestión Financiera Personal y Presupuestos
- **Estado**: **RESERVADO PARA INCORPORACIÓN FUTURA**
- **Condición**:
  - Repositorio `https://github.com/LouguiAcostaMedina/finatrack-web`: Privado / no accesible públicamente (HTTP 404).
  - Despliegue `https://finatrack-web-upeu.vercel.app/`: Redirige a protección SSO de Vercel.
- **Configuración en portafolio**:
  - `status: "planned"`
  - `featured: false`
  - `published: false`
- **Comportamiento**:
  - Oculto de la interfaz pública y de listados de proyectos.
  - Oculto de sitemap y metadatos públicos.
  - Ruta `/projects/finatrack` responde 404 dinámicamente hasta que `published` sea `true`.
  - Estructura tipada lista para incorporar datos reales cuando se libere el proyecto sin modificar la arquitectura.

---

## 3. Proyectos Excluidos Explícitamente
Conforme a la consigna estricta, no se incluyen:
- NumericaLab
- Simulador Física II
- PharmaMobile
- ClinicaMobil
- Proyectos dinámicos automáticos desde la API de GitHub.
