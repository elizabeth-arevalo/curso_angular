import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Movie } from '../../../core/entities';
import { MoviePosterComponent } from '../movie-poster/movie-poster.component';

@Component({
  selector: 'app-horizontal-carrusel',
  imports: [MoviePosterComponent],
  templateUrl: './horizontal-carrusel.component.html',
  styleUrl: './horizontal-carrusel.component.css'
})
export class HorizontalCarruselComponent implements AfterViewInit {
  @Input() movies: Movie[] = [];
  @Input() title?: string;
  @Input() color?: string;
  @Input() loadNextPage?: () => void;

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  private isLoading = false;

  ngAfterViewInit() {
    this.carouselContainer.nativeElement.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    if (this.isLoading) return;

    const { scrollLeft, scrollWidth, clientWidth } = this.carouselContainer.nativeElement;
    const isEndReached = (scrollLeft + clientWidth + 600) >= scrollWidth;

    if (!isEndReached) return;

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.loadNextPage?.();
    }, 200);
  }
}
