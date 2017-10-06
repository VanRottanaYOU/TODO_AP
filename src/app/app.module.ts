import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule} from "@angular/forms";
import {TodoServices} from "./services/TodoServices";
import {GithubApiService} from "./services/github-api.service";
import { HttpClientModule } from '@angular/common/http';
import {ApiServiceService} from "./services/api-service.service"

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TodoServices,
    GithubApiService,
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
