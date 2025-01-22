import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [CommonModule, RouterLink]
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}
