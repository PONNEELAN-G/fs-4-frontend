import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  
  employees:any[]=[
    {
      id:1,
      name:'ponneelan',
      department:'IT'
    },
    {
      id:2,
      name:'vishnu',
      department:'IT'
    },
    {
      id:3,
      name:'Andal',
      department:'IT'
    }
  ]

  companies:string[]=['zoho','cognizant','wipro','capgemini']

}
