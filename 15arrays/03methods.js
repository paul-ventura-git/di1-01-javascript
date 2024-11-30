// Sorting elements
const cars = ["Saab", "Volvo", "BMW"];
cars.sort();
console.log(cars.sort())

// Adding array elements
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
console.log(fruits)

const fruits2 = ["Kiwi", "Orange", "Apple"];
fruits2[fruits2.length] = "Lemon";  // Adds "Lemon" to fruits
console.log(fruits2)

const fruits3 = ["Banana", "Orange", "Apple"];
fruits3[10] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruits3)

// Eliminating the last element
fruits.pop(fruits)
console.log(fruits)
