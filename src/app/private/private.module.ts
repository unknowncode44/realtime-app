import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrivateRoutingModule } from './private-routing.module';
import { CardComponent } from './components/card/card.component';

//? Angular CDK / Material Modules / 
import { DragDropModule } from '@angular/cdk/drag-drop'



@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    DragDropModule,
  ]
})
export class PrivateModule { }
