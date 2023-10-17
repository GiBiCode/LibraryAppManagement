// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Book, books } from '../../../books'
// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   styleUrls: ['./modal.component.scss']
// })
// export class ModalComponent {
//   bookForm: FormGroup;
//   books = [...books]
//   constructor(private fb: FormBuilder) {
//     this.bookForm = this.fb.group({
//       title: ['', Validators.required],
//       author: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.bookForm.valid) {
//       const book = {
//         title: this.bookForm.value.title,
//         author: this.bookForm.value.author
//       };

//       this.addBook(book);

//       this.bookForm.reset();
//     }
//   }
  
//   addBook(book: Book){
//     this.books.push(book);
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book, books } from '../../../books';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  bookForm: FormGroup;
  books = [...books];
  book: Book = {id:0, title: '', author: '', publicationYear: '', gender: '', availablequantity: 0, isbn_code:''};

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publicationYear: ['', Validators.required],
      gender: ['', Validators.required],
      availablequantity: [0, Validators.required],
      isbn_code: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.book = this.bookForm.value;
      this.addBook(this.book);
      
      this.bookForm.reset();
    }
  }

  addBook(book: Book) {
    this.books.push(book);
  }
}
