/*Implementa una función `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.*/


const concat = (a, b) => [ ...a, ...b]; 

console.log(concat([ 1, 2, 3 ] , [ 1, 2, 3]));


/*Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).*/

const concatMultiple = (...arrayMultiple) => {
    let arrayConcat = [];
    for(array of arrayMultiple){
        arrayConcat = [
            ...arrayConcat,
            ...array
        ]
    }
    return arrayConcat;
}; 

console.log(concatMultiple([ 1, 2, 3 ] , [ 1, 2, 3], [ "a", "b", "c"]));