import { Component, OnInit, Input } from '@angular/core';
import { omdbService } from '../services/omdb-service';
import { OmdbMovie } from '../models/omdb-movie.movie'
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';





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

  allMovie: Movie [];

  constructor(private omdbService: omdbService,
              private movieService: MoviesService,
              private router: Router,
              private http: HttpClient) { }

              
  @Input() loveIts: number;
  @Input() index : number;

  movie = {};
  movies: OmdbMovie[];
  

  keyword = '';
  ratings = {};

  search = (title) => {
    //alert('Recherche en cours du film ' + title); //sert a faire apparaître le pop-up 
    this.omdbService.findMoviesByKeyword(title)
    //pour accèder à l'array Search contient l'array movies
      .then(response => this.movies = response.Search);
  
    }

    details = imdbId =>
      this.omdbService.findMoviesByImdbId(imdbId)
        .then(movie => this.movie = movie)

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

    like = movie =>
      console.log(movie);


   /* addFavorie() {
      this.movieService.addFavoriteMovie(this.movieService.movies[this.index])
      this.router.navigate(['movies']);
    }

*/

ngOnInit() {
  
}

}


