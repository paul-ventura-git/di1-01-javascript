// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
console.log(typeof answer3) // string


/********************************************** */

let total_factura;

let productos = { detergente: 9, comida: 20 }

let pedido = [
  {
    nombre_producto: detergente,
    cantidad: 2,
    subtotal: 18
  }
]

const igv = 0.2;

let venta_total = 18 + 18*igv

let usuario = "Juan Perez"

// Ver factura
console.log("Nombre de usuario: " + usuario)
