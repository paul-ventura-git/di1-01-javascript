// for... in loop - itera sobre las claves de un objeto

const persona = {
  nombre: "Ana",
  edad: 25,
  pais: "Perú"
};

for (const clave in persona) {
  console.log(clave + ": " + persona[clave]);
}