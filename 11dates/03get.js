const d1 = new Date();
d1.getFullYear();
console.log(d1.getFullYear());

const d2 = new Date("2021-03-25");
d2.getFullYear();
console.log(d2.getFullYear());

const d3 = new Date();
d3.getMonth();
console.log(d3.getMonth());

const d4 = new Date("2021-03-25");
d4.getMonth();

const months = ["Enero", "Febrero", "Marzo", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d5 = new Date("2021-03-25");
let month1 = months[d5.getMonth()];
console.log(month1);

const d6 = new Date();
let month2 = months[d6.getMonth()];

const d7 = new Date("2021-03-25");
d7.getDay();

const d8 = new Date();
d8.getDay();
console.log(d8.getDay());

const days = ["Domingo", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sábado"];

const d9 = new Date("2021-03-25");
let day1 = days[d9.getDay()];

const d10 = new Date();
let day2 = days[d10.getDay()];
console.log(day2)

const d11 = new Date("2021-03-25");
d11.getDate();

const d12 = new Date();
d12.getDate();
console.log(d12.getDate());

/************************************************************/

const d13 = new Date("2021-03-25");
d13.getHours();

const d14 = new Date();
d14.getHours();

const d15 = new Date("2021-03-25");
d15.getMinutes();

const d16 = new Date();
d16.getMinutes();

const d17 = new Date("2021-03-25");
d17.getSeconds();

const d18 = new Date();
d18.getSeconds();

const d19 = new Date("2021-03-25");
d19.getMilliseconds();

const d20 = new Date();
d20.getMilliseconds();

/************************************************************/

// Answer in milliseconds
/*
const d21 = new Date("1970-01-01");
d21.getTime();

const d22 = new Date("2021-03-25");
d22.getTime();

const d23 = new Date();
d23.getTime();

let ms = Date.now();
const d24 = new Date(ms);
*/