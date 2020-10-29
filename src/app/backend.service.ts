

  import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private httpClient : HttpClient,
    // private sockService: SockoneService
    ) { }

     
    api = "http://localhost:8080/";


    
 

        login(loginData:any): Observable<any>{
          return this.httpClient.post(this.api+'postlogIn', loginData);
        }

        register(loginData:any): Observable<any>{
          return this.httpClient.post(this.api+'postregister', loginData);
        }
    
 

     
      getlogin(){
        return this.httpClient.get(this.api+'getlogin');
      }
      getimg(){
        return this.httpClient.get(this.api+'getimg');
      }
  
}