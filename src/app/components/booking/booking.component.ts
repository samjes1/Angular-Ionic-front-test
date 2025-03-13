import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { catchError, of, take } from 'rxjs';
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
   bookings = signal<Booking[]>([]);
   users = signal<User[]>([]);
   selectedUser = signal<number | null>(null);
   isLoading = signal(true);
   error = signal<string | null>(null);
   

   private bookingsService = inject(BookingService);
   private usersService = inject(UsersService);
   private router = inject(Router);
 
   ngOnInit() {
     this.loadData();
   }
 
   public loadData() {
     this.loadBookings();
     this.loadUsers();
   }
 
   private loadBookings() {
     this.bookingsService.getBookings().pipe(
       take(1),
       catchError((error) => {
         this.error.set('Error al cargar reservas');
         console.error('Bookings error:', error);
         return of([]);
       })
     ).subscribe({
       next: (data) => {
         this.bookings.set(data);
         this.isLoading.set(false);
       }
     });
   }
 
   private loadUsers() {
     this.usersService.getUsers().pipe(
       take(1),
       catchError((error) => {
         this.error.set('Error al cargar usuarios');
         console.error('Users error:', error);
         return of([]);
       })
     ).subscribe({
       next: (data) => this.users.set(data)
     });
   }
 
   get filteredBookings() {
     const userId = this.selectedUser();
     return userId 
       ? this.bookings().filter(b => b.user_id === userId)
       : this.bookings();
   }

   goToHome() {
    this.router.navigate(['/home']); 
  }
 }
