import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from 'src/models/tutor.model';

@Injectable({
  providedIn: 'root'
})
export class TutorsService {

  private apiURL = 'https://test.worldsacross.com/api/tutors' // change apiURL with enviromment

  constructor(private http: HttpClient) { }

  getTutors():  Observable<Tutor[]>{
    //console.log(this.apiURL);
    
    return this.http.get<Tutor[]>(this.apiURL)
  }
}
