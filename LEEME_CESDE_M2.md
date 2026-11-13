# PROGANADO S.A.S. — PRODUCTO MOMENTO 2 (CESDE 2026-2)
**Materia:** Introducción a la Programación / Maquetación Web  
**Estudiantes:** Jeiser Abraham Gutiérrez Torres, Sebastián Correa, Héctor Pinto, Emilio Villanueva  
**Docente Evaluador:** Jonathan Felipe Piedrahita Nieto | **Aula 406**  
**Stack de Producción:** React 19 · Vite 6 · Tailwind CSS 3.4 · CSS Scroll-Driven Animations (Baseline 2026) · Lucide Icons

---

## 📌 1. Visión General del Entregable

Este producto representa la interfaz web moderna e interactiva de **ProGanado S.A.S.**, el sistema de información ganadero para la gestión de hatos lecheros y control de inocuidad (normativa ICA / acopio Colanta) en Antioquia.

Inicialmente concebido sobre plantillas rígidas de Bootstrap 5, el proyecto fue elevado y refactorizado a una arquitectura moderna basada en componentes con **React 19**, **Vite** y **Tailwind CSS**, incorporando la especificación **Baseline 2026 de animaciones nativas en CSS** gobernadas por scroll.

---

## 🛠️ 2. Arquitectura Técnica y Cumplimiento de la Rúbrica

### A. Estructura Semántica HTML5 Pura
Toda la aplicación se compone mediante elementos semánticos estándar:
- `<header>`: Barra superior institucional con navegación y badges de alerta.
- `<nav>`: Enlaces de cambio de contexto SPA (Dashboard, Inventario, Sanidad, Propuesta SaaS).
- `<main>`: Contenedor central flexible para renderizado dinámico de vistas.
- `<section>` y `<article>`: Tarjetas modulares de métricas zootécnicas e inventario bovino.
- `<footer>`: Pie de página corporativo con créditos institucionales del CESDE.

### B. Estilos y Diseño Responsivo (Tailwind CSS + CSS3)
- **Sistema de Rejilla Fluido:** Grid responsivo de 1 columna en móviles, 2 en tablets y 4 en pantallas grandes (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
- **Paleta Oficial ProGanado:**
  - Verde Esmeralda Institucional: `#0b291b` (Header y Hero)
  - Verde Campo Primario: `#198754` (Botones de acción y acentos)
  - Fondo Base Limpio: `#f8fbf9`
  - Tarjetas Blancas Premium: `#ffffff` con bordes suaves `#e2ece6`
- **Componentes React Bits:** Tarjetas interactivas `<SpotlightCard />` con halo de iluminación radial suave según la posición del cursor.

### C. Innovación: CSS Scroll-Driven Animations (0 JS)
Se añadieron dos animaciones nativas en `src/index.css` que corren directamente en la GPU del navegador sin sobrecargar la CPU con JavaScript:
1. **Barra de Progreso de Lectura (`.scroll-progress-bar`):**
   ```css
   @supports (animation-timeline: scroll()) {
     .scroll-progress-bar {
       animation: scrollProgress linear;
       animation-timeline: scroll();
     }
   }
   ```
2. **Revelación de Elementos en Viewport (`.scroll-reveal`):**
   ```css
   @supports (animation-timeline: view()) {
     .scroll-reveal {
       animation: scrollReveal linear both;
       animation-timeline: view();
       animation-range: entry 5% cover 28%;
     }
   }
   ```

### D. Interactividad y Reactividad (React 19)
- **Filtrado en Tiempo Real:** Búsqueda reactiva instantánea por arete/chapa, nombre y raza sin recargas de página.
- **Filtros por Chips de Estado:** Visualización segmentada de vacas en ordeño, secas y gestantes.
- **Persistencia en `localStorage`:** Los nuevos bovinos registrados mediante `<RegisterModal />` se guardan en el almacenamiento local del navegador, manteniéndose visibles tras recargar la página.

---

## 📂 3. Estructura de Archivos del Proyecto

```
ProGanado_Web/
├── index.html                  # Punto de entrada HTML5 semántico
├── vite.config.js              # Configuración del empaquetador ultrarrápido Vite 6
├── tailwind.config.js          # Configuración de paleta corporativa y tipografía
├── src/
│   ├── main.jsx                # Montaje de la aplicación en #root
│   ├── App.jsx                 # Componente orquestador y gestión de estado global
│   ├── index.css               # Directivas Tailwind y Scroll-Driven Animations
│   ├── data/
│   │   └── bovinosData.js      # Datos zootécnicos iniciales de producción
│   └── components/
│       ├── Navbar.jsx          # Header institucional y navegación reactiva
│       ├── DashboardView.jsx   # Hero, KPIs zootécnicos y acopio Colanta
│       ├── InventoryView.jsx   # Grid de bovinos con búsqueda y filtros
│       ├── HealthModule.jsx    # Alertas de retiro de antibiótico e inocuidad ICA
│       ├── LandingView.jsx     # Propuesta de valor SaaS y scroll-reveal
│       ├── RegisterModal.jsx   # Formulario reactivo de alta con validación
│       ├── CowDetailModal.jsx  # Ficha técnica individual de cada animal
│       ├── SpotlightCard.jsx   # Tarjetas con iluminación radial interactiva
│       └── CountUp.jsx         # Animación fluida de contadores numéricos
└── GUIA_DE_SUSTENTACION_ORAL_M2.md # Guía para la defensa oral ante el docente
```

---

## 🚀 4. Cómo Ejecutar la Aplicación

### Opción 1: Entorno de Desarrollo Local
```bash
npm install
npm run dev
```
Abre automáticamente en `http://localhost:5173`.

### Opción 2: Compilación de Producción
```bash
npm run build
npm run preview
```
Genera un bundle estático optimizado en la carpeta `dist/` listo para despliegue en cualquier hosting estático (Vercel, Netlify o GitHub Pages).
