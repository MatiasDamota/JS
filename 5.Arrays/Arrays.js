/*Arrays repaso*/

let numeros = [1,2,3,4,5,6];
let palabras = ['hola','estamos','en','Argentina']

console.log(numeros+[0]+numeros[1]);
console.log(`la palabra "${palabras[3]}" tiene ${palabras[3].length} letras.`);

/*no mezclar, no seas puto*/

/*Arrays metodos
Array.IsArray(variable a evaluar) - devuelve true si la variable es un array
*/

let nu = 3;

console.log(Array.isArray(nu)); /*false*/
console.log(Array.isArray(numeros)); /*true*/ 

/*elimiar elementos del array:
.shift() - Elimina el primer elemento del array
.pop() - Elimina el ultimo elemento del array*/

console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.pop();

/*guardar elemnto eliminado:*/

let deleteElement = numeros.shift();
console.log(deleteElement);

/* añadir nuevo elemento al array:
.push (elemento 1, elemento 2, . . .) añade uno o más elementos al final del array y devuelve la nueva longitud
.unshift (elemento 1, elemento 2, . . .) añade uno o más elementos al principio del array y devuelve la nueva longitud*/

let getElementPush = numeros.push(1);
console.log(getElementPush);

let getElementUnshift = numeros.unshift(1,2,3,4,5,6);
console,log(getElementUnshift);

/* eliminar conjuntos de elementos
.splice (a, b, itemn) - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
a - indice de inicio (en caso de especificar, argentina pierde y pierde mi familia ._. )
b - cantidad de elementos (opcional)
items - cantidad de elementos a añadir (opcional)*/

let removeElement = numeros.splice(2,2,100,2,3,4,5,6,9000,50000,399,444);
console.log(removeElement);

/*extraer elemntos de un array:
.slice (a, b) - Extrae elemntos de un array desde el indice hasta el indice b. Si no existe el indice b lo hace hasta el final.
si no se especifica nada hace una copia del array*/

let pasteElement = numeros.slice(0,5);
console.log(pasteElement);