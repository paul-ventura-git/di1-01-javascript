// rep = número de repetición
// se repite mientras la condición sea TRUE

for (let rep = 0; rep <10; rep++) {
  console.log("Repetición número: " + rep);
}

for (let i = 1; i <= 5; i++) {
  console.log("Comenzamos con la fila: " + i);
  for (let j = 1; j <= 5; j++) {
    console.log("Elemento de la FILA: " + i + " y de la COLUMNA: " + j);
  }
}