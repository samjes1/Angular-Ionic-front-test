import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from 'src/models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private http = inject(HttpClient);
  private apiURL = `${environment.baseUrl}/booking`; 

  constructor() {}

  getBookings(): Observable<Booking[]> {
    const load = this.http.get<Booking[]>(this.apiURL);

    return load;
  }
}
