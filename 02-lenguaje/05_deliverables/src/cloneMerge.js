//-------------------------CLONE------------------------

/*Implementa una función `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:*/

function clone(source) {
    return { ...source } ;
};

//-------------------------MERGE------------------------

/*Implementa una función `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.*/

//Usando la funcióan clone
function merge(source, target) {
    return Object.assign(clone(target), source); 
};

//Usando Spread Operator
const mergeSpread = (source, target) => ({ ...target, ...source});

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

console.log(a);
console.log(b);
console.log(`Usando la función clone: ` , merge(a, b));
console.log(`Usando Spread Operator: ` , mergeSpread(a, b));

/*resultado esperado:
 {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}*/