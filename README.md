**HACK THE OCEAN**

📄 **OBJETIVO DEL PROYECTO**

- Realizar un sistema web con la capacidad de mostrar datos concretos acerca de los mantos acuiferos mas contaminados de México mediante una API, asi a su vez 
el usuario contara con la opcion de aportar y solicitar ayuda acerca de alguna zona que no sea visible dentro de los datos

# Documentacion Front-End


📓 **Proceso para el desarrollo de la página**

- 1️⃣ Primer paso

📘 **Levantamiento de requerimentos**

Se realizara la documentacion detalla de todos los requerimentos a ocupar dentro del proyecto, asi como los acuerdos entre el cliente y desarrollador(para este caso se a tomado en cuenta los requisitos a la convocatoria de Hack the ocean)

-  2️⃣ Paso dos 

📲 **Diseño**

Se desarollara una diseño conceptual como parte del inicio del proyecto, con esto se pretende tener una imagen clara de lo que se realizara.
 
-  3️⃣ Paso tres 

**Investigacion**

Se realizo la investigacion a profundidad de los datos necesarios, que podran ser consultados dentro del sistema(numero de zonas contaminadas)
 
-  4️⃣ Paso cuatro

**Funcionalidad del Frontend (interfaz para el usuario)**
 
 **Proceso**
 - El cliente ingresa en modo gratiuto al sistema web
 - al identificar una nueva visita el sistema actualiza los datos con los mas recientes
 - el cliente puede interactuar con el mapa mundial para ver cual es el porcentaje de contaminacion internacional que afecta a los mantos acuiferos de mexico
 - se puede observar una tabla con las diversas playas, mares , oceanos de mexico en ellas se encuentra la ubicacion y su nivel de contaminacion
 - el usuario al verificar que algunos datos dentro de su zona no se encuentran actualizados o desea agrear una zona podra dirigirse a la seccion de solicitar ayuda
 
 - 5️⃣ Paso cinco
 
 - Funcionalidad Banckend (Servidor web en comunicacion con la base de datos)
 
 El sistema web manda una solicitud al servidor web para que despliegue los datos que se encuentran en la base de datos, una vez que verifica su existencia, sin replicacion 
 envia los datos para su visualizacion
 
 **Tabla interactiva**
 
 Dentro del frontend se encuentra una tabla con la que el usuario puede encontrar los diversos datos, este al realizar una busqueda enviara al servidor web 
 los datos para que verifiquen si coinciden con alguno almacenado dentro de la base de datos, en caso de coincidir se enviara una respuesta que sera escrita dentro de 
 la tabla del frontend con la que el usuario podra redirigirse a una pagina con todos los datos de la playa,oceano o mar
 
 **Formulario de ayuda**
 
 El usuario podra solicitar ayuda para esto sera necesario enviar un formulario con los datos requeridos(nombre completo, correo electronico,direccion,datos de la playa,
 oceano o mar) es necesario llenar todos los campos
 Una vez llenados todos los datos el usuario enviara el formulario el cual recibira el backend, y validara que se encuentren dentro de los campos requeridos.
 Una vez que sean validados, seran almacenados dentro de la base de datos SQL, la cual a posterior sera visualizada por un administrador del sistema
 

- Anexos de los documentos [Requerimientos, Buyer Personal, Publico Objetivo, UX y UI](https://github.com/Ma-Daniela30/FrontEndHTO)

# 💻 **Instalación de tu ambiente de desarrollo**

- Antes que nada es recomendable tener una cuenta de git y github.
- Tener un editor de texto para mejor entendimiento de codigo.
- Tener instalarlo NodeJS en tu sistema Operativo.
- Para combrobabar la instalacion de NodeJS podemos abrir la terminar y escribir el siguiente comando:

> node --version

- Instalar la dependencia express: `npm install express --save`
- Instalar la dependencia jest: `npm install jest --save-dev jest`


# 📓 **Desarollo**
- Ejecutamos el comando `node start`


🚍 **Tecnologias utilizadas**

- HTML
- CSS
- JAVASCRIPT
- EXPRESS
- SQL
- JSON
- NODE
 PROYECTO ELABORADO Y DESARROLLADO PARA EL EVENTO HACK THE OCEAN de INNOVACCION
 
 
 # Desarrolladores ✒️
_Menciona a todos aquellos que ayudaron a desarrollar el proyecto_

* **Cajero Luis Felipe** - *FrontEnd* -[Luis Felipe Cajero](https://github.com/luizcajero)
* **Espinosa Roy Angelica Ariadna** - *BackEnd* - [AngelicaAERoy](https://github.com/AngelicaRoy)
* **Marin Rodriguez Alexis Alberto** - *FrontEnd* - [alexMarinRodriguez](https://github.com/alexMarinRodriguez)
* **Espinosa Roy Maria Daniela** - *FrontEnd y BackEnd* - [Ma-Daniela30](https://github.com/Ma-Daniela30)
 
 
 
