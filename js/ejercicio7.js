/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma: 

333
22
1
*/

let num = parseInt(prompt("Ingresa un numero que no sea mayor a 50"));

if (num > 50) {
  alert("El número no tiene que ser mayor a 50");
} else {
  let cadena = "";
  for (let i = num; i > 0; i--) {
    cadena = "";
    for (let j = 0; j < i; j++) {
      cadena += i;
    }
    console.log(cadena);
  }
}

