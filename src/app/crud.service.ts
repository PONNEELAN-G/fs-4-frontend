import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  baseUrl:string='http://localhost:4000/student'

  getAllDatas(){
    return this.http.get<Student[]>(this.baseUrl)
  }

  postData(data:Student){
    return this.http.post(this.baseUrl,data)
  }

  getOneData(id:number){
    return this.http.get<Student>(`${this.baseUrl}/${id}`)
  }

  updateData(id:number,data:Student){
    return this.http.put(`${this.baseUrl}/${id}`,data)
  }

  deleteData(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

}
