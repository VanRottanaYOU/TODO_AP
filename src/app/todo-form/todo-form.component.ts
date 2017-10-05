import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Todo from '../classes/Todo';
import TodoServices from "../services/TodoServices";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle:string;

  @Output()
  sendTodoEmitter: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  delTodoEmitter: EventEmitter<string> = new EventEmitter<string>();

  deleteAllTodo(): void {
    this.delTodoEmitter.emit("delete");
  }

  addTodo() {
    this.sendTodoEmitter.emit(new Todo(this.todoTitle));
  }

  constructor() { }

  ngOnInit() {
  }

}
