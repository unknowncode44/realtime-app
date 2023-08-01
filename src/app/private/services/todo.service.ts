import { Injectable     } from "@angular/core";
import { io             } from 'socket.io-client'
import { tokenGetter    } from "../../app.module";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    // creamos una instancia del socket cliente usando metodo io() de la libreria socket-io.client 
    socket = io('http://localhost:3044/todos', {
        auth: {
            // pasamos el token obtenido con nuestro metodo tokenGetter alojado en nuestro app.module.ts
            Authorization: tokenGetter()
        }
    })

    public sendMessage() {
        this.socket.emit('message', 'message')
    }
}