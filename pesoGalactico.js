fuction Calcular() {
   //Declarar las variables
   var m, g, p;
   //Recuperar los valores de las cajas de texto y asignarlos a las varibales
   m=parseFloat(document.getElementById("m").value);
    g=parseFloat(document.getElementById("g").value);
  //Realizar las operaciones 
  p= m * g / 9.8;
  //Mostrar el resultado en la caja de texto
  document.getElementById("Peso").value=p;
}
fuction Borrar(){
      document.getElementById("m").value="";
      document.getElementById("g").value="";
      document.getElementById("Peso").value="";}
}

    