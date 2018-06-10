import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private theMovieDbUrl = 'https://api.themoviedb.org/3/';
  private items$ = new Observable();

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
  moviesURL = this.theMovieDbUrl + 'movie/now_playing' + '?api_key=' + this.apiKey;

  constructor(private http: HttpClient) {

  }

  getConfig() {
    return this.http.get(this.moviesURL);
}

}
