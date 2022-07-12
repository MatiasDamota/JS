/*Curso: Desarrollo web, JavaScript desde 0.
  Profesor: Adrian Heras
  Alumno: Matias N. Da Mota
  
  Ejercicio N°3: 
  Solicita un número e imprime todos los números pares e impares desde el 1 hasta
  ese número.
  */
const register = document.getElementById("register");
const results = document.getElementById("result");
var conteo = 0;
document.getElementById("btn").addEventListener("click", function () {
  while (true) {
    var total = prompt("Introduzca un número");
    if (!isNaN(total) && total != null && total != "") {
      alert("Calculando");
      break;
    } else {
      alert(`${total} no es un número valido`);
      continue;
    }
  }

  while (true) {
    if (conteo <= total) {
      conteo % 2 == 0
        ? ((register.textContent = `${conteo} es par.`),
          console.log(`${conteo} es par.`))
        : ((register.textContent = `${conteo} es impar.`),
          console.log(`${conteo} es impar.`));
      conteo += 1;
      continue;
    } else {
      alert(`Fin del Programa.`);
      alert(`Milanesa`);
      break;
    }
  }
});
