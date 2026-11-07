# 🎓 GUÍA MAESTRA DE SUSTENTACIÓN ORAL — PRODUCTO MOMENTO 2
**Materia:** Introducción a la Programación / Maquetación Web (CESDE 2026-2)  
**Proyecto Integrador:** ProGanado S.A.S. — Software de Gestión Ganadera e Inocuidad Lechera  
**Equipo de Desarrollo:** Jeiser Abraham Gutiérrez Torres (Líder Técnico & Arquitectura), Sebastián Correa, Emilio Villanueva, Humberto Pinto  
**Docente Evaluador:** Ing. Jonathan Felipe Piedrahita Nieto | **Aula 406**  
**Stack Tecnológico:** React 19 · Vite 6 · Tailwind CSS 3.4 · CSS Scroll-Driven Animations (Baseline 2026) · Lucide React

---

## ⚡ 1. La Realidad de la Industria 2026: ¿Por Qué React + Tailwind y No Bootstrap?

Para la exposición oral, el equipo debe justificar la migración con datos duros de la industria del software actual:

| Criterio Técnico | Bootstrap 5 (Legacy 2011–2020) | React 19 + Tailwind CSS (Estándar Industria 2026) |
|---|---|---|
| **Adopción Global** | En franco declive. Reservado para proyectos heredados o prototipos rápidos de backend tradicional. | **Líder absoluto:** React domina el 68% de las SPAs (State of JS); Tailwind cuenta con >80% de satisfacción en desarrollo web moderno (State of CSS). |
| **Paradigma de Diseño** | **Componentes rígidos:** Todas las webs se ven idénticas; sobrescribir estilos requiere CSS engorroso (`!important`). | **Utility-First Total:** Clases atómicas directas sobre el elemento. Control milimétrico de la identidad visual agropecuaria sin pelear con estilos ajenos. |
| **Peso del Bundle (CSS)** | **Pesado:** Descarga cientos de clases que la pantalla jamás utiliza. | **Tree-shaking inteligente:** Vite y Tailwind purgan el código muerto. El bundle de producción pesa tan solo **24 kB de CSS**. |
| **Alineación Académica** | Concepto ya superado en los primeros módulos. | **100% alineado:** En la sesión del 31-Oct, el docente Felipe Piedrahita introdujo `Tailwind + Flowbite` como la herramienta moderna de maquetación. |

---

## 🧠 2. División de Roles: ¿Cómo se Conectan HTML, React y CSS?

### ❓ Pregunta de Control: *"¿React se superpone sobre CSS o trabajan en conjunto?"*

> **LA RESPUESTA DEFINITIVA PARA EL JURADO:**  
> **React y CSS NO se superponen ni compiten: trabajan en una división de roles perfecta y sincronizada.**  
> - **React construye el esqueleto y la estructura viva (HTML semántico a través de JSX).**  
> - **CSS viste y embellece ese esqueleto (presentación visual, diseño responsivo y animaciones).**

```text
[ JavaScript / React 19 ]  ──▶  Genera el HTML Semántico en memoria (Virtual DOM)
                                          │
                                          ▼
                               [ Estructura en el Navegador ]
                             (<header>, <nav>, <main>, <section>)
                                          ▲
                                          │
[ Tailwind CSS + CSS3 ]    ──▶  Aplica Colores, Grid, Flexbox y Animaciones
```

---

## 📐 3. Anatomía en Dos Columnas: Código JSX/HTML vs Explicación de Producción

A continuación se desglosan los 4 bloques principales de la interfaz. La columna izquierda muestra el código exacto y la derecha la explicación técnica para el expositor:

### Bloque A: Header Institucional y Barra de Navegación (`Navbar.jsx`)

| Código JSX / HTML | Explicación Técnica (Qué controla y cómo defenderlo) |
|---|---|
| ```jsx<br><header className="sticky top-0 z-40 bg-[#0b291b] border-b border-[#1f5038]"><br>  <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"><br>    {/* Logo */}<br>    <div className="flex items-center gap-3 cursor-pointer"><br>      <div className="w-10 h-10 rounded-xl bg-[#198754] flex items-center justify-center text-white font-black"><br>        PG<br>      </div><br>      <h1 className="text-xl font-extrabold text-white">ProGanado<span className="text-[#75b798]">SaaS</span></h1><br>    </div><br>    {/* Menú Reactivo */}<br>    <nav className="flex items-center gap-1 bg-[#133d2a] p-1 rounded-xl"><br>      {['dashboard', 'inventario', 'sanidad'].map((tab) => (<br>        <button key={tab} onClick={() => setActiveTab(tab)}<br>          className={activeTab === tab ? "bg-[#198754] text-white" : "text-[#a3cfbb]"}>...<br>        </button><br>      ))}<br>    </nav><br>  </div><br></header><br>``` | **1. Contenedor Semántico `<header>`:**<br>• `sticky top-0 z-40`: Ancla el menú en la parte superior al scrollear hacia abajo sin tapar los modales (`z-50`).<br>• `bg-[#0b291b]`: Verde Esmeralda oscuro que transmite identidad corporativa ganadera.<br>**2. Container `max-w-7xl mx-auto`:**<br>• Evita que el contenido se disperse en pantallas panorámicas o 4K, manteniéndolo centrado en 1.280 px.<br>**3. Reactividad sin Recarga:**<br>• El menú no recarga la página. Cambia de pestaña instantáneamente mutando el estado `activeTab` de React. |

