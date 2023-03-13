//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
//Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let cadena = "";
let continuar = true;
while (continuar) {
  let texto = prompt("Introduce algun mensaje");
  if (texto === null) {
    continuar = false;
  } else {
    if (cadena === "") {
      cadena = texto;
    } else {
      cadena = cadena + "-" + texto;
    }
  }
}
if (cadena === "") {
  alert("No introduciste ningun mensaje");
} else {
  alert("Las cadenas fueron: " + cadena);
}

