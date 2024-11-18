// Append child
/*
const node = document.createElement("li"); 
const textnode = document.createTextNode("Agua");
node.appendChild(textnode); 
document.getElementById("myList").appendChild(node);
*/
// Inner HTML

document.getElementById("ejemploDeMyInnerHTML").innerHTML = "I have changed!";

// Style

document.getElementById("myH1").style.color = "red";
//let value = document.getElementById("myP").style.borderTop;

// Value

let my_value = document.getElementById("myText").value = "Johnny Bravo";
console.log(my_value);
