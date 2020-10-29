import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router,
               private backend:BackendService) { }

   name: any = '';
   password:any = '';
   errormssg = '';

  ngOnInit(): void {
  }

  submit(){

    if((this.name != '')&&(this.password != '')){
       var data = {
         username:this.name,
         password:this.password
       }
      this.backend.login(data).subscribe
      (data=>
        { 
            if(data.result.result == "success"){
              this.router.navigate(['welcome/home']);
            }else if(data.result.result == "unsuccess"){
              this.errormssg = "Wrong password";
            }else{
              this.errormssg = "Username not register";
            }
            
  
        });

    }else{
      this.errormssg = "Please fill the form";
    }
 
    
  }

  reg(){
    this.router.navigate(['/register']);
  }

}
