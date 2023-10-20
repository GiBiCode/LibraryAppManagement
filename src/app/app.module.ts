import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from './users-module/users.module';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books-module/books.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigations/components/navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { ModalComponent } from './books-module/components/modal/modal.component';
import { BookListComponent } from './books-module/components/book-list/book-list.component';
import { FormBuilder} from '@angular/forms';
import { BookService } from './books.service';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BooksModule,
    MaterialModule,
    FormsModule
    
  ],
  
  providers: [
    FormBuilder,
    BookService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
