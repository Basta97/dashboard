import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserProvider } from '../../../service/user-provider/user-provider';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  isLoading = signal(false);
    userProvider = inject(UserProvider);

  constructor(private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  onSumbit() {
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      console.log(this.loginForm.value);
      this.userProvider.login(this.loginForm.value.email!, this.loginForm.value.password!);
      console.log(this.userProvider.user());
      if(this.userProvider.user() != null){
        this.router.navigate(['/dashboard']);
      }
    }, 2000);

  }
}
