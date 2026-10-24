# 🎓 GUÍA DE SUSTENTACIÓN ORAL — PRODUCTO MOMENTO 2
**Materia:** Introducción a la Programación / Diseño Web (CESDE)  
**Proyecto:** ProGanado S.A.S. · Versión Bootstrap 5  
**Equipo de Desarrollo:** Jeiser Abraham Gutiérrez Torres, Sebastián Correa, Humberto Pinto, Emilio Villanueva  
**Docente:** Jonathan Felipe Piedrahita Nieto | **Aula 406**

---

> [!IMPORTANT]
> ### 🚨 RECORDATORIO CLAVE: ¿BOOTSTRAP SE ESCRIBE EN EL CSS O EN EL HTML?
> **LA RESPUESTA DEFINITIVA:** Bootstrap **NO** se escribe dentro de tu archivo CSS. Se invoca directamente en las etiquetas de tu **HTML** usando el atributo `class="..."`.
> - **1. ¿Qué es Bootstrap?** Es una librería con miles de estilos CSS ya programados (botones, tablas, tarjetas, grid).
> - **2. ¿Cómo se instala?** En tu `index.html`, adentro del `<head>`, pegas el `<link rel="stylesheet" href="...bootstrap.min.css">`.
> - **3. ¿Cómo se ejecuta / utiliza?** En tus etiquetas HTML le pones la clase: `<button class="btn btn-success">Guardar</button>`. ¡No tienes que escribir CSS!
> - **4. ¿Para qué sirve tu archivo CSS propio (`custom.css`)?** Solo para detalles que Bootstrap no trae (como el color verde corporativo de ProGanado `#0b291b`). El 95% del diseño se hace en el HTML llamando a Bootstrap.

---

## ⚡ 1. Discurso de Apertura (30 Segundos para Romper el Hielo)

> *"Profesor Jonathan, para el Producto del Momento 2 migramos nuestro proyecto integrador **ProGanado** al framework **Bootstrap 5.3**, cumpliendo todos los temas vistos en clase: sistema de rejilla de 12 columnas, componentes interactivos oficiales (Navbar colapsable, Cards en Bento Grid, Carrusel, Modales, Tablas y Formularios). Como en clase todavía **no hemos visto JavaScript**, toda la interactividad funciona de forma nativa con los atributos oficiales de HTML de Bootstrap (`data-bs-toggle="modal"`, `data-bs-ride="carousel"`), garantizando un diseño limpio y 100% responsivo."*

---

## 🛡️ 2. Las 5 Preguntas que el Docente Puede Hacer y Tu Respuesta Exacta

### Pregunta 1: *"¿Cómo integraron Bootstrap y cómo funciona la rejilla (Grid System) aquí?"*
**Tu respuesta:**
- *"Lo integramos mediante CDN oficial en el `<head>` con la versión 5.3.3 (`bootstrap.min.css`) y el bundle de scripts con Popper antes de cerrar el `<body>`."*
- *"Para la rejilla usamos el contenedor principal `.container`, dividiendo las secciones en filas `.row` y columnas que suman 12. Por ejemplo, en las tarjetas de métricas usamos `.col-sm-6 .col-lg-3` para que en celular se vean de a 2 y en pantalla grande se distribuyan exactamente las 4 tarjetas en una sola fila."*
- *"En el Hero dividimos la pantalla en `.col-lg-7` para el texto y `.col-lg-5` para la tarjeta visual."*

### Pregunta 2: *"¿Por qué la barra de navegación se convierte en botón hamburguesa en celular?"*
**Tu respuesta:**
- *"Gracias a las clases de Bootstrap `.navbar .navbar-expand-lg` y el componente `.navbar-collapse`. Al usar `.navbar-expand-lg`, le indicamos que solo se expanda a partir de pantallas de 992 píxeles hacia arriba (Large). En pantallas menores a 992px (móviles y tablets), la clase colapsa automáticamente el menú y activa el botón `.navbar-toggler` que vincula por `data-bs-target='#menuNavbar'` sin necesidad de programar animaciones manuales en CSS."*

### Pregunta 3: *"¿Cómo abren los modales (emergentes) sin recargar la página?"*
**Tu respuesta:**
- *"Usamos los data attributes nativos de HTML de Bootstrap: `data-bs-toggle='modal'` y `data-bs-target='#modalRegistroBovino'`. Bootstrap se encarga del fondo oscuro y la animación `.fade`. Para cerrarlo usamos `data-bs-dismiss='modal'`, 100% nativo sin necesidad de programar JavaScript."*

### Pregunta 4: *"¿Cómo está estructurada la tabla de vacas y por qué no tiene JavaScript?"*
**Tu respuesta:**
- *"La tabla está construida estrictamente en HTML5 Semántico usando las clases oficiales de Bootstrap `.table`, `.table-hover`, `.table-striped` y `.badge` para los estados de sanidad e inocuidad."*
- *"Como en la materia aún no hemos visto JavaScript, no quisimos meter código que no estuviera avalado en el plan docente. Cada fila representa un registro real de nuestro hato, mapeando exactamente las columnas de nuestra base de datos relacional de SQL Server (`Bovinos`, `Razas`, `Potreros`)."*

