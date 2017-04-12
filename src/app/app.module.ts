import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JokesListComponent } from './jokes-list/jokes-list.component';

export const firebaseConfig = {
	apiKey: "AIzaSyBsX7AR_-MzXuyhM3GiGaXD9PVE7CE13bw",
	authDomain: "russ-jokes.firebaseapp.com",
	databaseURL: "https://russ-jokes.firebaseio.com",
	projectId: "russ-jokes",
	storageBucket: "russ-jokes.appspot.com",
	messagingSenderId: "565390903031"
};

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
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
