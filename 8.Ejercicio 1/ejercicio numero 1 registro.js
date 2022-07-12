/*Curso: Desarrollo web, JavaScript desde 0.
  Profesor: Adrian Heras
  Alumno: Matias N. Da Mota
  
  Ejercicio N°1: 
  Solicita un nombre, la edad y muestra por consola el
  mensaje "Hola _, tienes _ años y el año que viene tendrás _ años"
  */

const register = document.getElementById("register");
const result = document.getElementById("result");
document.getElementById("btn").addEventListener("click", function () {
  
  while (true) {
    var regex = /[0-9]+/; // esta expresion define que puede haber una o mas números.
    var nombre = prompt("Introduzca su nombre");
    if (!regex.test(nombre) && nombre != null && nombre != "") {
      alert("ahora introduzca su edad real");
      break;
    } else if (nombre == "fin") {
      break;
    } else {
      alert(`${nombre} no es un nombre valido`);
      continue;
    }
  }

  while (true) {
    var edad = prompt("Introduzca su edad");
    if (!isNaN(edad) && edad != null && edad != "") {
      alert("validando tus datos...");
      var num = parseFloat(edad) + (1); // utilo parseFloat para sumar un año a la edad del usuario.
      break;
    } else if (edad == "fin") {
      break;
    } else {
      alert(`${edad} no es un número valido`);
      continue;
    }
  }
  register.textContent = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${num}`;
  console.log(
    `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${num}`
  );
});
