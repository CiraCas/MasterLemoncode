/*Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean `undefined` o `null`. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.*/

/*function f(input) {
    var result;
    if (input === undefined) {
        result = "Unknown";
    } else if (input === null) {
        result = "";
    } else {
        result = input;
    }
    return result;
}*/

function f(input) {
    
    return input || (input === null
                                ? ""
                                : "Unknown");
    
}

//forma más simplificada aun, sin ternario 
function f2(input = "Unknown") {

    return input || "";

}

console.log(f());
console.log(f(undefined));
console.log(f(null));
console.log(f("Hello"));

console.log('Sin ternario: ',f2());
console.log('Sin ternario: ',f2(undefined));
console.log('Sin ternario: ',f2(null));
console.log('Sin ternario: ',f2("Hello"));
