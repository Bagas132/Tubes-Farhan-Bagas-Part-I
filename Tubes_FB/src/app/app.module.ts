import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { from } from 'rxjs';
import { AvatarComponent } from './avatar/avatar.component';
import { EditComponent } from './edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewColthComponent } from './newColth/newColth.component';
import { FirebaseService } from './service/firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      AvatarComponent,
      EditComponent,
      DashboardComponent,
      NewColthComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(rootRouterConfig, { useHash: false }),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      MatSliderModule,
      MatDialogModule

   ],
   providers: [FirebaseService],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