### Pregunta 5: *"¿Cómo se conecta esta interfaz con las otras materias (Bases de Datos y Lógica)?"*
**Tu respuesta:**
- *"Este es el corazón del Proyecto Integrador:*
  1. *En **Bases de Datos**: Los campos que pedimos en el modal (Arete, Raza, Estado, Potrero, Retiro ICA, Litros) corresponden exactamente a las columnas de nuestras tablas `Bovinos`, `Razas`, `Potreros` y `PesajesLeche` en SQL Server.*
  2. *En **Lógica de Programación**: Las validaciones de si el animal está en retiro ICA para suspender la entrega a Colanta representan la estructura condicional (`SI retiroIca == VERDADERO ENTONCES leche = 0`) que modelamos en los algoritmos PSeInt.*
  3. *En **Intro a la Programación**: Demostramos maquetación profesional y responsive design con Bootstrap 5."*

### Pregunta 6: *"¿Dónde está alojado el frontend y qué pasa cuando actualizan el código en GitHub?"*
**Tu respuesta:**
- *"El frontend está alojado en la nube en **GitHub Pages** en la URL pública `https://jeiserlabs.github.io/proganado-producto-momento-2/`."*
- *"Cada vez que hacemos `git push origin main`, GitHub dispara automáticamente un runner de CI/CD que compila y publica los cambios en vivo en 60 a 90 segundos. El docente o cualquier evaluador puede abrir el enlace desde su celular sin tener que descargar archivos ZIP ni instalar servidores locales."*

### Pregunta 7: *"¿Cómo funciona el Login y por qué no exige una contraseña fija?"*
**Tu respuesta:**
- *"Porque para el Momento 2 se evalúa exclusivamente la capa de diseño y maquetación web (Frontend). No tenemos un servidor backend activo validando credenciales en una base de datos."*
- *"Para que la entrega no tenga datos bloqueados ni falle si el docente escribe cualquier correo, implementamos un **Acceso Ganadero Abierto** con un **Token JWT Universal** demo. Cualquier persona puede escribir su correo, su nombre o dejarlo en blanco, y el sistema le da entrada directa con rol de Administrador."*

---

## 🎬 3. Guion de Demostración Práctica (Haz esto frente al profe)

1. **Abre el enlace de GitHub Pages en el navegador (o `index.html`).**
2. **Muestra el Hero y haz scroll:** Muéstrale cómo el Navbar se queda fijo arriba (`.sticky-top`).
3. **Muestra el Panel de Inicio Operativo:**
   - Señálale las 3 columnas principales:
     - **Agenda Sanitaria:** Alerta de fin de retiro de antibiótico (Vaca 0102) y ciclo de vacunación antiaftosa (ICA).
     - **Composición del Hato:** Barras de progreso de Bootstrap (`.progress-bar`) con vacas en ordeño, horras secas y novillas.
     - **Acopio Colanta:** Registro del tanque frío a 4.0°C, 480 litros entregados y prueba de inocuidad aprobada.
4. **Presiona F12 (Modo Inspeccionar / Móvil):**
   - Achica la ventana para que vea cómo pasa a 1 columna fluido.
   - Haz clic en el botón hamburguesa para que vea abrir y cerrar el menú de navegación.
5. **Prueba los Modales Nativos:**
   - Haz clic en el botón **"Acceso"** para mostrar el modal de inicio de sesión con inputs y checkbox estilizados.
   - Haz clic en el botón verde **"+ Registrar Bovino"** para mostrar los inputs de formulario (`form-control`, `form-select`). Cierra con Cancelar para ver cómo `data-bs-dismiss="modal"` lo oculta limpiamente.
6. **Muestra el botón "Ver Ficha" (el icono del ojo en la tabla):**
   - Ábrelo para mostrar la foto zootécnica y la genealogía ampliada de Mariposa.
7. **Muestra la sección de Sanidad ICA:**
   - Explícale la alerta roja: *"Aquí garantizamos que si una vaca tiene antibiótico (como Estrella COL-1601), el sistema marca 'NO APTO' para proteger el acopio de Colanta según la resolución sanitaria del ICA."*

---

## 🏆 Veredicto para la Nota:
Con esta sustentación demuestras:
1. Dominio de HTML5 semántico puro (sin sopa de divs).
2. Dominio del framework Bootstrap 5 (Grid System 12 columnas, Cards, Modales, Carrusel, Navbar, Progress bars).
3. Apego estricto al temario visto en clase (0 JavaScript ajeno o no enseñado).
4. Coherencia total con el Proyecto Integrador de la carrera (Bases de Datos + Lógica + Web).
5. Despliegue en la nube con CI/CD automático en GitHub Pages.

**Nota esperada:** **5.0 / 5.0**.