---

### Bloque B: Grid de Bovinos, Contenedor de Fotos y Animación (`InventoryView.jsx`)

| Código JSX / HTML | Explicación Técnica (Qué controla y cómo defenderlo) |
|---|---|
| ```jsx<br><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"><br>  {filtered.map((vaca) => (<br>    <div key={vaca.id} onClick={() => onSelectCow(vaca)}<br>      className="group rounded-2xl bg-white border border-[#e2ece6] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"><br>      <br>      {/* Contenedor de Foto con Zoom */}<br>      <div className="h-44 w-full bg-[#f1f8f4] relative overflow-hidden"><br>        <img<br>          src={vaca.foto}<br>          alt={vaca.nombre}<br>          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"<br>        /><br>        <span className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-lg"><br>          {vaca.raza}<br>        </span><br>      </div><br><br>      {/* Datos y Alerta */}<br>      <div className="p-4"><br>        <h4 className="font-bold text-gray-900">{vaca.nombre}</h4><br>        <p className="text-xs text-gray-500">Chapa: {vaca.chapa}</p><br>        {vaca.diasRetiroIca > 0 && (<br>          <span className="inline-block mt-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded"><br>            ⚠️ Retiro ICA: {vaca.diasRetiroIca} días<br>          </span><br>        )}<br>      </div><br>    </div><br>  ))}<br></div><br>``` | **1. Maquetación Grid Responsiva:**<br>• `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`: Se adapta dinámicamente: 1 columna en móviles, 2 en tablets y 4 en monitores de escritorio.<br>**2. Manejo y Formato de las Fotos:**<br>• `h-44 w-full relative overflow-hidden`: Contenedor de altura fija (176 px). Sin importar la resolución de la foto original, no desalinea la cuadrícula.<br>• `object-cover`: Escala y recorta la foto proporcionalmente llenando el espacio sin deformarla.<br>• `src={vaca.foto}`: Carga el archivo local físico (`assets/ganado/vaca_XXXX.jpg`).<br>**3. Movimiento y Micro-interacciones:**<br>• `hover:-translate-y-1`: La tarjeta se levanta suavemente 4 píxeles con sombra suave (`hover:shadow-lg`).<br>• `group-hover:scale-105 duration-500`: La foto de la vaca hace un sutil zoom de 5% sin salirse del borde redondeado. |

---

### Bloque C: Modal de Registro de Bovino (`RegisterModal.jsx`)

| Código JSX / HTML | Explicación Técnica (Qué controla y cómo defenderlo) |
|---|---|
| ```jsx<br><div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"><br>  <div className="w-full max-w-lg rounded-2xl bg-white border border-[#e2ece6] overflow-hidden shadow-2xl"><br>    <div className="bg-[#0b291b] p-5 flex items-center justify-between text-white"><br>      <h3 className="font-extrabold text-white text-base">Registrar Nuevo Bovino</h3><br>      <button onClick={onClose}><X className="w-5 h-5" /></button><br>    </div><br>    <form onSubmit={handleSubmit} className="p-6 space-y-4"><br>      <input value={formData.nombre} onChange={...} placeholder="Ej: Manuela" className="w-full rounded-xl border p-2.5" /><br>      <button type="submit" className="w-full bg-[#198754] text-white py-3 rounded-xl font-bold">Guardar</button><br>    </form><br>  </div><br></div><br>``` | **1. Backdrop con Efecto Cristal (Glassmorphism):**<br>• `fixed inset-0 z-50 bg-black/60 backdrop-blur-sm`: Cubre toda la pantalla y desenfoca el fondo para centrar la atención del usuario en el formulario.<br>**2. Manejo del Formulario Reactivo:**<br>• `onSubmit={handleSubmit}`: Previene la recarga por defecto del navegador (`e.preventDefault()`).<br>• Al guardar, crea el nuevo objeto y lo persiste automáticamente en el `localStorage` mediante el hook `useEffect` en `App.jsx`. |

---

### Bloque D: Animación Progresiva en CSS Puro (`src/index.css`)

