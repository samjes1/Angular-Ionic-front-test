import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
 private apiURL = 'https://test.worldsacross.com/api/users' // change apiURL with enviromment

  constructor() { }

  getUsers():  Observable<User[]>{
    //console.log(this.apiURL);
  const  load = this.http.get<User[]>(this.apiURL)
  
    return load
  }
}
