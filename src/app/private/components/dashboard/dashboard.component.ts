import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoItem } from '../../private-interfaces';
import { MatDialogRef, MatDialog } from '@angular/material/dialog'
import { CreateTodoComponent } from '../create-todo/create-todo.component';
import { todoItems } from '../../private-constants';

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

  items: TodoItem[] = todoItems

  constructor(
    private todoService : TodoService,  //<-- nuestro servicio para obtener todos
    private matDialog   : MatDialog     //<-- servicio dialog de Angular Material
    ) {}


  ngOnInit(): void {
      this.todoService.sendMessage()
      this.todoService.getTodos()

      // TODO: TAREAS DESDE EL SERVIDOR
      // tareas mock
      this.inProgress = this.items.filter(item => item.status === 'EN_PROGRESO');
      this.done       = this.items.filter(item => item.status === 'FINALIZADAS');
      this.todo       = this.items.filter(item => item.status === 'PARA_HACER');
  }


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
  }

  // metodo para mostrar el dialog para agregar nuevas tareas
  onShowCreateTodoDialog() {
    // instanciamos nuestra referencia para agregar tareas, y le pasamos el metodo open
    // del servicio dialog, pasando como parametro nuestro todo component
    this.createTodoComponentDialogRef = this.matDialog.open(CreateTodoComponent, {
      maxHeight: '600px',
      maxWidth: '370px',
    })
  }

}
