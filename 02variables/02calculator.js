//Creamos variable para INPUT 1:
let primer_valor;

//Creamos variable para INPUT 2:
let segundo_valor;

//Creamos función para INPUT 1 "First":
function myFunction1(){
    console.log("Input 1: ");
    primer_valor = Number(document.getElementById("first").value);
    console.log(primer_valor);
}

//Creamos función para INPUT 2 "Second":
function myFunction2(){
    console.log("Input 2: ");
    segundo_valor = Number(document.getElementById("second").value);
    console.log(segundo_valor);
}

//Creamos función para calcular respuesta:
function myFunction3() {
    let resultado = primer_valor + segundo_valor;
    document.getElementById("result").innerHTML = resultado;
    console.log(resultado);
}
