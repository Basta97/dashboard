import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserProvider {
  user = signal<User | null>(null);
  users = signal<User[]>([]);
  constructor() {
    this.users.set([
      { id: 1, name: 'Ahmed', email: 'john.doe@example.com', role: 'Admin' ,password:'123456'},
      { id: 2, name: 'Basta', email: 'jane.smith@example.com', role: 'User' ,password:'123456'},

    ]);
  }
 
  registerUser(user: User) {
    this.users.update((users) => [...users, user]);
    console.log(this.users());
    console.log("registered successfully")
  }
  login(email: string, password: string) {
    const user = this.users().find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.user.set(user);

      return user;

    }
    console.log('User not found');
    return null;
  }
  logout() {
    localStorage.removeItem('user');
    this.user.set(null);
  }
  

}
