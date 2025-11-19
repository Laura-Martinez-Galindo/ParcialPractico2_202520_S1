import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
//import { moviesData } from '../moviesData';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}
  getMoviesList(): Movie[]{
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
    return this.movies;
  }

  ngOnInit() {
    this.getMoviesList();
  }

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }
}



