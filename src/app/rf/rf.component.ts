import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './rf.component.html',
  styleUrl: './rf.component.css'
})
export class RfComponent {

  reactiveForm:FormGroup;

  constructor(private fb:FormBuilder){
    this.reactiveForm=this.fb.group({
      firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lastname:['',[Validators.required,Validators.maxLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]*$')]],
      isChecked:[],
      address:this.fb.group({
        street:[''],
        city:[''],
        pincode:[]
      }),
      skills:this.fb.array([])
    })
  }

  get skills():FormArray{
    return this.reactiveForm.get('skills') as FormArray
  }

  newSkill():FormGroup{
    return this.fb.group({
      skill:['']
    })
  }

  addSkill(){
    return this.skills.push(this.newSkill())
  }

  deleteSkill(i:number){
    return this.skills.removeAt(i)
  }

  onSubmit(){
    console.log(this.reactiveForm.value)
  }

  setValues(){
    this.reactiveForm.setValue({
      firstname:'Ponneelan',
      lastname:'G',
      email:'ponneelan98@gmail.com',
      password:'12345',
      isChecked:true,
      address:{
        street:'kovil street',
        city:'srivilliputhur',
        pincode:627757
      }
    })
  }

  patchValues(){
    this.reactiveForm.patchValue({
      firstname:'Ponneelan',
      lastname:'G',
      email:'ponneelan98@gmail.com',
      password:'12345'
    })
  }

  resetValues(){
    return this.reactiveForm.reset()
  }

}
