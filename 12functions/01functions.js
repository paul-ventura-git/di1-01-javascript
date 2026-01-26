// Function is called, the return value will end up in x
let x = myFunction1(4, 3);

function myFunction1(a, b) {
// Function returns the product of a and b
  return a * b;
}

console.log(x)

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let respuesta = toCelsius(77);

console.log(respuesta);

// Functions can be called as values
let text = "The temperature is " + toCelsius(55) + " Celsius";
console.log(text);

// Local variables // bounded variables
function myFunction2(marcaCarro) {
  // code here CAN use carName
  console.log("La marca de tu carro es: " + marcaCarro);
}

myFunction2("Ferrari");

