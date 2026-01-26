/*
let rep = 0

while (rep<10) {
  console.log("WHILE: Repetición número "+rep);
  rep++; // rep = rep + 1 // rep += 1
}
*/

let text = '' // Acumulador
let i = 0

do {
  //text += "The number is " + i;
  text = text + " " + i;
  i++;
  console.log(text);
}
while (i < 10);

