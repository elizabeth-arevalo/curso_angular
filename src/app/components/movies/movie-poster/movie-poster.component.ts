import { Component, Input } from '@angular/core';
import { Movie } from '../../../core/entities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-poster',
  imports: [],
  templateUrl: './movie-poster.component.html',
  styleUrl: './movie-poster.component.css'
})
export class MoviePosterComponent {
  @Input() movie!: Movie;
  @Input() height: number = 420;
  @Input() width: number = 300;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/details', this.movie.id]);
  }
}
