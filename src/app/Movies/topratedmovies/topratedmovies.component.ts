import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-topratedmovies',
  templateUrl: './topratedmovies.component.html',
  styleUrls: ['./topratedmovies.component.scss']
})
export class TopratedmoviesComponent implements OnInit {
  movie_list: any;
  items: any;

  constructor(private movieService: MovieService) {
  }

  showConfig() {
    this.movie_list = this.movieService.getjson('movie/top_rated', ).subscribe((data: any) => this.items = {
      data: data
    });
  }

  ngOnInit() {
    this.showConfig();

  }
}
