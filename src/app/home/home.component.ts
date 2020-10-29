import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const URL1 = 'http://localhost:8080/images';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private backend:BackendService,
      private router: Router,
      private _route : ActivatedRoute) { }
   
    public uploader1: FileUploader = new FileUploader({url: URL1, itemAlias: 'image'});

     data:any;

  ngOnInit(): void {

    
    this.getimage();

    this.uploader1.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader1.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //console.log('json:uploaded:', item, status, response);
        alert('uploaded successfully');
        this.getimage();
        // (<HTMLInputElement>document.getElementById("upload")).style.display = "block"; 
        // (<HTMLInputElement>document.getElementById("uploadimg")).style.display = "none"; 

     };

  }

  addimage(){
    //alert(this.mapcid);
    
         this.uploader1.uploadAll();

 
   }

   getimage(){
    this.backend.getimg().subscribe
    (data=>
      { 
       
        console.log(data);
        this.data = data;

      })
   }


   up(){
    this.router.navigate(['welcome/upload']);
   }

}









 
 

  

   
   

    


