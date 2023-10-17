import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    
  ],
  imports: [
    CommonModule
  ],

  exports:[
    BookListComponent,
    BookDetailsComponent
  ]
})
export class BooksModule { }

