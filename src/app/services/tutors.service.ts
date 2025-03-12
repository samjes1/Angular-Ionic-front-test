import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from 'src/models/tutor.model';

@Injectable({
  providedIn: 'root',
})
export class TutorsService {
  private http = inject(HttpClient);
  private apiURL = 'https://test.worldsacross.com/api/tutors'; // change apiURL with enviromment

  constructor() {}

  getTutors(): Observable<Tutor[]> {
    //console.log(this.apiURL);

    const load = this.http.get<Tutor[]>(this.apiURL);

    return load;
  }
}
