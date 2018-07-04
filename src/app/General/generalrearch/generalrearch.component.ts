import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../Services/search/search.service';

@Component({
  selector: 'app-generalrearch',
  templateUrl: './generalrearch.component.html',
  styleUrls: ['./generalrearch.component.scss']
})
export class GeneralrearchComponent implements OnInit {
  parameter: any;
  word_to_give;
  search_list: any;
  items: any;
  movies: any;
  people: any;
  tvshows: any;
  companies: any;
  collections: any;
  public word: string;
  constructor(private route: ActivatedRoute, private service: SearchService) { }

  ngOnInit() {

    this.parameter = this.route.params.subscribe(params => {
      let word: string = params['word'];
      this.word_to_give = word;
      this.search_list = this.service.search('search/multi', word ,1).subscribe((data: any) => this.items = {
        data: data
      });
      this.search_list = this.service.search('search/movie', word, 1).subscribe((data: any) => this.movies = {
        data: data
      });
      this.search_list = this.service.search('search/person', word,1 ).subscribe((data: any) => this.people = {
        data: data
      });
      this.search_list = this.service.search('search/tv', word,1).subscribe((data: any) => this.tvshows = {
        data: data
      });
      this.search_list = this.service.search('search/company', word,1).subscribe((data: any) => this.companies = {
        data: data
      });
      this.search_list = this.service.search('search/collection', word,1).subscribe((data: any) => this.collections = {
        data: data
      });
    });
  }
  change_pagemulti($event) {
    $event.pageIndex = $event.pageIndex + 1;
    if ($event.pageIndex <= this.items.data.total_pages) {
      this.search_list = this.service.search('search/multi', this.word_to_give, $event.pageIndex).subscribe((data: any) => this.items = {
        data: data
      });
    }
  }
  change_pagemovie($event) {
    $event.pageIndex = $event.pageIndex + 1;
    if ($event.pageIndex <= this.movies.data.total_pages) {
      this.search_list = this.service.search('search/movie', this.word_to_give, $event.pageIndex).subscribe((data: any) => this.movies = {
        data: data
      });
    }
  }
  change_pagepeople($event) {
    $event.pageIndex = $event.pageIndex + 1;
    if ($event.pageIndex <= this.people.data.total_pages) {
      this.search_list = this.service.search('search/person', this.word_to_give, $event.pageIndex).subscribe((data: any) => this.people = {
        data: data
      });
    }
  }
  change_pageshows($event) {
    $event.pageIndex = $event.pageIndex + 1;
    if ($event.pageIndex <= this.tvshows.data.total_pages) {
      this.search_list = this.service.search('search/tv', this.word_to_give, $event.pageIndex).subscribe((data: any) => this.tvshows = {
        data: data
      });
    }
  }
  change_pagecompany($event) {
    $event.pageIndex = $event.pageIndex + 1;
    if ($event.pageIndex <= this.companies.data.total_pages) {
      this.search_list = this.service.search('search/company', this.word_to_give, $event.pageIndex).subscribe((data: any) => this.companies = {
        data: data
      });
    }
  }
  change_pagecollections($event) {
    $event.pageIndex = $event.pageIndex + 1;
    if ($event.pageIndex <= this.collections.data.total_pages) {
      this.search_list = this.service.search('search/collection', this.word_to_give, $event.pageIndex).subscribe((data: any) => this.collections = {
        data: data
      });
    }
  }

}
