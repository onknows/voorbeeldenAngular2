import {Component, OnInit} from '@angular/core';

@Component({
	// 1. add component description/annotations here
	selector: 'hello-world',
	template: `
		<h1>Hello World!</h1>
		<h2>Dit is Angular</h2>
		Mijn veld is {{ veld }}
		<a href="http://angular.io" target="_blank">Angular Website</a>
	`
})

export class AppComponent implements OnInit {
	// optional: add constructor, class logic, etc. here

  // veld : string = 'mijn veld';
  veld : string;

	constructor() {
	  // this.veld = 'mijn veld geinitialiseerd in constructor';
	}

	ngOnInit() {
		console.log('Hello World - Angular is running');
		this.veld = 'mijn veld geinitialiseerd in ngOnInit';
	}
}
