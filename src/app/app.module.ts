import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './shared/services/socket.service';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt'

//? Angular Material Imports
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PublicModule } from './public/public.module';

// const socketConfig: SocketIoConfig = { url: 'http://127.0.0.1:3044', options: {}}

// creamos una variable para llamar a nuestro token del localstorage
// esto es necesario para obtnerlo automaticamente y que el servicio de la libreria angular-jwt
// lo incorpore automaticamente y se pueda usar en JwtHelperService.
export const LOCALSTORAGE_KEY_NESTJS_TODO_APP = 'nestjs_todo_app'
export function tokenGetter() {
  return localStorage.getItem(LOCALSTORAGE_KEY_NESTJS_TODO_APP)
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //SocketIoModule.forRoot(socketConfig), 
    HttpClientModule, 
    BrowserAnimationsModule,

    //? JWT Module
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3044']
      }
    }),

    //? Angular Material Modules:
    MatSnackBarModule,

    //? OwnModules
    PublicModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
