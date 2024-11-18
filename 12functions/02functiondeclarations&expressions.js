//Function declaration
const age1 = calcAge1(1985);

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

console.log(age1);

//Function expressions
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);


console.log(age1, age2);
