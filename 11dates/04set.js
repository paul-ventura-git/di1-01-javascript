const d90 = new Date("January 01, 2025");
d90.setFullYear(2020);

const d91 = new Date("January 01, 2025");
d91.setFullYear(2020, 11, 3);

const d92 = new Date("January 01, 2025");
d92.setMonth(11);

const d93 = new Date("January 01, 2025");
d93.setDate(15);

const d94 = new Date("January 01, 2025");
d94.setDate(d94.getDate() + 50);

/**************************************************************** */

const d95 = new Date("January 01, 2025");
d95.setHours(22);

const d96 = new Date("January 01, 2025");
d96.setHours(22, 10, 20);

const d97 = new Date("January 01, 2025");
d97.setMinutes(30);

const d98 = new Date("January 01, 2025");
d98.setSeconds(30);

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}