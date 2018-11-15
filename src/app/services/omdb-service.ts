import { Injectable } from "@angular/core";

@Injectable()
export class omdbService {

    url= 'http://www.omdbapi.com?apikey=63ad4d73&';

    findMoviesByKeyword = keyword =>  {
        return fetch(this.url +'s=' + keyword)
         .then(res => res.json());
    }
        

    findMoviesByImdbId = imdbId => 
        fetch(this.url + 'i=' + imdbId)
            .then(res => res.json());

    

    /*FIND_MOVIE_DETAILS = 'http://www.omdbapi.com/?i=IMDBID&apikey=63ad4d73';
    
    findMovieDetails(imdbID) {
        const url = this.FIND_MOVIE_DETAILS.replace('IMDBID', imdbID);
        return fetch(url)
            .then(response => response.json());
    }

    findBatmanMovies() {
        return fetch('http://www.omdbapi.com/?s=batman&apikey=63ad4d73')
        .then(response => response.json())
       
    }

    findMoviesByTitle(title) {
        return fetch('http://www.omdbapi.com/?s=' + title + '&apikey=63ad4d73')
        .then(response => response.json());
       
    }
    */
   

}