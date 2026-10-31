# PROGANADO S.A.S. — PRODUCTO MOMENTO 2 (CESDE 2026-2)
**Materia:** Introducción a la Programación / Diseño Web  
**Estudiantes:** Jeiser Abraham Gutiérrez Torres, Sebastián Correa, Héctor Pinto, Emilio Villanueva  
**Docente:** Jonathan Felipe Piedrahita Nieto | **Aula 406**

---

## 📌 Cumplimiento Estricto de la Rúbrica con Bootstrap 5

Este entregable implementa la capa visual y de interacción del Proyecto Integrador **ProGanado S.A.S.** sobre **Bootstrap 5.3.3**. Es una maqueta académica: los datos de la tabla y las métricas son de ejemplo, y el formulario visual no persiste. La persistencia real está en la demo SQLite de Python del paquete de Drive (`03_PAGINAS_WEB_Y_DEMO_EN_VIVO/demo_sqlite/`), que usa una tabla simplificada y no el DDL completo de 12 tablas.

### 1. Sistema de Rejilla (Grid System 12 Columnas)
- Contenedores (`.container`, `.container-fluid`), filas (`.row`) y columnas responsivas (`.col-12`, `.col-md-6`, `.col-lg-3`, `.col-lg-7`, etc.).
- Comportamiento fluido en móviles, tablets y escritorio.

### 2. Componentes Oficiales de Bootstrap Implementados
- **Navbar Responsive:** barra fija (`.navbar .navbar-expand-lg .sticky-top`) con menú hamburguesa (`.navbar-toggler`). Funciona con el bundle de Bootstrap.
- **Hero Banner:** tipografía escalada (`.display-5`, `.lead`), insignias (`.badge`) y botones (`.btn .btn-success`).
- **Tarjetas Bento Grid (Métricas):** 4 tarjetas (`.card`) con datos de ejemplo.
- **Carrusel Fotográfico:** `.carousel .slide .carousel-fade` con indicadores y controles. Funciona con el bundle de Bootstrap.
- **Tablas Responsivas:** `.table .table-hover .table-striped .table-responsive` con 8 registros de ejemplo y miniaturas.
- **Formularios Estructurados:** `.form-label`, `.form-control`, `.form-select`, `.input-group`, `.form-check-input` dentro del modal de alta. Es un formulario visual: no guarda ni añade filas.
- **Modales de Bootstrap:**
  1. `#modalRegistroBovino`: modal de alta visual; el formulario no persiste.
  2. `#modalDetalleBovino`: ficha de ejemplo de Mariposa (COL-1598). Todas las filas abren la misma ficha porque no hay JavaScript propio que cambie los datos.
  3. `#modalPrivacidad`: política de tratamiento de datos (Ley 1581 de 2012).
- **Botón de impresión:** `onclick="window.print()"` (uno de los dos atributos inline mínimos).

### 3. Interoperabilidad Zootécnica y Reglas de Negocio
- **Inocuidad ICA (normativa ICA aplicable):** la maqueta muestra badges de ejemplo (Apto Colanta / En Retiro). La regla real de cinta roja vive en SQL (`v_bovinos_cinta_roja`) y en TypeScript (`evaluarCintaRoja`); el PSeInt actual todavía no es fail-closed y debe corregirse antes de presentarlo como equivalente.
- **Pastoreo Racional Voisin (PRV):** panel visual con barras de progreso (`.progress .progress-bar`) y datos de ejemplo; no es telemetría real.

---

## ✅ Qué funciona y qué no (para no prometer de más)

| Elemento | ¿Funciona? | Detalle |
|---|---|---|
| Navegación entre páginas | Sí | Hipervínculos HTML |
| Navbar responsive / menú hamburguesa | Sí | Bundle de Bootstrap |
| Carrusel | Sí | Bundle de Bootstrap |
| Modales (registro, ficha, privacidad) | Sí | Atributos `data-bs-*` + bundle de Bootstrap |
| Botón Imprimir Reporte | Sí | `onclick="window.print()"` |
| Login | Demo | Formulario `GET` a `dashboard.html`; no valida credenciales ni crea sesión |
| Tabla y métricas | No | Datos estáticos de ejemplo (8 registros) |
| Buscador y filtro | No | Visuales; el filtro real está en la demo SQLite |
| Formulario Registrar Bovino | No | Visual; no guarda, no añade filas ni actualiza contadores |
| Toasts / exportar CSV | No | No existen en esta maqueta |
| JavaScript propio | No | Solo bundle de Bootstrap + dos atributos inline mínimos (`window.print()` y `onsubmit="return false"`) |

---

## 🚀 Cómo Ejecutar y Probar

### A. Maqueta Bootstrap (visual)
1. **Abrir directamente:** doble clic sobre `index.html` en Chrome, Edge, Firefox o Brave.
2. **Login demo:** escribe cualquier correo/clave o entra directo; no es autenticación real.
3. **Dashboard:** prueba navbar, carrusel, modales, botón de imprimir y cierre de sesión.
4. **Aclara los límites:** la tabla, las métricas, el buscador, el filtro y el formulario son visuales; no hay persistencia en el navegador.

### B. Demo SQLite (en el paquete de Drive)
La demo persistente vive en el paquete de Drive (`03_PAGINAS_WEB_Y_DEMO_EN_VIVO/demo_sqlite/`), no en este repositorio de frontend. Desde esa carpeta, ejecuta `iniciar_demo.bat` o `python servidor.py` y abre `http://127.0.0.1:8000`. La demo guarda, filtra y persiste en una tabla simplificada; no es el DDL de 12 tablas.
