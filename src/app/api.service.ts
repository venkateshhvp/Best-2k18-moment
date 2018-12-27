

import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
API_URL  =  window.location.origin;

constructor(private  http:  HttpClient) { }


share(data){
  return  this.http.post(`${this.API_URL}/api/share/`,data);
}
}


