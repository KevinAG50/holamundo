//Condicionales
var a = 10;
var b = 12;
if (a > b) {
	document.write("El número mayor es: " + a);
}else{
	document.write("El número mayor es: " + b);
}
document.write("<br>");

//Ciclo FOR
//numeros 0 al 10
for (var i = 0; i < 11; i++) {
	document.write(i);
}
document.write("<br>");

//Ciclo WHILE
var x = 0;
while (x < 11){
	//document.write("<br>" + " " + x);
	x++;
}

//ciclo DO WHILE
var y = 0;
do{
	//document.write("<br>" + " " + y);	
	y++;
}while(y < 11);

//SWITCH
//Validar si un número entre 1 y 4, 1 = hijo si es 2 = hija, si es 3 = padre y si es 4 = madre
var familia = 1;
switch(familia){
	case 1:
		document.write("Eres hijo");
		break;
	case 2:
		document.write("Eres hija");
		break;
	case 3:
		document.write("Eres Padre");
		break;
	case 4:
		document.write("Eres Madre");
		break;
	default:
		document.write("La opción no se encontró en el rango de valores");

}