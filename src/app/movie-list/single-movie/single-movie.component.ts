import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute, 
              private moviesService: MoviesService,
              private router: Router) {}

  
  ngOnInit() {
    this.movie = new Movie('', '', '');
    const id = this.route.snapshot.params['id'];
    this.moviesService.getSingleMovies(+id).then(
      (movie: Movie) => {
        this.movie = movie;
      }
    );
  }

  onBack() {
    this.router.navigate(['/movies']);
  }
 

}
