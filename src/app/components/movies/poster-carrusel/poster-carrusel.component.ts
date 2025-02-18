import { Component, Input } from '@angular/core';
import { Movie } from '../../../core/entities/movie.entitie';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';

@Component({
  selector: 'app-poster-carrusel',
  imports: [MoviePosterComponent],
  templateUrl: './poster-carrusel.component.html',
  styleUrl: './poster-carrusel.component.css'
})
export class PosterCarruselComponent {
  @Input() movies: Movie[] = [];
  @Input() height: number = 440;
}
