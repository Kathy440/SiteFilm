import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';
//import firestone from 'firebase/firestore'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  ref = firebase.firestore().collection('movies');

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

  /*addFavoriteMovie(movie: Movie) {
    if(movie.loveIts) {
      movie.loveIts = movie.loveIts + 1;
    } 
    
    this.saveMovies();
    this.emitMovies();
    
    return movie.loveIts
  } 
  */
 
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement...');
          },
          (error) => {
            console.log('Erreur de chargement ! : '+ error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }

  updateMovie(movie: Movie) {
    
  }

  addMovie(title: string, type: string, author: string, synopsis: string,
            Poster: string ) {
              const movieObject = {
                id:0,
                title: '',
                type: '',
                author: '',
                synopsis: '',
                Poster: ''
                
              };
              movieObject.title = title;
              movieObject.type = type;
              movieObject.author = author;
              movieObject.synopsis = synopsis;
              movieObject.Poster = Poster;
              

              this.movies.push(movieObject);
              this.emitMovies();
            }

}
