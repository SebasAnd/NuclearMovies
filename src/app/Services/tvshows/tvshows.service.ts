import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  private theMovieDbUrl = 'https://api.themoviedb.org/3/';
  private items$ = new Observable();

  private apiKey = '8230c7ea8cb40f6fd40f8851a920b7bf';
  private tvshowsURL: string;

  constructor(private http: HttpClient) {

  }

  getjson(required: string, page?: number ) {
    if (page != null) {

      this.tvshowsURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page;
    } else {

      this.tvshowsURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey;
    }
    return this.http.get(this.tvshowsURL);
  }
  tvshow_details(required: string, page?: number ) {
    if (page != null) {

      this.tvshowsURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey + '&page=' + page +
      '&append_to_response=credits,images,recommendations,reviews,screened_theatrically,similar,videos,external_ids';
    } else {

      this.tvshowsURL = this.theMovieDbUrl + required + '?api_key=' + this.apiKey +
        '&append_to_response=credits,images,recommendations,reviews,screened_theatrically,similar,videos,external_ids';
    }
    return this.http.get(this.tvshowsURL);
  }
}
