import { Component, OnInit } from '@angular/core';
import Todo from '../classes/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listeTodos: Array<Todo> = [];

  isDisplay: boolean = false;

  handleFormationSelected($event){
    this.listeTodos.unshift($event);
  }

  deleteAllTodos(i){
    this.listeTodos = [];
    this.isDisplay = !this.isDisplay;
  }

  constructor() { }

  ngOnInit() {
    /*this.listeTodos = [
      new Todo("send email", true),
      new Todo("send texto", true),
      new Todo("call boss", false)
    ]*/
  }

}
