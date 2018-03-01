import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    regForm: FormGroup;
    register:any;
    username:string = '';
    password:string = '';
    cpassword:string = '';
    user_req:string = 'This field is required';
    pass_req:string = 'This field is required';
    same:string = '';
    passdm:string = 'Password does not match';

  constructor(private fb: FormBuilder, private userService:UserService,private route:ActivatedRoute,private router:Router) {
    this.regForm = fb.group({
        'username' : [null, Validators.required],
        'password' : [null, Validators.required],
           // Validators.pattern(/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{4,20}/),
        'cpassword' : [null, Validators.required]
    },{validator: this.passwordConfirming});

  }

  ngOnInit() {

}

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        if (c.get('password').value !== c.get('cpassword').value) {
            return {invalid: true};
        }
    }

    showPassword(input: any): any {
        input.type = input.type === 'password' ?  'text' : 'password';
    }

  userinfo(register){
      this.userService.register(register.username,register.password)
      .subscribe((res: Response)=>{
          
          this.userService.user = res.json().data;
          this.userService.userSubject.next(this.userService.user);            
          if(res.status===200){
              this.router.navigate([['/']]);
              this.userService.user.token = res.json().data.tokens[0].token;
            }
            if(res.status===400){
                this.username=register.username;
                this.password=register.password;
                this.cpassword=register.cpassword;
        }
    },(err)=>{
        console.log(err);
    });
    }


}
