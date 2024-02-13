# PROJECT-4 Administrador de listas de la escuela de baile + Rueda de la suerte

## Descripción del Proyecto 
Este proyecto se está llevando a cabo como parte del bootcamp FemCoders.


Este proyecto es una continuación del proyecto 2 y proyecto 3, que es una aplicación de uso interno desarrollada para la Escuela de Danza Lola Flores
(puedes ver los proyectos anteriores en los siguientes enlaces: 
https://github.com/Clara-RuizSantacruz/Proyecto-2; 
https://github.com/YuliiaBi1a/PROJECT-3-Administrador-de-listas-de-la-escuela-de-baile. 
El objetivo principal de este proyecto es permitir crear listas de empleados o alumnos para diversos fines, como visitantes a una excursión, 
miembros del club de ajedrez, profesores convocados a una reunión, etc.

## Objetivo Adicional: 
La aplicación esta desarrollada usando React que contiene vistas diferentes, con manejo de estados y eventos y procesamiento de datos que permite hacer CRUD de registros a una fake API.
El nuevo objetivo es incorporar 
una interfaz de sorteo que permita realizar elecciones aleatorias para asignar tareas en la institución educativa.
Esto incluye decidir quién realiza una presentación, quién vela por el orden
en los pasillos o qué profesor acompaña a los alumnos en una excursión.

## Funcionalidades

**Vista de Login:**
- **Implementa** una interfaz para que los usuarios se autentiquen.
- **Validación del formulario del registro:** para entrar en la página home el usuario debe que rellenar todos los campos. 

**Vista Home:**
- Desarrolla una vista principal desde la cual se pueda acceder a los distintos servicios de la aplicación. Puede navegar entre las distintas vistas a través
- de la barra de navegación o usar botones para moverse a la página lista o sorteo.
- La página en la que el usuario está se marca en el navegador para una mejor navegación.

**Vista de Listas:**
- **Formulario:** Permite rellenar los datos de cada persona, generando una lista o tabla, guardar los datos en la Base de datos.
- **Lista:** Aparecerán los datos que hemos rellenado en el formulario.
- **Editar y borrar datos:** Los datos de la tabla pueden editarse y borrarse según sea necesario.
- **Validación del formulario:** si el usuario no rellena todos los campos obligatorios del formulario, o los rellena de forma incorecta,
-  los datos no se enviarán y el usuario recibirá una notificación de alerta sobre la necesidad de rellenar los campos obligatorios. 
- **Guardar Lista:** Actualmente no es funcional, el botón de "Guardar Lista" por ahora muestra un mensaje de alerta al pulsarse.
- **Seleccionar Lista Guardada:** Permite cargar listas anteriormente guardadas, aunque esta función no está operativa en la versión actual.

**Vista "Wheel of Doom" (Rueda de la Suerte) permite:**
- **Obtener** los datos de los miembros almacenados en la aplicación.
- **Añadir** el usuario al sorteo usando un botón en cada registro.
- **Quitar** participantes del sorteo.
- **Realizar** un sorteo que elija un candidato al azar entre la lista de participantes.
- **Elegir** a cada participante solo una vez para el sorteo.
- **Usar** una animación que muestra el sorteo de manera gráfica para mejorar la experiencia del usuario.

**Vista Help**
-**Contiene** una simulación del status code "Error 404" con un toque de humor.

**Responsividad:**
Todas las vistas de la aplicación son responsive, se adaptan a la visualización tanto en dispositivos de escritorio como en dispositivos móviles.

## Tecnologías Utilizadas

- **HTML:** Estructura básica de la aplicación.
- **CSS:** Estilos para una interfaz sencilla y responsive.
- **Javascript:** Lógica de programación para el formulario y la gestión de listas.
- **React:** Se utiliza para construir una página web ensamblando sus componentes individuales, donde el estado de dichos componentes se gestiona eficazmente y responde a los cambios en los datos para actualizar automáticamente la interfaz de usuario.
- **React Router:** Una librería para navegar y gestionar URLs en aplicaciones React, permitiendo organizar la visualización de diferentes componentes en función de la ruta en la URL sin recargar toda la página
- **Json Server:** Se utiliza para crear rápidamente API RESTful utilizando un archivo JSON para simplificar el desarrollo y las pruebas de aplicaciones web.
- **Axios:** Se utiliza para realizar peticiones HTTP con JavaScript, lo que permite interactuar con servidores web y recibir/enviar datos desde/a el servidor de forma cómoda.
- **SweetAlert2:** Una biblioteca JavaScript para alertas estilizadas e interactivas en aplicaciones web.
- **Figma:** Utilizado para el diseño y prototipado de la aplicación.
- **Git y Github:** Se utilizaron varias ramas para el desarrollo colaborativo del proyecto.
- **Trello:** Herramienta de gestión de proyectos utilizada para organizar tareas y seguimiento.

## Acceso al Proyecto
Clona el repositorio desde https://github.com/YuliiaBi1a/PROJECT-4-Angy-Lidia-Ana-Pili/edit/main/README.md

## Desarrolladoras:
[YuliiaBi1a](https://github.com/YuliiaBi1a)
[angylearns] (https://github.com/angylearns)
[Lidia Pérez] (https://github.com/Lidia-PG)
[Analucena53] (https://github.com/Analucena53)
[Pilar Sedeño Durán] (https://github.com/Pilarsededuran)

---

¡Gracias por revisar nuestro proyecto! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotras.
