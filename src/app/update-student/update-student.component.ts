import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-update-student',
  imports: [ReactiveFormsModule],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {

  userId!: {
    uid: number;
  };

  studentData:any;

  updateForm:FormGroup;

  constructor(private crud:CrudService,private active:ActivatedRoute,private fb:FormBuilder,private router:Router){
    this.updateForm=this.fb.group({
      id:[],
      name:[''],
      place:['']
    })
  }

  ngOnInit(): void {
    this.userId={
      uid:this.active.snapshot.params['id']
    }

    this.crud.getOneData(this.userId.uid).subscribe(res=>{
      this.studentData=res
      this.updateForm.setValue({
        id:this.studentData.id,
        name:this.studentData.name,
        place:this.studentData.place
      })
    })

  }

  onSubmit(){
    this.crud.updateData(this.userId.uid,this.updateForm.value).subscribe(res=>{
      this.router.navigateByUrl('crud')
    })
  }

  onCancel(){
    return this.router.navigateByUrl('crud')
  }

}
