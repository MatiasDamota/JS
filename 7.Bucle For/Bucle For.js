/*Bucle For:
Determinados:

Bucle for

Su sintaxis se compone de 3 partes
    Iniciación de variable
    Número de vueltas
    Incremento o decremento

for (let i=0; i<=10; i++){
    código a ejecturar
}    
*/

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let numbers = [05,14,23,32,41,50]

/*for (let a=0; a<numbers.length; a++){
    console.log(numbers[a]);
}
*/

for (let a=0; a<numbers.length; a++){
    console.log(`A vale "${a}" y el valor de esa posición en el array es ${numbers[a]}`);
}