import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public baseURL = "http://localhost:8080/simplilearn/complaintredressalsystem";

  constructor(
    public http: HttpClient
  ) { }

 // registration for all
register(data: any){
return this.http.post(this.baseURL+ "/register" , data);
}

//get all
allusers(){
  return this.http.get(this.baseURL + "/allusers");
}
//login
login(username:any){
  return this.http.get(this.baseURL + "/login" + username)
}



}
