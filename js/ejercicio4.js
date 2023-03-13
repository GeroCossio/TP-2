// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while (true) {
  let caja = prompt("Ingresa algun numero");
  if (caja === null || caja === "") {
    break;
  }
  let num = Number(caja);
  if (isNaN(num)) {
    alert("Ingresa un numero valido");
    continue;
  }

  suma += num;
}

alert("La suma total de los números que ingresaste es: " + suma);
