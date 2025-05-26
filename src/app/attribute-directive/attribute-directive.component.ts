import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  textColor:string='text-success'

  changeColor(color:string){
    this.textColor=color
  }

  inputColor:boolean=false

  isGreen(){
    this.inputColor=!this.inputColor
  }

  typeColor:string=''

  textColor2:string='orange'

  updateColor(color:string){
    this.textColor2=color
  }

  inputColor2:boolean=false

  isOrange(){
    this.inputColor2=!this.inputColor2
  }

  customClass:any={
    'color':'green',
    'height':'100px',
    'width':'150px',
    'border':'1px solid blue'
  }


}
