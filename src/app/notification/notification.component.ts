import { AfterViewInit, Component, ComponentRef, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef  } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {


  @ViewChild('notificationFragment') notificationFragment! : ElementRef;

  
  @Input('message') message: string = '';
  @Input('type') type?: string = 'info';

  @Output() closeEvent = new EventEmitter<ComponentRef<NotificationComponent>>();
  
  public thisComponentRef!: ComponentRef<NotificationComponent>;
  constructor() { }


  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    
    let textAdd  = "Info!";
    let classAdd = "dialog-info";

    switch (this.type) {
      case 'success': case 's'         : {  textAdd="Succes!"; break; }
      case 'warning': case 'w'         : {  textAdd="Warning!"; break; }
      case 'error'  : case 'e'         : {  textAdd="Error!"  ; break; }

      case 'info'   : case 'i': default: { classAdd="info"   ; textAdd="Info!"   ; break; }
    }

    this.notificationFragment.nativeElement.innerHTML = "<b>"+textAdd+"</b> " + this.message;
    this.notificationFragment.nativeElement.className += " "+classAdd;

   
    setTimeout(() => {
      this.close();
    }, 4000);    
  }

  close() {
    this.closeEvent.emit(this.thisComponentRef);
  }

  ngOnDestroy(): void { }

}
