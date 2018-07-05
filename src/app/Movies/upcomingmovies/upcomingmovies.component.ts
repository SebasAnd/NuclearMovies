import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.scss']
})
export class UpcomingmoviesComponent implements OnInit {
  movie_list: any;
  items: any;
  verifier: any[];

  constructor(private movieService: MovieService) {

    this.verifier = [];
    for (let n = 0; n < 20; n++) {
      this.verifier.push(false);
    }
  }

  showConfig() {
    this.movie_list = this.movieService.getjson('movie/upcoming', ).subscribe((data: any) => this.items = {
      data: data
    });
  }
  change_page($event) {
    $event.pageIndex = $event.pageIndex + 1;
    console.log($event);
    this.movie_list = this.movieService.getjson('movie/upcoming', $event.pageIndex).subscribe((data: any) => this.items = {
      data: data
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
  mouseout(){
    for (let n = 0; n < 20; n++) {
      this.verifier[n] = false;
    }
  }

  ngOnInit() {
    this.showConfig();

  }
}
