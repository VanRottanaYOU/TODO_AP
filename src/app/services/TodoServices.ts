import Formation from '../classes/Todo';
import Todo from '../classes/Todo';

export class TodoServices {
   
    ListeDeTodos : Array<Todo> = new Array();
    
    /*deleteOneTodo(){
        this.ListeDeTodos.unshift();
    }*/

    deleteAllTodos(){
        this.ListeDeTodos =[];
    }
    
    addTodo(monTodo:Todo) {
        this.ListeDeTodos.unshift(monTodo);
        //return [monTodo, ...this.ListeDeTodos];
    }

    getTodo(): Array<Todo> {
        return this.ListeDeTodos;
        /*return[
           new Todo("send email",false),
           new Formation("call boss",false),
           new Formation("écriture",true),
        ];*/
    }

}