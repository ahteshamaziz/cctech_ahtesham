import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private router: Router,
               private backend:BackendService) { }

   name: any = '';
   password:any = '';
   cpassword:any = '';
   errormssg = '';

  ngOnInit(): void {
  }

  submit(){

    if((this.name != '')&&(this.password != '')){
       if(this.password == this.cpassword){
        var data = {
          username:this.name,
          password:this.password
        }
       this.backend.register(data).subscribe
       (data=>
         { 
             if(data.results.result == "success"){
               this.router.navigate(['/login']);
             }
             
   
         });
       }else {
        this.errormssg = "Password does not match!";
       }
     

    }else{
      this.errormssg = "Please fill the form";
    }
 
    
  }

  login(){
    this.router.navigate(['/login']);
  }

}
