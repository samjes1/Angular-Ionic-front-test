import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TutorsListComponent } from './components/tutors-list/tutors-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { BookingComponent } from './components/booking/booking.component';
import HomePage from './pages/home/home.page';



const routes: Routes = [
  { path: 'tutors', component: TutorsListComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'bookings', component: BookingComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
   {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page')
  },
 /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'student',
    loadChildren: () => import('./pages/students/student.module').then( m => m.StudentPageModule)
  },
  {
    path: 'tutors',
    loadChildren: () => import('./pages/tutors/tutors.module').then( m => m.TutorsPageModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./pages/classes/classes.module').then( m => m.ClassesPageModule)
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
