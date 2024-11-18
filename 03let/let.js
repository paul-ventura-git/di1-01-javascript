let x = 10;

{
    let x = 2;
    // let x = 9; // ERROR
    x=8; // Redeclarando la variable
    // Here x is 2
    console.log("Segunda x: ");
    console.log(x);
}
// Here x is 10
console.log("Primera x: ");
console.log(x);