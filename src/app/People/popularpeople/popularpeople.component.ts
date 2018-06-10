import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-popularpeople',
  templateUrl: './popularpeople.component.html',
  styleUrls: ['./popularpeople.component.scss']
})
export class PopularpeopleComponent implements OnInit {
  people_list: any;
  items: any;

  constructor(private movieService: MovieService) {
  }

  showConfig() {
    this.people_list = this.movieService.getjson('person/popular', ).subscribe((data: any) => this.items = {
      data: data
    });
  }

  ngOnInit() {
    this.showConfig();

  }
}
