import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() divClick = new EventEmitter();
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDivClick(): void {
    this.divClick.emit();
  }

  onButtonClick(): void {
    this.btnClick.emit();
  }
}
