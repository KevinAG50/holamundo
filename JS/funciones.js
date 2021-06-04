//mi primer archivo de JavaScript con funciones
//Esta linea escribe Hola mundo! en el navegador
document.write("Hola mundo! </h1>");

//Para crear una variable es con la palabra var o let
let nombre = "Kevin";
var edad = 18;

document.write("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit," +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
	"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" +
	"consequat.</p>");
document.write("<br>");
document.write(nombre + " tu edad es: " + edad);
document.write("<br>");

let num1 = 9;
var num2 = 8;
document.write(num1+num2);
document.write("<br>");
document.write("9"+"8");
document.write("<br>");
//Tipos de datos en JS
//Númerico
let numero = 20;

//Decimal
let numero2 = 20.6;

//Cadena String
let cadena = "Los mejores programadores son del 3ro A";

//document.write(numero);
//document.write(numero2);
//document.write(cadena);

//Tipos de dato arreglos

//var amigos = ["Juan", "Pedro", "Pablo"];
//document.write(amigos);

//Objetos
let objetos = {color: "azul", altura: 150, ancho: 50};
//document.write(objetos);

//No definir variables
let nombre2;
document.write(nombre2);
document.write("<br>");

//Valores invalidos
var x = 10;
var y = "Hola mundo";

document.write(x * y);

