import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  latestMovies: any[] = [];
  popularMovies: any[] = [];
  errorMessage: string = '';

  constructor(private MovieService: MovieService) {}

  ngOnInit(): void {
    this.loadLatestMovies();
    this.loadPopularMovies();
  }

  loadLatestMovies(): void {
    this.MovieService.getLatestMovies().subscribe(
      (movies) => {
        this.latestMovies = movies.results;
      },
      (error) => {
        this.errorMessage = 'No se pudieron cargar las películas recientes';
      }
    );
  }

  loadPopularMovies(): void {
    this.MovieService.getPopularMovies().subscribe(
      (movies) => {
        this.popularMovies = movies.results;
      },
      (error) => {
        this.errorMessage = 'No se pudieron cargar las películas populares';
      }
    );
  }
}
