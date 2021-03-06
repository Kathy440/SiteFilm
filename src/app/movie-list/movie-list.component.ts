import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Subscription } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  moviesSubcription: Subscription;

  constructor(private moviesService: MoviesService,
              private router: Router) { }

  ngOnInit() {
    this.moviesSubcription = this.moviesService.moviesSubject.subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
    this.moviesService.emitMovies();
  }

  onNewMovie() {
    this.router.navigate(['/movies', 'new']);
  }

  onDeleteMovie(movie: Movie) {
    this.moviesService.removeMovie(movie);
  }

  onViewMovie(id: number) {
    this.router.navigate(['/movies', 'view', id]);
  }

  onEditMovie(id: number) {
    this.router.navigate(['/edit', 'view', id]);
  }

  ngOnDestroy() {
    this.moviesSubcription.unsubscribe();
  }



}
