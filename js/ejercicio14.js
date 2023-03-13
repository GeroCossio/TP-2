//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let texto = prompt("Ingresa un mensaje");
let resultado = "";
for (let i = 0; i < texto.length; i++) {
  if (i === texto.length - 1) {
    resultado += texto.charAt(i); 
  } else {
    resultado += texto.charAt(i) + "-";
  }
}
document.write(resultado);
