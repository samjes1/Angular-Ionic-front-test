import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorsService {

  private apiURL = 'https://test.worldsacross.com/api'

  constructor(private http: HttpClient) { }

  getTutors(){
    return this.http.get(this.apiURL)
  }
}
