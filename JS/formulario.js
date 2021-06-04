//Funcion para sumar dos números

function Suma(numero1,numero2){
	let n1,n2,sum;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	sum=n1+n2;
	//alert("La suma es: " + sum)
	document.getElementById("resultadoSuma").innerHTML="<h1>La suma es: " + sum +"</h1>";
}
function Resta(numero1,numero2){
	let n1,n2,rest;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	rest=n1-n2;
	alert("La resta es: " + rest)
}
function Mult(numero1,numero2){
	let n1,n2,mult;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	mult=n1*n2;
	alert("La multiplicación es: " + mult)
}
function Div(numero1,numero2){
	let n1,n2,div;
	n1=parseFloat(numero1);
	n2=parseFloat(numero2);
	div=n1/n2;
	alert("La división es: " + div)
}

//Crear funciones en js
//function calcularSuma(){
	//alert("Hola bienvenido!");
	//document.write("Hola");
//}
/*
let nombre = prompt("Ingresa tu nombre: ");
let edad = prompt("Ingresa tu edad: ");
document.write("Tu nombre es: " + nombre);
document.write("<br> Tu edad es: " + edad);
document.write("<br>");

let num1 = parseInt(prompt("Ingresa el primer numero: "));
let num2 = parseInt(prompt("Ingresa el segundo numero: "));
let suma = num1 + num2;
document.write("La suma es: " + suma);
*/
