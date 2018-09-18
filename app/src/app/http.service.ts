import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Categorie } from './categorie';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) {
	}

	getCategories () {
		const url = "http://localhost:3000/api/categories/getlist";

		return this.http.get(url).pipe(map(res => res));
	}

}
