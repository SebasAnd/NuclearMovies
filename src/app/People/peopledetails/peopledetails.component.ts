import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../../Services/people/people.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent implements OnInit {
  parameter: any;
  details_list: any;
  items: any;
  verifier: any[];
  back_drop_image: any;
  color: 'yellow';
  mode = 'determinate';
  constructor(private route: ActivatedRoute, private service: PeopleService, private sanitizer: DomSanitizer) {

    this.verifier = [];
    for (let n = 0; n < 20; n++) {
      this.verifier.push(false);
    }
  }

  ngOnInit() {

    this.parameter = this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.details_list = this.service.people_details('person/' + id).subscribe((data: any) => {
          this.items = {
            data: data
          };
          if (!(this.items.data.tagged_images.results.length === 0)) {
            if (this.items.data.tagged_images.results[0].media.lenght === 0 && this.items.data.tagged_images.results[0].media != null) {
              // this.back_drop_image = this.sanitizer.bypassSecurityTrustStyle
              //("url('" + 'assets/No_Image/No_image_available.png' + "')");
            } else {
              this.back_drop_image = this.sanitizer.bypassSecurityTrustStyle
              ("url('https://image.tmdb.org/t/p/original/" + this.items.data.tagged_images.results[0].media.backdrop_path + "')");
            }
            ;
          }
        }
      );
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
  person_gender(ref:number):string {
    if (ref === 1){

      return 'feminine' ;
    }
    else {

      return 'masculine';
    }
  }

}
