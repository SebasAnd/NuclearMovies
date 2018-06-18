import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../../Services/people/people.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent implements OnInit {
  parameter: any;
  details_list: any;
  items: any;
  constructor(private route: ActivatedRoute, private service: PeopleService) { }

  ngOnInit() {

    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.people_details('person/' + id).subscribe((data: any) => this.items = {
        data: data
      });
    });
  }

}
