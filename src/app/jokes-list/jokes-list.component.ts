import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'app-jokes-list',
	templateUrl: './jokes-list.component.html',
	styleUrls: ['./jokes-list.component.css'],
})
export class JokesListComponent implements OnInit {
	public jokes: FirebaseListObservable<any[]>;
	constructor(afdb: AngularFireDatabase) {
		this.jokes = afdb.list('/jokes');
		console.log(this.jokes);
	}

	ngOnInit() {}
}
