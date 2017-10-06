import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Todo from '../classes/Todo';

@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  ListeDeTodosApi: Array<Todo> = new Array();

  deleteAllTodos() {
    this.ListeDeTodosApi = [];
  }

  addTodo(monTodo: Todo) {
    this.ListeDeTodosApi.unshift(monTodo);
    //return [monTodo, ...this.ListeDeTodos];
  }

  getListeTodos() {
    return this.http.get('http://localhost:3000/todos');

  }


}