| Código CSS Nativo | Explicación Técnica (Qué controla y cómo defenderlo) |
|---|---|
| ```css<br>.scroll-progress-bar {<br>  position: fixed;<br>  top: 0;<br>  left: 0;<br>  height: 4px;<br>  width: 100%;<br>  background: #198754;<br>  transform-origin: 0% 50%;<br>  z-index: 100;<br>  <br>  /* Propiedad Estándar W3C Baseline 2026 */<br>  animation: grow-progress auto linear;<br>  animation-timeline: scroll();<br>}<br><br>@keyframes grow-progress {<br>  from { transform: scaleX(0); }<br>  to   { transform: scaleX(1); }<br>}<br>``` | **1. Cero JavaScript (0% Consumo de CPU por Scripts):**<br>• En el pasado se usaban scripts pesados escuchando el evento `scroll`. Hoy en día, `animation-timeline: scroll()` delega el cálculo directamente al procesador gráfico (GPU) del navegador.<br>**2. Mecánica del Movimiento:**<br>• `transform: scaleX(0) ➔ scaleX(1)`: La barra verde se estira horizontalmente desde el borde izquierdo (`transform-origin: 0% 50%`) a medida que el usuario desciende hacia el footer. |

---

## 🗄️ 4. Módulo Especial: Arquitectura de Datos (Frontend vs SQL vs NoSQL)

Para demostrar dominio conceptual pleno en la sustentación, el equipo debe saber diferenciar con claridad los tres modelos de datos:

| Dimensión Técnica | 1. Frontend Storage (`localStorage`) | 2. Base de Datos Relacional SQL (SQLite / Postgres / SQL Server) | 3. Base de Datos NoSQL Documental (MongoDB) |
|---|---|---|---|
| **¿Dónde reside?** | En el navegador del cliente (disco local del browser). | En un motor de base de datos relacional (archivo local en SQLite o servidor dedicado). | En un clúster de base de datos distribuido en formato documental. |
| **Capacidad Límite** | **~5 MB a 10 MB** por dominio web. | **Gigabytes a Terabytes** (limitado solo por disco duro). | **Petabytes** (Escalabilidad horizontal masiva entre servidores). |
| **Estructura** | Clave-Valor simple en strings (`DOMString` / JSON serializado). | Tablas rígidas bidimensionales con filas, columnas y tipos estrictos (DDL). | Documentos BSON/JSON flexibles agrupados en colecciones. |
| **Integridad y ACID** | Ninguna. Si borras un potrero, las vacas quedan con texto huérfano. | **Garantía ACID estricta:** Integridad referencial (`FOREIGN KEY`), triggers y transacciones atómicas. | Consistencia eventual o transacciones a nivel de documento sin esquemas rígidos. |
| **Rol en ProGanado** | **Prototipo Web M2:** Demostrar persistencia en el cliente sin depender de internet ni servidores en la exposición. | **Núcleo de Datos (Materia BD):** Esquema relacional oficial de 12 tablas para liquidación de leche y cuarentena ICA. | **Módulo de Telemetría IoT:** Ideal para lecturas por segundo de collares GPS o sensores de temperatura en campo. |

---

## 🔌 5. ¿Cómo se Conecta la Página Web a la Base de Datos en Producción?

Una página web en el navegador **jamás se conecta directamente a una base de datos relacional por motivos de seguridad** (cualquier usuario que presione F12 podría ver la contraseña y modificar registros). El estándar de producción requiere una **arquitectura desacoplada en tres capas**:

```text
[ Cliente Web: React 19 ]  
       │  ▲
       │  │ Petición HTTP asíncrona (fetch / JSON)
       ▼  │
[ Servidor Backend: Node.js / Express / Python FastAPI ]  
       │  ▲
       │  │ Sentencia SQL (SELECT * FROM bovinos WHERE estado = 'En Ordeño')
       ▼  │
[ Base de Datos: SQLite / PostgreSQL / SQL Server ]
```

### Código Real de Implementación (Momento 3):

**Paso 1: En el Servidor Backend (Node.js + Express + SQLite):**
```javascript
// El servidor protege las credenciales y ejecuta las consultas
app.get('/api/bovinos', (req, res) => {
  const vacas = db.prepare('SELECT * FROM bovinos WHERE activo = 1').all();
  res.json(vacas); // Devuelve los registros en formato JSON
});
```

**Paso 2: En el Frontend (React 19):**
```javascript
// React consume la API REST sin exponer la base de datos
useEffect(() => {
  async function cargarGanado() {
    const respuesta = await fetch('http://localhost:3000/api/bovinos');
    const datosSQL = await respuesta.json();
    setBovinos(datosSQL); // Actualiza la vista de inmediato
  }
  cargarGanado();
}, []);
```

---

## 🎯 6. Resumen de Cierre para el Jurado

> *"Profesor Jonathan, nuestro prototipo para el Momento 2 demuestra que dominamos la maquetación HTML semántica moderna y la arquitectura de componentes reactivos con React 19 y Tailwind CSS, tal como lo exige hoy la industria y como se exploró en la sesión del 31 de octubre.*  
>  
> *Separamos conscientemente la interfaz del almacenamiento relacional: la web cuenta con persistencia client-side en `localStorage`, pero el contrato de datos es un espejo exacto del esquema relacional de 12 tablas que modelamos en SQLite para la materia de Bases de Datos. Estamos 100% preparados para conectar ambas capas mediante una API REST en el siguiente momento evaluativo."*
