import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserProvider } from '../../../service/user-provider/user-provider';
import { User } from '../../../model/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  isLoading = signal(false);
  constructor(private router: Router) { }
  userProvider = inject(UserProvider);
  
  
  registerForm = new FormGroup({
    
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  onSumbit(){
    console.log(this.registerForm.value);
    this.userProvider.registerUser(this.registerForm.value as User);
  }

}
