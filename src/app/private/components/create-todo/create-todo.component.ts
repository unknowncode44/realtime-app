import { Component                          } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateTodoFormGroup                } from '../../private-interfaces';
import { Complexity, Status                 } from '../../private-interfaces';
import { complexityValues, statusValues     } from '../../private-constants';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {

  // instanciamos las variables de complejidad y estado
  complexityValues: Complexity[] = complexityValues;
  statusValues: Status[] = statusValues;

  // creamos un formGroup para el formulario de ingreso de tareas nuevas
  form: FormGroup<CreateTodoFormGroup> = new FormGroup<CreateTodoFormGroup>({
    title     : new FormControl('',           [Validators.required]),
    subtitle  : new FormControl('',           [Validators.required]),
    text      : new FormControl('',           [Validators.required]),
    complexity: new FormControl('MEDIO',      [Validators.required]),
    status    : new FormControl('PARA_HACER', [Validators.required])

  })

  // metodo para crear nuevo todo
  onCreateTodo(){
    console.log(this.form.value)
  }

  // getters

  get title(): FormControl {
    return this.form.get('title')       as FormControl;
  }

  get subtitle(): FormControl {
    return this.form.get('subtitle')    as FormControl;
  }

  get text(): FormControl {
    return this.form.get('text')        as FormControl;
  }

  get complexity(): FormControl {
    return this.form.get('complexity')  as FormControl;
  }

  get status(): FormControl {
    return this.form.get('status')      as FormControl;
  }

}
