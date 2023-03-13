//Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingresa un mensaje");
let contadoraVocales = 0;

for(let i = 0; i < texto.length; i++) {
  let letra = texto.charAt(i).toLowerCase();

  if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    contadoraVocales++;
  }
}

document.write("El mensaje que ingresaste tiene "+ contadoraVocales + " vocales");
