import { Pipe, PipeTransform } from '@angular/core';
import { NameToDo } from './name-to-do';
import { TodoListService } from './services/todo-list.service';

@Pipe({
  name: 'filtertop',
  pure: false
})
export class FiltertopPipe implements PipeTransform {

  transform( lister: Array<NameToDo>, shouldBeDone: boolean): Array<NameToDo>{
    
    let filtertop: Array<NameToDo>  = [];
     
    for (let todo of lister) {
      if (todo.done == shouldBeDone)
      filtertop.push(todo);
    }

    return filtertop;
  }

  }
  



