import { Subject } from "rxjs/Subject";
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { User } from "./user.model";
import { Headers } from "@angular/http";

@Injectable()
export class UserService{
    
    constructor(private http:Http){        
    
    }
    
    public user:User;
    public userSubject = new Subject();


    register(username:String,password:String){
        var user = new User(username,password);
        return this.http.post('http://localhost:3000/api/user/createUser',user);
    }

    logout(token:String){
        const headers = new Headers({'x-auth':token});
        return this.http.delete('http://localhost:3000/api/user/deleteUser',{headers:headers})
        .subscribe(()=>{
            this.user = null;
            this.userSubject.next(this.user);
        });
    }

    logIn(username:String,password:String){
        var user = new User(username,password);
        return this.http.post('http://localhost:3000/api/user/loginUser',user);
    }

}