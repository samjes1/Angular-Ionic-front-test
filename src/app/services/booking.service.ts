import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private http = inject(HttpClient);
  private apiURL = 'https://test.worldsacross.com/api/booking'; // change apiURL with enviromment

  constructor() {}

  getBooking(): Observable<Booking[]> {
    //console.log(this.apiURL);
    const load = this.http.get<Booking[]>(this.apiURL);

    return load;
  }
}
