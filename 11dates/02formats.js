//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
const d1 = new Date("2015-03-25T12:00:00-06:30");
//If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

//When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
//When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
//In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.

// Month and day can be in any order:
const d2 = new Date("Mar 25 2015");
const d3 = new Date("25 Mar 2015");

//And, month can be written in full (January), or abbreviated (Jan):
const d4 = new Date("January 25 2015");

const d5 = new Date("Jan 25 2015");

//Commas are ignored. Names are case insensitive:
const d6 = new Date("JANUARY, 25, 2015");

//Date.parse() returns the number of milliseconds between the date and January 1, 1970:
let msec = Date.parse("March 21, 2012");

const d7 = new Date(msec);