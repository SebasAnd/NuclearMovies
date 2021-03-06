import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private theMovieDbUrl = 'https://api.themoviedb.org/3/';
  private items$ = new Observable();

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
  private peopleURL: string;

  constructor(private http: HttpClient) {

  }

  getjson(required: string, page?: number ) {
    if (page != null) {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page;
    } else {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey;
    }
    return this.http.get(this.peopleURL);
  }

  people_details(required: string, page?: number ) {
    if (page != null) {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page +
      '&append_to_response=movie_credits,tv_credits,images,tagged_images,external_ids';
    } else {

      this.peopleURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey +
        '&append_to_response=movie_credits,tv_credits,images,tagged_images,external_ids';
    }
    return this.http.get(this.peopleURL);
  }

}
