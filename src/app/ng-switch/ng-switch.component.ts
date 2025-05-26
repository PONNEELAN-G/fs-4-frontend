import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-switch',
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {

  grade:number=0

  set(x:number){
    this.grade=x
  }

  currentDay:string=''

  days:string[]=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

}
