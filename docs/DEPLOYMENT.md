# Guía de Despliegue en Vercel (Deployment Guide)

**Proyecto:** Portafolio Profesional de Andre Acosta Medina  
**Framework:** Next.js (App Router, Turbopack)  
**Estado:** Preparado para despliegue en Vercel (Zero-Config)

---

## 1. Requisitos Previos

- Repositorio en GitHub sincronizado en la rama de entrega (`main` o `feature/portfolio-redesign-acosta`).
- Cuenta en [Vercel](https://vercel.com).
- Node.js 20+ o 22 compatible con Next.js 16.

---

## 2. Configuración en Vercel

1. **Importar Proyecto:**
   - En el panel de Vercel, hacer clic en **Add New...** > **Project**.
   - Seleccionar el repositorio `PORTAFOLIO` de la cuenta de GitHub `LouguiAcostaMedina`.

2. **Ajustes de Compilación (Build & Output Settings):**
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `./` (raíz del workspace)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (detectado automáticamente)
   - **Install Command**: `npm install`

3. **Variables de Entorno (Environment Variables):**
   - Este portafolio no requiere variables de entorno obligatorias para compilar ni renderizar su información pública. Todo el contenido y las validaciones se encuentran desacopladas y tipadas en `data/projects.ts`, `data/profile.ts` y `data/skills.ts`.

---

## 3. Comandos Locales de Verificación

Antes de solicitar despliegue, ejecutar:

```bash
# 1. Pruebas unitarias de integridad
npm test

# 2. Comprobación estricta de tipos TypeScript
npm run typecheck

# 3. Validación de linting ESLint
npm run lint

# 4. Compilación estática de producción
npm run build

# 5. Smoke test E2E sobre el bundle compilado
node scripts/smoke-test.mjs
```

---

## 4. Pasos para Publicación con Aprobación del Usuario

1. **Revisión del diff:** Comprobar que todos los commits de la rama `feature/portfolio-redesign-acosta` han sido validados localmente.
2. **Fusión (Merge) a rama principal:**
   ```bash
   git checkout main
   git merge feature/portfolio-redesign-acosta
   ```
3. **Publicación remota (con autorización explícita del usuario):**
   ```bash
   git remote add origin https://github.com/LouguiAcostaMedina/PORTAFOLIO.git # si corresponde
   git push origin main
   ```
4. **Vercel CLI (opcional para despliegue manual):**
   ```bash
   npx vercel --prod
   ```
