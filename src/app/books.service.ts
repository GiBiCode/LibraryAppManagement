import { Injectable } from '@angular/core';
import { Book, books } from './books';
//import  as books from '../assets/data/books.json';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  book: Book[] = [];

  constructor(private books: BooksService) { 
    // this.books = this.books.getBooks();
  }
  
//   getBooks() {} 

addBook(book: Book){
  this.book.push(book);
}

// deleteBook(id) {}
}
