import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationComponent } from 'src/app/components/consultation/consultation.component';
import { ContactFormComponent } from 'src/app/components/contact-form/contact-form.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { StoreComponent } from 'src/app/components/store/store.component';
import { VideoListComponent } from 'src/app/components/video-list/video-list.component';

const routes: Routes = [
  { path: 'consultation', component: ConsultationComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'videos', component: VideoListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
