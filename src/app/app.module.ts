import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

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
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { omdbService } from './services/omdb-service';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movie/movie.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
    { path: 'auth/signup', component: SignupComponent },
    { path: 'auth/signin', component: SigninComponent },
    { path: 'movies', canActivate: [AuthGuardService], component: MovieListComponent }, 
    { path: 'movies/new', canActivate: [AuthGuardService], component: MovieFormComponent },
    { path: 'movies/view/:id', canActivate: [AuthGuardService], component: SingleMovieComponent },//Modifier le film avec id
    { path: 'edit/view/:id', canActivate: [AuthGuardService], component: EditMovieComponent },
    { path: 'search-movie', canActivate: [AuthGuardService], component: MovieSearchComponent },
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    //{ path: '**', redirectTo: 'movies'},
    { path: 'not-found', component: ErreurComponent },
    { path: '**', redirectTo: 'not-found'}
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
    EditMovieComponent,
    ErreurComponent,
    MovieSearchComponent,
    FooterComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    MoviesService,
    omdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
