import { Injectable } from '@angular/core';
import { NameToDo } from '../name-to-do';

@Injectable({
  providedIn: 'root'
})


export class TodoListService {
  

  //todoList : string[] = [];
  todoList : Array<NameToDo>=[]
  
  addToArray(list: NameToDo) {
    this.todoList.push(list);
  }
  constructor() { }
  
  getTodoList() {
    return this.todoList;
  }
  remove(todo: NameToDo) {
    var index = this.getTodoList().indexOf(todo);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
}
}