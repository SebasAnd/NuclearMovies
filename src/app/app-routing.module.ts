import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NowplayingComponent} from './Movies/nowplaying/nowplaying.component';

const routes: Routes = [
  {path: 'home', component: NowplayingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
