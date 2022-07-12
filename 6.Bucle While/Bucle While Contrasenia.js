/*Bucles While*/ 

let pass = " ";

//let pass = "hola";

/*while (pass != 'hola') {
    pass = prompt('Introduzca su contraseña');
}

console.log('fin del bucle');*/

do {
  pass = prompt("Introduzca su contraseña");
} while (pass != "hola ");

let savePass = pass.slice();