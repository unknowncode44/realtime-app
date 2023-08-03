import { UserI } from "../public/public-interfaces";
import { FormControl } from "@angular/forms";

export type Status      = 'EN_PROGRESO' | 'PARA_HACER'  | 'FINALIZADAS';
export type Complexity  = 'DIFICIL'     | 'MEDIO'       | 'FACIL'

export interface TodoItem {
    id?         : number,
    createdBy?  : UserI,
    updatedBy?  : UserI,
    createdAt?  : Date,
    updatedAt?  : Date;
    status?     : Status,
    title?      : string,
    subtitle?   : string,
    text?       : string,
    complexity? : Complexity
}

export interface CreateTodoFormGroup {
    complexity: FormControl<Complexity | null>,
    text: FormControl<string | null>,
    subtitle: FormControl<string | null>,
    title: FormControl<string | null>,
    status: FormControl<Status | null>,

}