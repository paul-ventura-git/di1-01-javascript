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
// The values() method returns an Iterator object with the values in a Set:
const myIterator = letters.values();
console.log(myIterator);

// List all the values
let text2 = "";
for (const entry of myIterator) {
  text2 += entry;
}
console.log(text2); // "abcde"

let text3 = "";
for (const entry of letters.values()) {
  text3 += entry;
}
console.log(text3);

// 6. keys()
// The keys() method returns an Iterator object with the values in a Set:
// A Set has no keys, so keys() returns the same as values().
// This makes Sets compatible with Maps.

const myIterator2 = letters.keys();

let text4 = "";
for (const x of myIterator2) {
  text4 += x;
}
console.log(text4);

// 7. entries()
// The entries() method is supposed to return a [key,value] pair from an object.
// A Set has no keys, so the entries() method returns [value,value].
// This makes Sets compatible with Maps.

const myIterator3 = letters.entries();

let text5 = "";
for (const entry of myIterator3) {
  text5 += entry+" ";
}
console.log(text5);