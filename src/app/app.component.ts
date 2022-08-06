import { Component, ElementRef,ViewEncapsulation , ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationService } from './notification/notification.service';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-app';

  todolist:TodoListService;
  constructor(inputAdd : ElementRef,private service: TodoListService, private notificationService: NotificationService) {
    this.inputAdd =inputAdd;
    this.todolist=service;
    this.notificationService=notificationService;
  }
  
 @ViewChild('inputAdd') inputAdd! : ElementRef;
 
 public onClick(){
 
 let value1= this.inputAdd.nativeElement.value 
 if (!value1) {
  this.createDialog("Can't be empty", "e");
  return;
}
if (value1.length < 5) {
  this.createDialog("To short", "error");
  return;
}
 this.todolist.addToArray({name: value1,done:false})
 this.inputAdd.nativeElement.value = "";
 this.inputAdd.nativeElement.focus();


 this.createDialog("Add new task '"+value1+"'", 'success');
 }




 get getList(){
  return this.todolist.getTodoList();
}

@ViewChild('dialog', {read:ViewContainerRef}) dialogEntry!: ViewContainerRef;

ngAfterViewInit(): void {
 
  this.inputAdd.nativeElement.focus();
}

public onEnterInput() {
  this.onClick;
}

createDialog(message: string, type?: string) {
  this.notificationService.create(this.dialogEntry, message, type);  
}
}
