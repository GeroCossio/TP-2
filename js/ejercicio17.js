//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingresa algun mensaje");
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    texto = texto.toLowerCase();
  if(texto.charAt(i) === 'a' || texto.charAt(i) === 'e' || texto.charAt(i) === 'i' || texto.charAt(i) === 'o' || texto.charAt(i) === 'u') {
    posicion = i + 1;
    break;
  }
}

if (posicion > -1) {
  document.write("La primera vocal se encuentra en la posicion " + [posicion]);
} else {
  document.write("El mensaje no tiene vocales");
}
