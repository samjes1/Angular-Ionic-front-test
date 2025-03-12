import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookingService } from 'src/app/services/booking.service';
import { UsersService } from 'src/app/services/users.service';
import { Booking } from 'src/models/booking.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  imports: [IonicModule, FormsModule, DatePipe],
})
export class BookingComponent implements OnInit {
  booking = signal<Booking[]>([]);
  users = signal<User[]>([]);
  selectedUser = signal<number | null>(null);
  private bookingsService = inject(BookingService);
  private usersService = inject(UsersService);

  constructor() {
    this.loadBookings();
    this.loadUsers();
  }
  ngOnInit() {}

  private loadBookings() {
    this.bookingsService.getBooking().subscribe({
      next: (data) => {
        const bookingsWithStatus = data.map((booking) => ({
          ...booking,
        }));
        this.booking.set(bookingsWithStatus);
      },
      error: (err) => console.error('Error loading bookings:', err),
    });
  }

  private loadUsers() {
    this.usersService.getUsers().subscribe({
      next: (data) => this.users.set(data),
      error: (err) => console.error('Error loading users:', err),
    });
  }

  get filteredBookings() {
    return this.selectedUser() !== null
      ? this.booking().filter((b) => b.user_id === this.selectedUser())
      : this.booking();
  }
}
