import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TutorsService } from 'src/app/services/tutors.service';
import { Status, Tutor } from 'src/models/tutor.model';

@Component({
  selector: 'app-tutors-list',
  templateUrl: './tutors-list.component.html',
  styleUrls: ['./tutors-list.component.scss'],
  imports: [IonicModule, ReactiveFormsModule]
})
export class TutorsListComponent  implements OnInit {
  tutors: Tutor[] = []
  filteredTutors: Tutor[] = []
  specialityFilter = new FormControl('all');
  uniqueSpecialities: string[] = [];
  public status = Status;


  private tutorsService = inject(TutorsService);
  private router = inject(Router);

  constructor() { }

  
    ngOnInit() {
      this.tutorsService.getTutors().subscribe(data => {
        this.tutors = data.sort((a,b) => a.speciality.localeCompare(b.speciality) );
        this.filteredTutors = data;
        this.uniqueSpecialities = [...new Set(data.map(t => t.speciality))];
      });
  
      this.specialityFilter.valueChanges.subscribe(value => {
        this.filteredTutors = value && value !== 'all' ? 
          this.tutors.filter(t => t.speciality === value) : 
          this.tutors;
      });
    }
    goToHome() {
      this.router.navigate(['/home']); 
    }
  }


