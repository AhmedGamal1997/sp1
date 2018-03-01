import { Subject } from "rxjs/Subject";
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { User } from "../../user.model";
import { Headers } from "@angular/http";
import {Products} from "./items.model";
import {UserService} from "../../user.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductsService{

    constructor(private http:Http, private userservice:UserService){
        this.check=true;
    }
    // public user:User;
    public product:Products;
    public productsSubject = new Subject();
    public check:boolean;



    tablep(): Promise<Products[]> {
        const headers = new Headers({'x-auth':this.userservice.user.token});
        return this.http.get('http://localhost:3000/api/product/getProducts', {headers: headers}).toPromise()
            .then(response => response.json().data as Products[]);
          //  .map(this.extractData)
          //  .catch(this.handleError);
    }

    createproduct(name:String,price: Number){
        var product = new Products(name , price);
        const headers = new Headers({'x-auth':this.userservice.user.token});
        return this.http.post('http://localhost:3000/api/product/createProduct',product,{headers:headers});


    }

    editp(id:String,name:String,price: Number) {
        var product = new Products( name , price);
        const headers = new Headers({'x-auth':this.userservice.user.token});
        return this.http.patch('http://localhost:3000/api/product/updateProduct'+'/'+id,product,{headers:headers});

    }
    // saveUser(name:String,price: Number): Observable<Products>{
    //     var product = new Products( name , price);
    //     const headers = new Headers({'x-auth':this.userservice.user.token});
    //     return this.http.put('http://localhost:3000/api/product/updateProduct',product)
    //         .catch((error:any)=> Observable.throw(error.json().error || 'Server error' ));
    // }
    // findById(id:Number){
    //     const headers = new Headers({'x-auth':this.userservice.user.token});
    //     return this.http.get('http://localhost:3000/api/product/getProducts'+'/'+id,{headers: headers})
    //         .map((res:Response) => res.json())
    //         .catch((error:any)=> Observable.throw(error.json().error || 'Server error' ));
    // }

    deletep(id:String){
        // var products = new Products(name , price);
        const headers = new Headers({'x-auth':this.userservice.user.token});
        return this.http.delete('http://localhost:3000/api/product/deleteProduct'+'/'+id,{headers:headers})
            .subscribe( (res:Response)=>{
                this.product = null;
                this.productsSubject.next(this.product);
                if(res.status==200){
                    console.log("done");
                }
            },(err)=> {
                //this.failed = true;
                console.log(err)
            });

    }
}





