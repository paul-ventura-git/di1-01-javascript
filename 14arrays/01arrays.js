const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const cars2 = [];
cars2[0]= "Mercedes";
cars2[1]= "Ford";
cars2[2]= "Toyota";
console.log(cars2);

const cars3 = new Array("Hyundai", "Chevrolet", "Audi");
console.log(cars3);

//let cars4 = cars4[0];
//console.log(cars4);

// Changing an array element
cars3[0] = "Opel";
console.log(cars3)

// Converting an ARRAY to STRING
// The join() method returns a string concatenated with the elements of an array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" ")); // Output: Banana Orange Apple Mango
console.log(fruits.toString());
document.getElementById("demo").innerHTML = fruits.toString();

// ARRAYS are OBJECTS

const person1 = ["John", "Doe", 46];
const person2 = {firstName:"John", lastName:"Doe", age:46};

// ARRAYS elements can be OBJECTS

function myFunction () {
  return 0
}

let myCars = ["Volvo"]

let myArray = [];
myArray[0] = Date.now();
myArray[1] = myFunction;
myArray[2] = myCars;

console.log(myArray)

