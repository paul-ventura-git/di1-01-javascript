// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()

// MAPS are OBJECTS

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits);
console.log(typeof fruits);
console.log(fruits instanceof Map);