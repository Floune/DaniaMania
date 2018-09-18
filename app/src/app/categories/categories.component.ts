import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http.service';
import { Categorie } from '../categorie';

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

	public categories = {};

	constructor(private http_service: HttpService) {
		
	}
	ngOnInit() {
		this.getCategories();
		console.log(this.categories);
	}

	getCategories() {
		this.http_service.getCategories()
		.subscribe(res => this.categories = {...res});
		
	}
}



