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
  promedio: Number = 0;
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService) {}
  getMoviesList(): Movie[]{
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.calcularPromedio();
    });
    return this.movies;
  }

  ngOnInit() {
    this.getMoviesList();
    this.calcularPromedio();
  }

  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
  }

  calcularPromedio(){
    let total = 0;
    let suma = 0;
    for (let movie of this.movies) {
      for (let actor of movie.cast){
        total += 1;
        suma += actor.popularity;
      }
      
      
    }
    this.promedio = suma/total;
  }
}
