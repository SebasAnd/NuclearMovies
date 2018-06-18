import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvshowsService} from '../../Services/tvshows/tvshows.service';

@Component({
  selector: 'app-tvshowsdetails',
  templateUrl: './tvshowsdetails.component.html',
  styleUrls: ['./tvshowsdetails.component.scss']
})
export class TvshowsdetailsComponent implements OnInit {

  parameter: any;
  details_list: any;
  items: any;
  constructor(private route: ActivatedRoute, private service: TvshowsService ) { }

  ngOnInit() {
    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.tvshow_details('tv/' + id).subscribe((data: any) => this.items = {
        data: data
      });
    });
  }

}
