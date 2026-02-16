let x1;  // Declaración
x1 = 10; // Asignación
console.log(x1)

{
    let x2 = 2; // Redeclarar
    console.log(x2);
    let x = 9; // ERROR
    x2=8; // Reasignar la variable
    // Here x is 2
    console.log("Tercera x2: ");
    console.log(x2);
}
// Here x is 10
console.log(x2); // ERROR

/*
  Type conversion


console.log("Primera x: ");
console.log(x);

let resultado = "5" + 2;
console.log(typeof(resultado))

let diferencia = "5" - 2;
console.log(typeof(diferencia));

let bool = 1 == "1";
console.log(typeof(bool));

*/