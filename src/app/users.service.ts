import { Injectable } from '@angular/core';
import { User } from './users';
import { FormsModule } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [ ];
  constructor() {
    const usersLS = localStorage.getItem('users');
  
    if(usersLS !== null) {
      this.users = JSON.parse(usersLS);
    }
  }
  getUsers() {
    return this.users;
    
  }
  addUser(user: User) {
    // Agrega el libro al array
    this.users.push(user);

    localStorage.setItem('users', JSON.stringify(this.users)); 
  }

  updateUser(updatedUser: User) {
      const index = this.users.findIndex(b => b.user_id === updatedUser.user_id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }
  

  deleteUser(id: number) {
    const currentUsers = this.getUsers();
    const index = currentUsers.findIndex(user => user.user_id === id);
    if (index !== -1) {
      currentUsers.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(currentUsers));
    }
  }
  

}
