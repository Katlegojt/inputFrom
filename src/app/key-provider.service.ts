import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KeyProviderService {

  constructor( private http:HttpClient) { 
  }

  getNames(){

return this.http.get("http://jsonplaceholder.typicode.com/users");
  }
}
