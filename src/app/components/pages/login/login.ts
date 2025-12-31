import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserProvider } from '../../../service/user-provider/user-provider';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  toastr = inject(ToastrService);
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
      if(this.userProvider.users().find((user) => user.email === this.loginForm.value.email && user.password === this.loginForm.value.password) != null){
        this.toastr.success('Login successful');
        this.router.navigate(['/dashboard']);
      }
    }, 1000);

  }
}
