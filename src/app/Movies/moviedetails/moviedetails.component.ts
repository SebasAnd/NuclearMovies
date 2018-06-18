import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../Services/movie/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  parameter: any;
  details_list: any;
  items: any;
  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit() {
    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.movie_details('movie/' + id).subscribe((data: any) => this.items = {
        data: data
      });
    });
  }

}
