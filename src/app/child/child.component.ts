import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()
  child:string=''

  @Output()
  childData= new EventEmitter<any>()

  sendData(){
    this.childData.emit("This is child data")
  }
}
