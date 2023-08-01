import { Component, Input } from '@angular/core';
import { TodoItem } from '../../private-interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  
  @Input() item: TodoItem | undefined;

}
