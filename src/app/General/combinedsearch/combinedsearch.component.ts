import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-combinedsearch',
  templateUrl: './combinedsearch.component.html',
  styleUrls: ['./combinedsearch.component.scss']
})
export class CombinedsearchComponent implements OnInit {

   word: any;
   query; any;
  searchInputTerm: any;
  constructor(private router: Router){}
  ngOnInit() {
  }

  handleSearch (event) {
    this.query = event;
    this.router.navigate(['/search', this.query]);
  }
}
