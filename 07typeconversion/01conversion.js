// Type conversion (Conversión explícita, type casting)

const inputYear = '1991'; // String
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); // Sumar números

console.log(Number('Jonas')); // Not a number
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion (Conversión implícita, type coercion)

console.log('Yo tengo ' + 23 + ' años.');
console.log('23' - '10' - 4);

let n = '1' + 12; // 112
n = n - 1; // 111
console.log(n);

// 2+3+4+'5' (+)Lo coerciona a String
// '10'-'4'-'3'-2+'5' (-)Lo coerciona a número