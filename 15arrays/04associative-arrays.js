/*Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  */

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person.length);    // Will return 3
console.log(person[0]);        // Will return "John"
console.log(person)

const person2 = [];
person2["firstName"] = "John";
person2["lastName"] = "Doe";
person2["age"] = 46;
console.log(person2.length);     // Will return 0
console.log(person2[0]);         // Will return undefined
console.log(person2); // Will return "John"