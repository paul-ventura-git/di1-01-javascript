const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

console.log(car); // mustang
console.log(truck); // f-150
console.log(suv); // expedition

// If we only want the car and suv we can simply leave out the truck but keep the comma:
const [car2, , suv2] = vehicles;

// Destructuring comes in handy when a function returns an array:
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log(add);
console.log(multiply);