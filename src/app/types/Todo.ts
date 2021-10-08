export interface Todo {
  id: number;
  content: string;
  date: string;
  isDone: boolean;
}

export interface Todos {
  [id: number]: Todo;
}