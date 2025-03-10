import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }



   login (user: any): Observable<any> {
    // Implement your login logic here
    const apiurl = 'http://localhost:8091/user/login-user';
    return this.http.post(apiurl, user);
  }
}
