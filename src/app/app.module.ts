import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JokesListComponent } from './jokes-list/jokes-list.component';

import { firebaseConfig } from './firebase.config';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		JokesListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(firebaseConfig)
	],
	providers: [AngularFireDatabase],
	bootstrap: [AppComponent]
})
export class AppModule { }
