// El rest operator permite recibir cantidad variable de argumentos.

function sumar(...numeros) {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumar(1, 2, 3, 4)); // 10

// Permite agrupar los elementos restantes.

const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, ...resto] = numeros;

console.log(primero); // 10
console.log(segundo); // 20
console.log(resto);   // [30, 40, 50]

// Sirve para extraer propiedades y agrupar el resto.

const usuario = {
  nombre: "Ana",
  edad: 25,
  pais: "Perú",
  activo: true
};

const { nombre, ...otrosDatos } = usuario;

console.log(nombre);      // Ana
console.log(otrosDatos);  // { edad: 25, pais: "Perú", activo: true }