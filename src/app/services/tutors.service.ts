import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tutor } from 'src/models/tutor.model';

@Injectable({
  providedIn: 'root',
})
export class TutorsService {
  private http = inject(HttpClient);
  private apiURL = `${environment.baseUrl}/tutors`; 

  constructor() {}

  getTutors(): Observable<Tutor[]> {
    const load = this.http.get<Tutor[]>(this.apiURL);

    return load;
  }
}
