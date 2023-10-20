import { Injectable } from '@angular/core';
import { Book, books } from './books';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: Book[] = [
    // {
    //   id:1,
    //   title: 'El principito',
    //   author: 'anonimo',
    //   publicationYear:'1958',
    //   gender:'novela',
    //   availablequantity:20,
    //   isbn_code:'23696'
    // },
    // {
    //   id:2,
    //   title: 'El lazarillo',
    //   author: 'anonimo',
    //   publicationYear:'1958',
    //   gender:'novela',
    //   availablequantity:20,
    //   isbn_code:'23686'
    // },
  ];
  constructor() {
    const booksLS = localStorage.getItem('books');
    if(booksLS !== null) {
      this.books = JSON.parse(booksLS);
    }
  }

  getBooks() {
    return this.books;    
  }

  addBook(book: Book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books)); 
  }

  // updateBook(updatedBook: Book) {
  //     const index = this.books.findIndex(b => b.id === updatedBook.id);
  //   if (index !== -1) {
  //     this.books[index] = updatedBook;
  //     localStorage.setItem('books', JSON.stringify(this.books));
  //   }
  // }
  updateBook(updated: Book) {
    const index = this.books.findIndex(b => b.title == updated.title);
    this.books[index] = updated;
    localStorage.setItem('books', JSON.stringify(this.books));
  
  }

  // deleteBook(id: number) {
  //   this.books = this.books.filter(book => book.id !== id);
  //   localStorage.setItem('books', JSON.stringify(this.books)); 
  // }

  deleteBook(id: number) {
    const currentBooks = this.getBooks();
    const index = currentBooks.findIndex(book => book.id === id);
    if (index !== -1) {
      currentBooks.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(currentBooks));
    }
  }
  

}
