import { Component, ElementRef, ViewChild } from '@angular/core';
import { Book, books} from '../../../books';
import { debounceTime, distinctUntilChanged, fromEvent, tap } from 'rxjs';
import { BookService } from 'src/app/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  
  books = [...books]; 
  
  // items: Book[] = [];
  // addBook(book: Book){
  //   this.items.push(book);
  // }

  // books: Book[] = [];

  // constructor(private bookService: BookService) {
  //   this.books = this.bookService.getBooks(); // Obtiene la lista de libros desde el servicio
  // }


  //Filtrar libros
  @ViewChild('search')
  searchInput!: ElementRef;

   
  filteredBooks : Book[] = [];

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.filterBooks();
        })
       )      .subscribe();
  }  

  filterBooks() {
    const value = this.searchInput.nativeElement.value;

    this.filteredBooks = this.books.filter(book => {
      return book.title.toLowerCase().includes(value);
    })
  }

}

