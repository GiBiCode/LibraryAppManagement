import { Component } from '@angular/core';
import { Book, books} from '../../../books';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books = [...books]; 
  
  items: Book[] = [];
  addBook(book: Book){
    this.items.push(book);
  }

}
