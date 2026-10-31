# 🎓 GUÍA DE SUSTENTACIÓN ORAL — PRODUCTO MOMENTO 2
**Materia:** Introducción a la Programación / Diseño Web (CESDE)  
**Proyecto:** ProGanado S.A.S. · Versión Bootstrap 5  
**Equipo de Desarrollo:** Jeiser Abraham Gutiérrez Torres, Sebastián Correa, Héctor Pinto, Emilio Villanueva  
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

> *"Profesor Jonathan, para el Producto del Momento 2 migramos nuestro proyecto integrador **ProGanado** al framework **Bootstrap 5.3**, cumpliendo los temas vistos en clase: sistema de rejilla de 12 columnas, componentes interactivos oficiales (Navbar colapsable, Cards en Bento Grid, Carrusel, Modales, Tablas y Formularios). La maqueta usa HTML/CSS y el bundle de JavaScript de Bootstrap; además tiene dos atributos inline mínimos (`window.print()` para imprimir y `onsubmit="return false"` para que el formulario visual no recargue). No hay archivos JavaScript propios ni lógica de negocio en el navegador. El diseño es 100% responsivo."*

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
- *"Usamos los data attributes nativos de HTML de Bootstrap: `data-bs-toggle='modal'` y `data-bs-target='#modalRegistroBovino'`. Bootstrap se encarga del fondo oscuro y la animación `.fade`. Para cerrarlo usamos `data-bs-dismiss='modal'`. No escribimos JavaScript propio para eso: el bundle de Bootstrap lee los atributos y hace el trabajo."*

### Pregunta 4: *"¿Cómo está estructurada la tabla de vacas?"*
**Tu respuesta:**
- *"La tabla está construida estrictamente en HTML5 Semántico usando las clases oficiales de Bootstrap `.table`, `.table-hover`, `.table-striped` y `.badge` para los estados de sanidad e inocuidad."*
- *"La tabla es estática: tiene 8 registros de ejemplo del prototipo. El buscador y el selector de estado son visuales; no filtran porque no hay JavaScript propio. El filtro real está en el módulo SQLite, que es la demo de Python. La maqueta no está conectada a la base real."*

### Pregunta 5: *"¿Cómo se conecta esta interfaz con las otras materias (Bases de Datos y Lógica)?"*
**Tu respuesta:**
- *"Este es el corazón del Proyecto Integrador:*
  1. *En **Bases de Datos**: Los campos del modal se inspiran en bovinos, razas, potreros y pesajes_leche. La demo SQLite usa una tabla simplificada para enseñar el flujo formulario → POST → SELECT; el DDL de 12 tablas está en el repositorio.*
  2. *En **Lógica de Programación**: Las validaciones de si el animal está en retiro ICA para suspender la entrega a Colanta representan la estructura condicional (`SI retiroIca == VERDADERO ENTONCES leche = 0`) que modelamos en los algoritmos PSeInt.*
  3. *En **Intro a la Programación**: Demostramos maquetación profesional y responsive design con Bootstrap 5."*

### Pregunta 6: *"¿Dónde está alojado el frontend y qué pasa cuando actualizan el código en GitHub?"*
**Tu respuesta:**
- *"El frontend está alojado en la nube en **GitHub Pages** en la URL pública `https://jeiserlabs.github.io/proganado-producto-momento-2/`."*
- *"Cada vez que hacemos `git push origin main`, GitHub Pages publica automáticamente el contenido estático; no hay backend ni compilación. El cambio suele verse en uno o dos minutos. El docente o cualquier evaluador puede abrir el enlace desde su celular sin descargar archivos ZIP ni instalar servidores locales."*

