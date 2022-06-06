/*Implementa una función `clone` que devuelva un objeto clonado a partir de otro:*/

function clone(source) {
    let sourceClone = {
        ...source
    }
    return sourceClone
}

/*Dados dos objetos cualesquiera, implementa una función `merge` que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto `source` sobre las del objeto `target`.*/

function merge(source, target) {
    let mergeClone = Object.assign(clone(target), source);
    /*let mergeClone= {
        ...target,
        ...source  
    }*/
    return mergeClone;  
}
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
console.log(merge(a, b));
console.log(a);
console.log(b);
/*resultado esperado:
 {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}*/