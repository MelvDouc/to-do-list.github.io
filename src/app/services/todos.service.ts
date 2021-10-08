import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo, Todos } from '../types/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todos = {};
  public todosSubject = new Subject<Todo[]>();

  constructor() {
    const localStorageData = localStorage.getItem("todos");
    if (localStorageData)
      this.todos = JSON.parse(localStorageData) as Todos;
  }

  private updateLocalStorage(): void {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  private emitSubject(): void {
    this.todosSubject.next(this.getTodos());
  }

  // public getTodo(id: number): Todo {
  //   return this.todos[id];
  // }

  public getTodos(): Todo[] {
    return Object.values(this.todos);
  }

  public addTodo(content: string, date: string): void {
    const newTodo: Todo = {
      id: Date.now(),
      content,
      date,
      isDone: false
    };
    this.todos[newTodo.id] = newTodo;
    this.updateLocalStorage();
    this.emitSubject();
  }

  public toggleDone(id: number) {
    this.todos[id].isDone = !this.todos[id].isDone;
    this.updateLocalStorage();
    this.emitSubject();
  }

  public removeTodo(id: number): void {
    delete this.todos[id];
    this.updateLocalStorage();
    this.emitSubject();
  }
}
