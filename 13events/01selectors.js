//Get the first <p> element:
document.querySelector("p");
//document.querySelector("p").innerHTML="Seleccionó el primero";

//Get the first element with class="example":
//document.querySelector(".example").innerHTML="Primer p";

//Get all <p> elements:
document.querySelectorAll("p");

//Get all elements with class="example":
document.querySelectorAll(".example");

/******************************************* */

const myElement = document.getElementById("demo");
myElement.style.backgroundColor = "red";

document.getElementById("demo").style.color = "blue";

//Get all elements with class="example":
const collection1 = document.getElementsByClassName("example");
console.log(collection1);
console.log(collection1.length);

//Get all elements with both the "example" and "color" classes:
const collection2 = document.getElementsByClassName("example color");

//Get all elements with the name "fname":
let elements = document.getElementsByName("fname");

//Number of elements with name="animal":
let num = document.getElementsByName("animal").length;

const collection3 = document.getElementsByName("animal");
for (let i = 0; i < collection3.length; i++) {
  if (collection3[i].type == "checkbox") {
    collection3[i].checked = true;
  }
}

//Get all elements with the tag name "li":
const collection4 = document.getElementsByTagName("li");

//Get all elements in the document:
const collection5 = document.getElementsByTagName("*");

//Change the inner HTML of the first <p> element in the document:
document.getElementsByTagName("p")[0].innerHTML = "Hello World!";

