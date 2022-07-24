//Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado.


let booleano = true;
while(booleano){
    let num1 = parseInt(prompt("Ingrese primer numero a sumar"));
    let num2 = parseInt(prompt("Ingrese segundo numero a sumar"));
    let suma = num1+num2;
    booleano = confirm("La suma es : "+suma);
}

//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.
let i=0;
let texto="";

    while(texto!="ESC"){
        texto = prompt("Ingrese texto").toUpperCase();
        if (texto != "ESC"){
        i++;
        let salida = texto + " "+i;
        console.log("El texto es : "+salida);
        }
}

//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let numero = prompt("Ingrese un numero");
for (let index = 1; index <= numero; index++) {
    console.log("Hola",index);
}
