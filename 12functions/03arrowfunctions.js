let myFunction = (a, b) => a * b;
console.log(myFunction(5,78));

hello = () => {
  return "Hello World!";
}
console.log(hello())

//If the function has only one statement, 
//and the statement returns a value, 
//you can remove the brackets and the RETURN keyword:

hello = () => "Hello World! 2";
console.log(hello());

//Arrow functions with parameters
hello = (val) => "Hello " + val;
console.log(hello("Paul"))

//Arrow functions without parentheses
hello = val => "Hello " + val;
console.log(hello("Uno","Dos"));