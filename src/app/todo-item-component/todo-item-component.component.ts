 import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 import { NameToDo } from '../name-to-do';
import { NotificationService } from '../notification/notification.service';
 import { TodoListService } from '../services/todo-list.service';

 @Component({
  selector: 'app-todo-item-component',
  templateUrl: './todo-item-component.component.html',
  styleUrls: ['./todo-item-component.component.css']
 })
 export class TodoItemComponentComponent implements OnInit {
 
  @Input("todoinn") public todoinn : NameToDo = {name:"", done:false}
 todolist:TodoListService

 constructor(todolist:TodoListService, private notificationService: NotificationService) {
  this.todolist=todolist;
 }
 @Output("notificationCommunication") createDialogEvent = new EventEmitter;

  ngOnInit(): void {
  }
  
  deleteThis() {
    
    this.todolist.remove(this.todoinn);
    this.createDialogEvent.emit({message: "Delete  '"+this.todoinn.name+"'", type: 'warning'})
  }
  verification(event: any) {
    let state = event.srcElement.checked;
    
    this.todoinn.done = state;
    
    this.todoinn.doneCreated = undefined;
    if (state) {
      this.todoinn.doneCreated = Date.now();
    }
}
}