let num1 = 1;
let num2 = 5;
/*if (num1 > 0 && num2 > 0) {
    console.log(`${num1} y ${num2} son mayores que 0`);
}

if (num1 > 0 || num2 > 0) {
    console.log(`${num1} o ${num2} son mayores que 0`);
}*/

if (num1 > 0) {
    if (num2 > 0) {
        console.log(`${num1} y ${num2} son mayores que 0`);
    } else if (num2 < 0) {
        console.log(`${num1} es mayores que 0 y num 2 es menor que 0`);
    } else {
        console.log(`${num1} es mayor que 0 y num 2 es igual a 0`);
    }
} else if (num1 < 0) {
    if (num2 > 0) {
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    } else if (num2 < 0) {
        console.log(`${num1} y ${num2} son menores que 0`);
    } else {
        console.log(`${num1} es menor que 0 y num 2 es igual a 0`);
    }
} else {
    if (num2 > 0) {
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    } else if (num2 < 0) {
        console.log(`${num1} es igual a 0 ${num2} es menor que 0`);
    } else {
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
}


let respuesta = true;

if (respuesta) console.log(`respuesta tiene el valor true`);
if (!respuesta) console.log(`respuesta tiene el valor false`);
