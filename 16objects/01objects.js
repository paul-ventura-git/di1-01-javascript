/*
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car)

const fruits = ["apple", "orange"]

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person)
console.log(person.eyeColor)
console.log(fruits[1])

*/

function myFetching () {
  return fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data[0].address.geo.lat)
  })
}

function myFetching2 () {
  return fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(response => response.products)
  .then(data => {
    console.log(data[0].reviews[2].date)
  })
}

myFetching2();