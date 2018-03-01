import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    logForm: FormGroup;
    login:any;
    username:string = '';
    password:string = '';
    req:string = 'This field is required';
    failed:boolean;
  constructor(private fb: FormBuilder,private userService:UserService,private router:Router) {
      this.logForm = fb.group({
          'username' : [null, Validators.required],
          'password' : [null, Validators.required],
      });
  }

  ngOnInit() {
      this.failed = false;
  }
    loginfo(login){
        this.username=login.username;
        this.password=login.password;
        this.userService.logIn(login.username,login.password)
        .subscribe((res: Response)=>{
            this.userService.user = res.json().data;
            this.userService.userSubject.next(this.userService.user); 
            if(res.status===200){
                this.router.navigate([['']]);
                this.userService.user.token = res.json().data.tokens[0].token;
            }
        },(err)=>{
            this.failed = true;
            console.log(err);
      });


    }

}
