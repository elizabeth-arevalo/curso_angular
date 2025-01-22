import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  getComments(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/comments/${movieId}`);
  }

  postComment(movieId: number, content: string): Observable<any> {
    const comment = { movie_id: movieId, content };
    return this.http.post(`${this.apiUrl}/comments`, comment, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }
}
