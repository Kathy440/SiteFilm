import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies: Movie[] = [];
  moviesSubject = new Subject<Movie[]>();

  constructor() { 
    this.getMovies();
  }

  //méthode pour pouvoir acceder la liste des films
  emitMovies() {
    this.moviesSubject.next(this.movies);
  }

  //Enregistrer la liste sur un node de la base de donner
  saveMovies() {
    firebase.database().ref('/movies').set(this.movies);
  }

  //récupérer la liste entière des movies 
  getMovies() {
    firebase.database().ref('/movies')
      .on('value', (data) => {
        this.movies = data.val() ? data.val() : [];
        this.emitMovies();
      });
  }

  //récupérer un seul film
  getSingleMovies(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/movies/' +id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error)
          }
        );
      }
    );
  }

  createNewMovie(newMovie: Movie) {
    this.movies.push(newMovie);
    this.saveMovies();
    this.emitMovies();
  }

  removeMovie(movie: Movie) {
    const movieIndexToRemove = this.movies.findIndex(
      (movieEl) => {
        if(movieEl === movie) {
          return true;
        }
      }
    );
    this.movies.splice(movieIndexToRemove, 1);
    this.saveMovies();
    this.emitMovies();
  }

}
