import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  imports: [CommonModule]
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetails(+id).subscribe((data: any) => {
        this.movie = data;
      });
    }
  }
}
