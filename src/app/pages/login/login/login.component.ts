import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 
  login!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public route: Router,

  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('')
    })
  }

  submit() {
    console.log("click");
    if(this.login.value.role == 'Admin'){
      this.route.navigate(['/adminhome']);
    }else if(this.login.value.role == 'Customer'){
      this.route.navigate(['/custdashboard']);
    }else if(this.login.value.role == 'Manager'){
      this.route.navigate(['/managerhome']);
    }else if(this.login.value.role == 'Engineer'){
      this.route.navigate(['/engdash']);
    }
   
  }

  signUp() {
    this.route.navigate(['/custregistration']);
  }


}
