import { Component, OnInit } from '@angular/core';
import Todo from '../classes/Todo';
import {TodoServices} from "../services/TodoServices";
import {GithubApiService} from "../services/github-api.service";
import {ApiServiceService} from "../services/api-service.service";
import {HttpClient, HttpParams,HttpHeaders, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listeTodos: Array<Todo> = [];

  ListeDeTodosApi:Array<Todo> = [];

  isDisplay: boolean = false;

  results: string;

  handleFormationSelected($event){
    //this.listeTodos.unshift($event);
    this.TodoServices.addTodo($event);

    //this.listeTodos = this.TodoServices.getTodo();
  }

  deleteAllTodos(i){
    this.isDisplay = !this.isDisplay;
    this.TodoServices.deleteAllTodos();
    this.listeTodos = this.TodoServices.getTodo();
    //this.listeTodos = [];
    
  }

  //constructor() { }
  constructor(private TodoServices:TodoServices, private GithubApiService:GithubApiService,
  private http: HttpClient, private apiServiceService:ApiServiceService) { }

  ngOnInit() {
    //this.listeTodos = this.TodoServices.getTodo();
   
   this.apiServiceService.getListeTodos()
    .subscribe((data:Array<Todo>) => {
      console.log(data[0]['title']);
      this.listeTodos = data;
    });
    /*this.listeTodos = [
      new Todo("send email", true),
      new Todo("send texto", true),
      new Todo("call boss", false)
    ]*/
  }

}
