const age = 30; // 30
const isOldEnough = age >= 18;

console.log(isOldEnough);

/*
if (isOldEnough) {
    console.log("Eres mayor de edad");
}
*/
// IF-ELSE control structure
if (age >= 18) {
    console.log("Eres mayor de edad");
} else {
    const yearsLeft = 18 - age;
    console.log(`Aún eres muy joven. Espera ${yearsLeft} año(s).`)
}

// Scope (ambito)
const birthYear = 1999;

if (birthYear <= 2000) {
    let century = 20;
    console.log(century);
} else {
    let century = 21;
    console.log(century);
}

let edad = "100";

if (edad.length <= 2) {
    console.log(edad.length);
    console.log("Edad válida");
} else {
    console.log(edad.length);
    console.log("Edad NO válida")
}


