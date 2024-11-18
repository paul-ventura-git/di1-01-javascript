/*
    JavaScript Variables can be declared in 4 ways:
    Automatically
    Using var
    Using let
    Using const
*/

//They are automatically declared when first used:
//It is considered good programming practice to always declare variables before use.
a = 55;
b = 600;
c = a + b;
console.log(c);

/*
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.
*/
var i = 55;
var j = 44;
var k = i + j;
console.log(k);

let x = 10000;
let y = 6000;
let z = x + y;
console.log(z);

const price1 = 58;
const price2 = 61;
let total = price1 + price2;
console.log(total);

let person = "John Doe", carName = "Volvo", price = 200;


