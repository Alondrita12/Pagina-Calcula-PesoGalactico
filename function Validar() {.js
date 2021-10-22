function Validar (){
	//declarar las variables
	var U,C;
	//recuperar los datos
	U=document.getElementById("Usu").value;
	C=document.getElementById("Con").value;
	//Validar los datos
	if (U=="Alondra"&&C=="1234"){
		alert("Usuario y Contraseña Correctos");
		window.open("Suma.html");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
	else{
		alert("Usuario o Contraseña Incorrectos");
		document.getElementById("Usu").value="";
		document.getElementById("Con").value="";
	}
}