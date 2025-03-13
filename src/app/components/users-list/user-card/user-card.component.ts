import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  imports: [IonicModule],
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;

  constructor(private modalCard: ModalController) {}

  ngOnInit() {}
  
  dismiss() {
    this.modalCard.dismiss();
  }
}
