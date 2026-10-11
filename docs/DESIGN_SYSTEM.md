# Sistema de Diseño — Portafolio Andre Acosta Medina

## 1. Filosofía y Dirección Visual
- **Concepto**: *Modern Software Engineer Portfolio / Editorial Tech / Product Showcase*.
- **Identidad**: Minimalismo tecnológico con enfoque editorial. Jerarquía visual rigurosa, contraste optimizado, tipografía legible y microinteracciones de alta fidelidad sin sobrecarga gráfica.
- **Enfoque**: Producto real y código verificado en el centro. Sin datos de experiencia ficticios, sin métricas inventadas y sin imágenes de stock irrelevantes.

---

## 2. Paleta de Color y Tokens Semánticos

### Modo Oscuro (Dark Mode - Predeterminado)
| Token | Valor Hex / RGBA | Uso |
| :--- | :--- | :--- |
| `--bg-primary` | `#0B1020` | Lienzo principal de fondo |
| `--bg-secondary` | `#131C2F` | Secciones alternas y barras de control |
| `--bg-card` | `#151F36` | Superficie de tarjetas y módulos |
| `--border-color` | `#23324E` | Separadores y contornos sutiles |
| `--text-primary` | `#F5F7FF` | Títulos y texto de alto contraste |
| `--text-secondary` | `#AAB7CD` | Párrafos y descripciones |
| `--text-muted` | `#7E8DA5` | Metadatos y etiquetas secundarias |
| `--accent-primary` | `#68E1DB` | Teal cibernético para acciones principales |
| `--accent-hover` | `#4ED2CC` | Estado hover de botones primarios |
| `--accent-secondary` | `#A78BFA` | Violeta pastel para badges complementarios |
| `--accent-glow` | `rgba(104, 225, 219, 0.18)` | Resplandores sutiles en tarjetas activas |

### Modo Claro (Light Mode)
| Token | Valor Hex / RGBA | Uso |
| :--- | :--- | :--- |
| `--bg-primary` | `#F8FAFC` | Fondo claro equilibrado |
| `--bg-secondary` | `#F1F5F9` | Superficies de apoyo |
| `--bg-card` | `#FFFFFF` | Tarjetas y contenedores |
| `--border-color` | `#E2E8F0` | Bordes suaves |
| `--text-primary` | `#0F172A` | Texto de lectura principal |
| `--text-secondary` | `#475569` | Descripciones y contexto |
| `--text-muted` | `#64748B` | Etiquetas terciarias |
| `--accent-primary` | `#0D9488` | Teal profundo para contraste AA |
| `--accent-hover` | `#0F766E` | Hover de acento |
| `--accent-secondary` | `#7C3AED` | Púrpura contrastado |

---

## 3. Tipografía y Jerarquía
- **Familia tipográfica**: Pila de fuentes de sistema de alto rendimiento: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` con renderizado subpixel optimizado.
- **Jerarquía de encabezados**:
  - `H1`: Título editorial hero (32px a 56px responsive, peso 700-800, leading ajustado).
  - `H2`: Títulos de sección (24px a 36px, peso 700 con indicador sutil de categoría).
  - `H3`: Títulos de tarjetas y módulos (18px a 22px, peso 600).
  - `Body`: Texto corrido (15px a 16px, leading 1.6 para máxima legibilidad).
  - `Mono`: Código, tags técnicos y métricas (13px a 14px, fuente monoespaciada).

---

## 4. Componentes y Estados
- **Header**: Fijo con backdrop-blur, isotipo tipográfico `AA / Andre Acosta`, enlaces anclados y conmutador de tema oscuro/claro con persistencia en `localStorage`. Menú responsive colapsable para dispositivos móviles.
- **Hero**: Composición editorial con declaración de propuesta de valor, tags de especialidad, enlaces de acción directa y badge de disponibilidad.
- **Tarjetas de Proyectos**: Estructura asimétrica que resalta roles, frontend/backend, stack técnico verificado, estado y botón al estudio de caso.
- **Accesibilidad**:
  - Contraste WCAG 2.2 AA verificado en ambos modos.
  - Indicador de foco `:focus-visible` distintivo.
  - Soporte explícito para `prefers-reduced-motion`.
  - Atributos semánticos `aria-label`, `aria-expanded` y landmarks HTML5 (`header`, `nav`, `main`, `section`, `footer`).
