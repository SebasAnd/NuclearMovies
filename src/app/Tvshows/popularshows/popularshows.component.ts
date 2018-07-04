import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-popularshows',
  templateUrl: './popularshows.component.html',
  styleUrls: ['./popularshows.component.scss']
})
export class PopularshowsComponent implements OnInit {
  popularshows_list: any;
  items: any;

  constructor(private movieService: MovieService) {
  }

  showConfig() {
    this.popularshows_list = this.movieService.getjson('tv/popular', ).subscribe((data: any) => this.items = {
      data: data
    });
  }
  change_page($event) {
    $event.pageIndex = $event.pageIndex + 1;
    console.log($event);
    this.popularshows_list = this.movieService.getjson('tv/popular', $event.pageIndex).subscribe((data: any) => this.items = {
      data: data
    });
  }

  ngOnInit() {
    this.showConfig();

  }

}
