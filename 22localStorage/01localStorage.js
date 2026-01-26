// Save data
localStorage.setItem("username", "paul123");

// Get data
const username = localStorage.getItem("username");
console.log(username);

/************************************************************************** */

const user = {
  name: "Paul",
  age: 28,
  country: "Peru"
};

// Save object
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);

/************************************************************************** */

const languages = ["JavaScript", "TypeScript", "Python"];

// Save array
localStorage.setItem("languages", JSON.stringify(languages));

// Retrieve array
const storedLanguages = JSON.parse(localStorage.getItem("languages"));
console.log(storedLanguages);

/**************************************************************************/

const settings = {
  theme: "dark",
  notifications: true
};

// Save initial settings
localStorage.setItem("settings", JSON.stringify(settings));

// Update settings
const savedSettings = JSON.parse(localStorage.getItem("settings"));
savedSettings.theme = "light";

// Save again
localStorage.setItem("settings", JSON.stringify(savedSettings));