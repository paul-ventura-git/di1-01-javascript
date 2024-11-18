// Event handlers

function myOnLoad() {
  alert("Se ha cargado la página.");
}

function myOnChange() {
  console.log("El texto ha cambiado.");
}

function myOnSubmit() {
  alert("Se ha enviado el formulario.");
}

function myOnMouseOver() {
  document.getElementById("div1").style.backgroundColor = 'red'
}

function myOnMouseOut() {
  document.getElementById("div1").style.backgroundColor = 'white'
}

function myOnClick() {
  document.getElementById("div3").style.backgroundColor = 'green'
}

function myOnFocus() {
  document.getElementById("myButton").style.backgroundColor = 'yellow'
}
