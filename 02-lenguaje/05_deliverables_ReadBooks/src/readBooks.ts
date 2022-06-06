/*Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver `false`
TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.*/

//Utiliza Typescript para añadir los tipos adecuados.

class Book {
    title: string;
    isRead: boolean;
    constructor(title: string, isRead: boolean){
        this.title = title,
        this.isRead = isRead;
    }
}

function isBookRead( books:Array<Book>, titleToSearch:string ): boolean|string {

    const book:Book = books.find(book => {
        const{ title } = book;
        if ( title === titleToSearch){
        return book;
        } 
    })
    //He decidido cambiar los valores retornados para diferenciar los libros no leídos de los que no existen ya que ambos debíar devolver un 'false'.
    if( book ){
        return book.isRead? "sí se ha leído"
                        : "no se haleído";
    
    } else {
        return false
    }

    
}

const books: Array<Book> = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
