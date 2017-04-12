import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from "angularfire2";


@Component({
	selector: 'app-jokes-list',
	templateUrl: './jokes-list.component.html',
	styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {
	public jokes: FirebaseListObservable<any[]>;
	constructor(af: AngularFire) {
		this.jokes = af.database.list('/jokes');
		console.log(this.jokes);
		// this.jokes.push({ opening: 'Why did the skunk cross the road?', punchline: 'To get to do odor side.' });
	}

	ngOnInit() {
	}

}
