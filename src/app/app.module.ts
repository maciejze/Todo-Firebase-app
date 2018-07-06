import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {DlDateTimePickerDateModule} from 'angular-bootstrap-datetimepicker';
import {AngularDateTimePickerModule} from 'angular2-datetimepicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    AngularDateTimePickerModule
  ],
  providers: [FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
