import { UserI } from "../public/public-interfaces";

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