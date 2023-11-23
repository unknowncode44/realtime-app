import { Injectable     } from "@angular/core";
import { io             } from 'socket.io-client'
import { tokenGetter    } from "../../app.module";
import { Status, TodoItem } from "../private-interfaces";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    testCounter: number = 0

    // creamos una instancia del socket cliente usando metodo io() de la libreria socket-io.client
    socket = io('https://api.realtime.hvdevs.com/todos', {
        auth: {
            // pasamos el token obtenido con nuestro metodo tokenGetter alojado en nuestro app.module.ts
            Authorization: tokenGetter()
        }
    })

    // @ts-ignore
    public todoItems$: BehaviorSubject<TodoItem[]> = new BehaviorSubject([])




    // obtenemos todos los todos
    public getTodos() {
        this.socket.on('todos', (todos: TodoItem[]) => {
            console.log(todos)
            this.todoItems$.next(todos)
        })
    }

    // guardamos la tarea emitiendo el mensaje addTodo.
    public saveTodo(todoItem: TodoItem) {
      console.log('la consulta salio '+this.testCounter++)
      this.socket.emit('addTodo', todoItem)
    }

    // obtenemos las tareas nuevas nuevos, suscribiendonos a los eventos addedTodo
    public getAddedTodo() {
      this.socket.on('addedTodo', (todo: TodoItem) => {
        this.todoItems$.next([...this.todoItems$.value, todo])
      })
    }

    // actualizamos la tarea
    public updateTodo(todoItem: TodoItem, containerId: string) {
      todoItem.status = this.convertListIdToStatus(containerId)
      this.socket.emit('updateTodo', todoItem)

    }

    // obtenemos las tareas despues de actualizar, o cuando otro usuario actualiza
    public getUpdatedTodos() {
      this.socket.on('updatedTodo', (todo: TodoItem) => {
        // obtenemos el indice de la tarea con el mismo id
        const itemIndex: number = this.todoItems$.value.findIndex(item => item.id === todo.id)

        // instanciamos la lista de tareas actual en una variable
        let items: TodoItem[] = this.todoItems$.value

        // identificamos el item con el mismo index pasando el index que conseguimos
        // y decimos que es igual a la tarea que recibimos desde el servidor
        items[itemIndex] = todo

        // usamos next del behavior subject para indicar que la nueva
        // lista sera la que contiene el cambio
        this.todoItems$.next(items)
      })
    }

    // switch para modificar el estado de la tarea segun el container donde la soltamos
    // durante el drag & drop
    private convertListIdToStatus(listId: string) : Status {
      switch (listId) {
        case 'cdk-drop-list-0':
          return 'EN_PROGRESO'
        case 'cdk-drop-list-1':
          return 'PARA_HACER'
        case 'cdk-drop-list-2':
          return 'FINALIZADAS'
        default:
          return 'PARA_HACER'
      }
    }



    // borramos tarea
    public deleteTodo() {

    }

}
