import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorsPageRoutingModule } from './tutors-routing.module';

import { TutorsPage } from './tutors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TutorsPageRoutingModule,
    TutorsPage
  ],
 
})
export class TutorsPageModule {}
