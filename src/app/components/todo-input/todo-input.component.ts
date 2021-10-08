import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  public value: string = "";
  public date: string = "";

  constructor(private service: TodosService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    if (!this.value || !this.date)
      return;
    this.service.addTodo(this.value, this.date);
  }
}
