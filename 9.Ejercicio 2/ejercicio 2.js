/*Curso: Desarrollo web, JavaScript desde 0.
  Profesor: Adrian Heras
  Alumno: Matias N. Da Mota
  
  Ejercicio N°2: 
  Crea un programa que pueda calcular el área de 3 figuras geométricas, triangulo,
  rectángulo y círculo.
  */

const register = document.getElementById("register");
const results = document.getElementById("result");

document.getElementById("btn").addEventListener("click", function () {
  while (true) {
    var regex = /[0-9]+/; // esta expresdion define que puede haber una o mas números.
    var figura = prompt("¿Que figura se quiere calcular el area?", "...");
    if (!regex.test(figura) && figura != null && figura != "") {
      //triangulo
      if (figura == "triangulo") {
        alert(`Ingrese los datos para calcular la superficie del ${figura}`);
        let a = prompt(`Ingrese la altura del ${figura}`);
        let b = prompt(`Ingrese la base del ${figura}`);

        if ((!isNaN(a, b) && a, b != null && a, b != "")) {
          let r = parseFloat(a) * parseFloat(b);
          r /= 2;
          register.textContent = `la superficie de ${figura} es ${r}`;
          console.log(`la superficie de ${figura} es ${r}`);
          break;
        } else {
          alert(`${a} y ${b} no son datos validos`);
          continue;
        }
        break;

        //cuadrado
      } else if (figura == "cuadrado") {
        alert(`Ingrese los datos para calcular la superficie del ${figura}`);
        let a = prompt(`Ingrese la altura del ${figura}`);
        let b = prompt(`Ingrese la base del ${figura}`);

        if ((!isNaN(a, b) && a, b != null && a, b != "")) {
          let r = parseFloat(a) * parseFloat(b);
          register.textContent = `la superficie de ${figura} es ${r}`;
          console.log(`la superficie de ${figura} es ${r}`);
          break;
        } else {
          alert(`${a} y ${b} no son datos validos`);
          continue;
        }
        break;

        //circulo
      } else if (figura == "circulo") {
        alert(`Ingrese los datos para calcular la superficie del ${figura}`);
        let a = prompt(`Ingrese el radio del ${figura}`);

        if (!isNaN(a) && a != null && a != "") {
          let r = 3.1416 * parseFloat(a);
          r = Math.pow(r, 2);
          register.textContent = `la superficie de ${figura} es ${r}`;
          console.log(`la superficie de ${figura} es ${r}`);
          break;
        } else {
          alert(`${a} no es un dato valido`);
          continue;
        }
        break;
      } else {
        alert(`${figura} no es una figura valida`);
        continue;
      }
    }
  }
});
