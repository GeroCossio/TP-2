//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Porfavor, ingresa tu edad");

if (isNaN(edad) || edad == "") {
  document.write("Ingresa un numero valido");
} else if (edad < 16) {
  document.write("Todavia no podes manejar :p");
} else if (edad >= 16 && edad < 18) {
  document.write("Podes manejar!!, pero con la autorizacion de tus papas");
} else if (edad >= 18 && edad < 75) {
  document.write("Podes manejar!!");
} else if (edad >= 75) {
  document.write("Podes manejar pero con cuidado :)");
} else {
  document.write("La edad que pusiste no es valida");
}

