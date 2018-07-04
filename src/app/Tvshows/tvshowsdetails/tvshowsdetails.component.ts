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
  verifier: any;
  constructor(private route: ActivatedRoute, private service: TvshowsService ) {

    this.verifier = [];
    for (let n = 0; n < 20; n++) {
      this.verifier.push(false);
    }
  }

  ngOnInit() {
    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.tvshow_details('tv/' + id).subscribe((data: any) => this.items = {
        data: data
      });
    });
  }
  showoverview(value: boolean, index: number) {
    this.verifier[index] = value;
    for (let n = 0; n < this.verifier.length; n++) {
      if (index !== n)
      {
        this.verifier[n] = false;
      }
    }}
  mouseout(){
    for (let n = 0; n < 20; n++) {
      this.verifier[n] = false;
    }
  }

}
