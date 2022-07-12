let name = ["Paco", "José", "Paula", "Maria"];
//For OF - devuelve los elementos
for (let name of names) {
  if (name === "Paula") {
    break;
  }
  console.log(name);
}
//For IN - devuelve el index
for (let index in names) {
  if (names[index] === "Paula") {
    break;
  }
  console.log(index);
}

//For 
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Paula") {
    break;
  }
}
