import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoItem } from '../../private-interfaces';
import { MatDialogRef, MatDialog } from '@angular/material/dialog'
import { CreateTodoComponent } from '../create-todo/create-todo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  createTodoComponentDialogRef: MatDialogRef<CreateTodoComponent> | undefined 
  
  inProgress: TodoItem[] = []
  done      : TodoItem[] = []
  todo      : TodoItem[] = []

  items: TodoItem[] = [
    {
      title: 'Item Dificil',
      complexity: 'DIFICIL',
      subtitle: 'Item Dificil',
      text: 'Tarea Dificil',
      status: 'EN_PROGRESO'
    },
    {
      title: 'Item Dificil',
      complexity: 'DIFICIL',
      subtitle: 'Item Dificil',
      text: 'Tarea Dificil',
      status: 'EN_PROGRESO'
    },
    {
      title: 'Item Medio',
      complexity: 'MEDIO',
      subtitle: 'Item Medio',
      text: 'Tarea Media',
      status: 'PARA_HACER'
    },
    {
      title: 'Item Facil',
      complexity: 'FACIL',
      subtitle: 'Item Facil',
      text: 'Tarea Facil',
      status: 'FINALIZADAS'
    }
  ]

  constructor(
    private todoService : TodoService,
    private matDialog   : MatDialog
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

  onShowCreateTodoDialog() {
    this.createTodoComponentDialogRef = this.matDialog.open(CreateTodoComponent, {
      maxHeight: '400px',
      maxWidth: '300px',
    })
  }

}
