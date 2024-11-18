//With a regular function this represents THE OBJECT THAT CALLS THE FUNCTION:

// Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function: ***
document.getElementById("btn").addEventListener("click", hello);


//With an arrow function this represents THE OWNER OF THE FUNCTION:

// Arrow Function: ***
hello = () => {
  document.getElementById("demo").innerHTML += this; 
}

// The window object calls the function: 
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);