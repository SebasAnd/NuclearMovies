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
  constructor(private movieService: MovieService) {
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

  ngOnInit() {
    this.showConfig();

  }

}
