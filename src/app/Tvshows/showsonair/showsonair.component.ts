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
  verifier: any[];

  constructor(private movieService: MovieService) {
    this.verifier = [];
    for (let n = 0; n < 20; n++) {
      this.verifier.push(false);
    }
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
