/*Crea una función que reciba una frase en formato string y devuelva la palabra más larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.*/
function biggestWord(phrase) {
    let arrayPhrase = phrase.split(" ");
    let word = "";
    arrayPhrase.forEach(element => {
        if(word.length < element.length){
            word = element;
        }
    });
    console.log("The largest word is: " + word);
}    

// Ejemplo
biggestWord("Esta frase puede contener muchas palabras"); // "contener"
biggestWord("Ejercicios básicos de JavaScript"); // "Ejercicios"