const cars = ["Saab", "Volvo", "BMW"];
cars.length;
console.log(cars.length)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myLength = fruits.length;
console.log(myLength)

// Accessing the first array element
const firstElement = cars[0];
console.log(firstElement)

// Accesing the last array element
const lastElement = cars[cars.length - 1];
console.log(lastElement)

// Looping array elements
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits2.length;

for (let i=0; i<fruits2.length; i++) {
  console.log(fruits2[i]);
}

fruits2.map(item => {
  console.log(item);
})

/*
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits2[i] + "</li>";
}
text += "</ul>";
*/
// forEach()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

let text2 = "<ul>";
fruits3.forEach(myFunction);
text2 += "</ul>";

function myFunction(item) {
  text2 += "<li>" + item + "</li>";
}

// map
fruits.map(item => (console.log(item)))
