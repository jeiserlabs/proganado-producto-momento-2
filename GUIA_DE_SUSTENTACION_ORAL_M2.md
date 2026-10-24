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

### Pregunta 4: *"¿De dónde salen los datos de la tabla y cómo funcionan los filtros?"*
**Tu respuesta:**
- *"Los datos parten de un arreglo de objetos JavaScript (`hatoData`) que simula la respuesta de nuestra base de datos SQL (`Bovinos`)."*
- *"La función `renderTabla()` recorre el arreglo con un `.forEach()` e inyecta dinámicamente las etiquetas `<tr>` y `<td>` con las clases de Bootstrap (`.table-hover`, `.table-striped`, `.badge`)."*
- *"Para los filtros, escuchamos el evento `input` en la barra de búsqueda y el evento `change` en el selector de estados, aplicando el método `.filter()` de JavaScript para comparar texto con `.includes()` en minúsculas. Así la tabla se filtra en tiempo real sin pestañear."*

### Pregunta 5: *"¿Cómo se conecta esta interfaz con las otras materias (Bases de Datos y Lógica)?"*
**Tu respuesta:**
- *"Este es el corazón del Proyecto Integrador:*
  1. *En **Bases de Datos**: Los campos que pedimos en el modal (Arete, Raza, Estado, Potrero, Retiro ICA, Litros) corresponden exactamente a las columnas de nuestras tablas `Bovinos`, `Razas`, `Potreros` y `PesajesLeche` en SQL Server.*
  2. *En **Lógica de Programación**: Las validaciones de si el animal está en retiro ICA para suspender la entrega a Colanta representan la estructura condicional (`SI retiroIca == VERDADERO ENTONCES leche = 0`) que modelamos en los algoritmos.*
  3. *En **Intro a la Programación**: Demostramos maquetación profesional y responsive design con Bootstrap 5."*

---

## 🎬 3. Guion de Demostración Práctica (Haz esto frente al profe)

1. **Abre `index.html` en el navegador.**
2. **Muestra el Hero y haz scroll:** Muéstrale cómo el Navbar se queda fijo arriba (`.sticky-top`).
3. **Presiona F12 (Modo Inspeccionar / Móvil):**
   - Achica la ventana para que vea cómo pasa a 1 columna fluido.
   - Haz clic en el botón hamburguesa para que vea abrir y cerrar el menú.
4. **Haz una prueba en vivo de Registro de Bovino:**
   - Haz clic en el botón verde **"+ Registrar Bovino"**.
   - Ingresa:
     - Arete: `COL-999`
     - Nombre: `Reina`
     - Raza: `Jersey`
     - Estado: `En Ordeño`
     - Litros: `26`
   - Haz clic en **"Guardar Bovino"**.
   - Señálale al profe:
     - *"Mire profe: el modal se cerró solo, apareció el Toast de notificación abajo a la derecha, la tabla subió a 9 vacas y la métrica de 'Total Bovinos' arriba cambió automáticamente de 8 a 9 en tiempo real."*
5. **Prueba el buscador:**
   - Escribe en la barra de búsqueda: `Reina`.
   - La tabla se filtra al instante mostrando solo esa fila.
6. **Muestra el botón "Ver Ficha" (el icono del ojo):**
   - Ábrelo para mostrar la foto y la genealogía ampliada en el modal.
7. **Muestra la sección de Sanidad ICA:**
   - Explícale la alerta roja: *"Aquí garantizamos que si una vaca tiene antibiótico (como Estrella COL-1601), el sistema marca 'NO APTO' para proteger el acopio de Colanta según la resolución del ICA."*

---

## 🏆 Veredicto para la Nota:
Con esta sustentación demuestras:
1. Dominio de HTML5 semántico.
2. Dominio del framework Bootstrap 5 (CSS, JS, Grid, Componentes).
3. Dominio de manipulación del DOM con JavaScript.
4. Coherencia total con el Proyecto Integrador de la carrera.

**Nota esperada:** **5.0 / 5.0**.
