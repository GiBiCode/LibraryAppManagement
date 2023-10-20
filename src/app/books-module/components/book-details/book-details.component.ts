import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../../books';
import { BookService } from 'src/app/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  books: Book[] = [];
  bookForm: FormGroup;
  // showForm: boolean = false;
  isAddingNew = false; 
  isEditing = false;

  // selectedBook: Book = {
  //   id: 0, 
  //   title: '',
  //   author: '',
  //   publicationYear: '', 
  //   gender: '',
  //   availablequantity:0,
  //   isbn_code: ''
  // };
  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: new FormControl(''), 
      author: new FormControl(''),
      publicationYear: new FormControl(''),
      gender: new FormControl(''),
      availablequantity: new FormControl(''),
      isbn_code: new FormControl('')
    });
  }
// Función para mostrar el formulario
openForm() {
  this.isAddingNew = true;
  this.isEditing = false;
}

// Función para ocultar el formulario
cancelForm() {
  this.isAddingNew = false;
  this.isEditing = false
}
  ngOnInit(): void {
    this.loadData();
  }

  

  addBook() {
    // Obtiene los datos del formulario
    //const newBook: Book = this.bookForm.value;
    const newBook = this.bookForm.value;
    // Llama al servicio para agregar el nuevo libro
    this.bookService.addBook(newBook);
    // Limpia el formulario
    this.bookForm.reset();
  }
  loadData() {
    // Utiliza el servicio para obtener todos los libros
    this.books = this.bookService.getBooks();
  }

// updateBook(book: Book) {
//     this.bookService.updateBook(book);
//   }

// onSelect(book: Book) {
//   this.selectedBook = {...book}; 
// }
// updateBook(book: Book) {
//   if (!book) {
//     return;
//   }
//   this.selectedBook = { ...book }; 
//   this.isAddingNew = false;
//   this.isEditing = true;
// }

updateBook(book: Book) {

  this.bookForm.patchValue({
    title: book.title,
    author: book.author,
    publicationYear : book.publicationYear,
    gender : book.gender,
    availablequantity :book.availablequantity,
    isbn_code : book.isbn_code
    
  });

  this.isAddingNew = false; 
  this.isEditing = true;

}

onUpdate() {

  const updatedBook = this.bookForm.value;
 
  const index = this.books.findIndex(b => b.id == updatedBook.id);

  if (index !== -1) {
      this.books[index] =updatedBook;
      // Limpia el formulario y finaliza la edición
    this.bookForm.reset();
    this.isEditing = false;
  }


}
  deleteBook(id: number) {
    this.bookService.deleteBook(id);
  }
  

}
