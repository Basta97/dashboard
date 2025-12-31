import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserProvider } from '../../../service/user-provider/user-provider';
import { User } from '../../../model/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  toastr = inject(ToastrService);
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
    this.isLoading.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
      console.log(this.registerForm.value);
      this.userProvider.registerUser(this.registerForm.value as User);
      
      this.toastr.success('Register successful');
      this.router.navigate(['/login']);
    }, 1000);
    
  }

}
