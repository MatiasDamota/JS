/*sintaxis simple*/

let num = 2;

switch (num) {
  case 1:
    console.log(`${num} tiene el valor de 1`);
    break;
  case 2:
    console.log(`${num} tiene el valor de 2`);
    break;

  default:
    console.log(`${num} no vale ni 1 ni 2`);
    break;
}

/*sintaxis múltiple*/

switch (num) {
  case 1:
  case 5:
  case 3:
    console.log(`${num} es impar.`);
    break;
  case 2:
  case 4:
  case 6:
    console.log(`${num} es par.`);
    break;
}

/*Sintaxis múltiple encadenada*/