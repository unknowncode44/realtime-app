import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateRoutingModule } from './private-routing.module';
import { CardComponent } from './components/card/card.component';

//? Angular CDK / Material Modules /
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateTodoComponent } from './components/create-todo/create-todo.component'
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule     } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    CreateTodoComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule

  ],
})
export class PrivateModule { }
