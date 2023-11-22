import { Complexity, Status, TodoItem } from "./private-interfaces";

// creamos variables para el tipo de complejidad de la tarea y para los diferentes estados de la tarea
export const complexityValues: Complexity[] = ['FACIL', 'MEDIO', 'DIFICIL'];
export const statusValues: Status[] = ['EN_PROGRESO', 'PARA_HACER', 'FINALIZADAS'];


export const todoItems: TodoItem[] = [
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
