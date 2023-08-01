import { Component          } from '@angular/core';
import { Router             } from '@angular/router'
import { CustomValidators   } from '../../validators/custom-validators';
import { UserService        } from '../../services/user-services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  loading: boolean = false

  form: FormGroup = new FormGroup(
    {
      email:            new FormControl(null, [Validators.required, Validators.email]),
      username:         new FormControl(null, [Validators.required]),
      password:         new FormControl(null, [Validators.required]),
      passwordConfirm:  new FormControl(null, [Validators.required])
    }, 
    {
      validators: CustomValidators.passwordMatching
    }
  );

  constructor(private userService: UserService, private router: Router) {}

  register() {
    this.loading = true
    if(this.form.valid) {
      this.userService.register({
        email     : this.email.value,
        username  : this.username.value,
        password  : this.password.value,
      }).subscribe({
        next: (user) => this.userService.successRegisterSnackBar(user),
        error: (err) => {
          this.loading = false
          this.userService.failureSnackbar(err.message)
        },
        complete: () => {
          this.loading = false
          this.router.navigate(['login'])
        }
      })
    }
  }

  // getters
  get username(): FormControl {
    return this.form.get('username') as FormControl
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl
  }

  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl
  }
  


}
