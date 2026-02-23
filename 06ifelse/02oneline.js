// 
const myname = 'Paul';
const mypassword = '';

(myname && mypassword) ? console.log("Hay valores en ambas variables") : console.log("No hay valores");

// with function calls
var authenticated = true;

function renderApp(){
    console.log("Ahora renderizaré el Dashboard.");
}

function renderLogin(){
    console.log("Ahora renderizaré la página de inicio de sesión.");
}

authenticated ? renderApp() : renderLogin();

authenticated = false;

authenticated ? renderApp() : renderLogin();
