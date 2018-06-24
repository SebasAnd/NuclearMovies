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
import {MaterialModule} from './material.module';
import { MoviedetailsComponent } from '../Movies/moviedetails/moviedetails.component';
import {RouterModule} from '@angular/router';
import {PeopledetailsComponent} from '../People/peopledetails/peopledetails.component';
import {TvshowsdetailsComponent} from '../Tvshows/tvshowsdetails/tvshowsdetails.component';
import {CombinedsearchComponent} from '../General/combinedsearch/combinedsearch.component';
import {GeneralrearchComponent} from '../General/generalrearch/generalrearch.component';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
   MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NowplayingComponent,
    PopularmoviesComponent,
    TopratedmoviesComponent,
    UpcomingmoviesComponent,
    PopularpeopleComponent,
    ShowsonairComponent,
    PopularshowsComponent,
    TopratedshowsComponent,
    MoviedetailsComponent,
    PeopledetailsComponent,
    TvshowsdetailsComponent,
    GeneralrearchComponent,
    CombinedsearchComponent,
  ],
  exports: [
    NowplayingComponent,
    PopularmoviesComponent,
    TopratedmoviesComponent,
    UpcomingmoviesComponent,
    PopularpeopleComponent,
    ShowsonairComponent,
    PopularshowsComponent,
    TopratedshowsComponent,
    MoviedetailsComponent,
    PeopledetailsComponent,
    TvshowsdetailsComponent,
    GeneralrearchComponent,
    CombinedsearchComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ApiModule { }
