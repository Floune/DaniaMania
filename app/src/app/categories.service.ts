import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {
	let configUrl = 'localhost:3000/api/categories/getlist';

	constructor() { 
		this.getConfig();
	}

	getConfig() {
		return this.http.get(this.configUrl);
	}
}
