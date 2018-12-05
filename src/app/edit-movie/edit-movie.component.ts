import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';



@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movie: Movie;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private movieService: MoviesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const type = form.value['type'];
    const author = form.value['author'];
    const synopsis = form.value['synopsis'];
    const Poster = form.value['Poster'];

    this.movieService.addMovie(title, type, author, synopsis, Poster);
    this.router.navigate(['/movies']);
  }

  
}
