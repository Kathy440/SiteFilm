import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { SingleMovieComponent } from  './movie-list/single-movie/single-movie.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MoviesService } from './services/movies.service';
import { Routes, RouterModule } from '@angular/router';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { ErreurComponent } from './erreur/erreur.component';

const appRoutes: Routes = [
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/signin', component: SigninComponent },
    { path: 'movies', component: MovieListComponent }, 
    { path: 'movies/new', component: MovieFormComponent },
    { path: 'movies/view', component: SingleMovieComponent },//Modifier le film avec id
    { path: 'edit', component: EditMovieComponent },
    //{ path: 'erreur', component: ErreurComponent },
    //{ path: '**', redirectTo: '/erreur'}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    MovieListComponent,
    SingleMovieComponent,
    MovieFormComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
