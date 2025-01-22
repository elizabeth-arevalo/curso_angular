import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES`);
  }

  getLatestMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movies/latest`);
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=es-ES`);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&language=es-ES`);
  }
}
