import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private theMovieDbUrl = 'https://api.themoviedb.org/3/';
  private items$ = new Observable();

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
  private peopleURL: string;

  constructor(private http: HttpClient) {

  }

  getjson(required: string, word, page?: number ) {
    if (page != null) {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page + '&query=' + word;
    } else {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&query=' + word;
    }
    return this.http.get(this.peopleURL);
  }

  search(required: string, word, page?: number ) {
    if (page != null) {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&query=' + word + '&page=' + page ;
    } else {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&query=' + word ;
    }
    return this.http.get(this.peopleURL);
  }

}