### Pregunta 7: *"¿Cómo funciona el Login y por qué no exige una contraseña fija?"*
**Tu respuesta:**
- *"Porque para el Momento 2 se evalúa exclusivamente la capa de diseño y maquetación web (Frontend). No tenemos un servidor backend activo validando credenciales en una base de datos."*
- *"Para que la entrega no tenga datos bloqueados ni falle si el docente escribe cualquier correo, el formulario hace un `GET` directo a `dashboard.html`. No valida credenciales, no crea una sesión real y no asigna un rol de Administrador; el badge 'Administrador Hato' es decorativo. Es un acceso demo abierto, no autenticación real."*

---

## 🎬 3. Guion de Demostración Práctica (Haz esto frente al profe)

1. **Abre el enlace de GitHub Pages en el navegador (carga `index.html`).**
2. **Muestra la Pantalla de Inicio de Sesión (Login Gate):**
   - Señálale al profesor el diseño split-screen en Bootstrap 5, la foto del hato y el aviso de **Modo demostración**.
   - Explícale: *"Profesor, diseñamos una puerta de acceso abierta: cualquiera puede ingresar con cualquier usuario o contraseña, o entrar directamente con el botón de acceso. No es autenticación real; es una demo de interfaz."*
3. **Haz clic en "Ingresar al Dashboard Operativo →":**
   - El enlace navega de forma nativa a `dashboard.html`.
4. **Muestra el Panel de Inicio Operativo:**
   - Señálale las 3 columnas:
     - **Agenda Sanitaria:** Alerta de fin de retiro de antibiótico (Vaca 0102) y ciclo de vacunación antiaftosa (ICA).
     - **Composición del Hato:** Barras de progreso de Bootstrap (`.progress-bar`) con vacas en ordeño, horras secas y novillas.
     - **Acopio Colanta:** Registro del tanque frío a 4.0°C, 480 litros entregados y prueba de inocuidad aprobada.
5. **Presiona F12 (Modo Inspeccionar / Móvil):**
   - Achica la ventana para que vea cómo pasa a 1 columna fluido.
   - Haz clic en el botón hamburguesa para que vea abrir y cerrar el menú de navegación.
6. **Prueba los Modales Nativos:**
   - Haz clic en el botón verde **"+ Registrar Bovino"** para mostrar los inputs (`form-control`, `form-select`). Aclara: *"El formulario es visual; no guarda ni añade filas."* Cierra con Cancelar para ver cómo `data-bs-dismiss="modal"` lo oculta limpiamente.
7. **Muestra el botón "Ver Ficha" (el icono del ojo en la tabla):**
   - Ábrelo para mostrar la ficha de ejemplo de **Mariposa (COL-1598)**. Aclara: *"Todas las filas abren la misma ficha de ejemplo porque no hay JavaScript propio que cambie los datos; la ficha real vendría de la base de datos."*
8. **Prueba el botón "Cerrar Sesión":**
   - Haz clic en el botón superior **"Cerrar Sesión"** para mostrar cómo el sistema regresa limpiamente a `index.html`.
9. **Cierra con la distinción honesta:**
   - *"Lo que funciona de verdad en esta maqueta es la navegación, el navbar responsive, el carrusel, los modales y el botón de imprimir. La tabla, las métricas, el buscador y el filtro son datos de ejemplo; el formulario no persiste. La persistencia real está en la demo SQLite de Python, que es otra parte del proyecto."*

---

## 🏆 Veredicto para la Nota:
Con esta sustentación demuestras:
1. Dominio de HTML5 semántico puro (sin sopa de divs).
2. Dominio del framework Bootstrap 5 (Grid System 12 columnas, Cards, Modales, Carrusel, Navbar, Progress bars).
3. Apego estricto al temario visto en clase (JavaScript mínimo: bundle de Bootstrap + dos atributos inline; sin archivos JS propios).
4. Coherencia total con el Proyecto Integrador de la carrera (Bases de Datos + Lógica + Web).
5. Despliegue en la nube con GitHub Pages y publicación automática del contenido estático.

**Objetivo:** demostrar dominio y honestidad. No prometas funciones que la maqueta no tiene; explicar los límites también suma.
