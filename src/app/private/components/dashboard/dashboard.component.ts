import {  Component, OnInit         } from '@angular/core';
import {  CdkDragDrop,
          moveItemInArray,
          transferArrayItem         } from '@angular/cdk/drag-drop';
import {  MatDialogRef, MatDialog   } from '@angular/material/dialog'
import { Observable, tap } from 'rxjs';

// own imports
import { TodoItem                   } from '../../private-interfaces';
import {  TodoService               } from '../../services/todo.service';
import { CreateTodoComponent        } from '../create-todo/create-todo.component';
import { todoItems                  } from '../../private-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // creamos una referencia a nuestro dialogo para crear una nueva tarea
  createTodoComponentDialogRef: MatDialogRef<CreateTodoComponent> | undefined

  inProgress: TodoItem[] = []
  done      : TodoItem[] = []
  todo      : TodoItem[] = []

  items$: Observable<TodoItem[]> = this.todoService.todoItems$

  constructor(
    private todoService : TodoService,  //<-- nuestro servicio para obtener todos
    private matDialog   : MatDialog     //<-- servicio dialog de Angular Material
    ) {}


  ngOnInit(): void {
      // ejecutamos los siguientes metodos al inicio para asegurar la suscripcion a los eventos socket
      this.todoService.getTodos();
      this.todoService.getAddedTodo();
      this.todoService.getUpdatedTodos();

      // obtenemos las tareas desde el servidor suscribiendonos a nuestro observable
      // las filtramos por tipo
      this.items$.pipe(
        tap((items) => {
          this.todo       = items.filter(item => item.status === 'PARA_HACER');
          this.inProgress = items.filter(item => item.status === 'EN_PROGRESO');
          this.done       = items.filter(item => item.status === 'FINALIZADAS');
        })
      ).subscribe()
  }

  // funcion para manejar los eventos de drag & drop
  // documentacion: https://material.angular.io/cdk/drag-drop/overview#cdk-drag-drop-connected-sorting
  drop(event: CdkDragDrop<TodoItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    // actualizamos la tarea en la base de datos para que notifique otros listeners
    const updatedItem: TodoItem = event.container.data[event.currentIndex];
    this.todoService.updateTodo(updatedItem, event.container.id)
  }

  // metodo para mostrar el dialog para agregar nuevas tareas
  onShowCreateTodoDialog() {
    // instanciamos nuestra referencia para agregar tareas, y le pasamos el metodo open
    // del servicio dialog, pasando como parametro nuestro todo component
    this.createTodoComponentDialogRef = this.matDialog.open(CreateTodoComponent, {
      maxHeight: '650px',
      maxWidth: '370px',
    })
  }

}
