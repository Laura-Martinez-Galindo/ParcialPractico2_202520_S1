import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})

export class MovieDetailComponent implements OnInit {
  movieId!: string; //! Confia en que se inicializa con un valor 
  @Input() movie: any;
  duracion: string = '';
  constructor(private route:ActivatedRoute, private movieService:MovieService) {}
  
  //esto es obtener pelicula con el id si selecciono alguna vaina
  getMovie(){
    this.movieService.getMovie(this.movieId).subscribe(
      data => {this.movie = data;
        this.getDuracion();
      })
  }
  ngOnInit() { //esto por si se busca una ruta y no se sleeciono la movie
    if(this.movie === undefined){
      this.movieId = this.route.snapshot.paramMap.get('id')!
      if (this.movieId) {
        this.getMovie();
      }
    } else{
      this.getDuracion();
    }
    
  }
  getDuracion(){
    let horas = this.movie.duration/60;
    let minutos = this.movie.duration%60;
    this.duracion = horas + 'H y ' + minutos + ' m';
  }
}

