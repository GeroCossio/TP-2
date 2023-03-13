/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
*/

let num = prompt("Ingrese un numero entre 1 y 50");
if (num <= 50) {
  let cadena = "";
  for (let i = 1; i <= num; i++) {
    cadena += i;
    console.log(cadena);
  }
} else {
  console.log("El número ingresado es mayor a 50");
}
