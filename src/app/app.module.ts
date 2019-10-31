import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';

import { ContactComponent } from './components/contact/contact.component';
import { ContactFormComponent } from './components/forms/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { VideoListComponent } from './components/video-list/video-list.component';

import { SafePipe } from './pipes/safe/safe.pipe';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { EmailListFormComponent } from './components/forms/email-list-form/email-list-form.component';
import { ConsultationFormComponent } from './components/forms/consultation-form/consultation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    StoreComponent,
    VideoListComponent,
    SafePipe,
    ConsultationComponent,
    EmailListFormComponent,
    ConsultationFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
