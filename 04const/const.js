const x = 10;

{
    const x = 2;
    // let x = 9; // ERROR
    // x=8; ERROR Redeclarando la variable
    // Here x is 2
    console.log("Segunda x: ");
    console.log(x);
}
// Here x is 10
console.log("Primera x: ");
console.log(x);