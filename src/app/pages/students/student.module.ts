import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPageRoutingModule } from './student-routing.module';

import { StudentPage } from './student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StudentPageRoutingModule,
    StudentPage,
  ],

})
export class StudentPageModule {}
