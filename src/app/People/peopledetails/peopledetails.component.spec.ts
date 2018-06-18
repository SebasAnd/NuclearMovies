import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopledetailsComponent } from './peopledetails.component';

describe('PeopledetailsComponent', () => {
  let component: PeopledetailsComponent;
  let fixture: ComponentFixture<PeopledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
