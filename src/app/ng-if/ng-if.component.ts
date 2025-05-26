import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  checkBox:boolean=false

  isChecked(){
    this.checkBox=!this.checkBox
  }

  inputBox:boolean=true

  onShow(){
    this.inputBox=true
  }

  onHide(){
    this.inputBox=false
  }

  input1:string=''

  input2:string=''

}
