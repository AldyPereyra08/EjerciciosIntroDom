/*Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, 
y una vez ingresado muestre un saludo con el nombre dentro de un h1. 
El h1 debe estar centrado y tener un tamaño de letra y una tipografía 
distinta de la que viene por defecto.*/

/*const nombre = prompt("Ingrese su nombre");

const saludar = (nombre) => {
    const saludo = titulo.innerHTML;
    titulo.innerHTML = `Hola ${nombre} te damos la bienvenida!!!`;
}

saludar(nombre);*/

/************************************************************************* */

/*Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema 
hexadecimal,
y una vez ingresado ponga el color de fondo del body con dicho color.*/

/*const color = prompt("Ingrese un color en hexadecimal");

const cambioColor = (color) => {
    document.body.style.backgroundColor = color;
    
}

cambioColor(color);*/

/******************************************************************************* */

/*Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores 
correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body 
con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.*/

/*const rojo = prompt("Ingrese un numero entre 0 y 255");
const verde = prompt("Ingrese un numero entre 0 y 255");
const azul = prompt("Ingrese un numero entre 0 y 255");

const cambioColorRgb = (rojo,verde,azul) => {
    const rgb = `rgb(${rojo},${verde},${azul})`;
    document.body.style.backgroundColor = rgb;    
}

cambioColorRgb(rojo,azul,verde);*/

/********************************************************************************** */

/*Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen 
(siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida 
modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:.
chica	200px
mediana	500px
grande	800px
*/

/*const medidaImagen = prompt("Escriba opcion de tamaño de imagen: chica(200px), mediana(500px), grande(800px)");
const imagen = document.querySelector('img');

if(medidaImagen === 'chica') {
    imagen.style.width="200px";
}else if(medidaImagen === 'mediana') {
    imagen.style.width="500px";
}else if(medidaImagen === 'grande') {
    imagen.style.width="800px";
}*/

/********************************************************************************** */

/*Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, 
y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, 
Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, 
siguiendo las siguientes reglas:
Menor a 0°	Azul
Mayor o igual a 0° y menor a 15°	Celeste
Mayor o igual a 15° y menor a 25°	Verde
Mayor o igual a 25° y menor a 30°	Amarillo
Mayor o igual a 30° y menor a 35°	Naranja
Mayor a 35°	Rojo
*/

/*const temperatura = prompt("Escriba una temperatura°, en numeros");
const titulo = document.getElementById('titulo');

if(temperatura <=0){
    titulo.innerHTML = `Temperatura actual: ${temperatura}°`;
    titulo.style.color="blue";
}else if(temperatura >= 0 && temperatura < 15){
    titulo.innerHTML = `Temperatura actual: ${temperatura}°`;
    titulo.style.color="lightskyblue";
}else if(temperatura >=15 && temperatura < 25){
    titulo.innerHTML = `Temperatura actual: ${temperatura}°`;
    titulo.style.color="green";
}else if(temperatura >= 25 && temperatura < 30){
    titulo.innerHTML = `Temperatura actual: ${temperatura}°`;
    titulo.style.color="yellow";
}else if(temperatura >= 30 && temperatura < 35){
    titulo.innerHTML = `Temperatura actual: ${temperatura}°`;
    titulo.style.color="orange";
}else if(temperatura > 35){
    titulo.innerHTML = `Temperatura actual: ${temperatura}°`;
    titulo.style.color="red";
}*/

/********************************************************************************** */

/*Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse 
pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra
de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar 
el 75% de la barra contenedora)*/

/*const barra = prompt("Ingrese un numero de porcentaje entre 0 y 1000");

const llenarBarra = (barra) => {
    const miBarra = document.getElementById('progressbarInt');
    miBarra.style.width = `${barra}px`;
    //console.log();
}

llenarBarra(barra);*/

/********************************************************************************** */

/*En un documento html hacer un post de una red social que contenga:

un h3 con la usuaria
un p con un lorem ipsum
3 spans de reacciones con un ícono 
(por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
Dar estilos para que

la tipografía sea distinta a la default
los spans estén en línea, separados con márgenes, 
tengan un color de fondo gris suave y un border radius
Hacer un programa que al iniciarse pregunte mediante tres prompts por 
la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes*/

/*const numIngresado1 = prompt("Ingrese cantidad de Me Gusta");
const numIngresado2 = prompt("Ingrese cantidad de Me Encanta");
const numIngresado3 = prompt("Ingrese cantidad de Me Asombra");


const reaccion = (numIngresado1,numIngresado2,numIngresado3) => {
    const reacMg = document.getElementById('meGusta');
    reacMg.innerHTML = `${numIngresado1}`; 
    const reacMe = document.getElementById('meEncanta');
    reacMe.innerHTML = `${numIngresado2}`; 
    const reacMa = document.getElementById('meAsombra');
    reacMa.innerHTML = `${numIngresado3}`; 
    
}

reaccion(numIngresado1,numIngresado2,numIngresado3);*/


/********************************************************************************** */

/*Hacer un programa que al iniciarse pregunte mediante prompts por

un título
una url de una imagen
una url a un artículo
Utilizar esos datos para completar en el html una card que tenga

una imagen, con la url de la imagen ingresada
un título, con el texto del título ingresado
un link que diga Leer más, con la url al artículo ingresado
Dar algunos estilos mínimos a la card:

centrarla con respecto a la pantalla
agregarle un borde
agregarle un sombreado
cambiarle la tipografía
cambiarle los tamaños de fuente
cambiarle los colores por defecto*/

const avatar = prompt("Ingrese link de imagen");
const cambioAvatar = document.querySelector('img')
cambioAvatar.src=avatar;
const nombre = prompt("Ingrese un nombre");
const enlace = prompt("Ingresar URL de articulo deseado");







 