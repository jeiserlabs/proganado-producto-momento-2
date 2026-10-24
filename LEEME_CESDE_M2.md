# PROGANADO S.A.S. — PRODUCTO MOMENTO 2 (CESDE 2026-2)
**Materia:** Introducción a la Programación / Diseño Web  
**Estudiantes:** Jeiser Abraham Gutiérrez Torres, Sebastián Correa, Humberto Pinto, Emilio Villanueva  
**Docente:** Jonathan Felipe Piedrahita Nieto | **Aula 406**

---

## 📌 Cumplimiento Estricto de la Rúbrica con Bootstrap 5

Este entregable implementa la capa visual y de interacción del Proyecto Integrador **ProGanado S.A.S.**, migrando el prototipo a la arquitectura oficial de **Bootstrap 5.3.3**:

### 1. Sistema de Rejilla (Grid System 12 Columnas)
- Uso intensivo de contenedores (`.container`, `.container-fluid`), filas (`.row`) y columnas responsivas (`.col-12`, `.col-md-6`, `.col-lg-3`, `.col-lg-7`, etc.).
- Comportamiento fluido en pantallas móviles (smartphones), tablets y pantallas de escritorio.

### 2. Componentes Oficiales de Bootstrap Implementados
- **Navbar Responsive:** Barra de navegación fija superior (`.navbar .navbar-expand-lg .sticky-top`) con menú hamburguesa colapsable (`.navbar-toggler`).
- **Hero Banner:** Sección de impacto visual con tipografía escalada (`.display-5`, `.lead`), insignias (`.badge`) y botones de llamada a la acción (`.btn .btn-success`).
- **Tarjetas Bento Grid (Métricas):** 4 tarjetas informativas (`.card`) para control zootécnico: Total Bovinos, Vacas en Gestación, Alerta de Retiro Sanitario ICA y Litros de Leche.
- **Carrusel Fotográfico:** Deslizador animado con desvanecimiento (`.carousel .slide .carousel-fade`) con indicadores y controles para mostrar la operación real en campo.
- **Tablas Responsivas:** Tabla con estilo interactivo (`.table .table-hover .table-striped .table-responsive`) con miniaturas de fotos reales de ganado.
- **Formularios Estructurados:** Formulario en modal con controles Bootstrap (`.form-label`, `.form-control`, `.form-select`, `.input-group`, `.form-check-input`).
- **Modales de Bootstrap:** 
  1. `#modalRegistroBovino`: Modal interactivo para dar de alta un animal en vivo.
  2. `#modalDetalleBovino`: Ficha técnica completa del animal con foto ampliada.
  3. `#modalPrivacidad`: Cumplimiento legal de Protección de Datos (Ley 1581 de 2012).
- **Toast Notifications:** Mensaje flotante animado (`.toast`) que confirma el alta y eliminación de registros sin recargar la página.

### 3. Interoperabilidad Zootécnica y Reglas de Negocio
- **Inocuidad ICA (Resolución 067449):** Detección visual automática de leche no apta para entrega a Colanta si el bovino está en período de retiro por antibióticos.
- **Pastoreo Racional Voisin (PRV):** Panel de estado de potreros con barras de progreso (`.progress .progress-bar`) que monitorean días de ocupación y descanso de pastura.

---

## 🚀 Cómo Ejecutar y Probar

1. **Abrir directamente:** Haz doble clic sobre `index.html` en cualquier navegador (Chrome, Edge, Firefox, Brave).
2. **Probar Interacción en Vivo:**
   - Haz clic en **"+ Registrar Bovino"**: Llena los datos y guarda para ver cómo se añade a la tabla y se actualizan los contadores en tiempo real.
   - Usa el buscador en vivo: Escribe "Mariposa" o "COL-1601" para filtrar al instante.
   - Filtra por estado en el selector desplegable.
   - Haz clic en el botón del ojo (`Ver Ficha`) de cualquier vaca para ver su modal detallado.
   - Haz clic en **"Exportar CSV"** para descargar la base de datos en formato Excel/CSV.
