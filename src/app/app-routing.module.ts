import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NowplayingComponent} from './Movies/nowplaying/nowplaying.component';
import {PopularmoviesComponent} from './Movies/popularmovies/popularmovies.component';
import {TopratedmoviesComponent} from './Movies/topratedmovies/topratedmovies.component';
import {UpcomingmoviesComponent} from './Movies/upcomingmovies/upcomingmovies.component';
import {PopularpeopleComponent} from './People/popularpeople/popularpeople.component';
import {ShowsonairComponent} from './Tvshows/showsonair/showsonair.component';
import {PopularshowsComponent} from './Tvshows/popularshows/popularshows.component';
import {TopratedshowsComponent} from './Tvshows/topratedshows/topratedshows.component';
import {MoviedetailsComponent} from './Movies/moviedetails/moviedetails.component';
import {PeopledetailsComponent} from './People/peopledetails/peopledetails.component';
import {TvshowsdetailsComponent} from './Tvshows/tvshowsdetails/tvshowsdetails.component';
import {GeneralrearchComponent} from './General/generalrearch/generalrearch.component';

const routes: Routes = [
  {path: 'now_playing_movies', component: NowplayingComponent},
  {path: 'popular_movies', component: PopularmoviesComponent},
  {path: 'top_rated_movies', component: TopratedmoviesComponent},
  {path: 'upcoming_movies', component: UpcomingmoviesComponent},
  {path: 'popular_people', component: PopularpeopleComponent},
  {path: 'tv_shows_on_air', component: ShowsonairComponent},
  {path: 'popular_tv_shows', component: PopularshowsComponent},
  {path: 'top_rated_tv_shows', component: TopratedshowsComponent},
  {path: 'movie_details/:id', component: MoviedetailsComponent},
  {path: 'people_details/:id', component: PeopledetailsComponent},
  {path: 'tvshow_details/:id', component: TvshowsdetailsComponent},
  {path: 'search/:word', component: GeneralrearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
