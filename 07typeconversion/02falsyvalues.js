// 5 falsy values: 0, '', undefined, null, NaN

// No existe valor, false
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Sí existe algún valor, true
console.log(Boolean('Jonas Smith'));
console.log(Boolean({}));

const money = 100;

if (money) {
    console.log("No gastes todo tu dinero!");
} else {
    console.log("Deberías trabajar!");
}

let height = '1.75';

if (height) {
    console.log("YAY! Height está definida.");
} else {
    console.log("Height es UNDEFINED");
}
    