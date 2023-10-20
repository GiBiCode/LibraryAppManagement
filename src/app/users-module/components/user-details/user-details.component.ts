import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/users';
import { UsersService } from 'src/app/users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  users: User[] = [];
  userForm: FormGroup;
  // showForm: boolean = false;
  isAddingNew = false; 
  isEditing = false;

  selectedUser: User = {
    user_id: 0, 
    user_name: '',
    user_phone: '',
    user_address: ''
  };

  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.userForm = this.fb.group({
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
  this.isEditing = false
}

// Función para ocultar el formulario
cancelForm() {
  this.isAddingNew = false;
  this.isEditing = false
}
  ngOnInit(): void {
    this.loadData();
  }

  

  addUser() {
    
    const newUser = this.userForm.value;
    // Llama al servicio para agregar el nuevo libro
    this.userService.addUser(newUser);
    // Limpia el formulario
    this.userForm.reset();
  }
  loadData() {
    // Utiliza el servicio para obtener todos los libros
    this.users = this.userService.getUsers();
  }



onSelect(user: User) {
  this.selectedUser = {...user}; 
}
updateUser(user: User) {
  if (!user) {
    return;
  }
  this.selectedUser = { ...user }; 
  this.isAddingNew = false;
  this.isEditing = true;
}
  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
