import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateTodoFormGroup } from '../../private-interfaces';
import { Complexity, Status } from '../../private-interfaces';

export const complexityValues: Complexity[] = ['FACIL', 'MEDIO', 'DIFICIL'];
export const statusValues: Status[] = ['EN_PROGRESO', 'PARA_HACER', 'FINALIZADAS'];

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

  complexityValues: Complexity[] = complexityValues;
  statusValues: Status[] = statusValues;

  form: FormGroup<CreateTodoFormGroup> = new FormGroup<CreateTodoFormGroup>({
    title: new FormControl('', [Validators.required]),
    subtitle: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
    complexity: new FormControl('MEDIO', [Validators.required]),
    status: new FormControl('PARA_HACER', [Validators.required])

  })

  onCreateTodo(){}

  // getters

  get title(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get subTitle(): FormControl {
    return this.form.get('subtitle') as FormControl;
  }

  get text(): FormControl {
    return this.form.get('text') as FormControl;
  }

}
