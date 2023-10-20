import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books-module/components/book-list/book-list.component';
import { ModalComponent } from './books-module/components/modal/modal.component';
import { UserListComponent } from './users-module/components/user-list/user-list.component';
import { BookDetailsComponent } from './books-module/components/book-details/book-details.component';
import { UserDetailsComponent } from './users-module/components/user-details/user-details.component';

const routes: Routes = [
  // { path: '', component: BookListComponent  },
  // { path: 'registration', component: ModalComponent },
  {path: '', component: BookListComponent},
  {path: 'books', component: BookListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'books/registration', component: BookDetailsComponent},
  {path: 'users/registration', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
