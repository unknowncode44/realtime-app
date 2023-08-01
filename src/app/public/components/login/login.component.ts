import { Component, OnInit                  } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router                             } from '@angular/router';

// Servicios Propios
import { UserService    } from '../../services/user-services/user.service';
import { SharedService  } from '../../../shared/services/shared.service';

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

  constructor(
    private userService   : UserService,
    private sharedService : SharedService, 
    private router        : Router) {}



  login() {
    this.loading = true
    if(this.form.valid) {
      this.userService.login({
        email   : this.email.value,
        password: this.password.value
      }).subscribe({
        next: () => {
          this.userService.successLoginSnackBar()
          this.sharedService.emitChangesOnUI()
        },
        error: (err) => {
          this.loading = false
          this.userService.failureSnackbar(err.message)
        },
        complete: () => {
          this.loading = false
          this.router.navigate(['private/dashboard'])
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
