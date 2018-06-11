import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-showsonair',
  templateUrl: './showsonair.component.html',
  styleUrls: ['./showsonair.component.scss']
})
export class ShowsonairComponent implements OnInit {
  showsonair_list: any;
  items: any;

  constructor(private movieService: MovieService) {
  }

  showConfig() {
    this.showsonair_list = this.movieService.getjson('tv/on_the_air', ).subscribe((data: any) => this.items = {
      data: data
    });
  }
  change_page($event) {
    $event.pageIndex = $event.pageIndex + 1;
    console.log($event);
    this.showsonair_list = this.movieService.getjson('tv/on_the_air', $event.pageIndex).subscribe((data: any) => this.items = {
      data: data
    });
  }

  ngOnInit() {
    this.showConfig();

  }

}
