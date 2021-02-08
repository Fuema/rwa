import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Category } from '../model/category';

@Injectable()
export class CategoryService {

  private apiUrl = 'http://localhost:3000';  // URL to web api

  constructor(private http: HttpClient) {
  }

/*   getCategories(): Observable<Category[]> {
    const url = this.apiUrl;
    return this.http.get(url)
               .map(res => res.json() );
  } */

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch employees list
    getCategories(): Observable<Category> {
    return this.http.get<Category>(this.apiUrl + '/categories')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

    // Error handling
    // tslint:disable-next-line:typedef
    handleError(error: { error: { message: string; }; status: any; message: any; }) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }

}
