import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.baseUrl + 'movies';
  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  getRecipe(id: String): Observable<Movie> {
    const url = `${environment.baseUrl}${id}`;
    return this.http.get<Movie>(url);
  }
}
