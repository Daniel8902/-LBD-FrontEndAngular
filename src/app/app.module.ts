import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule}  from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import  {MatListModule} from '@angular/material/list';
import { TodoItemComponentComponent } from './todo-item-component/todo-item-component.component';
import { FiltertopPipe } from './filtertop.pipe';
import { TooltipDirective } from './tooltip.directive';
import { NotificationComponent } from './notification/notification.component'
@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponentComponent,
    FiltertopPipe,
    TooltipDirective,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
