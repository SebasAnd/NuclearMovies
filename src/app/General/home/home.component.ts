import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any;
  movie_list: any;
  people_list: any;
  popularshows_list: any;
  actors: any;
  tv: any;
  verifier: any[];
  actors_paticipation: string[];
  verifieractors: any[];
  verifiertv: any[];
  constructor(private movieService: MovieService) {
    this.verifier = [];
    for (let n = 0; n < 5; n++) {
      this.verifier.push(false);
    }
    this.verifieractors = [];
    for (let n = 0; n < 5; n++) {
      this.verifier.push(false);
    }
    this.verifiertv = [];
    for (let n = 0; n < 5; n++) {
      this.verifiertv.push(false);
    }
    this.moviesList();
    this.actorsList();
    this.tvList();
  }

  ngOnInit() {
  }
  moviesList(page?: number) {
    this.movie_list = this.movieService.getjson('movie/popular', page).subscribe((data: any) => this.movies = {
      data: [data.results[0], data.results[1], data.results[2], data.results[3], data.results[4]]
    });
  }
  actorsList() {
    this.people_list = this.movieService.getjson('person/popular', ).subscribe((data: any) => {this.actors = {
      data: [data.results[0], data.results[1], data.results[2], data.results[3], data.results[4]]
    };
      }
     );
  }
  tvList() {
    this.popularshows_list = this.movieService.getjson('tv/popular', ).subscribe((data: any) => this.tv = {
      data: [data.results[0], data.results[1], data.results[2], data.results[3], data.results[4]]
    });
  }

  showoverview(value: boolean, index: number) {
    this.verifier[index] = value;
    for (let n = 0; n < 20; n++) {
      if(index !== n)
      {
        this.verifier[n] = false;
      }
    }}
  mouseout() {
    for (let n = 0; n < 20; n++) {
      this.verifier[n] = false;
    }
  }
  showoverviewactors(value: boolean, index: number) {
    this.verifieractors[index] = value;
    for (let n = 0; n < 5; n++) {
      if(index !== n)
      {
        this.verifieractors[n] = false;
      }
    }}
  mouseoutactors() {
    for (let n = 0; n < 5; n++) {
      this.verifieractors[n] = false;
    }
  }
  showoverviewtv(value: boolean, index: number) {
    this.verifiertv[index] = value;
    for (let n = 0; n < 5; n++) {
      if(index !== n)
      {
        this.verifiertv[n] = false;
      }
    }}
  mouseouttv() {
    for (let n = 0; n < 5; n++) {
      this.verifiertv[n] = false;
    }
  }
}
