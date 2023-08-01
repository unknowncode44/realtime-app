import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../services/user-services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loading: boolean = false 

  form: FormGroup = new FormGroup({
    email   : new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private userService: UserService, private router: Router) {}



  login() {
    this.loading = true
    if(this.form.valid) {
      this.userService.login({
        email   : this.email.value,
        password: this.password.value
      }).subscribe({
        next: () => {},
        error: (err) => {
          this.loading = false
          this.userService.failureSnackbar(err.message)
        },
        complete: () => {
          this.loading = false
          this.router.navigate(['public/register'])
        }
        
      })
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

}