import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { BackendService } from '../backend.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const URL1 = 'http://3.91.64.118:8080/images';


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
     name:string;

     public imagePath;
     imgURL: any;
     public message: string;
    
     preview(files) {
       if (files.length === 0)
         return;
    
       var mimeType = files[0].type;
       if (mimeType.match(/image\/*/) == null) {
         this.message = "Only images are supported.";
         return;
       }
    
       var reader = new FileReader();
       this.imagePath = files;
       reader.readAsDataURL(files[0]); 
       reader.onload = (_event) => { 
         this.imgURL = reader.result; 
       }
     }
     

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
         if(this.name == ""){
           var name = "No Caption!";
           this.uploader1.onBuildItemForm = (fileItem: any, form: any) => {
            form.append('name', name);
          };
          this.uploader1.uploadAll();
    
         }else{
          var name = this.name;
          this.uploader1.onBuildItemForm = (fileItem: any, form: any) => {
           form.append('name',  name);
         }
         this.uploader1.uploadAll();
        }
         

 
   }

   

   

}









 
 

  

   
   

    


