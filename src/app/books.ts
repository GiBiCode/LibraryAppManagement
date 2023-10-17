export interface Book {
    id: number
    title: string;
    author: string;
    publicationYear: string;
    gender: string;
    availablequantity: number;
    isbn_code: string; 
  }

  // books.ts

export const books = [{
   id: 1,
  "title": "Cien Años de Soledad",
  "author": "Gabriel Garcia Márquez",
  "publicationYear": "1967",
  "gender": "Novela",
  "availablequantity": 30,
  "isbn_code": "9780065023961"
}, {
  id: 2,
  "title": "Crimen y Castigo",
  "author": "Fiódor Dostoyevsk",
  "publicationYear": "1890",
  "gender": "Novela, novela gótica",
  "availablequantity": 25,
  "isbn_code": "9789684322455"
}, {
  id:3,
  "title": "Rayuela",
  "author": "Julio Cortázar",
  "publicationYear": "1963",
  "gender": "Novela, Ficción",
  "availablequantity": 67,
  "isbn_code": "9780065023962"
}, {
  id:4,
  "title": "El viejo y el mar",
  "author": "Ernest Hemingwa",
  "publicationYear": "1952",
  "gender": "Novela, alegoría",
  "availablequantity": 22,
  "isbn_code": "9780065023554"
}, {
  id:5,
  "title": "El Problema de los Tres Cuerpos",
  "author": "Liu Cixin",
  "publicationYear": "2008",
  "gender": "Ciencia Ficción",
  "availablequantity": 3,
  "isbn_code": "9788466659734"
},  {
  id:6,
  "title": "Crimen y Castigo",
  "author": "Fiódor Dostoyevsk",
  "publicationYear": "1890",
  "gender": "Novela, novela gótica",
  "availablequantity": 25,
  "isbn_code": "9789684322455"
},{
   id:7,
  "title": "El Monje que vendió su Ferrari",
  "author": "Robin S. Sharma",
  "publicationYear": "1996",
  "gender": "Autoayuda",
  "availablequantity": 27,
  "isbn_code": "978-0062515674"
}, {
   id:8,
  "title": "Los Cuatro Acuerdos",
  "author": "Miguel Ángel Ruíz",
  "publicationYear": "1997",
  "gender": "Autoayuda",
  "availablequantity": 55,
  "isbn_code": "9780065023961"
}, {
  id:9,
  "title": "1984",
  "author": "George Orwell",
  "publicationYear": "1949",
  "gender": "Ciencia Ficción",
  "availablequantity": 8,
  "isbn_code": "9789588773834"
},{
  id:10,
  "title": "It",
  "author": "Stephen King",
  "publicationYear": "1986",
  "gender": "Terror, Thriller",
  "availablequantity": 9,
  "isbn_code": "9781501142970"
},{
  id:11,
  "title": "Misery",
  "author": "Stephen King",
  "publicationYear": "1987",
  "gender": "Terror, Thriller",
  "availablequantity": 5,
  "isbn_code": "9788466345682"
},{
  id:12,
  "title": "Circe",
  "author": "Madeline Miller",
  "publicationYear": "2018",
  "gender": "Novela Histórica",
  "availablequantity": 3,
  "isbn_code": "9789586890946"
}]