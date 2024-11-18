const age = '19';

if (age === 18) {
    console.log("Eres adulto (de manera estricta, con tipo de dato)");
} else {
    console.log("Tipos de datos distintos.");
}

if (age == 18) {
    console.log("Eres adulto (con tipo de dato relajado 'loose')");
} else {
    console.log("Son datos distintos")
}


const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7){
    console.log("7 is also a cool number.");
} else if (favourite === 5){
    console.log("5 is also a cool number.")
} else {
    console.log("Number is not 23 or 7 or 5.");
}

if (favourite !== 23) console.log("Why not 23?")

