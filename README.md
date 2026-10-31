# 🐄 ProGanado S.A.S. — Producto Momento 2

**Materia:** Introducción a la Programación / Diseño Web  
**Institución:** CESDE · Medellín, Colombia  
**Semestre:** 2026-2 | **Aula:** 406  
**Docente:** Jonathan Felipe Piedrahita Nieto  
**Estudiantes Desarrolladores:**
- Jeiser Abraham Gutiérrez Torres (`@jeiserlabs`)
- Sebastián Correa
- Héctor Pinto
- Emilio Villanueva

---

## 📁 Dónde se trabaja (SSOT)

| Qué | Dónde |
|---|---|
| Página web (este repo) | `C:\PROYECTOS\Mis_Proyectos\ProGanado_Web` · `jeiserlabs/proganado-producto-momento-2` |
| Código, DDL, TS, Zod, PSeInt y tests | `C:\PROYECTOS\Mis_Proyectos\ProGanado` · `jeiserlabs/proganado` |
| PDFs, PPTX, assets y ZIP | https://drive.google.com/drive/folders/1_Ozo8XA7UjZPFWDf9WtDfhg5XgCmmKns |
| Mapa de rutas y timeline | [`docs/sustentacion_2026/SSOT_Y_TIMELINE.md`](https://github.com/jeiserlabs/proganado/blob/main/docs/sustentacion_2026/SSOT_Y_TIMELINE.md) |

**Regla:** se trabaja en local, se sube a GitHub y se actualiza Drive en la misma sesión. No se crean copias de estudio en el Escritorio.

---

## 🌐 Ver en Vivo (GitHub Pages)
👉 **[Abrir ProGanado en el Navegador](https://jeiserlabs.github.io/proganado-producto-momento-2/)** *(Compatible con móvil, tablet y PC)*

> **⚡ Publicación automática en GitHub Pages:**  
> El frontend está alojado en **GitHub Pages**. Cada vez que se realiza un `git push origin main`, GitHub Pages publica automáticamente el contenido estático en uno o dos minutos; no hay backend ni compilación. Cero servidores manuales ni configuraciones complejas.

---

## 📌 Descripción del Entregable

Este repositorio contiene la entrega oficial del **Producto del Momento 2** para el Proyecto Integrador **ProGanado S.A.S.**:
- **Arquitectura de Tres Vistas (Multi-página HTML5):**
  0. `landing.html`: presentación comercial con el problema, los datos de ejemplo y las capacidades de la maqueta.
  1. `index.html`: **Pantalla de Inicio de Sesión (Login Gate)** con diseño split-screen en Bootstrap 5, contexto ganadero, formulario abierto de **acceso demo** (sin validación real ni JWT).
  2. `dashboard.html`: **Panel de Control Operativo Completo** con Navbar sticky, resumen de agenda sanitaria, composición del hato con barras de progreso, acopio Colanta, tabla de inventario, carrusel y modales nativos.
- **Sin archivos JavaScript propios:** la navegación, los modales, el carrusel y el menú colapsable funcionan con el bundle de Bootstrap y los atributos oficiales (`data-bs-toggle="modal"`, `data-bs-target`, `data-bs-ride="carousel"`). El único JavaScript inline son dos atributos mínimos: `onclick="window.print()"` y `onsubmit="return false"`. No hay lógica de negocio en el navegador.

---

## 🚀 Módulos y Componentes Implementados

1. **Barra de Navegación Fija (`.navbar .sticky-top`):**
   - Menú superior con logotipo corporativo, acceso ganadero y adaptación automática a menú hamburguesa (`.navbar-toggler`) en celulares.
2. **Hero Section:**
   - Banner de alto impacto visual con tipografía escalada (`.display-5`, `.lead`), insignias BPG y botones de acción rápida.
3. **Panel de Inicio Operativo (`#panel-inicio`):**
   - Resumen ejecutivo de la finca con imagen panorámica, agenda sanitaria con alertas de retiro de antibióticos, composición zootécnica del hato con barras de progreso y reporte de última entrega de acopio Colanta (480 L, grasa, proteína y prueba de antibióticos).
4. **Métricas Zootécnicas (Bento Grid):**
   - 4 tarjetas informativas (`.card`) que totalizan el hato, gestaciones, vacas en retiro sanitario ICA y producción de leche para acopio Colanta.
5. **Inventario General de Bovinos:**
   - Tabla estilizada (`.table .table-hover .table-striped .table-responsive`) con 8 registros de ejemplo, fotografías individuales, estados productivos y badges de estado.
6. **Carrusel Fotográfico:**
   - Deslizador animado (`.carousel .carousel-fade`) con evidencia de campo, bienestar bovino y ordeño higiénico.
7. **Inocuidad y Alerta Farmacológica ICA:**
   - Módulo de seguimiento de días de retiro con alerta de Buenas Prácticas Ganaderas (normativa ICA aplicable) para proteger el tanque de leche de Colanta.
8. **Potreros Voisin (PRV):**
   - Monitoreo agroecológico de rotación con barras de progreso (`.progress-bar`) para días de ocupación y descanso forrajero.
9. **Modales Nativos Oficiales de Bootstrap:**
   - Modal de Acceso Ganadero / Login (`#modalLogin`).
   - Modal de Alta de Bovino (`#modalRegistroBovino`; formulario visual, no persiste).
   - Modal de Ficha Técnica de ejemplo (`#modalDetalleBovino`; muestra Mariposa).
   - Modal de Política de Protección de Datos (`#modalPrivacidad` bajo la Ley 1581 de 2012).

---

## 📚 Documentación de Sustentación Incluida

- 📄 **[Guía de Sustentación "For Dummies" (PDF)](GUIA_SUSTENTACION_PROGANADO_FOR_DUMMIES.pdf):** Documento pedagógico paso a paso con las respuestas a las preguntas del docente y guion de exposición oral.
- 📋 **[Ficha Técnica Rúbrica CESDE](LEEME_CESDE_M2.md):** Mapeo técnico de cada clase de Bootstrap contra la rúbrica evaluativa.

---

## 💻 Cómo Descargar y Probar en Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jeiserlabs/proganado-producto-momento-2.git
   ```
2. O descarga el archivo ZIP directamente desde el botón verde **Code ➔ Download ZIP**.
3. Abre el archivo `index.html` en cualquier navegador web.
