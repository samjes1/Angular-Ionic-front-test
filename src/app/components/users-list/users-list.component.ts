import { Component, inject, OnInit, signal } from '@angular/core';
import { IonicModule, ModalController, Platform } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user.model';
import { UserCardComponent } from './user-card/user-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  imports: [IonicModule],
})
export class UsersListComponent implements OnInit {
  users = signal<User[]>([]);
  selectedUser = signal<User | null>(null);
  error = signal<string | null>(null);
  private usersService = inject(UsersService);
  private router = inject(Router);

  constructor(private platform: Platform, private modalCard: ModalController) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private async loadUsers() {
    try {
      this.usersService.getUsers().subscribe({
        next: (users) => this.users.set(users),
        error: () => this.error.set('Failed to load users'),
      });
    } catch (error) {
      this.error.set('Failed to load users');
    }
  }

  async selectUser(user: User) {
    if (this.isMobileView()) {
      const modal = await this.modalCard.create({
        component: UserCardComponent,
        componentProps: { user },
        cssClass: 'auto-height-modal',
        presentingElement: await this.modalCard.getTop(),
      });

      await modal.present();
    } else {
      this.selectedUser.set(user);
    }
  }

  isMobileView(): boolean {
    return this.platform.width() < 768;
  }

  goToHome() {
    this.router.navigate(['/home']); 
  }
}
