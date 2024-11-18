// expressions:
3 + 4 // true
1991 // true
true && false && !false // false

console.log(Boolean(3+4));
console.log(Boolean(1991));
console.log(Boolean("Esto es un texto"));
console.log(Boolean(undefined));
console.log(Boolean(true && false && !false));

if (8/0) {
  console.log("Es verdadero.");
} else {
  console.log("Es false.");
}

//statement: (Declaraciones)

if (23 > 10) {
  const str = '23 is bigger'; // statement // Acción, orden, comando
}

const nombre = 'Paul'; 
console.log(`Tengo ${2100 - 2000} años de edad.`);
console.log(`Me llamo ${nombre} .`);
console.log(`Tengo ${
  true
} años de edad.`);

console.log("Me llamo: " + nombre);
