import { Component, OnInit } from '@angular/core';
import Todo from '../classes/Todo';
import {TodoServices} from "../services/TodoServices";
import {GithubApiService} from "../services/github-api.service";
import {HttpClient, HttpParams,HttpHeaders, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  listeTodos: Array<Todo> = [];

  isDisplay: boolean = false;

  results: string;

  getGitHub(){
    /*const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');*/

    /*this.http.get("http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1")
    .subscribe(data => {this.results = data['name'];});
    return this.results;*/

    /*return this.http.get("https://api.github.com/users/vanrottanayou?access_token=e6142dfa0fe82e15704834b952eb9fab44583d00")
    .subscribe(data => {this.results = data['login'];});*/
    /*return this.GithubApiService.getUser('VanRottanaYOU')
    .subscribe(data => {this.results = data['login'];});*/
  }

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
  private http: HttpClient) { }

  ngOnInit() {
    this.listeTodos = this.TodoServices.getTodo();
  
    /*this.listeTodos = [
      new Todo("send email", true),
      new Todo("send texto", true),
      new Todo("call boss", false)
    ]*/
  }

}
