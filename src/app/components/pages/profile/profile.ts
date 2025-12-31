import { Component, inject, OnInit, signal } from '@angular/core';
import { UserProvider } from '../../../service/user-provider/user-provider';
import { User } from '../../../model/user';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {
  userProvider = inject(UserProvider);
  user = signal<User | undefined>(undefined);
  userId = signal<number | undefined>(undefined);

  ngOnInit() {
    if(localStorage.getItem('user') !== null){
      this.userId.set(JSON.parse(localStorage.getItem('user')!));
    }else{
      this.userProvider.logout();
    }
    this.user.set(this.userProvider.users().find((user) => user.id === this.userId()));


    
  }
}
