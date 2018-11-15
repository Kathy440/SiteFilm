import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import  * as firebase from 'firebase'
import { omdbService } from '../services/omdb-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  movieTitle;
  isAuth: boolean;
  movies = [
    {title: 'Blade Runner 2049'},
    {title: 'Avatar'},
    {title: 'Harry Potter'},
    {title: 'Terminator'},
    {title: 'Annabelle'},
    {title: 'Conjuring'},
    {title: 'Mulan'}

  ];

  constructor(private authService: AuthService,
              private omdbService: omdbService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    )
  }

  onSignOut() {
    this.authService.signOutUser();
  }

  /*searchForMovie(movieTitle) {
    this.omdbService.findMoviesByTitle(movieTitle)
      .then(res => this.movies = res.Search);
  }
*/

}
