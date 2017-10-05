import { Component, OnInit } from '@angular/core';
import Todo from '../classes/Todo';
import TodoServices from "../services/TodoServices";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listeTodos: Array<Todo> = [];

  isDisplay: boolean = false;

  handleFormationSelected($event){
    //this.listeTodos.unshift($event);
    this.TodoServices.addTodo($event);

    this.listeTodos = this.TodoServices.getTodo();
  }

  deleteAllTodos(i){
    this.isDisplay = !this.isDisplay;
    this.TodoServices.deleteAllTodos();
    this.listeTodos = this.TodoServices.getTodo();
    //this.listeTodos = [];
    
  }

  //constructor() { }
  constructor(private TodoServices:TodoServices) { }

  ngOnInit() {
    this.listeTodos = this.TodoServices.getTodo();
    /*this.listeTodos = [
      new Todo("send email", true),
      new Todo("send texto", true),
      new Todo("call boss", false)
    ]*/
  }

}
