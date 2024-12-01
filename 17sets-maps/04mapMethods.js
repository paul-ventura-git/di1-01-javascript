// 01. new Map()
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits);

// 02. Map.get()

console.log(fruits.get("apples"));

// 03. Map.set()

const fruits2 = new Map();

fruits2.set("apples", 500);
fruits2.set("bananas", 300);
fruits2.set("oranges", 200);
fruits2.set("mango", 1000);

console.log(fruits2);

// The set() method can also be used to change existing map values:

fruits2.set("apples", 888800);
console.log(fruits2);

// 04. Map.size

console.log(fruits2.size);

// 05. Map.delete()

fruits2.delete("apples");
console.log(fruits2);

// 06. Map.clear()

fruits.clear();
console.log(fruits);

// 07. Map.has()

console.log(fruits2.has("apples"));

// 08. Map.forEach()