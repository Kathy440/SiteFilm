import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  movieForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
              private moviesService: MoviesService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ['']
    });
  }

  onSaveMovie() {
    const title = this.movieForm.get('title').value;
    const type = this.movieForm.get('type').value;
    const author = this.movieForm.get('author').value;
    const synopsis = this.movieForm.get('synopsis').value;

    const newMovie = new Movie(title, author, type, synopsis);
    newMovie.synopsis = synopsis;
    newMovie.author = author;
    newMovie.type = type;

    if(this.fileUrl && this.fileUrl !=='') {
      newMovie.Poster = this.fileUrl;
    }
    
    this.moviesService.createNewMovie(newMovie);
    this.router.navigate(['/movies']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.moviesService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
