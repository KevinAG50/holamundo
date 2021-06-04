function Comparar(numero1, numero2, numero3){
	var n1, n2, n3;
	n1 = parseFloat(numero1);
	n2 = parseFloat(numero2);
	n3 = parseFloat(numero3);
	if (n1 > n2 & n1 > n3) {
		document.getElementById("resultadoComp").innerHTML="<h1>El número mayor es: " + n1 +"</h1>";
	}else if(n2 > n3){
			document.getElementById("resultadoComp").innerHTML="<h1>El número mayor es: " + n2 +"</h1>";
	}else{
		document.getElementById("resultadoComp").innerHTML="<h1>El número mayor es: " + n3 +"</h1>";
	}
}

function Dia(numDia){
	var dia = parseFloat(numDia);
	switch(dia){
		case 1:
			document.getElementById("diaIngresado").innerHTML="<h1>El día es: Lunes</h1>";
			break;
		case 2:
			document.getElementById("diaIngresado").innerHTML="<h1>El día es: Martes</h1>";
			break;
		case 3:
			document.getElementById("diaIngresado").innerHTML="<h1>El día es: Miércoles</h1>";
			break;
		case 4:
			document.getElementById("diaIngresado").innerHTML="<h1>El día es: Jueves</h1>";
			break;
		case 5:
			document.getElementById("diaIngresado").innerHTML="<h1>El día es: Viernes</h1>";
			break;
		case 6:
			document.getElementById("diaIngresado").innerHTML="<h1>El día es: Sábado</h1>";
			break;
		case 7:
			document.getElementById("diaIngresado").innerHTML="<h1>El día es: Domingo</h1>";
			break;
		default:
			document.getElementById("diaIngresado").innerHTML="<h1>El número ingresado es incorrecto</h1>";
			break;
	}
}

function compararEdad(numero1, numero2, numero3){
	var n1;
	n1 = parseFloat(numero1);
	if(n1 > 0){
		if (n1 <= 3) {
			document.getElementById("edadIngresada").innerHTML="<h1>Eres un Bebé</h1>";
		}else if(n1 <= 13){
				document.getElementById("edadIngresada").innerHTML="<h1>Eres un niño</h1>";
		}else if(n1 <= 17){
			document.getElementById("edadIngresada").innerHTML="<h1>Eres un adolescente</h1>";
		}else{
			document.getElementById("edadIngresada").innerHTML="<h1>Eres un adulto</h1>";
		}
	}else{
		document.getElementById("edadIngresada").innerHTML="<h1>Edad ingresada incorrecta</h1>";
	}
}