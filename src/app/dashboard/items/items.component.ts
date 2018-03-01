import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../user.service";
import {ProductsService} from "./items.service";
import {Response} from "@angular/http";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {Subscription} from "rxjs/Subscription";
import {Products} from "./items.model";
//import { Http } from '@angular/http';

// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{
    Addproduct: FormGroup;
    editproducts: FormGroup;
    addp:any;
    edd:any;
    name:string = '';
    price:number = 0;
    ename:string = '';
    eprice:number = 0;
    statusCode: number;
    Myproduct: Products[];
    subscription:Subscription;
    id: number;
    checkh: boolean;
    //product: Products;
    //private sub:any;
    //productForm: FormGroup;
     constructor(private route: ActivatedRoute,private fb: FormBuilder,private productService:ProductsService,private userservices: UserService,private router:Router) {
        this.Addproduct = fb.group({
           'name' : [null, Validators.required],
           'price' : [null, Validators.required]
        });
        this.editproducts= fb.group({
            'ename' : [null, Validators.required],
            'eprice' : [null, Validators.required]
        });
        this.checkh=true;
    }
     ngOnInit(): void {
         this.productService.tablep()
             .then(Myproduct => this.Myproduct = Myproduct);

         // if (this.userservices.user.username.length >0) {
         //
         // if (this.productService.check == true) {
         //     this.checkh = false;
         // }
         // }

        // this.sub=this.route.params.subscribe(params =>{
        //     this.id =params['id'];
        // })
        //  this.productForm= new FormGroup({
        //      names: new FormControl('',Validators.required),
        //      prices: new FormControl('',Validators.required)
        //  })
        //  if (this.id) { //edit form
        //      this.productService.findById(this.id).subscribe(
        //          product => {
        //              this.id = product.id;
        //              this.productForm.patchValue({
        //                  names: product.names,
        //                  prices: product.prices
        //              });
        //          },error => {
        //              console.log(error);
        //          }
        //      );
        //
        //  }
     }

    // onSubmit() {
    //     if (this.productForm.valid) {
    //         if (this.id) {
    //             let product: Products = new Products(
    //                 this.productForm.controls['names'].value,
    //                 this.productForm.controls['prices'].value);
    //             this.productService.editp(product.name,product.price).subscribe();
    //         } else {
    //             let product: Products = new Products(
    //                 this.productForm.controls['firstName'].value,
    //                 this.productForm.controls['email'].value);
    //             this.productService.saveUser(product.name,product.price).subscribe();
    //
    //         }
    //
    //         this.productForm.reset();
    //         // this.router.navigate(['/user']);
    //
    //     }
    // }


    addproduct(addp){
        // sessionStorage.setItem('id', data.id);
        // var data = sessionStorage.getItem('id');
        // console.log(data)
       // console.log(addp.name);
       // this.t = this.userservices.user.token.toString();
        this.name=addp.name;
        this.price=addp.price;
        this.productService.createproduct(addp.name,addp.price)
            .subscribe( (res:Response)=>{
            this.productService.product = null;
            this.productService.productsSubject.next(this.productService.product );
            if(res.status==422){
                this.checkh=false;
            }
        });

        // (err)=>{
            //     //this.failed = true;
            //     console.log(err);
            // };
    }
    editproduct(id,edd){
        this.ename=edd.ename;
        this.eprice=edd.eprice;
         this.productService.editp(id,edd.ename,edd.eprice)
        .subscribe((res: Response)=>{
            this.productService.product = res.json().data;
            this.productService.productsSubject.next(this.productService.product);
            if(res.status===200){
               console.log("done");
               // window.location.reload();
               // this.userService.user.token = res.json().data.tokens[0].token;
            }
        },(err)=>{

            console.log(err);
        });

    }
    deleteproducts(id){
        this.productService.deletep(id);

    }
}
