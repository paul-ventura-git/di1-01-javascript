const tieneLicencia = true; // true = 1; false = 0
const tieneBuenaVista = true;
const tieneGasolina = false;

console.log(tieneLicencia && (tieneBuenaVista || tieneGasolina));

console.log(tieneLicencia && tieneBuenaVista); // AND
console.log(tieneLicencia || tieneBuenaVista); // OR
console.log(!tieneLicencia) // NOT

if (tieneLicencia && tieneBuenaVista) {
  console.log("Puedes conducir.");
} else {
  console.log("Otra persona debería conducir...")
}

const cansado = false;
console.log(tieneLicencia && tieneBuenaVista && cansado)

if (tieneLicencia && tieneBuenaVista && !cansado) {
  console.log("Puedes conducir.");
} else {
  console.log("Otra persona debería conducir...")
}

