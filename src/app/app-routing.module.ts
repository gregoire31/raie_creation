import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationComponent } from './component/reservation/reservation.component';
import { PhotosComponent } from './component/photos/photos.component';


const routes: Routes = [
  {
    path: '',
    component: ReservationComponent,
  
  },
  {
    path: 'photos',
    component: PhotosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
