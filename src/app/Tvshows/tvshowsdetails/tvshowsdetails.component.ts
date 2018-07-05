import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TvshowsService} from '../../Services/tvshows/tvshows.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MovieService} from '../../Services/movie/movie.service';

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
  back_drop_image: any;
  trailersarray: any[];
  flags: any;
  list_of_countries: any[];
  Index: number;

  color: 'yellow';
  mode = 'determinate';
  constructor(private route: ActivatedRoute, private service: TvshowsService, private service1: MovieService, private sanitizer: DomSanitizer ) {
    this.trailersarray = null;
    this.verifier = [];
    for (let n = 0; n < 20; n++) {
      this.verifier.push(false);
    }
  }

  ngOnInit() {
    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.tvshow_details('tv/' + id).subscribe((data: any) =>{ this.items = {
        data: data
      };
        this.get_trailer();
        this.back_drop_image = null;
        if (this.items.data.backdrop_path === null) {
          // this.back_drop_image = this.sanitizer.bypassSecurityTrustStyle
          //("url('" + 'assets/No_Image/No_image_available.png' + "')");
        }else {
          this.back_drop_image = this.sanitizer.bypassSecurityTrustStyle
          ("url('https://image.tmdb.org/t/p/original" + this.items.data.backdrop_path + "')");
        }
      });
    });
  }


  get_trailer(  ) {
    let trailers: any[];
    trailers = [];
    for(let i of this.items.data.videos.results) {
      let videoURL = 'https://www.youtube.com/embed/' + i.key;
      trailers.push(this.sanitizer.bypassSecurityTrustResourceUrl(videoURL));
    }
    this.trailersarray = trailers;
  }

  change_page($event) {
    $event.pageIndex = $event.pageIndex + 1;
    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.tvshow_details('tv/' + id , $event.pageIndex).subscribe((data: any) => this.items = {
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

  jump_to() {
    this.Index = 0;
     this.parameter = this.route.params.subscribe(params => {
       let id: number = params['id'];
       this.details_list = this.service.tvshow_details('tv/' + id , 1).subscribe((data: any) => this.items = {
         data: data
       });
     });

  }
}
