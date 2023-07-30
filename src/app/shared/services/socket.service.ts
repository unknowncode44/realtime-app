import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService{
 
  public message$: Subject<string> = new Subject<string>();

  constructor(private socket: Socket) {

    console.info('socket service online');

   }

   public sendMessage(message: string) {
    this.socket.emit('msgToServer', message)
   }


}
