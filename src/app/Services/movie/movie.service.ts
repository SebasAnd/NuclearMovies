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
  private moviesURL: string;

  constructor(private http: HttpClient) {

  }

  getjson(required: string, page?: number ) {
    if (page != null) {

      this.moviesURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page;
    }
    else {

      this.moviesURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey;
    }
    return this.http.get(this.moviesURL);
}

}
