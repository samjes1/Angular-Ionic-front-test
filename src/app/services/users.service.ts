import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
 private apiURL = `${environment.baseUrl}/tutors`;

  constructor() { }

  getUsers():  Observable<User[]>{
  const load = this.http.get<User[]>(this.apiURL)
  
    return load
  }
}
