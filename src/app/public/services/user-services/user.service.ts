import { Injectable         } from '@angular/core';
import { HttpClient         } from '@angular/common/http';
import { Observable, catchError, tap    } from 'rxjs';

// importamos las interfaces para manejar solicitudes y respuestas del server 
import { UserI, LoginResponseI } from '../../public-interfaces';

//? Angular Material Imports
// MatSnackBar es un componente que muestra un popup del tipo toast, muy util para notificar de acciones al usuario.
import { MatSnackBar, MatSnackBarConfig  } from '@angular/material/snack-bar'

// definimos la configuracion del snackbar (toast)
const snackBarConfig: MatSnackBarConfig = {
  duration          : 1000,
  verticalPosition  : 'top',
  horizontalPosition: 'right'
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private snackBar  : MatSnackBar
  ) { }

  //? Metodos de Login y Registro

  // para el metodo login utilizaremos HttpClient, haremos un post y pasaremos las credenciales
  // utilizaremos tambien un pipe para guardar el token del usuario en el localstorage
  // TODO: La idea final es guardar el token en storage usando la libreria NgRx y el patron Redux
  login(user: UserI): Observable<LoginResponseI> {
    return this.httpClient.post<LoginResponseI>('api/users/login', user).pipe(
      // guardamos el token en localstorage
      tap((res: LoginResponseI) => localStorage.setItem('token', res.access_token)),
    )
  }

  register(user: UserI): Observable<UserI> {
    return this.httpClient.post<UserI>('api/users', user)
  }

  //? Metodos para mostrar el snackbar

  // snackbar para login exitoso
  successLoginSnackBar(): void {
    this.snackBar.open('Login Exitoso!', 'Close', snackBarConfig)
  }

  // snackbar para register exitoso
  successRegisterSnackBar(user: UserI): void {
    this.snackBar.open(`Usuario ${user.username} registrado con exito!`, 'Close', snackBarConfig)
  }

  // snackbar para errores
  failureSnackbar(error: string): void {
    this.snackBar.open(error, 'Close', snackBarConfig)
  }


}
