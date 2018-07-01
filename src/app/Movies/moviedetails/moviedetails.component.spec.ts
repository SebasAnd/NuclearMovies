import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetailsComponent } from './moviedetails.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../../Modules/material.module';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {MovieService} from '../../Services/movie/movie.service';
import { of } from 'rxjs';

fdescribe('MoviedetailsComponent', () => {
  let component: MoviedetailsComponent;
  let fixture: ComponentFixture<MoviedetailsComponent>;
  let paramsObs = of({id : 3});
  let activeRouteTest = {
    params: of({id: 3})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
      MaterialModule,
      RouterModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ MoviedetailsComponent ],
      providers: [ { provide: ActivatedRoute, useValue: activeRouteTest},
        MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test showoverview()', () => {
    let falseVerifierExist = false;
    for (let i = 0; i < component.verifier.length; i++) {
      if(component.verifier[i]) {
        falseVerifierExist = true;
        break;
      }
    };
    expect(falseVerifierExist).toBeFalsy();

    component.showoverview(true, 1);

    for (let i = 0; i < component.verifier.length; i++) {
      if (component.verifier[i]) {
        falseVerifierExist = true;
        break;
      }
    };
    expect(falseVerifierExist).toBeTruthy();
  });
});
