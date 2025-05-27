import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  addForm:FormGroup;

  constructor(private fb:FormBuilder,private crud:CrudService,private router:Router){
    this.addForm=this.fb.group({
      id:[],
      name:[''],
      place:['']
    })
  }

  onSubmit(){
    this.crud.postData(this.addForm.value).subscribe(res=>{
      this.router.navigateByUrl('crud')
    })
  }

  onCancel(){
    return this.router.navigateByUrl('crud')
  }

}
