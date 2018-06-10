import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowplayingComponent} from '../Movies/nowplaying/nowplaying.component';
import { PopularmoviesComponent} from '../Movies/popularmovies/popularmovies.component';
import { TopratedmoviesComponent } from '../Movies/topratedmovies/topratedmovies.component';
import { UpcomingmoviesComponent } from '../Movies/upcomingmovies/upcomingmovies.component';
import { PopularpeopleComponent} from '../People/popularpeople/popularpeople.component';
import { ShowsonairComponent } from '../Tvshows/showsonair/showsonair.component';
import {PopularshowsComponent} from '../Tvshows/popularshows/popularshows.component';
import {TopratedshowsComponent} from '../Tvshows/topratedshows/topratedshows.component';

@NgModule({
  imports: [
    CommonModule,  ],
  declarations: [
    NowplayingComponent,
    PopularmoviesComponent,
    TopratedmoviesComponent,
    UpcomingmoviesComponent,
    PopularpeopleComponent,
    ShowsonairComponent,
    PopularshowsComponent,
    TopratedshowsComponent
  ],
  exports: [
    NowplayingComponent,
    PopularmoviesComponent,
    TopratedmoviesComponent,
    UpcomingmoviesComponent,
    PopularpeopleComponent,
    ShowsonairComponent,
    PopularshowsComponent,
    TopratedshowsComponent
  ]
})
export class ApiModule { }
