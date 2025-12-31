import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { signal } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserProvider {
  users = signal<User[]>([]);
  constructor(private router: Router) {
    this.users.set([
      { id: 1, name: 'Ahmed', email: 'john.doe@example.com', role: 'Admin' ,password:'123456'},
      { id: 2, name: 'Basta', email: 'jane.smith@example.com', role: 'User' ,password:'123456'},

    ]);
  }
 
  registerUser(user: User) {
    this.users.update((users) => [...users, user]);
    console.log(this.users());
    console.log("registered successfully")
    console.log(this.users());
  }
  login(email: string, password: string) {
    const user = this.users().find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user.id));
      localStorage.setItem('role', JSON.stringify(user.role));
      localStorage.setItem('name', JSON.stringify(user.name));
    console.log(this.users());
      return user;

    }
    console.log('User not found');
    return null;
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    this.router.navigate(['/login']);
  }
  

}
