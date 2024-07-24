import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-emp-cust',
  standalone: true,
  imports: [],
  templateUrl: './emp-cust.component.html',
  styleUrl: './emp-cust.component.css'
})
export class EmpCustComponent implements OnInit{

constructor(
  public auth:AuthService
){}
  ngOnInit(): void {
    this.auth.allusers().subscribe((response:any)=>{
      console.log("response", response);
    })
  }
}
