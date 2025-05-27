import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit {

  students:any[]=[]

  constructor(private crud:CrudService,private router:Router){

  }

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(){
    return this.crud.getAllDatas().subscribe(res=>{
      this.students=res
    })
  }

  addStudent(){
    return this.router.navigateByUrl('add')
  }

  updateStudent(id:number){
    return this.router.navigate(['update',id])
  }

  viewStudent(id:number){
    return this.router.navigate(['view',id])
  }

  deleteStudent(id:number){
    return this.crud.deleteData(id).subscribe(res=>{
      this.getAllStudents()
    })
  }

}
