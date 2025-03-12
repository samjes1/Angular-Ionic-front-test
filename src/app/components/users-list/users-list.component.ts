import { Component, inject, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  imports: [IonicModule]
})
export class UsersListComponent implements OnInit {
  users = signal<User[]>([]);
  selectedUser = signal<User | null>(null);
  error = signal<string | null>(null);
  private usersService = inject(UsersService);

  constructor() {
    this.loadUsers();
  }

  ngOnInit(): void {
    
  }
 
  private loadUsers() {
    this.usersService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.error.set(null);
      },
      error: (err) => {
        console.error('Error loading users:', err);
        this.error.set('No hay usuarios disponibles en estos momentos');
      }
    });
  }

  selectUser(user: User) {
    if (this.selectedUser() === user) {
      this.selectedUser.set(null);
    } else {
      this.selectedUser.set(user);
    }
  }

  isMobileView(): boolean {
    return window.innerWidth <= 768;
  }
}
