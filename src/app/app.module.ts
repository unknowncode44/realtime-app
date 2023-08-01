import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketService } from './shared/services/socket.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//? Angular Material Imports
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PublicModule } from './public/public.module';

const socketConfig: SocketIoConfig = { url: 'http://127.0.0.1:3044', options: {}}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(socketConfig), 
    HttpClientModule, 
    BrowserAnimationsModule,

    //? Angular Material Modules:
    MatSnackBarModule,

    //? OwnModules
    PublicModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
