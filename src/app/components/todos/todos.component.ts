import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { Todo, Todos } from 'src/app/types/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos!: Todo[];

  constructor(private service: TodosService) { }

  ngOnInit(): void {
    this.todos = this.service.getTodos();
    this.service.todosSubject.subscribe(value => {
      this.todos = value;
    });
  }

  toggleDone(id: number) {
    this.service.toggleDone(id);
  }

  remove(id: number) {
    this.service.removeTodo(id);
  }
}
