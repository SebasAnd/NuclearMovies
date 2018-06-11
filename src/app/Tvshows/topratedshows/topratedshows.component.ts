import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-topratedshows',
  templateUrl: './topratedshows.component.html',
  styleUrls: ['./topratedshows.component.scss']
})
export class TopratedshowsComponent implements OnInit {
  topratedshows_list: any;
  items: any;

  constructor(private movieService: MovieService) {
  }

  showConfig() {
    this.topratedshows_list = this.movieService.getjson('tv/top_rated', ).subscribe((data: any) => this.items = {
      data: data
    });
  }
  change_page($event) {
    $event.pageIndex = $event.pageIndex + 1;
    console.log($event);
    this.topratedshows_list = this.movieService.getjson('tv/top_rated', $event.pageIndex).subscribe((data: any) => this.items = {
      data: data
    });
  }

  ngOnInit() {
    this.showConfig();

  }
}
