import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersModule } from './users-module/users.module';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books-module/books.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigations/components/navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { ModalComponent } from './books-module/components/modal/modal.component';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
