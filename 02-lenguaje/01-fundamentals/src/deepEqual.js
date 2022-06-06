/*Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.

**TIP**: Recuerda, los objetos tienen un método `hasOwnProperty` que nos indica si dicho objeto tiene o no una propiedad concreta. Ejemplo `a.hasOwnProperty("name")`, si `a` tiene una propiedad `name` nos devolverá `true`, en caso contrario `false`.*/

var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
    let result = false;
    for (const property in a) {  
        if( b.hasOwnProperty(property) ){
            result = a[property] === b[property];
            if(result === false){
                return result;
            }
        } else{
            result = false;
            return result;
        }
    }
    for (const property in b) {  
        if( a.hasOwnProperty(property) ){
         
        } else{
            result = false;
            return result;
        }
    }
    return result;
}

console.log("¿Son iguales? " + isEqual(user, clonedUser)); // true

/*Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.

**TIP**: Recuerda que el operador `typeof` en Javascript nos devuelve un string indicando el tipo de una variable de entre tipos primitivos, objetos o funciones. Ejemplo, `typeof 12 // "number"` o `typeof {} // "object"`.*/

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  
  function isDeepEqual(a, b) {
    let result = false;
    for (const property in a) {  
        if( b.hasOwnProperty(property) ){
            if( typeof a[property] === 'object'){
                result = isEqual(a[property], b[property])
            }else{
                result = a[property] === b[property];
            }
            if(result === false){
                return result;
            }
        } else{
            result = false;
            return result;
        } 
    }
    for (const property in b) {  
        if( !a.hasOwnProperty(property) ){  
            result = false;
            return result;
        }
    }
    return result;
  }
  console.log("¿son iguales con anidamiento?: " + isDeepEqual(user, clonedUser)); 