// A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

// Create a Set
const letters = new Set(["a","b","c"]);

// Create a Set
const letters2 = new Set();

// Add Values to the Set
letters2.add("a");
letters2.add("b");
letters2.add("c");

// Create a Set
const letters3 = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add Variables to the Set
letters3.add(a);
letters3.add(b);
letters3.add(c);

// If you add equal elements, only the first will be saved:
letters3.add("a");
console.log(letters3)