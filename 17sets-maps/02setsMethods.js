// 1. new Set()

const letters = new Set(["a","b","c"]);
console.log(letters);

// 2. add()

letters.add("d");
letters.add("e");
console.log(letters);

// 3. has()

const answer = letters.has("d");
console.log(answer);

// 4. forEach()

let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text);

// 5. values()
const myIterator = letters.values();
console.log(myIterator.next().value); // "a"