// 
const myname = 'Paul';
const mypassword = '123';

(myname && password) ? console.log("Hay valores") : console.log("No hay valores");

// with function calls
var authenticated = true;

function renderApp(){
    console.log("I'm going to render the user dashboard.");
}

function renderLogin(){
    console.log("I'm going to render the login page.");
}

authenticated ? renderApp() : renderLogin();

authenticated = false;

authenticated ? renderApp() : renderLogin();
