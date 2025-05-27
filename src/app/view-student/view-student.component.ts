import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-student',
  imports: [],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit {

  userId!: {
    uid: number;
  };

  studentData:any;

  constructor(private crud:CrudService,private active:ActivatedRoute,private router:Router){

  }

  ngOnInit(): void {
    this.userId={
      uid:this.active.snapshot.params['id']
    }

    this.crud.getOneData(this.userId.uid).subscribe(res=>{
      this.studentData=res
    })
  }

  onClose(){
    return this.router.navigateByUrl('crud')
  }

}
