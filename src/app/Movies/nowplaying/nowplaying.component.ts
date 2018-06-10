import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie.service';
import {observable, Observable} from 'rxjs';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {
  movie_list: any;
  items: any;

  constructor(private movieService: MovieService) {
  }

  showConfig() {
    this.movie_list = this.movieService.getConfig().subscribe((data: any) => this.items = {
      data: data
    });
  }

  ngOnInit() {
    this.showConfig();

  }

}
