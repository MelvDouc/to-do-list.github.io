import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/types/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() counter!: number;
  @Input() todo!: Todo;
  @Output() counterClick = new EventEmitter();
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCounterClick(): void {
    this.counterClick.emit();
  }

  onButtonClick(): void {
    this.btnClick.emit();
  }
}
