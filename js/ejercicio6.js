//Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
//1
//22
//333
//4444
//55555

let piramide = 1;
while(piramide <= 30) {
  let cadena = "";
  for(let i = 1; i <= piramide; i++) {
    cadena += piramide;
  }
  console.log(cadena);
  piramide++;
}

