import { NgModule             } from '@angular/core';
import { CommonModule         } from '@angular/common';
import { LoginComponent       } from './components/login/login.component';
import { RegisterComponent    } from './components/register/register.component';
import { PublicRoutingModule  } from './public-routing.module';
import { ReactiveFormsModule  } from '@angular/forms';

//? Angular Material Module Imports
import { MatCardModule          } from '@angular/material/card'
import { MatFormFieldModule     } from '@angular/material/form-field'
import { MatInputModule         } from '@angular/material/input'
import { MatButtonModule        } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    // importamos nuestro modulo de rutas hijas
    PublicRoutingModule,

    // Reactive Forms Module
    ReactiveFormsModule,

    //Material Modules
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule

    
  ]
})
export class PublicModule { }
