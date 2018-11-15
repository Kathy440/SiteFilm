import { Component, OnInit } from '@angular/core';
import { omdbService } from '../services/omdb-service';
import { OmdbMovie } from '../models/omdb-movie.movie'



@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  //movieTitle;
  //details = {};
  /*movies = [
    {title: 'Blade Runner 2049'},
    {title: 'Avatar'},
    {title: 'Harry Potter'},
    {title: 'Terminator'},
    {title: 'Annabelle'},
    {title: 'Conjuring'},
    {title: 'Mulan'}

  ];
  */

  constructor(private omdbService: omdbService) { }

  movies: OmdbMovie[];

  keyword = '';

  search = (title) => {
    //alert('Recherche en cours du film ' + title); sert a faire appraaitre le pop-up 
    this.omdbService.findMoviesByKeyword(title)
    //pour accèder à l'array Search contient l'array movies
      .then(response => this.movies = response.Search);
  
    }

  /*searchForMovie(movieTitle) {
    this.omdbService.findMoviesByTitle(movieTitle)
      .then(res => this.movies = res.Search);
  }

  findMovieDetails(movie) {
    this.omdbService.findMovieDetails(movie.imdbID).then(details => this.details = details);
  }

  ngOnInit() {
    this.omdbService.findBatmanMovies()
      .then(res => this.movies = res.Search);
  }
  */

 ngOnInit() {
  
  }

}


