import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.scss']
})
export class PopularmoviesComponent implements OnInit {
  movie_list: any;
  items: any;


  deploymentId

  constructor(private movieService: MovieService) {
  }

  showConfig() {
    this.movie_list = this.movieService.getjson('movie/popular', ).subscribe((data: any) => this.items = {
      data: data
    });
  }
  change_page($event) {
    $event.pageIndex = $event.pageIndex + 1;
    console.log($event);
    this.movie_list = this.movieService.getjson('movie/popular', $event.pageIndex).subscribe((data: any) => this.items = {
      data: data
    });
  }

  ngOnInit() {
    this.showConfig();

  }
}
