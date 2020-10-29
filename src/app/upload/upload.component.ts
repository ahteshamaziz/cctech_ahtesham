import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const URL1 = 'http://localhost:8080/images';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
      private backend:BackendService,
      private router: Router,
      private _route : ActivatedRoute) { }
   
    public uploader1: FileUploader = new FileUploader({url: URL1, itemAlias: 'image'});

     data:any;

  ngOnInit(): void {



    this.uploader1.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader1.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        //console.log('json:uploaded:', item, status, response);
        alert('uploaded successfully');
       this.router.navigate(['welcome/home']);

     };

  }

  addimage(){
    //alert(this.mapcid);
    
         this.uploader1.uploadAll();

 
   }

   

}









 
 

  

   
   

    


