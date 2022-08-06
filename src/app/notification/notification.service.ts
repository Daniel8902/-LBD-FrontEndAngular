import {  ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from './notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private componentRef!: ComponentRef<NotificationComponent>;
 
  constructor() { }
 
 
  create(entry: ViewContainerRef, communication: string, type?: string) {
    

    this.componentRef = entry.createComponent(NotificationComponent);
    this.componentRef.instance.message = communication;
    this.componentRef.instance.type = type;
    this.componentRef.instance.thisComponentRef = this.componentRef;
    this.componentRef.instance.closeEvent.subscribe((compCloseRef) => this.close(compCloseRef));
  }

  close(compCloseRef: ComponentRef<NotificationComponent>) {
    compCloseRef.destroy();
  }
}
