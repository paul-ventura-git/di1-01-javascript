// Type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion

console.log('Yo tengo ' + 23 + ' años.');
console.log('23' - '10' - 4);

let n = '1' + 12; // 112
n = n - 1; // 111
console.log(n);

// 2+3+4+'5' (+)Lo coerciona a String
// '10'-'4'-'3'-2+'5' (-)Lo coerciona a número