import {Component, OnInit, Sanitizer} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../Services/movie/movie.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  parameter: any;
  details_list: any;
  items: any;
  videoURL: any;
  trustedDashboardUrl: any;
  trailersarray: any[];
  images_array: any[];
  index: any;
  overview: any;
  ovstatus: any;
  verifier: any[];
  movie_list: any;
  back_drop_image: any;

  color: 'yellow';
  mode = 'determinate';

  constructor(private route: ActivatedRoute, private service: MovieService, private sanitizer: DomSanitizer) {
    this.trailersarray = null;
    this.get_information();
    this.verifier = [];
    for (let n = 0; n < 20; n++) {
      this.verifier.push(false);
    }
  }

  ngOnInit() {
    // this.videoURL = 'https://www.youtube.com/embed/' + this.items.data.videos.results[0].key;
    // this.videoURL = 'https://www.youtube.com/embed/Z5ezsReZcxU';
    // this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  change_page($event) {
    $event.pageIndex = $event.pageIndex + 1;
    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
    this.movie_list = this.service.movie_details('movie/' + id , $event.pageIndex).subscribe((data: any) => this.items = {
      data: data
    });
    });
  }

  get_information() {

    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.movie_details('movie/' + id).subscribe((data: any) => {
        this.items = {
          data: data
        };
         this.get_trailer();
         if(this.items.data.backdrop_path == null){
           this.back_drop_image = this.sanitizer.bypassSecurityTrustStyle
           ("url('" + 'assets/No_Image/No_image_available.png' +"')");
           //console.log(this.back_drop_image);
         }
         this.back_drop_image = this.sanitizer.bypassSecurityTrustStyle
         ("url('https://image.tmdb.org/t/p/original"+ this.items.data.backdrop_path + "')");
         //console.log(this.back_drop_image);
      }
      );
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
  get_images(  ) {
    let images: any[];
    images = [];
    for(let i of this.items.data.images.backdrops) {
      let imageURL= 'https://image.tmdb.org/t/p/w500/' + i.file_path;
      images.push(this.sanitizer.bypassSecurityTrustResourceUrl(imageURL));
    }
    this.images_array = images;
  }

  showoverview(value: boolean, index: number) {
    this.overview = 'hola';
    this.ovstatus = value;
    this.verifier[index] = value;
    for (let n = 0; n < this.verifier.length; n++) {
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

}
