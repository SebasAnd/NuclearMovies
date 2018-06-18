import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';
import {observable, Observable} from 'rxjs';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {
  movie_list: any;
  items: any;
  pageEvent: any;
  overview: any;
  ovstatus: any;
  verifier: any[];
  constructor(private movieService: MovieService) {
    this.verifier = [];
    for (let n = 0; n < 20; n++) {
      this.verifier.push(false);
    }
  }

  showConfig(page?: number) {
    this.movie_list = this.movieService.getjson('movie/now_playing', page).subscribe((data: any) => this.items = {
      data: data
    });
  }
  change_page($event) {
      $event.pageIndex = $event.pageIndex + 1;
    console.log($event);
    this.movie_list = this.movieService.getjson('movie/now_playing', $event.pageIndex).subscribe((data: any) => this.items = {
      data: data
    });
  }
  showoverview(value: boolean, index: number) {
    this.overview = 'hola';
    this.ovstatus = value;
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
