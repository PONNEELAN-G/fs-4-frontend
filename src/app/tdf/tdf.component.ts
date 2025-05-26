import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  userObject:User={
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    isChecked: false
  }

  onSubmit(userForm:NgForm){
    console.log(userForm.value)
  }

  setValues(userForm:NgForm){
    let obj={
      firstname: 'Ponneelan',
      lastname: 'G',
      email: 'ponneelan98@gmail.com',
      password: '12345',
      isChecked: true
    }
    userForm.setValue(obj)
  }

  patchValues(userForm:NgForm){
    let obj={
      firstname: 'Ponneelan',
      lastname: 'G',
      email: 'ponneelan98@gmail.com'
    }
    userForm.control.patchValue(obj)
  }

  resetValues(userForm:NgForm){
    userForm.reset()
  }



}
