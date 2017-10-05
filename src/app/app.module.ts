import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule} from "@angular/forms";
import TodoServices from "./services/TodoServices";

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TodoServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
